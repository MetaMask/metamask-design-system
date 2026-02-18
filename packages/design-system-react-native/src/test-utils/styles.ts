import { StyleSheet } from 'react-native';

type StyleObject = Record<string, unknown>;

const isStyleObject = (value: unknown): value is StyleObject =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

/**
 * Resolves a style prop into one merged style object.
 *
 * @param styleProp - React Native style prop
 * @returns Merged style object
 */
export function getResolvedStyle(styleProp: unknown): StyleObject {
  const flattened = StyleSheet.flatten(styleProp as never);
  return isStyleObject(flattened) ? flattened : {};
}

const styleObjectContains = (
  candidate: StyleObject,
  expectedStyle: StyleObject,
): boolean =>
  Object.entries(expectedStyle).every(
    ([key, value]) => candidate[key] === value,
  );

/**
 * Returns true if resolved style contains the expected partial style.
 *
 * @param styleProp - React Native style prop
 * @param expectedStyle - Partial style object
 * @returns Whether resolved style includes the expected style
 */
export function resolvedStyleIncludes(
  styleProp: unknown,
  expectedStyle: StyleObject,
): boolean {
  return styleObjectContains(getResolvedStyle(styleProp), expectedStyle);
}
