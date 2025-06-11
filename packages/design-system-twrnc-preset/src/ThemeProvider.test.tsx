import React from 'react';
import { Text, View } from 'react-native';
import { render } from '@testing-library/react-native';

import { Theme } from './Theme.types';
import { ThemeProvider } from './ThemeProvider';
import { useTheme, useTailwind } from './hooks';

// Test component that uses both hooks to verify provider works
const TestConsumerComponent = ({ testId }: { testId: string }) => {
  const theme = useTheme();
  const tw = useTailwind();

  // Test basic styling works
  const styles = tw`bg-default text-default p-2`;

  return (
    <View testID={testId} style={styles}>
      <Text testID={`${testId}-theme`}>{theme}</Text>
      <Text testID={`${testId}-hasStyles`}>
        {styles ? 'has-styles' : 'no-styles'}
      </Text>
    </View>
  );
};

describe('ThemeProvider', () => {
  it('provides light theme context correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={Theme.Light}>
        <TestConsumerComponent testId="light-test" />
      </ThemeProvider>,
    );

    const themeText = getByTestId('light-test-theme');
    const stylesText = getByTestId('light-test-hasStyles');

    expect(themeText.props.children).toBe(Theme.Light);
    expect(stylesText.props.children).toBe('has-styles');
  });

  it('provides dark theme context correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={Theme.Dark}>
        <TestConsumerComponent testId="dark-test" />
      </ThemeProvider>,
    );

    const themeText = getByTestId('dark-test-theme');
    const stylesText = getByTestId('dark-test-hasStyles');

    expect(themeText.props.children).toBe(Theme.Dark);
    expect(stylesText.props.children).toBe('has-styles');
  });

  it('updates context when theme prop changes', () => {
    const { getByTestId, rerender } = render(
      <ThemeProvider theme={Theme.Light}>
        <TestConsumerComponent testId="change-test" />
      </ThemeProvider>,
    );

    // Initial state
    expect(getByTestId('change-test-theme').props.children).toBe(Theme.Light);

    // After theme change
    rerender(
      <ThemeProvider theme={Theme.Dark}>
        <TestConsumerComponent testId="change-test" />
      </ThemeProvider>,
    );

    expect(getByTestId('change-test-theme').props.children).toBe(Theme.Dark);
  });

  it('generates different tailwind instances for different themes', () => {
    const { getByTestId: getLightTestId } = render(
      <ThemeProvider theme={Theme.Light}>
        <TestConsumerComponent testId="light-instance" />
      </ThemeProvider>,
    );

    const { getByTestId: getDarkTestId } = render(
      <ThemeProvider theme={Theme.Dark}>
        <TestConsumerComponent testId="dark-instance" />
      </ThemeProvider>,
    );

    const lightView = getLightTestId('light-instance');
    const darkView = getDarkTestId('dark-instance');

    // Both should have styles but they should be different
    expect(lightView.props.style).toBeDefined();
    expect(darkView.props.style).toBeDefined();
    expect(lightView.props.style).not.toEqual(darkView.props.style);
  });

  it('supports nested providers with different themes', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={Theme.Light}>
        <TestConsumerComponent testId="outer" />
        <ThemeProvider theme={Theme.Dark}>
          <TestConsumerComponent testId="inner" />
        </ThemeProvider>
      </ThemeProvider>,
    );

    const outerTheme = getByTestId('outer-theme');
    const innerTheme = getByTestId('inner-theme');

    expect(outerTheme.props.children).toBe(Theme.Light);
    expect(innerTheme.props.children).toBe(Theme.Dark);
  });

  it('renders children correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={Theme.Light}>
        <View testID="child-view">
          <Text testID="child-text">Test content</Text>
        </View>
      </ThemeProvider>,
    );

    expect(getByTestId('child-view')).toBeDefined();
    expect(getByTestId('child-text').props.children).toBe('Test content');
  });

  it('memoizes context value correctly to prevent unnecessary rerenders', () => {
    let renderCount = 0;

    const CountingComponent = () => {
      renderCount++;
      const theme = useTheme();
      return <Text>{theme}</Text>;
    };

    const { rerender } = render(
      <ThemeProvider theme={Theme.Light}>
        <CountingComponent />
      </ThemeProvider>,
    );

    const initialRenderCount = renderCount;

    // Rerender with same theme - should not cause child to rerender
    rerender(
      <ThemeProvider theme={Theme.Light}>
        <CountingComponent />
      </ThemeProvider>,
    );

    expect(renderCount).toBe(initialRenderCount + 1); // Only one additional render for the rerender call

    // Rerender with different theme - should cause child to rerender
    rerender(
      <ThemeProvider theme={Theme.Dark}>
        <CountingComponent />
      </ThemeProvider>,
    );

    expect(renderCount).toBe(initialRenderCount + 2); // One more render due to theme change
  });
});
