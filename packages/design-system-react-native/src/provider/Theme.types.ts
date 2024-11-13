import type { create } from 'twrnc';

export enum Theme {
  Brand = 'brand',
}

export enum ColorScheme {
  Light = 'light',
  Dark = 'Dark',
  Themed = 'Themed',
}

export type ThemeContextProps = {
  tw: ReturnType<typeof create>;
  theme: Theme;
  colorScheme: ColorScheme;
  setTheme: (theme: Theme) => void;
  setColorScheme: (scheme: ColorScheme) => void;
};

export type ThemeProviderProps = {
  children: React.ReactNode;
  theme?: Theme;
  colorScheme?: ColorScheme;
};
