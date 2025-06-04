/**
 * Enum for different color scheme options.
 */
export enum ColorScheme {
  Light = 'light',
  Dark = 'dark',
}

/**
 * Props for colorSetList. Each color scheme should contain
 * an object with twrnc-className string as key and color string as value.
 *
 * @example
 * // {
 * //   'primary-default': '#abc',
 * //   'primary-alternative ': '#123',
 * //   'secondary': '#456'
 * // }
 */
export type ColorSetListProps = {
  [ColorScheme.Light]: Record<string, string>;
  [ColorScheme.Dark]: Record<string, string>;
};
