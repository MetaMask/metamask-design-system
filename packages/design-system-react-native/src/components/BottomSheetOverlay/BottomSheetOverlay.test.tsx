import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';

import { BottomSheetOverlay } from './BottomSheetOverlay';

describe('BottomSheetOverlay', () => {
  it('renders correctly', async () => {
    const { getByTestId } = await render(
      <BottomSheetOverlay testID="overlay" />,
    );
    expect(getByTestId('overlay')).toBeDefined();
  });

  it('calls onPress when pressed', async () => {
    const onPress = jest.fn();
    const testID = 'overlay-touchable';
    const { getByTestId } = await render(
      <BottomSheetOverlay
        onPress={onPress}
        touchableOpacityProps={{ testID }}
      />,
    );

    await fireEvent.press(getByTestId(testID));
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
