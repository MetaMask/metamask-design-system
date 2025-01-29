import React from 'react';
import type { GestureResponderEvent } from 'react-native';
import { Pressable } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

import type { ButtonAnimatedProps } from './ButtonAnimated.types';

const ButtonAnimated = ({
  onPressIn,
  onPressOut,
  disabled,
  ...props
}: ButtonAnimatedProps) => {
  const animation = useSharedValue(1);
  const scaleStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: animation.value }],
    };
  });

  const onPressInHandler = (event: GestureResponderEvent) => {
    animation.value = withTiming(0.97, {
      duration: 100,
      easing: Easing.bezier(0.3, 0.8, 0.3, 1),
    });
    onPressIn?.(event);
  };

  const onPressOutHandler = (event: GestureResponderEvent) => {
    animation.value = withTiming(1, {
      duration: 100,
      easing: Easing.bezier(0.3, 0.8, 0.3, 1),
    });
    onPressOut?.(event);
  };

  return (
    <Animated.View
      style={[scaleStyle, { alignItems: 'center', justifyContent: 'center' }]}
    >
      <Pressable
        onPressIn={onPressInHandler}
        onPressOut={onPressOutHandler}
        disabled={disabled}
        {...props}
      />
    </Animated.View>
  );
};

export default ButtonAnimated;
