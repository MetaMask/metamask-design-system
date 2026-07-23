import { act, fireEvent, render } from '@testing-library/react-native';
import React, { useEffect, useRef } from 'react';

import { BottomSheetOverlay } from './BottomSheetOverlay';
import type { BottomSheetOverlayRef } from './BottomSheetOverlay.types';

jest.mock('@metamask/design-system-twrnc-preset', () => ({
  useTailwind: () => ({
    style: () => ({}),
  }),
}));

jest.mock('react-native-reanimated', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {
    // no-op
  };
  return Reanimated;
});

jest.mock('react-native-worklets', () => ({
  scheduleOnRN: (fn: (...args: unknown[]) => void, ...args: unknown[]) => {
    fn(...args);
  },
}));

describe('BottomSheetOverlay', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<BottomSheetOverlay testID="overlay" />);
    expect(getByTestId('overlay')).toBeDefined();
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

  it('exposes onCloseOverlay via ref', () => {
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

    expect(overlayRef.current).not.toBeNull();
    expect(typeof overlayRef.current?.onCloseOverlay).toBe('function');
  });

  it('calls callback after onCloseOverlay', () => {
    const callback = jest.fn();
    const TestComponent = () => {
      const ref = useRef<BottomSheetOverlayRef>(null);
      useEffect(() => {
        act(() => {
          ref.current?.onCloseOverlay(callback);
        });
      }, []);
      return <BottomSheetOverlay ref={ref} />;
    };

    render(<TestComponent />);

    expect(callback).toHaveBeenCalledTimes(1);
  });
});
