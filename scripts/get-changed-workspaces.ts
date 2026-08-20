#!yarn tsx

import execa from 'execa';
import { readFile } from 'fs/promises';
import { join } from 'path';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const ROOT_WORKSPACE = join(__dirname, '..');

// Files that can change without requiring a full rebuild/test run.
// yarn.lock is listed here so it doesn't trigger the root-change path;
// it has its own fast-path that falls back to a full run instead.
const IGNORED_ROOT_FILES = new Set([
  '.gitignore',
  '.prettierignore',
  'AGENTS.md',
  'CLAUDE.md',
  'CLAUDE.local.md',
  'README.md',
  'yarn.lock',
]);

type Workspace = {
  location: string;
  name: string;
};

type DependencyGraph = {
  dependants: Record<string, Set<Workspace>>;
};

async function getAllWorkspaces(): Promise<Workspace[]> {
  const { stdout } = await execa(
    'yarn',
    ['workspaces', 'list', '--no-private', '--json'],
    { cwd: ROOT_WORKSPACE },
  );

  return stdout
    .trim()
    .split('\n')
    .map((line) => JSON.parse(line))
    .filter(({ location }: Workspace) => location !== '.');
}

async function getChangedFiles(
  mergeBase: string,
  headRef: string,
): Promise<string[]> {
  const { stdout } = await execa(
    'git',
    ['diff', '--name-only', mergeBase, headRef],
    { cwd: ROOT_WORKSPACE },
  );
  return stdout.trim().split('\n').filter(Boolean);
}

async function buildDependantGraph(
  workspaces: Workspace[],
): Promise<DependencyGraph> {
  const dependants: Record<string, Set<Workspace>> = Object.fromEntries(
    workspaces.map(({ name }) => [name, new Set<Workspace>()]),
  );

  await Promise.all(
    workspaces.map(async (workspace) => {
      const manifestPath = join(
        ROOT_WORKSPACE,
        workspace.location,
        'package.json',
      );
      const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
      const allDeps = Object.keys({
        ...manifest.dependencies,
        ...manifest.devDependencies,
        ...manifest.peerDependencies,
      });

      for (const depName of allDeps) {
        if (dependants[depName]) {
          dependants[depName].add(workspace);
        }
      }
    }),
  );

  return { dependants };
}

function hasRootFileChanged(
  workspaces: Workspace[],
  changedFiles: string[],
): boolean {
  // Only treat changes that impact the monorepo root configuration or CI as "root changes".
  // - Root-level config files (except explicitly ignored ones)
  // - Files under scripts/ (shared CI and tooling)
  // - Workflow files under .github/workflows/
  const ROOT_IMPACTING_DIR_PREFIXES = ['scripts/', '.github/workflows/'];

  return changedFiles.some((file) => {
    if (IGNORED_ROOT_FILES.has(file)) {
      return false;
    }

    // Root-level files (no path separators) that aren't ignored impact the root.
    const isRootFile = !file.includes('/');
    if (isRootFile) {
      return true;
    }

    // Certain root-scoped directories always impact all packages.
    if (ROOT_IMPACTING_DIR_PREFIXES.some((prefix) => file.startsWith(prefix))) {
      return true;
    }

    // Changes inside non-private workspaces are not root changes.
    if (workspaces.some(({ location }) => file.startsWith(`${location}/`))) {
      return false;
    }

    // Other non-workspace paths (e.g., apps/, docs/) should NOT force a full run.
    return false;
  });
}

async function computeChangedWorkspaces({
  mergeBase,
  headRef,
}: {
  mergeBase: string;
  headRef: string;
}): Promise<{ workspaces: Workspace[]; hasRootChange: boolean }> {
  const [changedFiles, workspaces] = await Promise.all([
    getChangedFiles(mergeBase, headRef),
    getAllWorkspaces(),
  ]);

  // yarn.lock changes: fall back to a full run. We don't parse the lockfile
  // to find affected workspaces (unlike core), since we only have a handful
  // of packages and the safe default is fine.
  if (changedFiles.includes('yarn.lock')) {
    return { workspaces, hasRootChange: true };
  }

  // Any non-ignored root-level file change triggers a full run.
  if (hasRootFileChanged(workspaces, changedFiles)) {
    return { workspaces, hasRootChange: true };
  }

  const result = new Set<Workspace>(
    changedFiles.flatMap((file) => {
      const workspace = workspaces.find(({ location }) =>
        file.startsWith(`${location}/`),
      );
      return workspace ? [workspace] : [];
    }),
  );

  const { dependants } = await buildDependantGraph(workspaces);

  // Expand to transitive dependants (packages that import what changed must
  // also be re-tested to catch type or runtime regressions across boundaries).
  const queue = [...result];
  while (queue.length > 0) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const workspace = queue.pop()!;
    for (const dependant of dependants[workspace.name] ?? []) {
      if (!result.has(dependant)) {
        result.add(dependant);
        queue.push(dependant);
      }
    }
  }

  return { workspaces: Array.from(result), hasRootChange: false };
}

async function main(): Promise<void> {
  const argv = await yargs(hideBin(process.argv))
    .usage('$0 --merge-base <sha> [--head-ref <ref>]')
    .option('merge-base', {
      type: 'string',
      describe: 'Merge base SHA',
      demandOption: true,
    })
    .option('head-ref', {
      type: 'string',
      describe: 'PR branch tip SHA (defaults to HEAD)',
      default: 'HEAD',
    })
    .help()
    .parseAsync();

  const { mergeBase, headRef } = argv;

  const { workspaces, hasRootChange } = await computeChangedWorkspaces({
    mergeBase,
    headRef,
  });

  console.log(
    JSON.stringify({
      names: workspaces.map(({ name }) => name),
      locations: workspaces.map(({ location }) => location),
      hasRootChange,
    }),
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
