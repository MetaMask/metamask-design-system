// Third party dependencies.
import { render, screen, act, fireEvent } from '@testing-library/react-native';
import React, { createRef, useContext } from 'react';
import { Text as RNText } from 'react-native';

// External dependencies.
import { IconName } from '../../types';
import { AvatarAccountVariant } from '../AvatarAccount';

// Internal dependencies.
import Toast from './Toast';
import { ToastContext, ToastContextWrapper } from './Toast.context';
import type { ToastOptions, ToastRef } from './Toast.types';
import { ButtonIconVariant, ToastVariant } from './Toast.types';

// Mock safe area context.
jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: () => ({ bottom: 0, top: 0, left: 0, right: 0 }),
}));

// Mock cancelAnimation as a jest.fn so we can assert on calls.
const mockCancelAnimation = jest.fn();
jest.mock('react-native-reanimated', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const Reanimated = require('react-native-reanimated/mock');
  return {
    ...Reanimated,
    cancelAnimation: (...args: unknown[]) => mockCancelAnimation(...args),
  };
});

// Mock avatar components to avoid deep dependency tree.
jest.mock('../AvatarAccount', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const ReactMock = require('react');
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { Text } = require('react-native');
  return {
    ...jest.requireActual('../AvatarAccount'),
    AvatarAccount: () =>
      ReactMock.createElement(
        Text,
        { testID: 'avatar-account' },
        'AvatarAccount',
      ),
  };
});

jest.mock('../AvatarNetwork', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const ReactMock = require('react');
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { Text } = require('react-native');
  return {
    ...jest.requireActual('../AvatarNetwork'),
    AvatarNetwork: () =>
      ReactMock.createElement(
        Text,
        { testID: 'avatar-network' },
        'AvatarNetwork',
      ),
  };
});

jest.mock('../AvatarFavicon', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const ReactMock = require('react');
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { Text } = require('react-native');
  return {
    ...jest.requireActual('../AvatarFavicon'),
    AvatarFavicon: () =>
      ReactMock.createElement(
        Text,
        { testID: 'avatar-favicon' },
        'AvatarFavicon',
      ),
  };
});

jest.mock('../AvatarIcon', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const ReactMock = require('react');
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { Text } = require('react-native');
  return {
    ...jest.requireActual('../AvatarIcon'),
    AvatarIcon: () =>
      ReactMock.createElement(Text, { testID: 'avatar-icon' }, 'AvatarIcon'),
  };
});

// Helper to show toast and wait for render.
const showToastAndWait = async (
  toastRef: React.RefObject<ToastRef>,
  options: ToastOptions,
) => {
  await act(async () => {
    toastRef.current?.showToast(options);
    jest.runAllTimers();
  });
};

describe('Toast', () => {
  let toastRef: React.RefObject<ToastRef>;

  beforeEach(() => {
    toastRef = createRef<ToastRef>();
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.useRealTimers();
  });

  it('renders null with default state', () => {
    const { toJSON } = render(<Toast ref={toastRef} />);
    expect(toJSON()).toBeNull();
  });

  it('accepts testID on the root element via ViewProps', async () => {
    render(<Toast ref={toastRef} testID="custom-toast" />);
    await showToastAndWait(toastRef, {
      variant: ToastVariant.Plain,
      labelOptions: [{ label: 'Test Label' }],
      hasNoTimeout: true,
    });
    expect(screen.getByTestId('custom-toast')).toBeDefined();
  });

  it('accepts testID on the labels container via labelsContainerProps', async () => {
    render(
      <Toast
        ref={toastRef}
        labelsContainerProps={{ testID: 'custom-labels-container' }}
      />,
    );
    await showToastAndWait(toastRef, {
      variant: ToastVariant.Plain,
      labelOptions: [{ label: 'Test Label' }],
      hasNoTimeout: true,
    });
    expect(screen.getByTestId('custom-labels-container')).toBeDefined();
  });

  it('displays toast with correct label when showToast is called', async () => {
    render(<Toast ref={toastRef} />);
    await showToastAndWait(toastRef, {
      variant: ToastVariant.Plain,
      labelOptions: [{ label: 'Test Label' }],
      hasNoTimeout: true,
    });
    expect(screen.getByText('Test Label')).toBeDefined();
  });

  it('displays toast with bold label when isBold is true', async () => {
    render(<Toast ref={toastRef} />);
    await showToastAndWait(toastRef, {
      variant: ToastVariant.Plain,
      labelOptions: [{ label: 'Bold Test Label', isBold: true }],
      hasNoTimeout: true,
    });
    expect(screen.getByText('Bold Test Label')).toBeDefined();
  });

  it('displays toast with multiple label parts', async () => {
    render(<Toast ref={toastRef} />);
    await showToastAndWait(toastRef, {
      variant: ToastVariant.Plain,
      labelOptions: [
        { label: 'First part ' },
        { label: 'bold part', isBold: true },
        { label: ' last part' },
      ],
      hasNoTimeout: true,
    });
    expect(screen.getByText('First part ')).toBeDefined();
    expect(screen.getByText('bold part')).toBeDefined();
    expect(screen.getByText(' last part')).toBeDefined();
  });

  it('displays toast with description when descriptionOptions provided', async () => {
    render(<Toast ref={toastRef} />);
    await showToastAndWait(toastRef, {
      variant: ToastVariant.Plain,
      labelOptions: [{ label: 'Test Label' }],
      descriptionOptions: { description: 'Test description' },
      hasNoTimeout: true,
    });
    expect(screen.getByText('Test Label')).toBeDefined();
    expect(screen.getByText('Test description')).toBeDefined();
  });

  it('hides toast when closeToast is called', async () => {
    render(<Toast ref={toastRef} />);

    // Show toast first.
    await showToastAndWait(toastRef, {
      variant: ToastVariant.Plain,
      labelOptions: [{ label: 'Test Label' }],
      hasNoTimeout: true,
    });
    expect(screen.getByText('Test Label')).toBeDefined();

    // Close toast.
    await act(async () => {
      toastRef.current?.closeToast();
    });
    expect(screen.queryByText('Test Label')).toBeNull();
  });

  it('renders Account avatar variant', async () => {
    render(<Toast ref={toastRef} />);
    await showToastAndWait(toastRef, {
      variant: ToastVariant.Account,
      labelOptions: [{ label: 'Account toast' }],
      hasNoTimeout: true,
      accountAddress:
        '0x10e08af911f2e489480fb2855b24771745d0198b50f5c55891369844a8c57092',
      accountAvatarType: AvatarAccountVariant.Jazzicon,
    });
    expect(screen.getByTestId('avatar-account')).toBeDefined();
    expect(screen.getByText('Account toast')).toBeDefined();
  });

  it('renders Network avatar variant', async () => {
    render(<Toast ref={toastRef} />);
    await showToastAndWait(toastRef, {
      variant: ToastVariant.Network,
      labelOptions: [{ label: 'Network toast' }],
      hasNoTimeout: true,
      networkImageSource: { uri: 'https://example.com/network.png' },
      networkName: 'Ethereum',
    });
    expect(screen.getByTestId('avatar-network')).toBeDefined();
    expect(screen.getByText('Network toast')).toBeDefined();
  });

  it('renders App avatar variant', async () => {
    render(<Toast ref={toastRef} />);
    await showToastAndWait(toastRef, {
      variant: ToastVariant.App,
      labelOptions: [{ label: 'App toast' }],
      hasNoTimeout: true,
      appIconSource: { uri: 'https://example.com/app.png' },
    });
    expect(screen.getByTestId('avatar-favicon')).toBeDefined();
    expect(screen.getByText('App toast')).toBeDefined();
  });

  it('renders Icon avatar variant', async () => {
    render(<Toast ref={toastRef} />);
    await showToastAndWait(toastRef, {
      variant: ToastVariant.Icon,
      labelOptions: [{ label: 'Icon toast' }],
      hasNoTimeout: true,
      iconName: IconName.Add,
    });
    expect(screen.getByTestId('avatar-icon')).toBeDefined();
    expect(screen.getByText('Icon toast')).toBeDefined();
  });

  it('renders startAccessory instead of avatar when provided', async () => {
    render(<Toast ref={toastRef} />);
    await showToastAndWait(toastRef, {
      variant: ToastVariant.Plain,
      labelOptions: [{ label: 'Custom accessory' }],
      hasNoTimeout: true,
      startAccessory: <RNText testID="custom-accessory">Custom</RNText>,
    });
    expect(screen.getByTestId('custom-accessory')).toBeDefined();
  });

  it('renders link button when linkButtonOptions provided', async () => {
    const onPress = jest.fn();
    render(<Toast ref={toastRef} />);
    await showToastAndWait(toastRef, {
      variant: ToastVariant.Plain,
      labelOptions: [{ label: 'With link' }],
      hasNoTimeout: true,
      linkButtonOptions: { label: 'Click here', onPress },
    });
    expect(screen.getByText('Click here')).toBeDefined();
  });

  it('renders close button with ButtonIcon variant', async () => {
    const onPress = jest.fn();
    render(<Toast ref={toastRef} />);
    await showToastAndWait(toastRef, {
      variant: ToastVariant.Plain,
      labelOptions: [{ label: 'With close icon' }],
      hasNoTimeout: true,
      closeButtonOptions: {
        variant: ButtonIconVariant.Icon,
        iconName: IconName.Close,
        onPress,
      },
    });
    expect(screen.getByText('With close icon')).toBeDefined();
  });

  it('renders close button with Button variant', async () => {
    const onPress = jest.fn();
    render(<Toast ref={toastRef} />);
    await showToastAndWait(toastRef, {
      variant: ToastVariant.Plain,
      labelOptions: [{ label: 'With close button' }],
      hasNoTimeout: true,
      closeButtonOptions: {
        onPress,
        children: 'Dismiss',
      },
    });
    expect(screen.getByText('Dismiss')).toBeDefined();
  });

  it('replaces existing toast when showToast called rapidly', async () => {
    render(<Toast ref={toastRef} />);

    // Show first toast.
    await showToastAndWait(toastRef, {
      variant: ToastVariant.Plain,
      labelOptions: [{ label: 'First toast' }],
      hasNoTimeout: true,
    });
    expect(screen.getByText('First toast')).toBeDefined();

    // Show second toast while first is visible.
    await act(async () => {
      toastRef.current?.showToast({
        variant: ToastVariant.Plain,
        labelOptions: [{ label: 'Second toast' }],
        hasNoTimeout: false,
      });
      jest.runAllTimers();
    });
    expect(screen.getByText('Second toast')).toBeDefined();
    expect(screen.queryByText('First toast')).toBeNull();
  });

  it('triggers onLayout and animates with hasNoTimeout true', async () => {
    render(<Toast ref={toastRef} testID="toast-root" />);
    await showToastAndWait(toastRef, {
      variant: ToastVariant.Plain,
      labelOptions: [{ label: 'Layout toast' }],
      hasNoTimeout: true,
    });
    const toastElement = screen.getByTestId('toast-root');
    await act(async () => {
      fireEvent(toastElement, 'layout', {
        nativeEvent: { layout: { height: 100, width: 300, x: 0, y: 0 } },
      });
    });
    expect(screen.getByText('Layout toast')).toBeDefined();
  });

  it('triggers onLayout and animates with hasNoTimeout false', async () => {
    render(<Toast ref={toastRef} testID="toast-root" />);
    await showToastAndWait(toastRef, {
      variant: ToastVariant.Plain,
      labelOptions: [{ label: 'Auto-dismiss toast' }],
      hasNoTimeout: false,
    });
    const toastElement = screen.getByTestId('toast-root');
    expect(toastElement).toBeDefined();
    await act(async () => {
      fireEvent(toastElement, 'layout', {
        nativeEvent: { layout: { height: 100, width: 300, x: 0, y: 0 } },
      });
    });
    // Toast may auto-dismiss after animation chain completes.
    await act(async () => {
      jest.runAllTimers();
    });
  });

  it('calls onPress handler when ButtonIcon close button is pressed', async () => {
    const onPress = jest.fn();
    render(<Toast ref={toastRef} />);
    await showToastAndWait(toastRef, {
      variant: ToastVariant.Plain,
      labelOptions: [{ label: 'Close icon test' }],
      hasNoTimeout: true,
      closeButtonOptions: {
        variant: ButtonIconVariant.Icon,
        iconName: IconName.Close,
        onPress,
      },
    });
    const buttonIcon = screen.getByTestId('button-icon');
    await act(async () => {
      fireEvent.press(buttonIcon);
    });
    expect(onPress).toHaveBeenCalled();
  });

  it('calls onPress handler when Button close button is pressed', async () => {
    const onPress = jest.fn();
    render(<Toast ref={toastRef} />);
    await showToastAndWait(toastRef, {
      variant: ToastVariant.Plain,
      labelOptions: [{ label: 'Close button test' }],
      hasNoTimeout: true,
      closeButtonOptions: {
        onPress,
        children: 'Close',
      },
    });
    const closeBtn = screen.getByText('Close');
    await act(async () => {
      fireEvent.press(closeBtn);
    });
    expect(onPress).toHaveBeenCalled();
  });

  it('cancels animation when replacing toast with hasNoTimeout false', async () => {
    render(<Toast ref={toastRef} />);

    // Show first toast with no timeout so it stays.
    await showToastAndWait(toastRef, {
      variant: ToastVariant.Plain,
      labelOptions: [{ label: 'Persistent toast' }],
      hasNoTimeout: true,
    });

    // Show second toast (hasNoTimeout=false triggers cancelAnimation).
    await act(async () => {
      toastRef.current?.showToast({
        variant: ToastVariant.Plain,
        labelOptions: [{ label: 'Replacement' }],
        hasNoTimeout: false,
      });
      jest.runAllTimers();
    });
    expect(mockCancelAnimation).toHaveBeenCalled();
  });

  it('cancels animation when replacing toast even with hasNoTimeout true', async () => {
    render(<Toast ref={toastRef} />);

    // Show first toast.
    await showToastAndWait(toastRef, {
      variant: ToastVariant.Plain,
      labelOptions: [{ label: 'First' }],
      hasNoTimeout: true,
    });

    // Replace with another hasNoTimeout=true toast (still cancels old animation).
    await act(async () => {
      toastRef.current?.showToast({
        variant: ToastVariant.Plain,
        labelOptions: [{ label: 'Second' }],
        hasNoTimeout: true,
      });
      jest.runAllTimers();
    });
    expect(mockCancelAnimation).toHaveBeenCalled();
    expect(screen.getByText('Second')).toBeDefined();
  });

  it('clears pending replacement timer when showToast is called again rapidly', async () => {
    render(<Toast ref={toastRef} />);

    // Show first toast.
    await showToastAndWait(toastRef, {
      variant: ToastVariant.Plain,
      labelOptions: [{ label: 'First' }],
      hasNoTimeout: true,
    });

    // Call showToast twice without letting the replacement timer fire.
    await act(async () => {
      toastRef.current?.showToast({
        variant: ToastVariant.Plain,
        labelOptions: [{ label: 'Second' }],
        hasNoTimeout: true,
      });
      // Don't run timers — call showToast again while the replacement timer is pending.
      toastRef.current?.showToast({
        variant: ToastVariant.Plain,
        labelOptions: [{ label: 'Third' }],
        hasNoTimeout: true,
      });
      jest.runAllTimers();
    });
    expect(screen.getByText('Third')).toBeDefined();
    expect(screen.queryByText('Second')).toBeNull();
  });

  it('clears pending replacement timer when closeToast is called', async () => {
    render(<Toast ref={toastRef} />);

    // Show first toast.
    await showToastAndWait(toastRef, {
      variant: ToastVariant.Plain,
      labelOptions: [{ label: 'First' }],
      hasNoTimeout: true,
    });

    // Call showToast to schedule a replacement, then closeToast before it fires.
    await act(async () => {
      toastRef.current?.showToast({
        variant: ToastVariant.Plain,
        labelOptions: [{ label: 'Replacement' }],
        hasNoTimeout: true,
      });
      // Close before the replacement timer fires.
      toastRef.current?.closeToast();
      jest.runAllTimers();
    });
    // The replacement toast should NOT appear after close.
    expect(screen.queryByText('Replacement')).toBeNull();
  });
});

describe('ToastContextWrapper', () => {
  it('renders children and provides toastRef via context', () => {
    const Consumer: React.FC = () => {
      const { toastRef } = useContext(ToastContext);
      return (
        <RNText testID="consumer">{toastRef ? 'has-ref' : 'no-ref'}</RNText>
      );
    };

    render(
      <ToastContextWrapper>
        <Consumer />
      </ToastContextWrapper>,
    );

    expect(screen.getByTestId('consumer')).toBeDefined();
    expect(screen.getByText('has-ref')).toBeDefined();
  });
});
