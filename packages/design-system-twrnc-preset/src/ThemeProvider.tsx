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
 * @returns React component that provides theme context to children
 */
export const ThemeProvider = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: Theme;
}) => {
  const contextValue: ThemeContextProps = useMemo(() => {
    const tailwindConfig = generateTailwindConfig(theme);
    const tw = create(tailwindConfig);
    return {
      tw,
      theme,
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
