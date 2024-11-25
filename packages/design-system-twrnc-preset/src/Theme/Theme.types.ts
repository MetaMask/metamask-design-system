import type { create } from 'twrnc';

import { ColorScheme } from '../twrnc-settings';
import type { ColorSet } from '../twrnc-settings';

export enum Theme {
  Default = 'default',
  Light = ColorScheme.Light,
  Dark = ColorScheme.Dark,
}

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
