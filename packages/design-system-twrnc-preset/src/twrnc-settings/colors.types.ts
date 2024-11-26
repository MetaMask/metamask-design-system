/**
 * Enum for different color set options.
 */
export enum ColorSet {
  Brand = 'brand',
}

/**
 * Enum for different color scheme options.
 */
export enum ColorScheme {
  Light = 'light',
  Dark = 'dark',
}

/**
 * Props for ColorSet. Each color set - color scheme should contain
 * an object with twrnc-className string as key and color string as value.
 * @example
 * // {
 * //   'primary-default': '#abc',
 * //   'primary-alternative ': '#123',
 * //   'secondary': '#456'
 * // }
 */
export type ColorSetListProps = {
  brand: {
    [ColorScheme.Light]: Record<string, string>;
    [ColorScheme.Dark]: Record<string, string>;
  };
};
