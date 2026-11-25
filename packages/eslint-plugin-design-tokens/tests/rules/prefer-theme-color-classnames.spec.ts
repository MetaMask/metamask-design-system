import * as typescriptParser from '@typescript-eslint/parser';
import { RuleTester } from 'eslint';
import { readFileSync } from 'fs';
import * as path from 'path';

import {
  defaultDiscouragedColors,
  preferThemeColorClassnames,
} from '../../src/rules/prefer-theme-color-classnames';

const ruleTester = new RuleTester({
  languageOptions: {
    parser: typescriptParser,
    ecmaVersion: 2020,
    sourceType: 'module',
  },
});

/**
 * Extracts the standalone literal colors from the design tokens source of
 * truth (`packages/design-tokens/src/css/brand-colors.css`). Brand families
 * appear there with a shade scale (e.g. `--brand-colors-grey-grey100`), while
 * the standalone literal colors have no shade (e.g. `--brand-colors-white`).
 *
 * The file is read at test time rather than imported from
 * `@metamask/design-tokens` so that the plugin keeps no dependency on that
 * package at runtime.
 *
 * @returns The sorted list of standalone literal color names.
 */
const getStandaloneBrandColors = (): string[] => {
  const brandColorsPath = path.resolve(
    __dirname,
    '../../../design-tokens/src/css/brand-colors.css',
  );
  const brandColorsCss = readFileSync(brandColorsPath, 'utf8');

  const shadedFamilies = new Set<string>();
  const standaloneColors = new Set<string>();
  for (const match of brandColorsCss.matchAll(
    /^\s*--brand-colors-([a-z0-9-]+):/gmu,
  )) {
    const declaration = match[1] ?? '';
    if (declaration.includes('-')) {
      shadedFamilies.add(declaration.slice(0, declaration.indexOf('-')));
    } else if (declaration.trim().length > 0) {
      standaloneColors.add(declaration);
    }
  }
  return [...standaloneColors]
    .filter((color) => !shadedFamilies.has(color))
    .sort();
};

const standaloneBrandColors = getStandaloneBrandColors();

ruleTester.run('prefer-theme-color-classnames', preferThemeColorClassnames, {
  valid: [
    { code: `const className = "bg-primary-default";` },
    { code: `const className = "text-default";` },
    { code: `const className = "text-error-default";` },
    { code: `const className = "border-border-muted";` },
    { code: `const templateString = \`bg-\${colorValue}\`;` },
    { code: `const className = "other-non-color-class-name";` },
    // Brand color families are never exposed as classnames by the MetaMask
    // Tailwind or twrnc setups, so they are not discouraged by default;
    // unknown-classname linting is the more accurate signal for them
    { code: `const className = "bg-grey-050";` },
    { code: `const className = "bg-lime-300";` },
    { code: `const className = "text-gray-500";` },
    // This is an example where default discouraged colors are overridden so default colors are not discouraged
    {
      code: `const className = "bg-black";`,
      options: [{ discouragedColors: ['random-override'] }],
    },
    {
      code: `const className = "bg-black";`,
      options: [{ discouragedColors: [' '] }],
    },
  ],
  invalid: [
    {
      code: `const className = "bg-customColor-500";`,
      options: [
        {
          discouragedColors: ['customColor'],
        },
      ],
      errors: [
        {
          message: `'bg-customColor-500' usage of literal color class names is discouraged. Consider using theme color class names instead.`,
        },
      ],
    },
    // `black` and `white` are the only literal colors the MetaMask setups expose
    {
      code: `const className = "bg-black";`,
      errors: [
        {
          message: `'bg-black' usage of literal color class names is discouraged. Consider using theme color class names instead.`,
        },
      ],
    },
    {
      code: `const className = "text-white";`,
      errors: [
        {
          message: `'text-white' usage of literal color class names is discouraged. Consider using theme color class names instead.`,
        },
      ],
    },
    {
      code: `const templateString = \`bg-black-\${opacity}\`;`,
      errors: [
        {
          message: `'bg-black' usage of literal color class names is discouraged. Consider using theme color class names instead.`,
        },
      ],
    },
  ],
});

describe('defaultDiscouragedColors', () => {
  it('matches the standalone literal colors of the @metamask/design-tokens brand palette', () => {
    expect([...defaultDiscouragedColors].sort()).toEqual(standaloneBrandColors);
  });
});
