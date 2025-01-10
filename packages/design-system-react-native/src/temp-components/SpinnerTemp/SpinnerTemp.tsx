import {
  useTailwind,
  withThemeProvider,
} from '@metamask/design-system-twrnc-preset';
import React, { useEffect } from 'react';
import { View } from 'react-native';
// eslint-disable-next-line import/default
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';

import Icon, { IconName, IconColor } from '../../components/Icons/Icon';
import Text, { TextVariant, TextColor } from '../../components/Text';
import type { SpinnerTempProps } from './SpinnerTemp.types';

const SpinnerTemp = ({
  color = IconColor.IconDefault,
  loadingText,
  loadingTextProps,
}: SpinnerTempProps) => {
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

  return (
    <View style={tw`flex-row gap-x-2`}>
      <Animated.View style={[animatedStyle]}>
        <Icon name={IconName.Loading} color={color} />
      </Animated.View>
      {loadingText && (
        <Text
          variant={TextVariant.BodyMd}
          color={TextColor.TextDefault}
          {...loadingTextProps}
        >
          {loadingText}
        </Text>
      )}
    </View>
  );
};

export default withThemeProvider(SpinnerTemp);
