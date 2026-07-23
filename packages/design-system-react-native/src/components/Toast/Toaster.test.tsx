import { useTailwind } from '@metamask/design-system-twrnc-preset';
import {
  render,
  screen,
  act,
  fireEvent,
  renderHook,
} from '@testing-library/react-native';
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
      title: 'Test Label',
    });
    expect(screen.getByTestId('custom-toast')).toBeDefined();
  });

  it('displays toast text when showToast is called', async () => {
    render(<Toaster ref={toasterRef} />);
    await showToastAndWait(toasterRef, {
      hasNoTimeout: true,
      title: 'Test Label',
    });
    expect(screen.getByText('Test Label')).toBeDefined();
  });

  it('displays toast with description when provided', async () => {
    render(<Toaster ref={toasterRef} />);
    await showToastAndWait(toasterRef, {
      description: 'Test description',
      hasNoTimeout: true,
      title: 'Test Label',
    });
    expect(screen.getByText('Test Label')).toBeDefined();
    expect(screen.getByText('Test description')).toBeDefined();
  });

  it('hides toast when closeToast is called', async () => {
    render(<Toaster ref={toasterRef} />);

    await showToastAndWait(toasterRef, {
      hasNoTimeout: true,
      title: 'Test Label',
    });
    expect(screen.getByText('Test Label')).toBeDefined();

    await act(async () => {
      toasterRef.current?.closeToast();
    });
    expect(screen.queryByText('Test Label')).toBeNull();
  });

  it('accepts topOffset option and hides on close', async () => {
    render(<Toaster ref={toasterRef} />);

    await showToastAndWait(toasterRef, {
      hasNoTimeout: true,
      title: 'Offset toast',
      topOffset: 24,
    });
    expect(screen.getByText('Offset toast')).toBeDefined();

    await act(async () => {
      toasterRef.current?.closeToast();
    });
    expect(screen.queryByText('Offset toast')).toBeNull();
  });

  it('does not render a severity icon by default', async () => {
    render(<Toaster ref={toasterRef} />);
    await showToastAndWait(toasterRef, {
      hasNoTimeout: true,
      title: 'Default toast',
    });
    expect(screen.queryByTestId('icon-Info')).toBeNull();
  });

  it('does not render a severity icon when severity is default', async () => {
    render(<Toaster ref={toasterRef} />);
    await showToastAndWait(toasterRef, {
      hasNoTimeout: true,
      severity: ToastSeverity.Default,
      title: 'Default severity toast',
    });
    expect(screen.queryByTestId('icon-Info')).toBeNull();
  });

  it('renders the configured severity icon when provided', async () => {
    render(<Toaster ref={toasterRef} />);
    await showToastAndWait(toasterRef, {
      hasNoTimeout: true,
      severity: ToastSeverity.Success,
      title: 'Success toast',
    });
    expect(screen.getByTestId('icon-Confirmation')).toBeDefined();
  });

  it('renders startAccessory instead of the severity icon when provided', async () => {
    render(<Toaster ref={toasterRef} />);
    await showToastAndWait(toasterRef, {
      hasNoTimeout: true,
      startAccessory: <RNText testID="custom-accessory">Custom</RNText>,
      title: 'Custom accessory',
    });
    expect(screen.getByTestId('custom-accessory')).toBeDefined();
    expect(screen.queryByTestId('icon-Info')).toBeNull();
  });

  it('renders an action button when actionButtonLabel and actionButtonOnPress are provided', async () => {
    const onActionPress = jest.fn();
    render(<Toaster ref={toasterRef} />);
    await showToastAndWait(toasterRef, {
      actionButtonLabel: 'Click here',
      hasNoTimeout: true,
      actionButtonOnPress: onActionPress,
      title: 'With action',
    });
    const actionButton = screen.getByText('Click here');
    expect(actionButton).toBeDefined();

    await act(async () => {
      fireEvent.press(actionButton);
    });
    expect(onActionPress).toHaveBeenCalled();
  });

  it('calls onClose and hides the toast when the close button is pressed on an action toast', async () => {
    const onClose = jest.fn();
    render(<Toaster ref={toasterRef} />);
    await showToastAndWait(toasterRef, {
      actionButtonLabel: 'Retry',
      actionButtonOnPress: jest.fn(),
      hasNoTimeout: true,
      onClose,
      title: 'Action toast',
    });

    const closeBtn = screen.getByTestId('button-icon');
    await act(async () => {
      fireEvent.press(closeBtn);
    });

    expect(onClose).toHaveBeenCalled();
    expect(screen.queryByText('Action toast')).toBeNull();
  });

  it('replaces existing toast when showToast called rapidly', async () => {
    render(<Toaster ref={toasterRef} />);

    await showToastAndWait(toasterRef, {
      hasNoTimeout: true,
      title: 'First toast',
    });
    expect(screen.getByText('First toast')).toBeDefined();

    await act(async () => {
      toasterRef.current?.showToast({
        hasNoTimeout: false,
        title: 'Second toast',
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
      title: 'Layout toast',
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
      title: 'Auto-dismiss toast',
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

  it('defaults hasNoTimeout to false when omitted', async () => {
    render(<Toaster ref={toasterRef} testID="toast-root" />);
    await showToastAndWait(toasterRef, {
      title: 'Default auto-dismiss toast',
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

    expect(screen.queryByText('Default auto-dismiss toast')).toBeNull();
  });

  it('preserves per-toast twClassName while applying Toaster twClassName', async () => {
    const tw = renderHook(() => useTailwind()).result.current;

    render(<Toaster ref={toasterRef} twClassName="mx-2" />);
    await showToastAndWait(toasterRef, {
      testID: 'toast-surface',
      title: 'Styled toast',
      twClassName: 'my-1',
    });

    expect(screen.getByTestId('toast-surface')).toHaveStyle(tw.style('mx-2'));
    expect(screen.getByTestId('toast-surface')).toHaveStyle(tw.style('my-1'));
  });

  it('calls onClose and hides the toast when the close button is pressed', async () => {
    const onClose = jest.fn();
    render(<Toaster ref={toasterRef} />);
    await showToastAndWait(toasterRef, {
      closeButtonProps: {
        accessibilityLabel: 'Dismiss toast',
        testID: 'dismiss-toast-button',
      },
      hasNoTimeout: true,
      onClose,
      title: 'Close button test',
    });

    const closeBtn = screen.getByTestId('dismiss-toast-button');
    await act(async () => {
      fireEvent.press(closeBtn);
    });

    expect(onClose).toHaveBeenCalled();
    expect(screen.queryByText('Close button test')).toBeNull();
  });

  it('cancels animation when replacing toast with hasNoTimeout false', async () => {
    render(<Toaster ref={toasterRef} />);

    await showToastAndWait(toasterRef, {
      hasNoTimeout: true,
      title: 'Persistent toast',
    });

    await act(async () => {
      toasterRef.current?.showToast({
        hasNoTimeout: false,
        title: 'Replacement',
      });
      jest.runAllTimers();
    });
    expect(mockCancelAnimation).toHaveBeenCalled();
  });

  it('cancels animation when replacing toast even with hasNoTimeout true', async () => {
    render(<Toaster ref={toasterRef} />);

    await showToastAndWait(toasterRef, {
      hasNoTimeout: true,
      title: 'First',
    });

    await act(async () => {
      toasterRef.current?.showToast({
        hasNoTimeout: true,
        title: 'Second',
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
      title: 'First',
    });

    await act(async () => {
      toasterRef.current?.showToast({
        hasNoTimeout: true,
        title: 'Second',
      });
      toasterRef.current?.showToast({
        hasNoTimeout: true,
        title: 'Third',
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
      title: 'First',
    });

    await act(async () => {
      toasterRef.current?.showToast({
        hasNoTimeout: true,
        title: 'Replacement',
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
        title: 'Static show',
      });
      jest.runAllTimers();
    });

    expect(screen.getByText('Static show')).toBeDefined();
  });

  it('method `toast.dismiss` also dismisses the current toast', async () => {
    render(<Toaster />);

    await act(async () => {
      toast({
        hasNoTimeout: true,
        title: 'Will be dismissed',
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
        title: 'No mount',
      }),
    ).toThrow(/toast\(\) called before <Toaster \/> mounted/u);
  });

  it('method `toast.dismiss` throws a helpful error when <Toaster /> is not mounted', () => {
    expect(() => toast.dismiss()).toThrow(
      /toast.dismiss\(\) called before <Toaster \/> mounted/u,
    );
  });

  it('unregisters the global ref when <Toaster /> unmounts', () => {
    const { unmount } = render(<Toaster />);
    unmount();

    expect(() =>
      toast({
        hasNoTimeout: true,
        title: 'After unmount',
      }),
    ).toThrow(/toast\(\) called before <Toaster \/> mounted/u);
  });

  it('calling `toast(...)` replaces the existing toast on rapid successive calls', async () => {
    render(<Toaster />);

    await act(async () => {
      toast({
        hasNoTimeout: true,
        title: 'First static',
      });
      jest.runAllTimers();
    });
    expect(screen.getByText('First static')).toBeDefined();

    await act(async () => {
      toast({
        hasNoTimeout: true,
        title: 'Second static',
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
        title: 'Second instance still registered',
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
        title: 'From static',
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
          title: 'Shown from sibling effect',
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
