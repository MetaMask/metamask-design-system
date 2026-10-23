#!yarn tsx

import fs from 'fs';
import path from 'path';

import { loadStorybookCsf, parseArgs } from './cli';
import {
  DOCS_MANIFEST_FILENAME,
  buildDocsManifest,
  serializeDocsManifest,
} from './docs-manifest';

/**
 * Writes `dist/docs-manifest.json` for an MMDS package.
 *
 * Usage: tsx scripts/docs-manifest/generate-docs-manifest.ts --package <dir> [--out <file>]
 */
async function main(): Promise<void> {
  const args = parseArgs(process.argv.slice(2));
  const packageDir = path.resolve(String(args.get('package') ?? '.'));
  const out = path.resolve(
    packageDir,
    String(args.get('out') ?? path.join('dist', DOCS_MANIFEST_FILENAME)),
  );
  const manifest = buildDocsManifest({
    packageDir,
    loadCsf: await loadStorybookCsf(packageDir),
  });
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, serializeDocsManifest(manifest));
  console.log(
    `Wrote ${path.relative(process.cwd(), out)}: ${manifest.package.name}@${manifest.package.version}, ${manifest.components.length} components`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
