import path from 'path';

import { DEFAULT_MANIFEST_PATHS } from './baseline';
import type { PackageName } from './baseline';

/**
 * @param argv - CLI arguments after the node binary and script path.
 * @returns Absolute manifest paths for each Storybook.
 */
export function manifestPathsFromArgv(
  argv: string[],
): Record<PackageName, string> {
  const paths: Record<PackageName, string> = {
    react: path.resolve(DEFAULT_MANIFEST_PATHS.react),
    'react-native': path.resolve(DEFAULT_MANIFEST_PATHS['react-native']),
  };
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    const next = argv[index + 1];
    if (
      (arg === '--react' || arg === '--react-native') &&
      (next === undefined || next.startsWith('--'))
    ) {
      throw new Error(`${arg} requires a path to components.json`);
    }
    if (arg === '--react' && next !== undefined) {
      paths.react = path.resolve(next);
      index += 1;
    } else if (arg === '--react-native' && next !== undefined) {
      paths['react-native'] = path.resolve(next);
      index += 1;
    }
  }
  return paths;
}
