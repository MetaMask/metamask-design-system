/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState, useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { create } from 'twrnc';

import { ColorSet, ColorScheme } from '../twrnc-settings';
import type { ThemeContextProps, ThemeProviderProps } from './Theme.types';
import { Theme } from './Theme.types';
import { generateTailwindConfig } from './Theme.utilities';

export const defaultThemeContextValue: ThemeContextProps = {
  tw: create(generateTailwindConfig(ColorSet.Brand, ColorScheme.Light)),
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

  const activeColorScheme: ColorScheme = useMemo(() => {
    if (currentTheme === Theme.Default) {
      return systemColorScheme === 'dark'
        ? ColorScheme.Dark
        : ColorScheme.Light;
    }
    if (currentTheme === Theme.Light) {
      return ColorScheme.Light;
    }
    if (currentTheme === Theme.Dark) {
      return ColorScheme.Dark;
    }
    throw new Error('Invalid theme value');
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
