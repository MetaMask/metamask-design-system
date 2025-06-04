import React, { createContext, useMemo } from 'react';
import { create } from 'twrnc';

import type { ThemeContextProps, ThemeProviderProps } from './Theme.types';
import { Theme } from './Theme.types';
import { generateTailwindConfig } from './Theme.utilities';

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
