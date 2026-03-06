#!/usr/bin/env node

import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { createRequire } from 'node:module';
import postcss from 'postcss';
import tailwindPostcss from '@tailwindcss/postcss';

const repoRoot = path.resolve(import.meta.dirname, '../../..');
const oldPresetDistPath = path.join(
  repoRoot,
  'packages/design-system-tailwind-preset/dist/index.cjs',
);
const oldColorsPath = path.join(
  repoRoot,
  'packages/design-system-tailwind-preset/dist/colors.cjs',
);
const oldTypographyPath = path.join(
  repoRoot,
  'packages/design-system-tailwind-preset/dist/typography.cjs',
);
const oldShadowsPath = path.join(
  repoRoot,
  'packages/design-system-tailwind-preset/dist/shadows.cjs',
);
const newThemePath = path.join(
  repoRoot,
  'packages/design-tokens/src/tailwind/theme.css',
);
const requireFromRepo = createRequire(path.join(repoRoot, 'package.json'));

function uniq(values) {
  return [...new Set(values)].sort();
}

function flattenNestedKeys(prefix, value) {
  if (typeof value === 'string') {
    return [prefix];
  }
  const keys = [];
  for (const [key, child] of Object.entries(value)) {
    keys.push(...flattenNestedKeys(prefix ? `${prefix}-${key}` : key, child));
  }
  return keys;
}

function buildExpectedClassesFromOldPreset() {
  const { colors } = requireFromRepo(oldColorsPath);
  const { typography } = requireFromRepo(oldTypographyPath);
  const { shadows, shadowColors } = requireFromRepo(oldShadowsPath);

  const classes = [];

  for (const [group, tokens] of Object.entries(colors)) {
    const flattened = flattenNestedKeys('', tokens);
    for (const token of flattened) {
      classes.push(`bg-${group}-${token}`);
      classes.push(`text-${group}-${token}`);
      classes.push(`border-${group}-${token}`);
    }
  }

  for (const token of flattenNestedKeys('', colors.background)) {
    classes.push(`bg-${token}`);
  }
  for (const token of flattenNestedKeys('', colors.text)) {
    classes.push(`text-${token}`);
  }
  for (const token of flattenNestedKeys('', colors.border)) {
    classes.push(`border-${token}`);
  }

  for (const name of Object.keys(typography.fontSize)) {
    classes.push(`text-${name}`);
  }
  for (const name of Object.keys(typography.letterSpacing)) {
    classes.push(`tracking-${name}`);
  }
  for (const name of Object.keys(typography.lineHeight)) {
    classes.push(`leading-${name}`);
  }
  for (const name of Object.keys(typography.fontFamily)) {
    classes.push(`font-${name}`);
  }
  for (const name of Object.keys(typography.fontWeight)) {
    classes.push(`font-${name}`);
  }

  for (const size of Object.keys(shadows)) {
    classes.push(`shadow-${size}`);
  }
  for (const color of Object.keys(shadowColors)) {
    classes.push(`shadow-${color}`);
  }

  return uniq(classes);
}

async function compileTailwind({ inputCss, cwd }) {
  const result = await postcss([tailwindPostcss()]).process(inputCss, {
    from: path.join(cwd, 'input.css'),
  });
  return result.css;
}

function hasClass(css, className) {
  const escaped = className.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`\\.${escaped}\\s*\\{`).test(css);
}

function printList(title, values, maxItems = 500) {
  console.log(`${title}: ${values.length}`);
  if (values.length === 0) {
    return;
  }
  for (const item of values.slice(0, maxItems)) {
    console.log(`  - ${item}`);
  }
  if (values.length > maxItems) {
    console.log(`  ... and ${values.length - maxItems} more`);
  }
}

async function main() {
  // Ensure the new theme file exists before running parity check.
  await readFile(newThemePath, 'utf8');
  const expectedClasses = buildExpectedClassesFromOldPreset();
  const contentHtml = `<div class="${expectedClasses.join(' ')}"></div>`;

  const tmpDir = await mkdtemp(path.join(os.tmpdir(), 'tw-parity-'));
  try {
    const contentPath = path.join(tmpDir, 'content.html');
    const oldConfigPath = path.join(tmpDir, 'old-tailwind.config.cjs');
    const relativeContent = path.relative(repoRoot, contentPath);
    await writeFile(contentPath, contentHtml, 'utf8');
    await writeFile(
      oldConfigPath,
      `module.exports = require('${oldPresetDistPath.replace(/\\/g, '/')}');\n`,
      'utf8',
    );

    const oldInputCss = [
      "@import 'tailwindcss';",
      `@config '${oldConfigPath.replace(/\\/g, '/')}';`,
      `@source '${relativeContent.replace(/\\/g, '/')}';`,
    ].join('\n');

    const newInputCss = [
      "@import 'tailwindcss';",
      `@import '${newThemePath.replace(/\\/g, '/')}';`,
      `@source '${relativeContent.replace(/\\/g, '/')}';`,
    ].join('\n');

    const [oldCss, newCss] = await Promise.all([
      compileTailwind({ inputCss: oldInputCss, cwd: repoRoot }),
      compileTailwind({ inputCss: newInputCss, cwd: repoRoot }),
    ]);

    const missingInOld = expectedClasses.filter(
      (className) => !hasClass(oldCss, className),
    );
    const missingInNew = expectedClasses.filter(
      (className) => !hasClass(newCss, className),
    );

    console.log('Tailwind Theme Parity Check');
    console.log(`Expected classes checked: ${expectedClasses.length}`);
    printList('Missing in old preset output', missingInOld);
    printList('Missing in new theme.css output', missingInNew);

    if (missingInOld.length || missingInNew.length) {
      process.exitCode = 1;
      return;
    }
    console.log('PASS: custom classname parity check succeeded.');
  } finally {
    await rm(tmpDir, { recursive: true, force: true });
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
