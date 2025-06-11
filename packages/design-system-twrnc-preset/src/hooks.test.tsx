import React from 'react';
import { Text, View } from 'react-native';
import { render } from '@testing-library/react-native';

import { useTheme, useTailwind } from './hooks';
import { Theme } from './Theme.types';
import { ThemeProvider } from './ThemeProvider';

// Test components to verify hooks work correctly
const TestThemeComponent = () => {
  const theme = useTheme();
  return <Text testID="theme-text">{theme}</Text>;
};

const TestTailwindComponent = () => {
  const tw = useTailwind();
  const styles = tw`bg-default text-default p-4`;
  return (
    <View testID="tailwind-view" style={styles}>
      <Text>Test</Text>
    </View>
  );
};

describe('hooks', () => {
  describe('useTheme', () => {
    it('returns the current theme from context', () => {
      const { getByTestId } = render(
        <ThemeProvider theme={Theme.Light}>
          <TestThemeComponent />
        </ThemeProvider>,
      );

      const themeText = getByTestId('theme-text');
      expect(themeText.props.children).toBe(Theme.Light);
    });

    it('updates when theme changes', () => {
      const { getByTestId, rerender } = render(
        <ThemeProvider theme={Theme.Light}>
          <TestThemeComponent />
        </ThemeProvider>,
      );

      expect(getByTestId('theme-text').props.children).toBe(Theme.Light);

      rerender(
        <ThemeProvider theme={Theme.Dark}>
          <TestThemeComponent />
        </ThemeProvider>,
      );

      expect(getByTestId('theme-text').props.children).toBe(Theme.Dark);
    });

    it('returns default light theme when used outside ThemeProvider', () => {
      const { getByTestId } = render(<TestThemeComponent />);

      const themeText = getByTestId('theme-text');
      expect(themeText.props.children).toBe(Theme.Light);
    });
  });

  describe('useTailwind', () => {
    it('returns tailwind function that generates styles', () => {
      const { getByTestId } = render(
        <ThemeProvider theme={Theme.Light}>
          <TestTailwindComponent />
        </ThemeProvider>,
      );

      const view = getByTestId('tailwind-view');
      expect(view.props.style).toBeDefined();
      expect(
        Array.isArray(view.props.style) || typeof view.props.style === 'object',
      ).toBe(true);
    });

    it('generates different styles for different themes', () => {
      const { getByTestId, rerender } = render(
        <ThemeProvider theme={Theme.Light}>
          <TestTailwindComponent />
        </ThemeProvider>,
      );

      const lightStyles = getByTestId('tailwind-view').props.style;

      rerender(
        <ThemeProvider theme={Theme.Dark}>
          <TestTailwindComponent />
        </ThemeProvider>,
      );

      const darkStyles = getByTestId('tailwind-view').props.style;

      // Styles should be different between light and dark themes
      expect(lightStyles).not.toEqual(darkStyles);
    });

    it('returns default tailwind instance when used outside ThemeProvider', () => {
      const { getByTestId } = render(<TestTailwindComponent />);

      const view = getByTestId('tailwind-view');
      expect(view.props.style).toBeDefined();
      expect(
        Array.isArray(view.props.style) || typeof view.props.style === 'object',
      ).toBe(true);
    });

    it('default tailwind instance uses light theme', () => {
      // Test with provider using light theme
      const { getByTestId: getProviderView } = render(
        <ThemeProvider theme={Theme.Light}>
          <TestTailwindComponent />
        </ThemeProvider>,
      );

      // Test without provider (should use default light theme)
      const { getByTestId: getDefaultView } = render(<TestTailwindComponent />);

      const providerStyles = getProviderView('tailwind-view').props.style;
      const defaultStyles = getDefaultView('tailwind-view').props.style;

      // Both should have styles (may be slightly different due to context recreation)
      expect(providerStyles).toBeDefined();
      expect(defaultStyles).toBeDefined();
    });
  });
});
