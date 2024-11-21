/* eslint-disable @typescript-eslint/no-explicit-any */
// TODO: Replace any types with proper types https://github.com/MetaMask/metamask-design-system/issues/127
/**
 * Recursively collects color values and their names from a JavaScript color object using dot notation.
 *
 * @param obj - The color object to traverse.
 * @param parentKey - The parent key to use for dot notation.
 * @returns An array of objects containing color value and name.
 */
export const getJSColors = (
  obj: any,
  parentKey = '',
): { name: string; color: string }[] => {
  return Object.entries(obj).flatMap(([key, value]) => {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof value === 'string') {
      return [{ name: newKey, color: value }];
    }
    return getJSColors(value, newKey);
  });
};
