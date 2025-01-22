/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsdoc/require-returns */
// src/hocs/withThemeProvider.tsx

import React, { forwardRef, useContext } from 'react';

import {
  Theme,
  ThemeProvider,
  ThemeContext,
  defaultThemeContextValue,
} from '../Theme';
import { ColorSet } from '../twrnc-settings';

/**
 * HOC to wrap components with ThemeProvider if none is present.
 * @param Component - The component to wrap with ThemeProvider.
 * @param theme - The theme to use for ThemeProvider.
 * @param colorSet - The colorSet to use for ThemeProvider.
 */
export function withThemeProvider<Props extends object>(
  Component: React.ComponentType<Props>,
  theme?: Theme,
  colorSet?: ColorSet,
) {
  const WrappedComponent = forwardRef<any, Props>((props, ref) => {
    // Check if a ThemeProvider is already present
    const themeContext = useContext(ThemeContext);

    // If ThemeProvider exists or if there isn't additional settings passed, use the component as is
    if (themeContext !== defaultThemeContextValue && !(theme || colorSet)) {
      return <Component {...(props as Props)} ref={ref} />;
    }

    // Otherwise, wrap with ThemeProvider
    return (
      <ThemeProvider
        colorSet={colorSet ?? ColorSet.Brand}
        theme={theme ?? Theme.Default}
      >
        <Component {...(props as Props)} ref={ref} />
      </ThemeProvider>
    );
  });

  return WrappedComponent;
}
