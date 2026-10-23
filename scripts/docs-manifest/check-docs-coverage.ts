#!yarn tsx

import fs from 'fs';
import path from 'path';

import { loadStorybookCsf, parseArgs } from './cli';
import type { Baseline, DocsManifest } from './docs-manifest';
import {
  buildDocsManifest,
  compareWithBaseline,
  findCoverageGaps,
  serializeBaseline,
} from './docs-manifest';

/**
 * Fails when an exported component lacks a description, documented props, a
 * README or a story, unless the gap is recorded in the baseline file.
 *
 * Usage: tsx scripts/docs-manifest/check-docs-coverage.ts --package <dir>
 *   [--manifest <file>] [--baseline <file>] [--update-baseline]
 */
async function main(): Promise<void> {
  const args = parseArgs(process.argv.slice(2));
  const packageDir = path.resolve(String(args.get('package') ?? '.'));
  const baselinePath = path.resolve(
    packageDir,
    String(args.get('baseline') ?? 'docs-coverage-baseline.json'),
  );
  const manifestArg = args.get('manifest');
  const manifest: DocsManifest =
    typeof manifestArg === 'string'
      ? (JSON.parse(
          fs.readFileSync(path.resolve(packageDir, manifestArg), 'utf8'),
        ) as DocsManifest)
      : buildDocsManifest({
          packageDir,
          loadCsf: await loadStorybookCsf(packageDir),
        });
  const gaps = findCoverageGaps(manifest);

  if (args.get('update-baseline')) {
    const baseline: Baseline = Object.fromEntries(
      gaps.map((gap) => [gap.component, gap.missing]),
    );
    fs.writeFileSync(baselinePath, serializeBaseline(baseline));
    console.log(
      `Wrote ${path.relative(process.cwd(), baselinePath)} with ${gaps.length} components`,
    );
    return;
  }

  const baseline: Baseline = fs.existsSync(baselinePath)
    ? (JSON.parse(fs.readFileSync(baselinePath, 'utf8')) as Baseline)
    : {};
  const { newGaps, fixed } = compareWithBaseline(gaps, baseline);
  for (const gap of newGaps) {
    const detail =
      gap.undocumentedProps.length > 0 && gap.missing.includes('props')
        ? ` (undocumented props: ${gap.undocumentedProps.join(', ')})`
        : '';
    console.error(
      `${gap.component}: missing ${gap.missing.join(', ')}${detail}`,
    );
  }
  if (fixed.length > 0) {
    console.log(
      `Fixed since baseline (remove from ${path.basename(baselinePath)}): ${fixed.join(', ')}`,
    );
  }
  console.log(
    `Docs coverage: ${manifest.components.length} components, ${gaps.length} with known or new gaps, ${newGaps.length} new`,
  );
  if (newGaps.length > 0 || fixed.length > 0) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
