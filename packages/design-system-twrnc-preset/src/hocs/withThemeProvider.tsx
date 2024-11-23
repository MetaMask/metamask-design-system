/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsdoc/require-returns */
// src/hocs/withThemeProvider.tsx

import React, { forwardRef, useContext } from 'react';

import {
  ThemeProvider,
  ThemeContext,
  Theme,
  defaultThemeContextValue,
} from '../Theme';
import { ColorSet } from '../twrnc-settings';

/**
 * HOC to wrap components with ThemeProvider if none is present.
 * @param Component - The component to wrap with ThemeProvider.
 */
export function withThemeProvider<Props extends object>(
  Component: React.ComponentType<Props>,
) {
  const WrappedComponent = forwardRef<any, Props>((props, ref) => {
    // Check if a ThemeProvider is already present
    const themeContext = useContext(ThemeContext);

    // If ThemeProvider exists, use the component as is
    if (themeContext !== defaultThemeContextValue) {
      return <Component {...(props as Props)} ref={ref} />;
    }

    // Otherwise, wrap with ThemeProvider
    return (
      <ThemeProvider colorSet={ColorSet.Brand} theme={Theme.Default}>
        <Component {...(props as Props)} ref={ref} />
      </ThemeProvider>
    );
  });

  return WrappedComponent;
}
