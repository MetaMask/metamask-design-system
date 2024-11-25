/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Helper function to flatten a nested color object into a single-level object
 * with keys as kebab-case strings and values as strings.
 *
 * @param colors - A nested object representing color values.
 * @param prefix - A string prefix used for constructing flattened keys.
 * @returns A single-level object with flattened keys and their corresponding color values.
 * @example
 * const colors = {
 *   primary: {
 *     default: '#abc',
 *     alternative: '#123',
 *   },
 *   secondary: '#456',
 * };
 *
 * flattenColors(colors);
 * // Returns:
 * // {
 * //   'primary-default': '#abc',
 * //   'primary-alternative': '#123',
 * //   'secondary': '#456'
 * // }
 */
export const flattenColors = (colors: Record<string, any>, prefix = '') => {
  let result: Record<string, string> = {};
  for (const [key, value] of Object.entries(colors)) {
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      result = { ...result, ...flattenColors(value, `${prefix}${key}-`) };
    } else if (typeof value === 'string') {
      result[`${prefix}${key}`] = value;
    } else {
      console.warn(`Invalid color value for ${prefix}${key}:`, value);
    }
  }
  return result;
};
