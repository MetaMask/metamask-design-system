import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { fireEvent, render, renderHook } from '@testing-library/react-native';
import React from 'react';

import { BottomSheetOverlay } from './BottomSheetOverlay';

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
});

describe('when className is provided', () => {
  let twClassNames: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    twClassNames = renderHook(() => useTailwind()).result.current;
  });

  it('applies className after twClassName and component classes', () => {
    const { getByTestId } = render(
      <BottomSheetOverlay
        testID="overlay"
        twClassName="mt-8"
        className="mt-2"
      />,
    );

    expect(getByTestId('overlay')).toHaveStyle(twClassNames`mt-2`);
  });

  it('applies deprecated twClassName on its own', () => {
    const { getByTestId } = render(
      <BottomSheetOverlay testID="overlay" twClassName="mt-8" />,
    );

    expect(getByTestId('overlay')).toHaveStyle(twClassNames`mt-8`);
  });
});
