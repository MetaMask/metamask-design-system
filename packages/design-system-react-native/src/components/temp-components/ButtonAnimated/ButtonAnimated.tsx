import React, { useState } from 'react';
import type { GestureResponderEvent } from 'react-native';
import { Pressable } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

import type { ButtonAnimatedProps } from './ButtonAnimated.types';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const ButtonAnimated = ({
  onPressIn,
  onPressOut,
  disabled,
  style,
  children,
  ...props
}: ButtonAnimatedProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const animation = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: animation.value }],
    };
  });

  const onPressInHandler = (event: GestureResponderEvent) => {
    setIsPressed(true);
    animation.value = withTiming(0.97, {
      duration: 100,
      easing: Easing.bezier(0.3, 0.8, 0.3, 1),
    });
    onPressIn?.(event);
  };

  const onPressOutHandler = (event: GestureResponderEvent) => {
    setIsPressed(false);
    animation.value = withTiming(1, {
      duration: 100,
      easing: Easing.bezier(0.3, 0.8, 0.3, 1),
    });
    onPressOut?.(event);
  };

  // Evaluate style function if needed
  const evaluatedStyle =
    typeof style === 'function' ? style({ pressed: isPressed }) : style;

  return (
    <AnimatedPressable
      onPressIn={onPressInHandler}
      onPressOut={onPressOutHandler}
      disabled={disabled}
      style={[
        ...(Array.isArray(evaluatedStyle) ? evaluatedStyle : [evaluatedStyle]),
        animatedStyle,
      ]}
      {...props}
    >
      {typeof children === 'function'
        ? children({ pressed: isPressed })
        : children}
    </AnimatedPressable>
  );
};
