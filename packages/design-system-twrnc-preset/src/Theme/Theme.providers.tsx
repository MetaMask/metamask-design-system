import React, { createContext, useState, useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { create } from 'twrnc';

import { ColorScheme, colorSetList } from '../twrnc-settings';

import type { ThemeContextProps, ThemeProviderProps } from './Theme.types';
import { Theme } from './Theme.types';
import { generateTailwindConfig } from './Theme.utilities';

export const defaultThemeContextValue: ThemeContextProps = {
  tw: create(generateTailwindConfig(ColorScheme.Light)),
  colorSetList: colorSetList[ColorScheme.Light],
  theme: Theme.Light,
  setTheme: () => undefined,
};

export const ThemeContext = createContext<ThemeContextProps>(
  defaultThemeContextValue,
);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme = Theme.Default,
}) => {
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
    const tailwindConfig = generateTailwindConfig(activeColorScheme);
    return create(tailwindConfig);
  }, [activeColorScheme]);

  return (
    <ThemeContext.Provider
      value={{
        tw,
        colorSetList: colorSetList[activeColorScheme],
        theme: currentTheme,
        setTheme: setCurrentTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
