/* eslint-disable jsdoc/require-returns */
// src/hocs/withThemeProvider.tsx

import React, { forwardRef, useContext } from 'react';

import { ThemeProvider, ThemeContext, Theme, ColorScheme } from '../provider';

/**
 * HOC to wrap components with ThemeProvider if none is present.
 * @param Component - The component to wrap with ThemeProvider.
 */
export function withThemeProvider<Props extends object>(
  Component: React.ComponentType<Props>,
) {
  const WrappedComponent = forwardRef<unknown, Props>((props, ref) => {
    // Check if a ThemeProvider is already present
    const themeContext = useContext(ThemeContext);

    // If ThemeProvider exists, use the component as is
    if (themeContext) {
      return <Component {...(props as Props)} ref={ref} />;
    }

    // Otherwise, wrap with ThemeProvider
    return (
      <ThemeProvider theme={Theme.Brand} colorScheme={ColorScheme.Themed}>
        <Component {...(props as Props)} ref={ref} />
      </ThemeProvider>
    );
  });

  return WrappedComponent;
}
