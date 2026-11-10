import { manifestPathsFromArgv } from './args';
import { comparePackage, readBaseline, readManifest } from './baseline';
import type { PackageName } from './baseline';

/**
 * Compare generated Storybook component manifests with the committed baseline.
 */
function main(): void {
  const started = Date.now();
  const paths = manifestPathsFromArgv(process.argv.slice(2));
  const baseline = readBaseline();
  const failures = (Object.keys(paths) as PackageName[]).flatMap(
    (packageName) => {
      const manifest = readManifest(paths[packageName]);
      return comparePackage(packageName, manifest, baseline);
    },
  );
  const elapsedMs = Date.now() - started;
  if (failures.length === 0) {
    console.log(
      `Component manifest check passed in ${elapsedMs}ms (${paths.react}, ${paths['react-native']}).`,
    );
    return;
  }
  console.error(
    `Component manifest check failed (${failures.length} issue(s), ${elapsedMs}ms):`,
  );
  for (const failure of failures) {
    console.error(
      `- [${failure.packageName}] ${failure.id}: ${failure.message}`,
    );
  }
  console.error(
    'If the prop changes are intentional, regenerate the baseline with yarn components-manifest:update.',
  );
  process.exitCode = 1;
}

try {
  main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
