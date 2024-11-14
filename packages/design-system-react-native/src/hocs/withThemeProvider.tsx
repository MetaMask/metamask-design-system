import {
  ThemeProvider,
  ThemeContext,
  ColorSet,
  Theme,
} from '@metamask/design-system-twrnc-preset';
import { render } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

import { withThemeProvider } from './withThemeProvider';

const TestThemeComponent = React.forwardRef((props, ref) => {
  const themeContext = React.useContext(ThemeContext);
  return (
    <Text ref={ref}>
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
    const ref = React.createRef();
    render(<WrappedComponent ref={ref} />);
    expect(ref.current).toBeDefined();
  });

  it('passes additional props to the wrapped component', () => {
    const { getByText } = render(<WrappedComponent testProp="testValue" />);
    // Update TestThemeComponent to display testProp for this test
    expect(getByText('testValue')).toBeDefined();
  });
});
