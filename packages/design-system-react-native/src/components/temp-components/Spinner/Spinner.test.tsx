import { act, render } from '@testing-library/react-native';
import React from 'react';
import { AccessibilityInfo, Animated } from 'react-native';

import { Spinner } from './Spinner';

type ReduceMotionListener = (reduceMotionEnabled: boolean) => void;

describe('Spinner', () => {
  let reduceMotionListener: ReduceMotionListener | undefined;
  const removeReduceMotionListener = jest.fn();

  const flushReduceMotionRead = () =>
    act(async () => {
      await Promise.resolve();
    });

  const emitReduceMotion = (reduceMotionEnabled: boolean) => {
    act(() => {
      reduceMotionListener?.(reduceMotionEnabled);
    });
  };

  beforeEach(() => {
    reduceMotionListener = undefined;
    removeReduceMotionListener.mockClear();

    jest
      .spyOn(AccessibilityInfo, 'isReduceMotionEnabled')
      .mockResolvedValue(false);
    jest
      .spyOn(AccessibilityInfo, 'addEventListener')
      .mockImplementation((eventName, handler) => {
        if (eventName === 'reduceMotionChanged') {
          reduceMotionListener = handler;
        }

        return { remove: removeReduceMotionListener } as ReturnType<
          typeof AccessibilityInfo.addEventListener
        >;
      });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders the spinner icon', async () => {
    const { getByTestId, queryByText } = render(<Spinner />);
    await flushReduceMotionRead();
    const iconElement = getByTestId('spinner-icon');

    expect(iconElement).toBeDefined();
    expect(queryByText('Loading...')).toBeNull();
  });

  it('renders the loading text when provided', async () => {
    const loadingText = 'Loading...';
    const { getByText } = render(<Spinner loadingText={loadingText} />);
    await flushReduceMotionRead();

    expect(getByText(loadingText)).toBeDefined();
  });

  it('renders with animation applied to the spinner', async () => {
    const { getByTestId } = render(<Spinner />);
    await flushReduceMotionRead();
    const animatedView = getByTestId('spinner-animated-view');

    expect(animatedView.props.style).toBeDefined();
  });

  describe('rotation animation', () => {
    const mockLoop = () => {
      const start = jest.fn();
      const stop = jest.fn();
      const loopSpy = jest.spyOn(Animated, 'loop').mockReturnValue({
        start,
        stop,
        reset: jest.fn(),
      });
      return { start, stop, loopSpy };
    };

    it('starts a looping rotation when mounted', async () => {
      const { start, loopSpy } = mockLoop();

      render(<Spinner />);
      await flushReduceMotionRead();

      expect(loopSpy).toHaveBeenCalledTimes(1);
      expect(start).toHaveBeenCalledTimes(1);
    });

    it('runs the rotation on the native driver', async () => {
      const timingSpy = jest.spyOn(Animated, 'timing');
      mockLoop();

      render(<Spinner />);
      await flushReduceMotionRead();

      expect(timingSpy).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
          useNativeDriver: true,
          isInteraction: false,
        }),
      );
    });

    it('stops the rotation when unmounted', async () => {
      const { stop } = mockLoop();
      const { unmount } = render(<Spinner />);
      await flushReduceMotionRead();

      unmount();

      expect(stop).toHaveBeenCalledTimes(1);
    });

    describe('reduced motion', () => {
      it('keeps the spinner still when reduced motion is enabled', async () => {
        jest
          .spyOn(AccessibilityInfo, 'isReduceMotionEnabled')
          .mockResolvedValue(true);
        const setValue = jest.spyOn(Animated.Value.prototype, 'setValue');
        const { start, loopSpy } = mockLoop();

        render(<Spinner />);
        await flushReduceMotionRead();

        expect(loopSpy).not.toHaveBeenCalled();
        expect(start).not.toHaveBeenCalled();
        expect(setValue).toHaveBeenCalledWith(0);
      });

      it('stops the loop when reduced motion turns on', async () => {
        const setValue = jest.spyOn(Animated.Value.prototype, 'setValue');
        const { start, stop } = mockLoop();

        render(<Spinner />);
        await flushReduceMotionRead();

        emitReduceMotion(true);

        expect(start).toHaveBeenCalledTimes(1);
        expect(stop).toHaveBeenCalledTimes(1);
        expect(setValue).toHaveBeenCalledWith(0);
      });

      it('starts the loop when reduced motion turns off', async () => {
        jest
          .spyOn(AccessibilityInfo, 'isReduceMotionEnabled')
          .mockResolvedValue(true);
        const { start, loopSpy } = mockLoop();

        render(<Spinner />);
        await flushReduceMotionRead();

        emitReduceMotion(false);

        expect(loopSpy).toHaveBeenCalledTimes(1);
        expect(start).toHaveBeenCalledTimes(1);
      });

      it('keeps the running loop across re-renders', async () => {
        const { start, loopSpy } = mockLoop();
        const { rerender } = render(<Spinner />);
        await flushReduceMotionRead();

        rerender(<Spinner loadingText="Loading" />);
        await flushReduceMotionRead();

        expect(loopSpy).toHaveBeenCalledTimes(1);
        expect(start).toHaveBeenCalledTimes(1);
      });

      it('keeps the current loop when reduced motion stays off', async () => {
        const { start, loopSpy } = mockLoop();

        render(<Spinner />);
        await flushReduceMotionRead();

        emitReduceMotion(false);

        expect(loopSpy).toHaveBeenCalledTimes(1);
        expect(start).toHaveBeenCalledTimes(1);
      });

      it('unmounts when the platform returns no reduce-motion subscription', async () => {
        jest
          .spyOn(AccessibilityInfo, 'addEventListener')
          .mockReturnValue(
            undefined as unknown as ReturnType<
              typeof AccessibilityInfo.addEventListener
            >,
          );
        const { unmount } = render(<Spinner />);
        await flushReduceMotionRead();

        expect(() => {
          unmount();
        }).not.toThrow();
      });

      it('removes the reduce-motion listener on unmount', async () => {
        const { unmount } = render(<Spinner />);
        await flushReduceMotionRead();

        unmount();

        expect(removeReduceMotionListener).toHaveBeenCalledTimes(1);
      });

      it('ignores a reduce-motion read that resolves after unmount', async () => {
        let resolveRead: (reduceMotionEnabled: boolean) => void = () => {
          return undefined;
        };
        jest.spyOn(AccessibilityInfo, 'isReduceMotionEnabled').mockReturnValue(
          new Promise((resolve) => {
            resolveRead = resolve;
          }),
        );
        const { start } = mockLoop();
        const { unmount } = render(<Spinner />);

        unmount();

        await act(async () => {
          resolveRead(false);
        });

        expect(start).not.toHaveBeenCalled();
        expect(removeReduceMotionListener).toHaveBeenCalledTimes(1);
      });

      it('keeps a reduce-motion change that arrives before the initial read', async () => {
        let resolveRead: (reduceMotionEnabled: boolean) => void = () => {
          return undefined;
        };
        jest.spyOn(AccessibilityInfo, 'isReduceMotionEnabled').mockReturnValue(
          new Promise((resolve) => {
            resolveRead = resolve;
          }),
        );
        const { start, stop } = mockLoop();

        render(<Spinner />);
        emitReduceMotion(true);

        await act(async () => {
          resolveRead(false);
        });

        expect(start).not.toHaveBeenCalled();
        expect(stop).not.toHaveBeenCalled();
      });

      it('ignores reduce-motion changes after unmount', async () => {
        jest
          .spyOn(AccessibilityInfo, 'isReduceMotionEnabled')
          .mockResolvedValue(true);
        const { start } = mockLoop();
        const { unmount } = render(<Spinner />);
        await flushReduceMotionRead();

        unmount();
        emitReduceMotion(false);

        expect(start).not.toHaveBeenCalled();
      });

      it('starts the loop when the platform does not return a reduce-motion promise', () => {
        jest
          .spyOn(AccessibilityInfo, 'isReduceMotionEnabled')
          .mockReturnValue(undefined as unknown as Promise<boolean>);
        const { start } = mockLoop();

        render(<Spinner />);

        expect(start).toHaveBeenCalledTimes(1);
      });

      it('starts the loop when the reduce-motion setting cannot be read', async () => {
        jest
          .spyOn(AccessibilityInfo, 'isReduceMotionEnabled')
          .mockRejectedValue(new Error('unavailable'));
        const { start } = mockLoop();

        render(<Spinner />);
        await flushReduceMotionRead();

        expect(start).toHaveBeenCalledTimes(1);
      });
    });
  });
});
