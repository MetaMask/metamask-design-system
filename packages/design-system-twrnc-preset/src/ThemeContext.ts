import { createContext } from 'react';
import { create } from 'twrnc';

import { generateTailwindConfig } from './tailwind.config';
import { Theme } from './Theme.types';

/**
 * Theme context properties
 */
export type ThemeContextProps = {
  tw: ReturnType<typeof create>;
  theme: Theme;
  isPureBlack: boolean;
};

export const defaultThemeContextValue = {
  tw: create(generateTailwindConfig(Theme.Light)),
  theme: Theme.Light,
  isPureBlack: false,
};

export const ThemeContext = createContext<ThemeContextProps>(
  defaultThemeContextValue,
);
