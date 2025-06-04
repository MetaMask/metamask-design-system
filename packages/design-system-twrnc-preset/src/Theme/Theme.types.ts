import type { create } from 'twrnc';

import { ColorScheme } from '../twrnc-settings';

export enum Theme {
  Default = 'default',
  Light = ColorScheme.Light,
  Dark = ColorScheme.Dark,
}

export type ThemeContextProps = {
  tw: ReturnType<typeof create>;
  colorSetList: Record<string, string>;
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export type ThemeProviderProps = {
  children: React.ReactNode;
  theme?: Theme;
};
