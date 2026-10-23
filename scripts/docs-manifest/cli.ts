import { createRequire } from 'module';
import path from 'path';
import { pathToFileURL } from 'url';

import type { CsfLoader } from './docs-manifest';

/**
 * Reads `--name value` style arguments.
 *
 * @param argv - Process arguments after the script path.
 * @returns Flags and values.
 */
export function parseArgs(argv: string[]): Map<string, string | true> {
  const args = new Map<string, string | true>();
  for (let index = 0; index < argv.length; index += 1) {
    const key = argv[index];
    if (!key?.startsWith('--')) {
      continue;
    }
    const next = argv[index + 1];
    if (next === undefined || next.startsWith('--')) {
      args.set(key.slice(2), true);
    } else {
      args.set(key.slice(2), next);
      index += 1;
    }
  }
  return args;
}

/**
 * Loads Storybook's own CSF parser from the target package, so story ids are
 * computed exactly as the Storybook indexer computes them.
 *
 * @param packageDir - The package whose `storybook` dev dependency to use.
 * @returns A CSF loader.
 */
export async function loadStorybookCsf(packageDir: string): Promise<CsfLoader> {
  const requireFromPackage = createRequire(
    path.join(path.resolve(packageDir), 'package.json'),
  );
  const csfToolsPath = requireFromPackage.resolve(
    'storybook/internal/csf-tools',
  );
  const { loadCsf } = (await import(pathToFileURL(csfToolsPath).href)) as {
    loadCsf: (
      code: string,
      options: { fileName: string; makeTitle: (title: string) => string },
    ) => {
      parse: () => {
        meta: { component?: string };
        stories: { id: string; name?: string }[];
        _storyExports: Record<string, unknown>;
      };
    };
  };
  return (code, fileName) => {
    const csf = loadCsf(code, {
      fileName,
      makeTitle: (title) => title,
    }).parse();
    const exportNames = Object.keys(csf._storyExports);
    return {
      component: csf.meta.component ?? null,
      stories: csf.stories.map((story, index) => ({
        id: story.id,
        name: story.name ?? exportNames[index] ?? story.id,
        exportName: exportNames[index] ?? '',
      })),
    };
  };
}
