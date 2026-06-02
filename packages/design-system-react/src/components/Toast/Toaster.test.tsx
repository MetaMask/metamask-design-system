import { ToastSeverity } from '@metamask/design-system-shared';
import { act, fireEvent, render, screen } from '@testing-library/react';
import React, { createRef, useEffect } from 'react';

import {
  TOAST_ANIMATION_DURATION,
  TOAST_VISIBILITY_DURATION,
} from './Toast.constants';
import type { ToastOptions, ToasterRef } from './Toast.types';
import { Toaster, toast } from './Toaster';

jest.mock('../Icon', () => ({
  ...jest.requireActual('../Icon'),
  Icon: ({
    name,
    'data-testid': testId,
  }: {
    name: string;
    'data-testid'?: string;
  }) => <span data-testid={testId ?? `icon-${name}`}>{name}</span>,
}));

const showToastAndFlush = async (
  toasterRef: React.RefObject<ToasterRef | null>,
  options: ToastOptions,
) => {
  await act(async () => {
    toasterRef.current?.showToast(options);
    jest.runAllTimers();
  });
  // Flush rAF-based visibility update.
  await act(async () => {
    jest.runAllTimers();
  });
};

describe('Toaster', () => {
  let toasterRef: React.RefObject<ToasterRef | null>;

  beforeEach(() => {
    toasterRef = createRef<ToasterRef>();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.useRealTimers();
  });

  it('renders null by default', () => {
    const { container } = render(<Toaster ref={toasterRef} />);
    expect(container.firstChild).toBeNull();
  });

  it('displays toast when showToast is called', async () => {
    render(<Toaster ref={toasterRef} />);

    await showToastAndFlush(toasterRef, {
      hasNoTimeout: true,
      title: 'Hello toast',
    });

    expect(screen.getByText('Hello toast')).toBeInTheDocument();
  });

  it('displays title and description', async () => {
    render(<Toaster ref={toasterRef} />);

    await showToastAndFlush(toasterRef, {
      description: 'More context',
      hasNoTimeout: true,
      title: 'Heads up',
    });

    expect(screen.getByText('Heads up')).toBeInTheDocument();
    expect(screen.getByText('More context')).toBeInTheDocument();
  });

  it('hides toast when closeToast is called', async () => {
    render(<Toaster ref={toasterRef} />);

    await showToastAndFlush(toasterRef, {
      hasNoTimeout: true,
      title: 'Persistent toast',
    });

    await act(async () => {
      toasterRef.current?.closeToast();
      jest.advanceTimersByTime(TOAST_ANIMATION_DURATION);
    });

    expect(screen.queryByText('Persistent toast')).not.toBeInTheDocument();
  });

  it('auto-dismisses after TOAST_VISIBILITY_DURATION', async () => {
    render(<Toaster ref={toasterRef} />);

    await showToastAndFlush(toasterRef, {
      hasNoTimeout: false,
      title: 'Auto-dismiss',
    });

    expect(screen.getByText('Auto-dismiss')).toBeInTheDocument();

    await act(async () => {
      jest.advanceTimersByTime(
        TOAST_VISIBILITY_DURATION + TOAST_ANIMATION_DURATION,
      );
    });

    expect(screen.queryByText('Auto-dismiss')).not.toBeInTheDocument();
  });

  it('defaults hasNoTimeout to false', async () => {
    render(<Toaster ref={toasterRef} />);

    await showToastAndFlush(toasterRef, { title: 'Auto-dismiss default' });

    await act(async () => {
      jest.advanceTimersByTime(
        TOAST_VISIBILITY_DURATION + TOAST_ANIMATION_DURATION,
      );
    });

    expect(screen.queryByText('Auto-dismiss default')).not.toBeInTheDocument();
  });

  it('stays visible when hasNoTimeout is true', async () => {
    render(<Toaster ref={toasterRef} />);

    await showToastAndFlush(toasterRef, {
      hasNoTimeout: true,
      title: 'Sticky toast',
    });

    await act(async () => {
      jest.advanceTimersByTime(TOAST_VISIBILITY_DURATION + 1000);
    });

    expect(screen.getByText('Sticky toast')).toBeInTheDocument();
  });

  it('does not render a severity icon when severity is Default', async () => {
    render(<Toaster ref={toasterRef} />);

    await showToastAndFlush(toasterRef, {
      hasNoTimeout: true,
      severity: ToastSeverity.Default,
      title: 'Default severity',
    });

    expect(screen.queryByTestId('icon')).not.toBeInTheDocument();
  });

  it('renders success severity icon', async () => {
    render(<Toaster ref={toasterRef} />);

    await showToastAndFlush(toasterRef, {
      hasNoTimeout: true,
      severity: ToastSeverity.Success,
      title: 'Success',
    });

    expect(screen.getByTestId('icon-Confirmation')).toBeInTheDocument();
  });

  it('renders startAccessory instead of severity icon', async () => {
    render(<Toaster ref={toasterRef} />);

    await showToastAndFlush(toasterRef, {
      hasNoTimeout: true,
      startAccessory: <span data-testid="custom-icon">Custom</span>,
      title: 'Custom accessory',
    });

    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('icon-Confirmation')).not.toBeInTheDocument();
  });

  it('renders action button and calls handler when clicked', async () => {
    const onActionClick = jest.fn();
    render(<Toaster ref={toasterRef} />);

    await showToastAndFlush(toasterRef, {
      actionButtonLabel: 'Retry',
      actionButtonOnClick: onActionClick,
      hasNoTimeout: true,
      title: 'Action toast',
    });

    fireEvent.click(screen.getByText('Retry'));
    expect(onActionClick).toHaveBeenCalledTimes(1);
  });

  it('calls onClose and hides toast when close button is clicked', async () => {
    const onClose = jest.fn();
    render(<Toaster ref={toasterRef} />);

    await showToastAndFlush(toasterRef, {
      hasNoTimeout: true,
      onClose,
      title: 'Closeable',
    });

    fireEvent.click(screen.getByRole('button', { name: /close toast/iu }));

    expect(onClose).toHaveBeenCalledTimes(1);

    await act(async () => {
      jest.advanceTimersByTime(TOAST_ANIMATION_DURATION);
    });

    expect(screen.queryByText('Closeable')).not.toBeInTheDocument();
  });

  it('replaces existing toast when showToast is called again', async () => {
    render(<Toaster ref={toasterRef} />);

    await showToastAndFlush(toasterRef, {
      hasNoTimeout: true,
      title: 'First toast',
    });

    expect(screen.getByText('First toast')).toBeInTheDocument();

    await act(async () => {
      toasterRef.current?.showToast({
        hasNoTimeout: true,
        title: 'Second toast',
      });
      jest.advanceTimersByTime(TOAST_ANIMATION_DURATION);
    });
    await act(async () => {
      jest.runAllTimers();
    });

    expect(screen.getByText('Second toast')).toBeInTheDocument();
    expect(screen.queryByText('First toast')).not.toBeInTheDocument();
  });

  it('last rapid showToast call wins', async () => {
    render(<Toaster ref={toasterRef} />);

    await showToastAndFlush(toasterRef, {
      hasNoTimeout: true,
      title: 'First',
    });

    await act(async () => {
      toasterRef.current?.showToast({ hasNoTimeout: true, title: 'Second' });
      toasterRef.current?.showToast({ hasNoTimeout: true, title: 'Third' });
      jest.runAllTimers();
    });
    await act(async () => {
      jest.runAllTimers();
    });

    expect(screen.getByText('Third')).toBeInTheDocument();
    expect(screen.queryByText('Second')).not.toBeInTheDocument();
  });

  it('clears a pending replacement timer when showToast is called again before mount', async () => {
    render(<Toaster ref={toasterRef} />);

    await act(async () => {
      toasterRef.current?.showToast({
        hasNoTimeout: true,
        title: 'First',
      });
      toasterRef.current?.showToast({
        hasNoTimeout: true,
        title: 'Second',
      });
      jest.runAllTimers();
    });

    expect(screen.getByText('Second')).toBeInTheDocument();
    expect(screen.queryByText('First')).not.toBeInTheDocument();
  });

  it('clears auto-dismiss timer when closeToast is called before it fires', async () => {
    render(<Toaster ref={toasterRef} />);

    await showToastAndFlush(toasterRef, {
      hasNoTimeout: false,
      title: 'Will be manually closed',
    });

    // Toast is visible with auto-dismiss timer running; close it manually.
    await act(async () => {
      toasterRef.current?.closeToast();
      jest.advanceTimersByTime(TOAST_ANIMATION_DURATION);
    });

    // Auto-dismiss should not fire after manual close.
    await act(async () => {
      jest.advanceTimersByTime(TOAST_VISIBILITY_DURATION);
    });

    expect(
      screen.queryByText('Will be manually closed'),
    ).not.toBeInTheDocument();
  });

  it('clears a pending replacement timer when closeToast is called before mount', async () => {
    render(<Toaster ref={toasterRef} />);

    await act(async () => {
      toasterRef.current?.showToast({
        hasNoTimeout: true,
        title: 'Will be cancelled',
      });
      toasterRef.current?.closeToast();
      jest.runAllTimers();
    });

    expect(screen.queryByText('Will be cancelled')).not.toBeInTheDocument();
  });

  it('clears auto-dismiss timer when showToast replaces a visible toast', async () => {
    render(<Toaster ref={toasterRef} />);

    await showToastAndFlush(toasterRef, {
      hasNoTimeout: false,
      title: 'First toast',
    });

    // While auto-dismiss timer is pending, replace with a new toast.
    await act(async () => {
      toasterRef.current?.showToast({
        hasNoTimeout: true,
        title: 'Replacement toast',
      });
      jest.advanceTimersByTime(TOAST_ANIMATION_DURATION);
    });
    await act(async () => {
      jest.runAllTimers();
    });

    // Replacement should be visible and not auto-dismissed.
    expect(screen.getByText('Replacement toast')).toBeInTheDocument();

    await act(async () => {
      jest.advanceTimersByTime(TOAST_VISIBILITY_DURATION);
    });

    expect(screen.getByText('Replacement toast')).toBeInTheDocument();
  });

  it.each([
    {
      name: 'clears the auto-dismiss timer on unmount',
      setup: async () => {
        await showToastAndFlush(toasterRef, {
          hasNoTimeout: false,
          title: 'Will be unmounted',
        });
      },
    },
    {
      name: 'clears the pending mount timer on unmount before the toast is shown',
      setup: async () => {
        await act(async () => {
          toasterRef.current?.showToast({
            hasNoTimeout: true,
            title: 'Pending mount',
          });
        });
      },
    },
    {
      name: 'clears the pending exit timer on unmount when replacing a visible toast',
      setup: async () => {
        await showToastAndFlush(toasterRef, {
          hasNoTimeout: true,
          title: 'Visible toast',
        });

        await act(async () => {
          toasterRef.current?.showToast({
            hasNoTimeout: true,
            title: 'Replacement toast',
          });
        });
      },
    },
  ])('$name', async ({ setup }) => {
    const { unmount } = render(<Toaster ref={toasterRef} />);
    const clearTimeoutSpy = jest.spyOn(global, 'clearTimeout');

    await setup();

    const clearTimeoutCallsBeforeUnmount = clearTimeoutSpy.mock.calls.length;

    unmount();

    expect(clearTimeoutSpy.mock.calls.length).toBeGreaterThan(
      clearTimeoutCallsBeforeUnmount,
    );

    clearTimeoutSpy.mockRestore();
  });

  it('cancels the enter animation frame on unmount while the toast is still entering', async () => {
    const { unmount } = render(<Toaster ref={toasterRef} />);
    const pendingAnimationFrames = new Map<number, FrameRequestCallback>();
    let nextAnimationFrameId = 1;
    const requestAnimationFrameSpy = jest
      .spyOn(global, 'requestAnimationFrame')
      .mockImplementation((callback) => {
        const id = nextAnimationFrameId;
        nextAnimationFrameId += 1;
        pendingAnimationFrames.set(id, callback);
        return id;
      });
    const cancelAnimationFrameSpy = jest
      .spyOn(global, 'cancelAnimationFrame')
      .mockImplementation((id) => {
        pendingAnimationFrames.delete(id);
      });

    await act(async () => {
      toasterRef.current?.showToast({
        hasNoTimeout: true,
        title: 'Entering',
      });
      jest.runOnlyPendingTimers();
    });

    expect(pendingAnimationFrames.size).toBe(1);

    unmount();

    expect(screen.queryByText('Entering')).not.toBeInTheDocument();
    expect(cancelAnimationFrameSpy).toHaveBeenCalled();
    expect(pendingAnimationFrames.size).toBe(0);

    requestAnimationFrameSpy.mockRestore();
    cancelAnimationFrameSpy.mockRestore();
  });

  it('clears the auto-dismiss timer on unmount after the toast becomes visible', async () => {
    const { unmount } = render(<Toaster ref={toasterRef} />);
    const clearTimeoutSpy = jest.spyOn(global, 'clearTimeout');
    const pendingAnimationFrames = new Map<number, FrameRequestCallback>();
    let nextAnimationFrameId = 1;
    const requestAnimationFrameSpy = jest
      .spyOn(global, 'requestAnimationFrame')
      .mockImplementation((callback) => {
        const id = nextAnimationFrameId;
        nextAnimationFrameId += 1;
        pendingAnimationFrames.set(id, callback);
        return id;
      });
    const cancelAnimationFrameSpy = jest
      .spyOn(global, 'cancelAnimationFrame')
      .mockImplementation((id) => {
        pendingAnimationFrames.delete(id);
      });
    const flushNextAnimationFrame = () => {
      const next = pendingAnimationFrames.entries().next();
      if (next.done) {
        throw new Error('Expected a pending animation frame');
      }

      const [id, callback] = next.value;
      pendingAnimationFrames.delete(id);
      callback(0);
    };

    await act(async () => {
      toasterRef.current?.showToast({
        hasNoTimeout: false,
        title: 'Auto-dismiss cleanup',
      });
      jest.runOnlyPendingTimers();
    });

    await act(async () => {
      flushNextAnimationFrame();
    });

    await act(async () => {
      flushNextAnimationFrame();
    });

    expect(screen.getByText('Auto-dismiss cleanup')).toBeInTheDocument();
    expect(pendingAnimationFrames.size).toBe(0);

    const clearTimeoutCallsBeforeUnmount = clearTimeoutSpy.mock.calls.length;

    unmount();

    expect(clearTimeoutSpy.mock.calls.length).toBeGreaterThan(
      clearTimeoutCallsBeforeUnmount,
    );

    requestAnimationFrameSpy.mockRestore();
    cancelAnimationFrameSpy.mockRestore();
    clearTimeoutSpy.mockRestore();
  });

  it('cancels pending replacement when closeToast is called', async () => {
    render(<Toaster ref={toasterRef} />);

    await showToastAndFlush(toasterRef, {
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

    expect(screen.queryByText('Replacement')).not.toBeInTheDocument();
  });

  it('applies className to the outer container', async () => {
    render(<Toaster ref={toasterRef} className="mx-2" />);

    await showToastAndFlush(toasterRef, {
      hasNoTimeout: true,
      title: 'Styled container',
    });

    // The outer wrapper has the class
    const container = screen.getByRole('status');
    expect(container).toHaveClass('mx-2');
  });

  it('forwards extra props to the outer container', async () => {
    render(<Toaster ref={toasterRef} data-testid="toaster-root" />);

    await showToastAndFlush(toasterRef, {
      hasNoTimeout: true,
      title: 'Props test',
    });

    expect(screen.getByTestId('toaster-root')).toBeInTheDocument();
  });
});

describe('toast() imperative API', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.useRealTimers();
  });

  it('displays toast after <Toaster /> is mounted', async () => {
    render(<Toaster />);

    await act(async () => {
      toast({ hasNoTimeout: true, title: 'Imperative toast' });
      jest.runAllTimers();
    });
    await act(async () => {
      jest.runAllTimers();
    });

    expect(screen.getByText('Imperative toast')).toBeInTheDocument();
  });

  it('toast.dismiss hides the current toast', async () => {
    render(<Toaster />);

    await act(async () => {
      toast({ hasNoTimeout: true, title: 'Will be dismissed' });
      jest.runAllTimers();
    });
    await act(async () => {
      jest.runAllTimers();
    });

    expect(screen.getByText('Will be dismissed')).toBeInTheDocument();

    await act(async () => {
      toast.dismiss();
      jest.advanceTimersByTime(TOAST_ANIMATION_DURATION);
    });

    expect(screen.queryByText('Will be dismissed')).not.toBeInTheDocument();
  });

  it('throws a helpful error when toast() is called before <Toaster /> mounts', () => {
    expect(() => toast({ hasNoTimeout: true, title: 'No mount' })).toThrow(
      /toast\(\) called before <Toaster \/> mounted/u,
    );
  });

  it('throws a helpful error when toast.dismiss() is called before <Toaster /> mounts', () => {
    expect(() => toast.dismiss()).toThrow(
      /toast\.dismiss\(\) called before <Toaster \/> mounted/u,
    );
  });

  it('unregisters the global ref when <Toaster /> unmounts', () => {
    const { unmount } = render(<Toaster />);
    unmount();

    expect(() => toast({ hasNoTimeout: true, title: 'After unmount' })).toThrow(
      /toast\(\) called before <Toaster \/> mounted/u,
    );
  });

  it('registers before sibling passive effects run', async () => {
    const SiblingCaller = () => {
      useEffect(() => {
        toast({ hasNoTimeout: true, title: 'From sibling effect' });
      }, []);

      return null;
    };

    render(
      <>
        <SiblingCaller />
        <Toaster />
      </>,
    );

    await act(async () => {
      jest.runAllTimers();
    });
    await act(async () => {
      jest.runAllTimers();
    });

    expect(screen.getByText('From sibling effect')).toBeInTheDocument();
  });

  it('forwarded ref and imperative API drive the same instance', async () => {
    const ref = createRef<ToasterRef | null>();
    render(<Toaster ref={ref} />);

    await act(async () => {
      toast({ hasNoTimeout: true, title: 'From static' });
      jest.runAllTimers();
    });
    await act(async () => {
      jest.runAllTimers();
    });

    expect(screen.getByText('From static')).toBeInTheDocument();

    await act(async () => {
      ref.current?.closeToast();
      jest.advanceTimersByTime(TOAST_ANIMATION_DURATION);
    });

    expect(screen.queryByText('From static')).not.toBeInTheDocument();
  });
});
