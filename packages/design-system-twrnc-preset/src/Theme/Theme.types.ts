import type { create } from 'twrnc';

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export type ThemeType = Theme.Light | Theme.Dark;

export type ColorSetListProps = {
  [Theme.Light]: Record<string, string>;
  [Theme.Dark]: Record<string, string>;
};

export type ThemeContextProps = {
  tw: ReturnType<typeof create>;
  theme: ThemeType;
};

export type ThemeProviderProps = {
  children: React.ReactNode;
  theme: ThemeType;
};
