import { AnimationDuration } from '@metamask/design-tokens';
import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import { Animated, Easing } from 'react-native';

import { BottomSheetOverlay } from './BottomSheetOverlay';
import { DEFAULT_OVERLAY_ANIMATION_DURATION } from './BottomSheetOverlay.constants';

describe('BottomSheetOverlay', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with default props', () => {
    const { toJSON } = render(<BottomSheetOverlay />);
    expect(toJSON()).toBeDefined();
  });

  it('renders TouchableOpacity when onPress is provided', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(<BottomSheetOverlay onPress={onPress} />);
    expect(getByTestId('overlay.button')).toBeDefined();
  });

  it('does not render TouchableOpacity when onPress is not provided', () => {
    const { queryByTestId } = render(<BottomSheetOverlay />);
    expect(queryByTestId('overlay.button')).toBeNull();
  });

  it('calls onPress when TouchableOpacity is pressed', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(<BottomSheetOverlay onPress={onPress} />);
    fireEvent.press(getByTestId('overlay.button'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('starts animation with default duration when duration is not provided', () => {
    const timingSpy = jest.spyOn(Animated, 'timing');
    render(<BottomSheetOverlay />);
    expect(timingSpy).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        toValue: 1,
        duration: DEFAULT_OVERLAY_ANIMATION_DURATION,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );
  });

  it('starts animation with custom duration when provided', () => {
    const timingSpy = jest.spyOn(Animated, 'timing');
    render(<BottomSheetOverlay duration={500} />);
    expect(timingSpy).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );
  });
});

describe('BottomSheetOverlay Constants', () => {
  it('the DEFAULT_OVERLAY_ANIMATION_DURATION equals AnimationDuration.Fast', () => {
    expect(DEFAULT_OVERLAY_ANIMATION_DURATION).toBe(AnimationDuration.Fast);
  });
});
