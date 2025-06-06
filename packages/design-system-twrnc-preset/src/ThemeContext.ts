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
};

export const defaultThemeContextValue = {
  tw: create(generateTailwindConfig(Theme.Light)),
  theme: Theme.Light,
};

export const ThemeContext = createContext<ThemeContextProps>(
  defaultThemeContextValue,
);
