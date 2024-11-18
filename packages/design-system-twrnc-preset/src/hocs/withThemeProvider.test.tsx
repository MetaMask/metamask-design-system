import { render } from '@testing-library/react-native';
import * as React from 'react';
import { Text } from 'react-native';

import { ThemeProvider, ThemeContext, ColorSet, Theme } from '../Theme';
import { withThemeProvider } from './withThemeProvider';

const TestThemeComponent = React.forwardRef((props, ref) => {
  const themeContext = React.useContext(ThemeContext);
  return (
    <Text ref={ref as React.Ref<Text>} testID="withthemprovider-text">
      {themeContext.theme ? themeContext.theme : 'No Theme'}
    </Text>
  );
});

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

  it('forwards ref to the wrapped component', () => {
    const ref = React.createRef<Text>();

    render(<WrappedComponent ref={ref as React.Ref<unknown>} />);
    expect(ref.current).toBeDefined();
  });

  it('forwards props to the wrapped component', () => {
    const { getByTestId } = render(<WrappedComponent />);
    const textElement = getByTestId('withthemprovider-text');

    expect(textElement).toBeDefined();
  });
});
