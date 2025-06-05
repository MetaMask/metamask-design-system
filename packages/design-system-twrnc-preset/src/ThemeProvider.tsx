import React, { createContext, useMemo } from 'react';
import { create } from 'twrnc';

import { generateTailwindConfig } from './tailwindConfig';

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export type ThemeType = Theme.Light | Theme.Dark;

export type ThemeContextProps = {
  tw: ReturnType<typeof create>;
  theme: ThemeType;
};

export type ThemeProviderProps = {
  children: React.ReactNode;
  theme: ThemeType;
};

export const defaultThemeContextValue: ThemeContextProps = {
  tw: create(generateTailwindConfig(Theme.Light)),
  theme: Theme.Light,
};

export const ThemeContext = createContext<ThemeContextProps>(
  defaultThemeContextValue,
);

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
