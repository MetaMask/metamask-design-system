import {
  ThemeProvider,
  ColorSet,
  Theme,
} from '@metamask/design-system-twrnc-preset';
import { render } from '@testing-library/react-native';
import React from 'react';

import { withThemeProvider } from './withThemeProvider';

describe('withThemeProvider HOC', () => {
  const TestComponent = () => <></>;
  const WrappedComponent = withThemeProvider(TestComponent);

  it('wraps component with ThemeProvider if none is present', () => {
    const { getByTestId } = render(<WrappedComponent />);
    const themeProvider = getByTestId('ThemeProvider');
    expect(themeProvider).toBeDefined();
  });

  it('does not wrap component with ThemeProvider if ThemeContext is already present', () => {
    const { queryAllByTestId } = render(
      <ThemeProvider colorSet={ColorSet.Brand} theme={Theme.Default}>
        <WrappedComponent />
      </ThemeProvider>,
    );

    // Ensures only one ThemeProvider exists, meaning the HOC did not add another
    expect(queryAllByTestId('ThemeProvider')).toHaveLength(1);
  });
});
