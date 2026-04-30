// Third party dependencies.
import { render, screen, fireEvent } from '@testing-library/react-native';
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
  it('renders text and description', () => {
    render(
      <Toast
        description="Description of toast"
        onClose={() => undefined}
        text="Toast message"
      />,
    );

    expect(screen.getByText('Toast message')).toBeDefined();
    expect(screen.getByText('Description of toast')).toBeDefined();
  });

  it('renders the severity icon by default', () => {
    render(
      <Toast
        onClose={() => undefined}
        severity={ToastSeverity.Success}
        text="Success toast"
      />,
    );

    expect(screen.getByTestId('icon-Confirmation')).toBeDefined();
  });

  it('renders startAccessory instead of the severity icon when provided', () => {
    render(
      <Toast
        onClose={() => undefined}
        severity={ToastSeverity.Error}
        startAccessory={<RNText testID="custom-accessory">Custom</RNText>}
        text="Custom accessory"
      />,
    );

    expect(screen.getByTestId('custom-accessory')).toBeDefined();
    expect(screen.queryByTestId('icon-Error')).toBeNull();
  });

  it('renders an action button and calls onActionPress when pressed', () => {
    const onActionPress = jest.fn();

    render(
      <Toast
        actionText="Action"
        onActionPress={onActionPress}
        onClose={() => undefined}
        text="Action toast"
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
        text="Dismiss me"
      />,
    );

    fireEvent.press(screen.getByTestId('button-icon'));
    expect(onClose).toHaveBeenCalled();
    expect(onCloseButtonPress).toHaveBeenCalled();
  });
});
