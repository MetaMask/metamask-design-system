/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Helper function to convert a camelCase / PascalCase string to kebab-case.
 *
 * It inserts a hyphen (“-”) before every capital letter (while also handling
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
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    // place a dash between upper → upper+lower transitions (e.g. "RGBValue")
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();

/**
 * Recursively flattens a nested colour definition object into a single-level map
 * whose keys are fully kebab-cased, dash-delimited paths.
 *
 * Each segment of the path (including camelCase properties) is converted to
 * kebab-case. The resulting keys are built by concatenating the segments with
 * “-” and prepending any parent prefix supplied during recursion.
 *
 * @param colors - A nested object representing colour values.
 * @param prefix - (For internal use) The current path prefix accumulated during
 *                 recursion. Leave blank when calling directly.
 * @returns A flat object whose keys are kebab-cased paths and whose values are
 *          the corresponding colour strings.
 *
 * @example
 * const palette = {
 *   primary: {
 *     default: '#4459ff',
 *     defaultHover: '#384df5',
 *     muted: '#4459ff1a',
 *   },
 *   secondary: '#2c3dc5',
 * };
 *
 * flattenColors(palette);
 * // ⇒ {
 * //   'primary-default': '#4459ff',
 * //   'primary-default-hover': '#384df5',
 * //   'primary-muted': '#4459ff1a',
 * //   'secondary': '#2c3dc5'
 * // }
 */
export const flattenColors = (
  colors: Record<string, any>,
  prefix = '',
): Record<string, string> => {
  let result: Record<string, string> = {};

  for (const [rawKey, value] of Object.entries(colors)) {
    const key = toKebab(rawKey);

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      // Recurse into nested objects and merge their flattened results
      result = { ...result, ...flattenColors(value, `${prefix}${key}-`) };
    } else if (typeof value === 'string') {
      // Leaf node: add the fully-qualified kebab-case key
      result[`${prefix}${key}`] = value;
    } else {
      /* eslint-disable-next-line no-console */
      console.warn(`Invalid colour value for ${prefix}${key}:`, value);
    }
  }

  return result;
};
