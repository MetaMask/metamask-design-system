import React, { createContext, useMemo } from 'react';
import { create } from 'twrnc';

import { generateTailwindConfig } from './tailwind-config';

/**
 * Theme enum for light and dark mode support
 */
export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

/**
 * Theme context properties
 */
export type ThemeContextProps = {
  tw: ReturnType<typeof create>;
  theme: Theme;
};

/**
 * Theme provider component props
 */
export type ThemeProviderProps = {
  children: React.ReactNode;
  theme: Theme;
};

export const defaultThemeContextValue: ThemeContextProps = {
  tw: create(generateTailwindConfig(Theme.Light)),
  theme: Theme.Light,
};

export const ThemeContext = createContext<ThemeContextProps>(
  defaultThemeContextValue,
);

/**
 * Theme provider component that provides theme context and tailwind configuration
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme,
}) => {
  const tw = useMemo(() => {
    const tailwindConfig = generateTailwindConfig(theme);
    return create(tailwindConfig);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        tw,
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
