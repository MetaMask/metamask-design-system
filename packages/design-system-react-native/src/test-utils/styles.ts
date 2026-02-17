import { StyleSheet } from 'react-native';

type StyleObject = Record<string, unknown>;

const isStyleObject = (value: unknown): value is StyleObject =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

/**
 * Returns style chunks from a style prop. Arrays are recursively expanded.
 *
 * @param styleProp - React Native style prop (object, array, registered id, etc.)
 * @returns A flat list of style objects.
 */
export function getStyleList(styleProp: unknown): StyleObject[] {
  if (styleProp === null || styleProp === undefined || styleProp === false) {
    return [];
  }

  if (Array.isArray(styleProp)) {
    return styleProp.flatMap((item) => getStyleList(item));
  }

  const flattened = StyleSheet.flatten(styleProp as never);
  return isStyleObject(flattened) ? [flattened] : [];
}

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

/**
 * Asserts that at least one style chunk contains the expected partial style.
 *
 * @param styleProp - React Native style prop
 * @param expectedStyle - Partial style object
 */
export function expectStyleIncludes(
  styleProp: unknown,
  expectedStyle: StyleObject,
): void {
  expect(getStyleList(styleProp)).toStrictEqual(
    expect.arrayContaining([expect.objectContaining(expectedStyle)]),
  );
}

/**
 * Asserts that resolved style contains the expected partial style.
 *
 * @param styleProp - React Native style prop
 * @param expectedStyle - Partial style object
 */
export function expectResolvedStyle(
  styleProp: unknown,
  expectedStyle: StyleObject,
): void {
  expect(getResolvedStyle(styleProp)).toStrictEqual(
    expect.objectContaining(expectedStyle),
  );
}
