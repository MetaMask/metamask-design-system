// Third party dependencies.
import { render, screen, act, fireEvent } from '@testing-library/react-native';
import React, { createRef, useEffect } from 'react';
import { Text as RNText } from 'react-native';

// Internal dependencies.
import { Toast } from './Toast';
import type { ToastOptions, ToastRef } from './Toast.types';
import { ToastSeverity } from './Toast.types';

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
      hasNoTimeout: true,
      text: 'Test Label',
    });
    expect(screen.getByTestId('custom-toast')).toBeDefined();
  });

  it('displays toast text when showToast is called', async () => {
    render(<Toast ref={toastRef} />);
    await showToastAndWait(toastRef, {
      hasNoTimeout: true,
      text: 'Test Label',
    });
    expect(screen.getByText('Test Label')).toBeDefined();
  });

  it('displays toast with description when provided', async () => {
    render(<Toast ref={toastRef} />);
    await showToastAndWait(toastRef, {
      description: 'Test description',
      hasNoTimeout: true,
      text: 'Test Label',
    });
    expect(screen.getByText('Test Label')).toBeDefined();
    expect(screen.getByText('Test description')).toBeDefined();
  });

  it('hides toast when closeToast is called', async () => {
    render(<Toast ref={toastRef} />);

    // Show toast first.
    await showToastAndWait(toastRef, {
      hasNoTimeout: true,
      text: 'Test Label',
    });
    expect(screen.getByText('Test Label')).toBeDefined();

    // Close toast.
    await act(async () => {
      toastRef.current?.closeToast();
    });
    expect(screen.queryByText('Test Label')).toBeNull();
  });

  it('renders the default severity icon when no custom accessory is provided', async () => {
    render(<Toast ref={toastRef} />);
    await showToastAndWait(toastRef, {
      hasNoTimeout: true,
      text: 'Default toast',
    });
    expect(screen.getByTestId('icon-FullCircle')).toBeDefined();
  });

  it('renders the configured severity icon when provided', async () => {
    render(<Toast ref={toastRef} />);
    await showToastAndWait(toastRef, {
      hasNoTimeout: true,
      severity: ToastSeverity.Success,
      text: 'Success toast',
    });
    expect(screen.getByTestId('icon-Confirmation')).toBeDefined();
  });

  it('renders startAccessory instead of the severity icon when provided', async () => {
    render(<Toast ref={toastRef} />);
    await showToastAndWait(toastRef, {
      hasNoTimeout: true,
      startAccessory: <RNText testID="custom-accessory">Custom</RNText>,
      text: 'Custom accessory',
    });
    expect(screen.getByTestId('custom-accessory')).toBeDefined();
    expect(screen.queryByTestId('icon-FullCircle')).toBeNull();
  });

  it('renders an action button when actionText and onActionPress are provided', async () => {
    const onActionPress = jest.fn();
    render(<Toast ref={toastRef} />);
    await showToastAndWait(toastRef, {
      actionText: 'Click here',
      hasNoTimeout: true,
      onActionPress,
      text: 'With action',
    });
    const actionButton = screen.getByText('Click here');
    expect(actionButton).toBeDefined();

    await act(async () => {
      fireEvent.press(actionButton);
    });
    expect(onActionPress).toHaveBeenCalled();
  });

  it('replaces existing toast when showToast called rapidly', async () => {
    render(<Toast ref={toastRef} />);

    // Show first toast.
    await showToastAndWait(toastRef, {
      hasNoTimeout: true,
      text: 'First toast',
    });
    expect(screen.getByText('First toast')).toBeDefined();

    // Show second toast while first is visible.
    await act(async () => {
      toastRef.current?.showToast({
        hasNoTimeout: false,
        text: 'Second toast',
      });
      jest.runAllTimers();
    });
    expect(screen.getByText('Second toast')).toBeDefined();
    expect(screen.queryByText('First toast')).toBeNull();
  });

  it('triggers onLayout and animates with hasNoTimeout true', async () => {
    render(<Toast ref={toastRef} testID="toast-root" />);
    await showToastAndWait(toastRef, {
      hasNoTimeout: true,
      text: 'Layout toast',
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
      hasNoTimeout: false,
      text: 'Auto-dismiss toast',
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

  it('calls onClose and hides the toast when the close button is pressed', async () => {
    const onClose = jest.fn();
    const onCloseButtonPress = jest.fn();
    render(<Toast ref={toastRef} />);
    await showToastAndWait(toastRef, {
      closeButtonProps: {
        accessibilityLabel: 'Dismiss toast',
        onPress: onCloseButtonPress,
      },
      hasNoTimeout: true,
      onClose,
      text: 'Close button test',
    });

    const closeBtn = screen.getByTestId('button-icon');
    await act(async () => {
      fireEvent.press(closeBtn);
    });

    expect(onClose).toHaveBeenCalled();
    expect(onCloseButtonPress).toHaveBeenCalled();
    expect(screen.queryByText('Close button test')).toBeNull();
  });

  it('cancels animation when replacing toast with hasNoTimeout false', async () => {
    render(<Toast ref={toastRef} />);

    // Show first toast with no timeout so it stays.
    await showToastAndWait(toastRef, {
      hasNoTimeout: true,
      text: 'Persistent toast',
    });

    // Show second toast (hasNoTimeout=false triggers cancelAnimation).
    await act(async () => {
      toastRef.current?.showToast({
        hasNoTimeout: false,
        text: 'Replacement',
      });
      jest.runAllTimers();
    });
    expect(mockCancelAnimation).toHaveBeenCalled();
  });

  it('cancels animation when replacing toast even with hasNoTimeout true', async () => {
    render(<Toast ref={toastRef} />);

    // Show first toast.
    await showToastAndWait(toastRef, {
      hasNoTimeout: true,
      text: 'First',
    });

    // Replace with another hasNoTimeout=true toast (still cancels old animation).
    await act(async () => {
      toastRef.current?.showToast({
        hasNoTimeout: true,
        text: 'Second',
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
      hasNoTimeout: true,
      text: 'First',
    });

    // Call showToast twice without letting the replacement timer fire.
    await act(async () => {
      toastRef.current?.showToast({
        hasNoTimeout: true,
        text: 'Second',
      });
      // Don't run timers — call showToast again while the replacement timer is pending.
      toastRef.current?.showToast({
        hasNoTimeout: true,
        text: 'Third',
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
      hasNoTimeout: true,
      text: 'First',
    });

    // Call showToast to schedule a replacement, then closeToast before it fires.
    await act(async () => {
      toastRef.current?.showToast({
        hasNoTimeout: true,
        text: 'Replacement',
      });
      // Close before the replacement timer fires.
      toastRef.current?.closeToast();
      jest.runAllTimers();
    });
    // The replacement toast should NOT appear after close.
    expect(screen.queryByText('Replacement')).toBeNull();
  });
});

describe('specs for `Toast` static API', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('method `Toast.show` displays a toast once <Toast /> is mounted', async () => {
    render(<Toast />);

    await act(async () => {
      Toast.show({
        hasNoTimeout: true,
        text: 'Static show',
      });
      jest.runAllTimers();
    });

    expect(screen.getByText('Static show')).toBeDefined();
  });

  it('method `Toast.hide` dismisses the current toast', async () => {
    render(<Toast />);

    await act(async () => {
      Toast.show({
        hasNoTimeout: true,
        text: 'Will be hidden',
      });
      jest.runAllTimers();
    });
    expect(screen.getByText('Will be hidden')).toBeDefined();

    await act(async () => {
      Toast.hide();
    });
    expect(screen.queryByText('Will be hidden')).toBeNull();
  });

  it('method `Toast.show` throws a helpful error when <Toast /> is not mounted', () => {
    expect(() =>
      Toast.show({
        hasNoTimeout: true,
        text: 'No mount',
      }),
    ).toThrow(/Toast.show\(\) called before <Toast \/> mounted/u);
  });

  it('method `Toast.hide` throws a helpful error when <Toast /> is not mounted', () => {
    expect(() => Toast.hide()).toThrow(
      /Toast.hide\(\) called before <Toast \/> mounted/u,
    );
  });

  it('unregisters the global ref when <Toast /> unmounts', () => {
    const { unmount } = render(<Toast />);
    unmount();

    expect(() =>
      Toast.show({
        hasNoTimeout: true,
        text: 'After unmount',
      }),
    ).toThrow(/Toast.show\(\) called before <Toast \/> mounted/u);
  });

  it('method `Toast.show` replaces the existing toast on rapid successive calls', async () => {
    render(<Toast />);

    await act(async () => {
      Toast.show({
        hasNoTimeout: true,
        text: 'First static',
      });
      jest.runAllTimers();
    });
    expect(screen.getByText('First static')).toBeDefined();

    await act(async () => {
      Toast.show({
        hasNoTimeout: true,
        text: 'Second static',
      });
      jest.runAllTimers();
    });

    expect(screen.getByText('Second static')).toBeDefined();
    expect(screen.queryByText('First static')).toBeNull();
    expect(mockCancelAnimation).toHaveBeenCalled();
  });

  it('last mounted <Toast /> wins and earlier unmount does not clear it', async () => {
    const first = render(<Toast />);
    render(<Toast />);

    first.unmount();

    await act(async () => {
      Toast.show({
        hasNoTimeout: true,
        text: 'Second instance still registered',
      });
      jest.runAllTimers();
    });

    expect(screen.getByText('Second instance still registered')).toBeDefined();
  });

  it('forwarded ref and static API both drive the same instance', async () => {
    const ref = createRef<ToastRef>();
    render(<Toast ref={ref} />);

    await act(async () => {
      Toast.show({
        hasNoTimeout: true,
        text: 'From static',
      });
      jest.runAllTimers();
    });
    expect(screen.getByText('From static')).toBeDefined();

    await act(async () => {
      ref.current?.closeToast();
    });
    expect(screen.queryByText('From static')).toBeNull();
  });

  it('registers the static API before sibling passive effects run', async () => {
    const MountEffectCaller = () => {
      useEffect(() => {
        Toast.show({
          hasNoTimeout: true,
          text: 'Shown from sibling effect',
        });
      }, []);

      return null;
    };

    render(
      <>
        <MountEffectCaller />
        <Toast />
      </>,
    );

    await act(async () => {
      jest.runAllTimers();
    });

    expect(screen.getByText('Shown from sibling effect')).toBeDefined();
  });
});
