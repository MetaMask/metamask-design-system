import { manifestPathsFromArgv } from './args';
import {
  BASELINE_PATH,
  baselineFromManifests,
  readBaseline,
  readManifest,
  writeBaseline,
  DEFAULT_ALLOWLIST,
} from './baseline';
import type { PackageName } from './baseline';

/**
 * Rewrite the committed prop baseline from the current Storybook manifests.
 * Allowlist rules already in the baseline are kept.
 */
function main(): void {
  const started = Date.now();
  const paths = manifestPathsFromArgv(process.argv.slice(2));
  let allowlist = DEFAULT_ALLOWLIST;
  try {
    allowlist = readBaseline().allowlist;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== 'ENOENT') {
      throw error;
    }
  }
  const manifests = Object.fromEntries(
    (Object.keys(paths) as PackageName[]).map((packageName) => [
      packageName,
      readManifest(paths[packageName]),
    ]),
  ) as Record<PackageName, ReturnType<typeof readManifest>>;
  const baseline = baselineFromManifests(manifests, allowlist);
  writeBaseline(baseline);
  const counts = (Object.keys(baseline.packages) as PackageName[])
    .map((packageName) => {
      const components = Object.values(baseline.packages[packageName]);
      const props = components.reduce(
        (sum, component) => sum + component.props.length,
        0,
      );
      return `${packageName}: ${components.length} components, ${props} props`;
    })
    .join('; ');
  console.log(
    `Wrote ${BASELINE_PATH} in ${Date.now() - started}ms (${counts}).`,
  );
}

try {
  main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
