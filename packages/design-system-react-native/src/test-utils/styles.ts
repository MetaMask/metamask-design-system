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

const styleObjectContains = (
  candidate: StyleObject,
  expectedStyle: StyleObject,
): boolean =>
  Object.entries(expectedStyle).every(
    ([key, value]) => candidate[key] === value,
  );

/**
 * Returns true if any style chunk contains the expected partial style.
 *
 * @param styleProp - React Native style prop
 * @param expectedStyle - Partial style object
 * @returns Whether any style chunk includes the expected style
 */
export function styleIncludes(
  styleProp: unknown,
  expectedStyle: StyleObject,
): boolean {
  return getStyleList(styleProp).some((style) =>
    styleObjectContains(style, expectedStyle),
  );
}

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
  if (!styleIncludes(styleProp, expectedStyle)) {
    throw new Error(
      `Expected style to include ${JSON.stringify(expectedStyle)} but got ${JSON.stringify(
        getStyleList(styleProp),
      )}`,
    );
  }
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
  if (!resolvedStyleIncludes(styleProp, expectedStyle)) {
    throw new Error(
      `Expected resolved style to include ${JSON.stringify(expectedStyle)} but got ${JSON.stringify(
        getResolvedStyle(styleProp),
      )}`,
    );
  }
}
