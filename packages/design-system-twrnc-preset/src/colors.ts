import { lightTheme, darkTheme } from '@metamask/design-tokens';

import { Theme } from './Theme.types';

/**
 * Helper function to convert a camelCase / PascalCase string to kebab-case.
 *
 * It inserts a hyphen ("-") before every capital letter (while also handling
 * consecutive capitals), then lower-cases the entire result.
 *
 * @param str - The original camelCase or PascalCase string.
 * @returns The kebab-case representation of the input.
 *
 * @example
 * toKebab('defaultHover');  // → 'default-hover'
 * toKebab('RGBValue');      // → 'r-g-b-value'
 */
const toKebab = (str: string): string =>
  str
    // place a dash between lower/number → upper transitions
    .replace(/([a-z0-9])([A-Z])/gu, '$1-$2')
    // place a dash between upper → upper+lower transitions (e.g. "RGBValue")
    .replace(/([A-Z])([A-Z][a-z])/gu, '$1-$2')
    .toLowerCase();

/**
 * Recursively flattens a nested object of colors into a flat object with kebab-case keys.
 *
 * This function is specifically designed to handle MetaMask design token color objects,
 * which can be deeply nested. It converts the structure into a flat object suitable
 * for Tailwind CSS configuration.
 *
 * @param obj - The nested color object to flatten.
 * @param prefix - The current prefix for the keys (used during recursion).
 * @returns A flattened object with kebab-case keys and color values.
 *
 * @example
 * const colors = {
 *   background: {
 *     default: '#FFFFFF',
 *     alternative: '#F2F4F6'
 *   }
 * };
 *
 * flattenColors(colors);
 * // Returns: {
 * //   'background-default': '#FFFFFF',
 * //   'background-alternative': '#F2F4F6'
 * // }
 */
const flattenColors = (
  obj: Record<string, unknown>,
  prefix = '',
): Record<string, string> => {
  const result: Record<string, string> = {};

  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}-${toKebab(key)}` : toKebab(key);

    if (typeof value === 'string') {
      result[newKey] = value;
    }

    if (typeof value === 'object' && value !== null) {
      Object.assign(
        result,
        flattenColors(value as Record<string, unknown>, newKey),
      );
    }
  }

  return result;
};

export const themeColors: Record<Theme, Record<string, string>> = {
  [Theme.Light]: flattenColors(lightTheme.colors),
  [Theme.Dark]: flattenColors(darkTheme.colors),
};
