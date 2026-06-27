import { act, render, fireEvent } from '@testing-library/react-native';
import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

import { BottomSheetOverlay } from './BottomSheetOverlay';
import type { BottomSheetOverlayRef } from './BottomSheetOverlay.types';

describe('BottomSheetOverlay', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<BottomSheetOverlay testID="overlay" />);
    expect(getByTestId('overlay')).toBeOnTheScreen();
  });

  it('calls onPress when pressed', () => {
    const onPress = jest.fn();
    const testID = 'overlay-touchable';
    const { getByTestId } = render(
      <BottomSheetOverlay
        onPress={onPress}
        touchableOpacityProps={{ testID }}
      />,
    );

    fireEvent.press(getByTestId(testID));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  describe('imperative handle', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('exposes fadeIn and fadeOut via ref', () => {
      const overlayRef: { current: BottomSheetOverlayRef | null } = {
        current: null,
      };
      const TestComponent = () => {
        const ref = useRef<BottomSheetOverlayRef>(null);
        useEffect(() => {
          overlayRef.current = ref.current;
        }, []);
        return <BottomSheetOverlay ref={ref} testID="overlay" />;
      };

      render(<TestComponent />);

      expect(typeof overlayRef.current?.fadeIn).toBe('function');
      expect(typeof overlayRef.current?.fadeOut).toBe('function');
    });

    it('fadeOut animates opacity to zero and invokes callback when finished', () => {
      const callback = jest.fn();
      const overlayRef: { current: BottomSheetOverlayRef | null } = {
        current: null,
      };
      jest.spyOn(Animated, 'timing').mockImplementation(
        () =>
          ({
            start: (completionCallback?: (result: { finished: boolean }) => void) => {
              completionCallback?.({ finished: true });
            },
            stop: jest.fn(),
            reset: jest.fn(),
          }) as never,
      );

      const TestComponent = () => {
        const ref = useRef<BottomSheetOverlayRef>(null);
        useEffect(() => {
          overlayRef.current = ref.current;
        }, []);
        return <BottomSheetOverlay ref={ref} testID="overlay" />;
      };

      render(<TestComponent />);

      act(() => {
        overlayRef.current?.fadeOut(callback);
      });

      expect(Animated.timing).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({ toValue: 0 }),
      );
      expect(callback).toHaveBeenCalledTimes(1);
    });

    it('fadeOut does not invoke callback when animation is interrupted', () => {
      const callback = jest.fn();
      const overlayRef: { current: BottomSheetOverlayRef | null } = {
        current: null,
      };
      jest.spyOn(Animated, 'timing').mockImplementation(
        () =>
          ({
            start: (completionCallback?: (result: { finished: boolean }) => void) => {
              completionCallback?.({ finished: false });
            },
            stop: jest.fn(),
            reset: jest.fn(),
          }) as never,
      );

      const TestComponent = () => {
        const ref = useRef<BottomSheetOverlayRef>(null);
        useEffect(() => {
          overlayRef.current = ref.current;
        }, []);
        return <BottomSheetOverlay ref={ref} testID="overlay" />;
      };

      render(<TestComponent />);

      act(() => {
        overlayRef.current?.fadeOut(callback);
      });

      expect(callback).not.toHaveBeenCalled();
    });
  });
});
