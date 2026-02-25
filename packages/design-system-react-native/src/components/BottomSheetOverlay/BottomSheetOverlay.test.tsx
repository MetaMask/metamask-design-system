import { render, fireEvent } from '@testing-library/react-native';
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
