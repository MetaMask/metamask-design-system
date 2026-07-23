import { TextColor } from '@metamask/design-system-shared';
import {
  Theme,
  ThemeProvider,
  useTailwind,
} from '@metamask/design-system-twrnc-preset';
import { lightTheme } from '@metamask/design-tokens';
import {
  render,
  screen,
  fireEvent,
  renderHook,
} from '@testing-library/react-native';
import React from 'react';
import { Text as RNText } from 'react-native';

// Internal dependencies.
import { Toast } from './Toast';
import { ToastSeverity } from './Toast.types';

jest.mock('../Icon', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const ReactMock = require('react');
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { Text } = require('react-native');
  return {
    ...jest.requireActual('../Icon'),
    Icon: ({ name, testID }: { name: string; testID?: string }) =>
      ReactMock.createElement(Text, { testID: testID ?? `icon-${name}` }, name),
  };
});

describe('Toast', () => {
  it('renders title and description', () => {
    render(
      <Toast
        description="Description of toast"
        onClose={() => undefined}
        title="Toast message"
      />,
    );

    expect(screen.getByText('Toast message')).toBeDefined();
    expect(screen.getByText('Description of toast')).toBeDefined();
  });

  it('does not render a severity icon by default', () => {
    render(<Toast onClose={() => undefined} title="Default toast" />);

    expect(screen.queryByTestId('icon-Info')).toBeNull();
  });

  it('does not render a severity icon when severity is default', () => {
    render(
      <Toast
        onClose={() => undefined}
        severity={ToastSeverity.Default}
        title="Default severity toast"
      />,
    );

    expect(screen.queryByTestId('icon-Info')).toBeNull();
  });

  it('renders the success severity icon when severity is provided', () => {
    render(
      <Toast
        onClose={() => undefined}
        severity={ToastSeverity.Success}
        title="Success toast"
      />,
    );

    expect(screen.getByTestId('icon-Confirmation')).toBeDefined();
  });

  it('renders the warning severity icon', () => {
    render(
      <Toast
        onClose={() => undefined}
        severity={ToastSeverity.Warning}
        title="Warning toast"
      />,
    );

    expect(screen.getByTestId('icon-Danger')).toBeDefined();
  });

  it('renders the danger severity icon', () => {
    render(
      <Toast
        onClose={() => undefined}
        severity={ToastSeverity.Danger}
        title="Danger toast"
      />,
    );

    expect(screen.getByTestId('icon-Error')).toBeDefined();
  });

  it('renders startAccessory instead of the severity icon when provided', () => {
    render(
      <Toast
        onClose={() => undefined}
        severity={ToastSeverity.Danger}
        startAccessory={<RNText testID="custom-accessory">Custom</RNText>}
        title="Custom accessory"
      />,
    );

    expect(screen.getByTestId('custom-accessory')).toBeDefined();
    expect(screen.queryByTestId('icon-Error')).toBeNull();
  });

  it('renders an action button and calls actionButtonOnPress when pressed', () => {
    const onActionPress = jest.fn();

    render(
      <Toast
        actionButtonLabel="Action"
        actionButtonOnPress={onActionPress}
        onClose={() => undefined}
        title="Action toast"
      />,
    );

    fireEvent.press(screen.getByText('Action'));
    expect(onActionPress).toHaveBeenCalled();
  });

  it('does not render a close button when onClose is not provided', () => {
    render(<Toast title="Dismiss me" />);

    expect(screen.queryByTestId('button-icon')).toBeNull();
  });

  it('calls onClose and applies close button props when the close button is pressed', () => {
    const onClose = jest.fn();

    render(
      <Toast
        closeButtonProps={{
          accessibilityLabel: 'Dismiss toast',
          testID: 'dismiss-toast-button',
        }}
        onClose={onClose}
        title="Dismiss me"
      />,
    );

    expect(
      screen.getByTestId('dismiss-toast-button').props.accessibilityLabel,
    ).toBe('Dismiss toast');
    fireEvent.press(screen.getByTestId('dismiss-toast-button'));
    expect(onClose).toHaveBeenCalled();
  });

  it('applies twClassName to the toast surface', () => {
    const tw = renderHook(() => useTailwind()).result.current;

    render(
      <Toast
        onClose={() => undefined}
        testID="toast-root"
        title="Styled toast"
        twClassName="mx-2"
      />,
    );

    expect(screen.getByTestId('toast-root')).toHaveStyle(tw.style('mx-2'));
  });

  it('uses background default, md shadow, and 16px radius in light theme', () => {
    const tw = renderHook(() => useTailwind()).result.current;

    render(
      <Toast
        onClose={() => undefined}
        testID="toast-root"
        title="Light toast"
      />,
    );

    expect(screen.getByTestId('toast-root')).toHaveStyle(
      tw.style('bg-default rounded-2xl'),
    );
    expect(screen.getByTestId('toast-root')).toHaveStyle(
      lightTheme.shadows.size.md,
    );
  });

  it('uses background section and no shadow in dark theme', () => {
    const tw = renderHook(() => useTailwind(), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={Theme.Dark}>{children}</ThemeProvider>
      ),
    }).result.current;

    render(
      <ThemeProvider theme={Theme.Dark}>
        <Toast
          onClose={() => undefined}
          testID="toast-root"
          title="Dark toast"
        />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('toast-root')).toHaveStyle(
      tw.style('bg-section rounded-2xl'),
    );
    expect(screen.getByTestId('toast-root')).not.toHaveStyle(
      lightTheme.shadows.size.md,
    );
  });

  it('applies text alternative color to description', () => {
    const tw = renderHook(() => useTailwind()).result.current;

    render(
      <Toast
        description="Description of toast"
        onClose={() => undefined}
        title="Toast message"
      />,
    );

    expect(screen.getByText('Description of toast')).toHaveStyle(
      tw.style(TextColor.TextAlternative),
    );
  });

  it('merges descriptionProps without dropping the default color', () => {
    const tw = renderHook(() => useTailwind()).result.current;

    render(
      <Toast
        description="Description of toast"
        descriptionProps={{ testID: 'toast-description' }}
        onClose={() => undefined}
        title="Toast message"
      />,
    );

    const description = screen.getByTestId('toast-description');
    expect(description).toHaveStyle(tw.style(TextColor.TextAlternative));
    expect(description).toHaveTextContent('Description of toast');
  });
});
