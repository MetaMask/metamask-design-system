export enum ColorSet {
  Brand = 'brand',
}

export type ColorSetListProps = {
  brand: {
    light: Record<string, string>;
    dark: Record<string, string>;
  };
};
