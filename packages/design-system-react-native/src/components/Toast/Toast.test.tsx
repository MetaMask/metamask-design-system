// Third party dependencies.
import { BannerAlertSeverity } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render, screen, fireEvent } from '@testing-library/react-native';
import React from 'react';
import { Text as RNText } from 'react-native';

// Internal dependencies.
import { Toast } from './Toast';

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

  it('renders the severity icon when severity is provided', () => {
    render(
      <Toast
        onClose={() => undefined}
        severity={BannerAlertSeverity.Success}
        title="Success toast"
      />,
    );

    expect(screen.getByTestId('icon-Confirmation')).toBeDefined();
  });

  it('renders startAccessory instead of the severity icon when provided', () => {
    render(
      <Toast
        onClose={() => undefined}
        severity={BannerAlertSeverity.Danger}
        startAccessory={<RNText testID="custom-accessory">Custom</RNText>}
        title="Custom accessory"
      />,
    );

    expect(screen.getByTestId('custom-accessory')).toBeDefined();
    expect(screen.queryByTestId('icon-Danger')).toBeNull();
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

  it('calls onClose and closeButtonProps.onPress when the close button is pressed', () => {
    const onClose = jest.fn();
    const onCloseButtonPress = jest.fn();

    render(
      <Toast
        closeButtonProps={{
          accessibilityLabel: 'Dismiss toast',
          onPress: onCloseButtonPress,
        }}
        onClose={onClose}
        title="Dismiss me"
      />,
    );

    fireEvent.press(screen.getByTestId('button-icon'));
    expect(onClose).toHaveBeenCalled();
    expect(onCloseButtonPress).toHaveBeenCalled();
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
});
