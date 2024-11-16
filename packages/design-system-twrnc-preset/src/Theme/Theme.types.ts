import type { Theme as DesignTokenTheme } from '@metamask/design-tokens';
import type { create } from 'twrnc';

export enum ColorSet {
  Brand = 'brand',
}

export enum Theme {
  Default = 'default',
  Light = 'light',
  Dark = 'dark',
}

export type ColorSetListProps = {
  brand: {
    light: DesignTokenTheme['colors'];
    dark: DesignTokenTheme['colors'];
  };
};

export type ThemeContextProps = {
  tw: ReturnType<typeof create>;
  colorSet: ColorSet;
  theme: Theme;
  setColorSet: (theme: ColorSet) => void;
  setTheme: (scheme: Theme) => void;
};

export type ThemeProviderProps = {
  children: React.ReactNode;
  colorSet?: ColorSet;
  theme?: Theme;
};
