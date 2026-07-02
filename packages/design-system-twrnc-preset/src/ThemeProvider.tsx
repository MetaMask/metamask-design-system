import React, { useMemo } from 'react';
import { create } from 'twrnc';

import { generateTailwindConfig } from './tailwind.config';
import type { Theme } from './Theme.types';
import type { ThemeContextProps } from './ThemeContext';
import { ThemeContext } from './ThemeContext';

/**
 * Theme provider component that wraps child components with theme context
 *
 * @param options - Component props
 * @param options.children - Child components to render
 * @param options.theme - Theme to apply (light or dark)
 * @param options.isPureBlack - When true with dark theme, uses pureBlackDarkTheme token values
 * @returns React component that provides theme context to children
 */
export const ThemeProvider = ({
  children,
  theme,
  isPureBlack = false,
}: {
  children: React.ReactNode;
  theme: Theme;
  isPureBlack?: boolean;
}) => {
  const contextValue: ThemeContextProps = useMemo(() => {
    const tailwindConfig = generateTailwindConfig(theme, isPureBlack);
    const tw = create(tailwindConfig);
    return {
      tw,
      theme,
      isPureBlack,
    };
  }, [theme, isPureBlack]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
