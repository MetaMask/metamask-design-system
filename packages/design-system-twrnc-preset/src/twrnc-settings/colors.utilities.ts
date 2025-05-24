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

/**
 * Helper function to extract shorthand color utilities for specific color categories.
 * This enables shorter class names like bg-default instead of bg-background-default.
 *
 * @param flatColors - Flattened color object from flattenColors
 * @returns Object with shorthand color utilities for text, background, and border
 */
export const generateShorthandColors = (flatColors: Record<string, string>) => {
  const shorthandColors = {
    text: {} as Record<string, string>,
    background: {} as Record<string, string>,
    border: {} as Record<string, string>,
  };

  // Extract background colors (bg-default instead of bg-background-default)
  Object.entries(flatColors).forEach(([key, value]) => {
    if (key.startsWith('background-')) {
      const shortKey = key.replace('background-', '');
      shorthandColors.background[shortKey] = value;
    } else if (key.startsWith('text-')) {
      const shortKey = key.replace('text-', '');
      shorthandColors.text[shortKey] = value;
    } else if (key.startsWith('border-')) {
      const shortKey = key.replace('border-', '');
      shorthandColors.border[shortKey] = value;
    }
  });

  return shorthandColors;
};
