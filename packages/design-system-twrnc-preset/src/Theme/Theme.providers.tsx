/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState, useMemo } from 'react';
import { useColorScheme } from 'react-native';
import type { ColorSchemeName } from 'react-native';
import { create } from 'twrnc';

import type { ThemeContextProps, ThemeProviderProps } from './Theme.types';
import { ColorSet, Theme } from './Theme.types';
import { generateTailwindConfig } from './Theme.utilities';

export const defaultThemeContextValue: ThemeContextProps = {
  tw: create(
    generateTailwindConfig(ColorSet.Brand, Theme.Light as ColorSchemeName),
  ),
  colorSet: ColorSet.Brand,
  theme: Theme.Light,
  setColorSet: () => {},
  setTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextProps>(
  defaultThemeContextValue,
);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  colorSet = ColorSet.Brand,
  theme = Theme.Default,
}) => {
  const [currentColorSet, setCurrentColorSet] = useState<ColorSet>(colorSet);
  const [currentTheme, setCurrentTheme] = useState<Theme>(theme);
  const systemColorScheme = useColorScheme(); // 'light' | 'dark' | null

  const activeColorScheme: 'light' | 'dark' = useMemo(() => {
    if (currentTheme === Theme.Default) {
      return systemColorScheme === 'dark' ? 'dark' : 'light';
    }
    return currentTheme as 'light' | 'dark';
  }, [currentTheme, systemColorScheme]);

  const tw = useMemo(() => {
    const tailwindConfig = generateTailwindConfig(
      currentColorSet,
      activeColorScheme,
    );
    return create(tailwindConfig);
  }, [currentColorSet, activeColorScheme]);

  return (
    <ThemeContext.Provider
      value={{
        tw,
        colorSet: currentColorSet,
        theme: currentTheme,
        setColorSet: setCurrentColorSet,
        setTheme: setCurrentTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
