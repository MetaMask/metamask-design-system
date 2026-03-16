/* eslint-disable import-x/no-nodejs-modules */
import tailwindPostcss from '@tailwindcss/postcss';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import os from 'node:os';
import path from 'node:path';
import postcss from 'postcss';
/* eslint-enable import-x/no-nodejs-modules */

/**
 * Tailwind Theme Parity Check
 *
 * Validates that the v4 theme.css produces the same custom class names
 * as the v3 tailwind-preset. This ensures consumers migrating from v3
 * to v4 won't lose any design system utility classes.
 *
 * TODO: Extend parity validation to include twrnc (React Native) preset
 * to ensure class name coverage across all three surfaces: v3, v4, and twrnc.
 */

const repoRoot = path.resolve(__dirname, '../../..');
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

function uniq(values: string[]): string[] {
  return [...new Set(values)].sort();
}

function flattenNestedKeys(
  prefix: string,
  value: string | Record<string, unknown>,
): string[] {
  if (typeof value === 'string') {
    return [prefix];
  }
  const keys: string[] = [];
  for (const [key, child] of Object.entries(value)) {
    keys.push(
      ...flattenNestedKeys(
        prefix ? `${prefix}-${key}` : key,
        child as string | Record<string, unknown>,
      ),
    );
  }
  return keys;
}

function buildExpectedClassesFromOldPreset(): string[] {
  const { colors } = requireFromRepo(oldColorsPath) as {
    colors: Record<string, Record<string, unknown>>;
  };
  const { typography } = requireFromRepo(oldTypographyPath) as {
    typography: Record<string, Record<string, unknown>>;
  };
  const { shadows, shadowColors } = requireFromRepo(oldShadowsPath) as {
    shadows: Record<string, unknown>;
    shadowColors: Record<string, unknown>;
  };

  const classes: string[] = [];

  for (const [group, tokens] of Object.entries(colors)) {
    const flattened = flattenNestedKeys('', tokens);
    for (const token of flattened) {
      classes.push(`bg-${group}-${token}`);
      classes.push(`text-${group}-${token}`);
      classes.push(`border-${group}-${token}`);
    }
  }

  for (const token of flattenNestedKeys(
    '',
    colors.background as Record<string, unknown>,
  )) {
    classes.push(`bg-${token}`);
  }
  for (const token of flattenNestedKeys(
    '',
    colors.text as Record<string, unknown>,
  )) {
    classes.push(`text-${token}`);
  }
  for (const token of flattenNestedKeys(
    '',
    colors.border as Record<string, unknown>,
  )) {
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

async function compileTailwind({
  inputCss,
  cwd,
}: {
  inputCss: string;
  cwd: string;
}): Promise<string> {
  const result = await postcss([tailwindPostcss()]).process(inputCss, {
    from: path.join(cwd, 'input.css'),
  });
  return result.css;
}

function hasClass(css: string, className: string): boolean {
  const escaped = className.replace(/[.*+?^${}()|[\]\\]/gu, '\\$&');
  return new RegExp(`\\.${escaped}\\s*\\{`, 'u').test(css);
}

function printList(title: string, values: string[], maxItems = 500): void {
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

async function main(): Promise<void> {
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
      `module.exports = require('${oldPresetDistPath.replace(/\\/gu, '/')}');\n`,
      'utf8',
    );

    const oldInputCss = [
      "@import 'tailwindcss';",
      `@config '${oldConfigPath.replace(/\\/gu, '/')}';`,
      `@source '${relativeContent.replace(/\\/gu, '/')}';`,
    ].join('\n');

    const newInputCss = [
      "@import 'tailwindcss';",
      `@import '${newThemePath.replace(/\\/gu, '/')}';`,
      `@source '${relativeContent.replace(/\\/gu, '/')}';`,
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

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
