import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useEffect, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';

import type { IconProps } from '../Icon/index.js';
import { Icon, IconColor, IconName, IconSize } from '../Icon/index.js';
import type { TextProps } from '../Text/index.js';
import { Text, TextVariant, TextColor } from '../Text/index.js';

import type { SpinnerProps } from './Spinner.types.js';

export const Spinner = ({
  color = IconColor.IconDefault,
  spinnerIconProps,
  loadingText,
  loadingTextProps,
  twClassName,
  style,
  ...props
}: SpinnerProps) => {
  const tw = useTailwind();

  // The rotation is driven by React Native's native animation driver instead of
  // Reanimated. A Reanimated rotation commits the shadow tree on every frame on
  // Android, which can saturate the JS thread when the screen already contains
  // other animated views (entering/exiting/layout animations). The native driver
  // updates the view on the UI thread without going through the shadow tree.
  const rotation = useRef(new Animated.Value(0)).current;

  // Start the animation when the component mounts
  useEffect(() => {
    const loop = Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 1000, // Complete a full spin in 1 second
        easing: Easing.linear,
        useNativeDriver: true,
        isInteraction: false,
      }),
    );

    loop.start();

    return () => {
      loop.stop();
    };
  }, [rotation]);

  const animatedStyle = {
    transform: [
      {
        rotate: rotation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
        }),
      },
    ],
  };

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
      {...props}
      style={[tw.style('flex-row items-center gap-x-2', twClassName), style]}
    >
      <Animated.View style={[animatedStyle]} testID="spinner-animated-view">
        <Icon {...finalSpinnerIconProps} />
      </Animated.View>
      {loadingText && <Text {...finalLoadingTextProps}>{loadingText}</Text>}
    </View>
  );
};
