/**
 * Enum for different color set options.
 */
export enum ColorSet {
  Brand = 'brand',
}

/**
 * Props for ColorSet. Each color set - color scheme (light/dark) should contain
 * an object with twrnc-className string as key and color string as value.
 * @example
 * // {
 * //   'primary-default': '#abc',
 * //   'primary-alternative': '#123',
 * //   'secondary': '#456'
 * // }
 */
export type ColorSetListProps = {
  brand: {
    light: Record<string, string>;
    dark: Record<string, string>;
  };
};
