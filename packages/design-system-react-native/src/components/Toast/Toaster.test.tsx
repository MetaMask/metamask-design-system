// Third party dependencies.
import { render, screen, act, fireEvent } from '@testing-library/react-native';
import React, { createRef, useEffect } from 'react';
import { Text as RNText } from 'react-native';

// Internal dependencies.
import type { ToastOptions, ToasterRef } from './Toast.types';
import { ToastSeverity } from './Toast.types';
import { Toaster, toast } from './Toaster';

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

const showToastAndWait = async (
  toasterRef: React.RefObject<ToasterRef>,
  options: ToastOptions,
) => {
  await act(async () => {
    toasterRef.current?.showToast(options);
    jest.runAllTimers();
  });
};

describe('Toaster', () => {
  let toasterRef: React.RefObject<ToasterRef>;

  beforeEach(() => {
    toasterRef = createRef<ToasterRef>();
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.useRealTimers();
  });

  it('renders null with default state', () => {
    const { toJSON } = render(<Toaster ref={toasterRef} />);
    expect(toJSON()).toBeNull();
  });

  it('accepts testID on the root element via ViewProps', async () => {
    render(<Toaster ref={toasterRef} testID="custom-toast" />);
    await showToastAndWait(toasterRef, {
      hasNoTimeout: true,
      text: 'Test Label',
    });
    expect(screen.getByTestId('custom-toast')).toBeDefined();
  });

  it('displays toast text when showToast is called', async () => {
    render(<Toaster ref={toasterRef} />);
    await showToastAndWait(toasterRef, {
      hasNoTimeout: true,
      text: 'Test Label',
    });
    expect(screen.getByText('Test Label')).toBeDefined();
  });

  it('displays toast with description when provided', async () => {
    render(<Toaster ref={toasterRef} />);
    await showToastAndWait(toasterRef, {
      description: 'Test description',
      hasNoTimeout: true,
      text: 'Test Label',
    });
    expect(screen.getByText('Test Label')).toBeDefined();
    expect(screen.getByText('Test description')).toBeDefined();
  });

  it('hides toast when closeToast is called', async () => {
    render(<Toaster ref={toasterRef} />);

    await showToastAndWait(toasterRef, {
      hasNoTimeout: true,
      text: 'Test Label',
    });
    expect(screen.getByText('Test Label')).toBeDefined();

    await act(async () => {
      toasterRef.current?.closeToast();
    });
    expect(screen.queryByText('Test Label')).toBeNull();
  });

  it('renders the default severity icon when no custom accessory is provided', async () => {
    render(<Toaster ref={toasterRef} />);
    await showToastAndWait(toasterRef, {
      hasNoTimeout: true,
      text: 'Default toast',
    });
    expect(screen.getByTestId('icon-FullCircle')).toBeDefined();
  });

  it('renders the configured severity icon when provided', async () => {
    render(<Toaster ref={toasterRef} />);
    await showToastAndWait(toasterRef, {
      hasNoTimeout: true,
      severity: ToastSeverity.Success,
      text: 'Success toast',
    });
    expect(screen.getByTestId('icon-Confirmation')).toBeDefined();
  });

  it('renders startAccessory instead of the severity icon when provided', async () => {
    render(<Toaster ref={toasterRef} />);
    await showToastAndWait(toasterRef, {
      hasNoTimeout: true,
      startAccessory: <RNText testID="custom-accessory">Custom</RNText>,
      text: 'Custom accessory',
    });
    expect(screen.getByTestId('custom-accessory')).toBeDefined();
    expect(screen.queryByTestId('icon-FullCircle')).toBeNull();
  });

  it('renders an action button when actionText and onActionPress are provided', async () => {
    const onActionPress = jest.fn();
    render(<Toaster ref={toasterRef} />);
    await showToastAndWait(toasterRef, {
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
    render(<Toaster ref={toasterRef} />);

    await showToastAndWait(toasterRef, {
      hasNoTimeout: true,
      text: 'First toast',
    });
    expect(screen.getByText('First toast')).toBeDefined();

    await act(async () => {
      toasterRef.current?.showToast({
        hasNoTimeout: false,
        text: 'Second toast',
      });
      jest.runAllTimers();
    });
    expect(screen.getByText('Second toast')).toBeDefined();
    expect(screen.queryByText('First toast')).toBeNull();
  });

  it('triggers onLayout and animates with hasNoTimeout true', async () => {
    render(<Toaster ref={toasterRef} testID="toast-root" />);
    await showToastAndWait(toasterRef, {
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
    render(<Toaster ref={toasterRef} testID="toast-root" />);
    await showToastAndWait(toasterRef, {
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
    await act(async () => {
      jest.runAllTimers();
    });
  });

  it('calls onClose and hides the toast when the close button is pressed', async () => {
    const onClose = jest.fn();
    const onCloseButtonPress = jest.fn();
    render(<Toaster ref={toasterRef} />);
    await showToastAndWait(toasterRef, {
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
    render(<Toaster ref={toasterRef} />);

    await showToastAndWait(toasterRef, {
      hasNoTimeout: true,
      text: 'Persistent toast',
    });

    await act(async () => {
      toasterRef.current?.showToast({
        hasNoTimeout: false,
        text: 'Replacement',
      });
      jest.runAllTimers();
    });
    expect(mockCancelAnimation).toHaveBeenCalled();
  });

  it('cancels animation when replacing toast even with hasNoTimeout true', async () => {
    render(<Toaster ref={toasterRef} />);

    await showToastAndWait(toasterRef, {
      hasNoTimeout: true,
      text: 'First',
    });

    await act(async () => {
      toasterRef.current?.showToast({
        hasNoTimeout: true,
        text: 'Second',
      });
      jest.runAllTimers();
    });
    expect(mockCancelAnimation).toHaveBeenCalled();
    expect(screen.getByText('Second')).toBeDefined();
  });

  it('clears pending replacement timer when showToast is called again rapidly', async () => {
    render(<Toaster ref={toasterRef} />);

    await showToastAndWait(toasterRef, {
      hasNoTimeout: true,
      text: 'First',
    });

    await act(async () => {
      toasterRef.current?.showToast({
        hasNoTimeout: true,
        text: 'Second',
      });
      toasterRef.current?.showToast({
        hasNoTimeout: true,
        text: 'Third',
      });
      jest.runAllTimers();
    });
    expect(screen.getByText('Third')).toBeDefined();
    expect(screen.queryByText('Second')).toBeNull();
  });

  it('clears pending replacement timer when closeToast is called', async () => {
    render(<Toaster ref={toasterRef} />);

    await showToastAndWait(toasterRef, {
      hasNoTimeout: true,
      text: 'First',
    });

    await act(async () => {
      toasterRef.current?.showToast({
        hasNoTimeout: true,
        text: 'Replacement',
      });
      toasterRef.current?.closeToast();
      jest.runAllTimers();
    });
    expect(screen.queryByText('Replacement')).toBeNull();
  });
});

describe('specs for `toast` API', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('calling `toast(...)` displays a toast once <Toaster /> is mounted', async () => {
    render(<Toaster />);

    await act(async () => {
      toast({
        hasNoTimeout: true,
        text: 'Static show',
      });
      jest.runAllTimers();
    });

    expect(screen.getByText('Static show')).toBeDefined();
  });

  it('method `toast.hide` dismisses the current toast', async () => {
    render(<Toaster />);

    await act(async () => {
      toast({
        hasNoTimeout: true,
        text: 'Will be hidden',
      });
      jest.runAllTimers();
    });
    expect(screen.getByText('Will be hidden')).toBeDefined();

    await act(async () => {
      toast.hide();
    });
    expect(screen.queryByText('Will be hidden')).toBeNull();
  });

  it('method `toast.dismiss` also dismisses the current toast', async () => {
    render(<Toaster />);

    await act(async () => {
      toast({
        hasNoTimeout: true,
        text: 'Will be dismissed',
      });
      jest.runAllTimers();
    });
    expect(screen.getByText('Will be dismissed')).toBeDefined();

    await act(async () => {
      toast.dismiss();
    });
    expect(screen.queryByText('Will be dismissed')).toBeNull();
  });

  it('calling `toast(...)` throws a helpful error when <Toaster /> is not mounted', () => {
    expect(() =>
      toast({
        hasNoTimeout: true,
        text: 'No mount',
      }),
    ).toThrow(/toast\(\) called before <Toaster \/> mounted/u);
  });

  it('method `toast.hide` throws a helpful error when <Toaster /> is not mounted', () => {
    expect(() => toast.hide()).toThrow(
      /toast.hide\(\) called before <Toaster \/> mounted/u,
    );
  });

  it('unregisters the global ref when <Toaster /> unmounts', () => {
    const { unmount } = render(<Toaster />);
    unmount();

    expect(() =>
      toast({
        hasNoTimeout: true,
        text: 'After unmount',
      }),
    ).toThrow(/toast\(\) called before <Toaster \/> mounted/u);
  });

  it('method `toast.show` replaces the existing toast on rapid successive calls', async () => {
    render(<Toaster />);

    await act(async () => {
      toast.show({
        hasNoTimeout: true,
        text: 'First static',
      });
      jest.runAllTimers();
    });
    expect(screen.getByText('First static')).toBeDefined();

    await act(async () => {
      toast.show({
        hasNoTimeout: true,
        text: 'Second static',
      });
      jest.runAllTimers();
    });

    expect(screen.getByText('Second static')).toBeDefined();
    expect(screen.queryByText('First static')).toBeNull();
    expect(mockCancelAnimation).toHaveBeenCalled();
  });

  it('last mounted <Toaster /> wins and earlier unmount does not clear it', async () => {
    const first = render(<Toaster />);
    render(<Toaster />);

    first.unmount();

    await act(async () => {
      toast({
        hasNoTimeout: true,
        text: 'Second instance still registered',
      });
      jest.runAllTimers();
    });

    expect(screen.getByText('Second instance still registered')).toBeDefined();
  });

  it('forwarded ref and imperative toast API both drive the same instance', async () => {
    const ref = createRef<ToasterRef>();
    render(<Toaster ref={ref} />);

    await act(async () => {
      toast({
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

  it('registers the toast API before sibling passive effects run', async () => {
    const MountEffectCaller = () => {
      useEffect(() => {
        toast({
          hasNoTimeout: true,
          text: 'Shown from sibling effect',
        });
      }, []);

      return null;
    };

    render(
      <>
        <MountEffectCaller />
        <Toaster />
      </>,
    );

    await act(async () => {
      jest.runAllTimers();
    });

    expect(screen.getByText('Shown from sibling effect')).toBeDefined();
  });
});
