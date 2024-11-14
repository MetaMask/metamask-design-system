import {
  ThemeProvider,
  useThemeContext,
  ColorSet,
  Theme,
} from '@metamask/design-system-twrnc-preset';
import { render } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

import { withThemeProvider } from './withThemeProvider';

const TestThemeComponent = () => {
  const { theme } = useThemeContext();
  return <Text>{theme}</Text>;
};
const WrappedComponent = withThemeProvider(TestThemeComponent);

describe('withThemeProvider HOC', () => {
  it('provides default theme when no ThemeProvider is present', () => {
    const { getByText } = render(<WrappedComponent />);
    expect(getByText(Theme.Default)).toBeDefined();
  });

  it('does not override existing theme context', () => {
    const { getByText } = render(
      <ThemeProvider colorSet={ColorSet.Brand} theme={Theme.Dark}>
        <WrappedComponent />
      </ThemeProvider>,
    );

    expect(getByText(Theme.Dark)).toBeDefined();
  });
});
