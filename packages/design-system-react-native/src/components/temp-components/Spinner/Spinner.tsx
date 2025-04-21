import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';

import type { IconProps } from '../../Icon';
import Icon, { IconColor, IconName, IconSize } from '../../Icon';
import type { TextProps } from '../../Text';
import Text, { TextVariant, TextColor } from '../../Text';
import type { SpinnerProps } from './Spinner.types';

const Spinner = ({
  color = IconColor.IconDefault,
  spinnerIconProps,
  loadingText,
  loadingTextProps,
  twClassName = '',
  ...props
}: SpinnerProps) => {
  const tw = useTailwind();

  // Create a shared value for rotation
  const rotation = useSharedValue(0);

  // Start the animation when the component mounts
  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, { duration: 1000, easing: Easing.linear }), // Complete a full spin in 1 second
      -1, // Infinite repetitions
      false, // Do not reverse the animation
    );
  }, []);

  // Define the animated style
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value % 360}deg` }],
  }));

  const finalSpinnerIconProps: IconProps = {
    size: IconSize.Md,
    name: IconName.Loading,
    testID: 'spinner-icon',
    color,
    ...spinnerIconProps,
  };

  const finalLoadingTextProps: Partial<TextProps> = {
    variant: TextVariant.BodyMd,
    color: TextColor.TextDefault,
    testID: 'spinner-text',
    ...loadingTextProps,
  };

  return (
    <View
      style={tw`flex-row gap-x-2 items-center ${twClassName}`}
      testID="spinner"
      {...props}
    >
      <Animated.View style={[animatedStyle]} testID="spinner-animated-view">
        <Icon {...finalSpinnerIconProps} />
      </Animated.View>
      {loadingText && <Text {...finalLoadingTextProps}>{loadingText}</Text>}
    </View>
  );
};

export default Spinner;
