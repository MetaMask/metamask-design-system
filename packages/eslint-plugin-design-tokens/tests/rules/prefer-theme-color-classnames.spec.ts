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
 * Extracts the brand color family names from the design tokens source of
 * truth (`packages/design-tokens/src/css/brand-colors.css`). Each declaration
 * is either `--brand-colors-<family>-<shade>` or, for the two standalone
 * literal colors, `--brand-colors-white` / `--brand-colors-black`.
 *
 * The file is read at test time rather than imported from
 * `@metamask/design-tokens` so that the plugin keeps no dependency on that
 * package at runtime.
 *
 * @returns The sorted list of unique brand color family names.
 */
const getBrandColorFamilies = (): string[] => {
  const brandColorsPath = path.resolve(
    __dirname,
    '../../../design-tokens/src/css/brand-colors.css',
  );
  const brandColorsCss = readFileSync(brandColorsPath, 'utf8');

  const families = new Set<string>();
  for (const match of brandColorsCss.matchAll(
    /^\s*--brand-colors-([a-z0-9-]+):/gmu,
  )) {
    const declaration = match[1] ?? '';
    const family = declaration.includes('-')
      ? declaration.slice(0, declaration.indexOf('-'))
      : declaration;
    if (family.trim().length > 0) {
      families.add(family);
    }
  }
  return [...families].sort();
};

const brandColorFamilies = getBrandColorFamilies();

/**
 * Builds a representative literal color classname for a brand family.
 * `black` and `white` are standalone literal colors without shades; every
 * other family is used with a shade in literal (Tailwind default palette)
 * classnames.
 *
 * @param family - The brand color family name.
 * @returns A literal color classname for that family.
 */
const getLiteralClassName = (family: string): string =>
  family === 'black' || family === 'white'
    ? `bg-${family}`
    : `bg-${family}-500`;

ruleTester.run('prefer-theme-color-classnames', preferThemeColorClassnames, {
  valid: [
    { code: `const className = "bg-primary-default";` },
    { code: `const className = "text-default";` },
    { code: `const className = "text-error-default";` },
    { code: `const className = "border-border-muted";` },
    { code: `const templateString = \`bg-\${colorValue}\`;` },
    { code: `const className = "other-non-color-class-name";` },
    // This is an example where default discouraged colors are overridden so default colors are not discouraged
    {
      code: `const className = "bg-blue-500";`,
      options: [{ discouragedColors: ['random-override'] }],
    },
    {
      code: `const className = "bg-blue-500";`,
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
    {
      code: `const className = "border-blue-200";`,
      errors: [
        {
          message: `'border-blue-200' usage of literal color class names is discouraged. Consider using theme color class names instead.`,
        },
      ],
    },
    {
      code: `const className = "text-red-600";`,
      errors: [
        {
          message: `'text-red-600' usage of literal color class names is discouraged. Consider using theme color class names instead.`,
        },
      ],
    },
    {
      code: `const templateString = \`bg-blue-\${opacity}\`;`,
      errors: [
        {
          message: `'bg-blue' usage of literal color class names is discouraged. Consider using theme color class names instead.`,
        },
      ],
    },
    // MetaMask spells the neutral family `grey`, unlike Tailwind's default `gray`
    {
      code: `const className = "bg-grey-050";`,
      errors: [
        {
          message: `'bg-grey-050' usage of literal color class names is discouraged. Consider using theme color class names instead.`,
        },
      ],
    },
    // `gray` stays discouraged to catch literal classes spelled the Tailwind way
    {
      code: `const className = "text-gray-500";`,
      errors: [
        {
          message: `'text-gray-500' usage of literal color class names is discouraged. Consider using theme color class names instead.`,
        },
      ],
    },
    // `lime` is an MMDS brand family the old default list missed; `slateGray`, `pink`, and `teal` were never MMDS colors
    {
      code: `const className = "bg-lime-300";`,
      errors: [
        {
          message: `'bg-lime-300' usage of literal color class names is discouraged. Consider using theme color class names instead.`,
        },
      ],
    },
    // `black` and `white` are the two literal colors the presets still expose
    {
      code: `const className = "text-white";`,
      errors: [
        {
          message: `'text-white' usage of literal color class names is discouraged. Consider using theme color class names instead.`,
        },
      ],
    },
    // Every brand color family from the design tokens source of truth is discouraged by default
    ...brandColorFamilies.map((family) => ({
      code: `const className = "${getLiteralClassName(family)}";`,
      errors: [
        {
          message: `'${getLiteralClassName(family)}' usage of literal color class names is discouraged. Consider using theme color class names instead.`,
        },
      ],
    })),
  ],
});

describe('defaultDiscouragedColors', () => {
  it('matches the brand color families exposed by @metamask/design-tokens plus the Tailwind-spelled gray alias', () => {
    expect([...defaultDiscouragedColors].sort()).toEqual(
      [...brandColorFamilies, 'gray'].sort(),
    );
  });
});
