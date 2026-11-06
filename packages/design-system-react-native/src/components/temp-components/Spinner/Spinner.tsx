import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useEffect, useRef } from 'react';
import { AccessibilityInfo, Animated, Easing, View } from 'react-native';

import type { IconProps } from '../../Icon';
import { Icon, IconColor, IconName, IconSize } from '../../Icon';
import type { TextProps } from '../../Text';
import { Text, TextVariant, TextColor } from '../../Text';

import type { SpinnerProps } from './Spinner.types';

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

  // Reanimated's default ReduceMotion.System skipped this infinite rotation when
  // the OS reduce-motion setting was on. The native-driver loop does not, so read
  // the setting and hold the icon at 0deg while it is enabled. The loop lives in
  // this effect so a parent re-render does not restart it.
  useEffect(() => {
    let isActive = true;
    let sawReduceMotionChange = false;
    let loop: Animated.CompositeAnimation | null = null;

    const stopRotation = () => {
      if (loop) {
        loop.stop();
        loop = null;
      }

      rotation.setValue(0);
    };

    const startRotation = () => {
      if (loop) {
        return;
      }

      loop = Animated.loop(
        Animated.timing(rotation, {
          toValue: 1,
          duration: 1000, // Complete a full spin in 1 second
          easing: Easing.linear,
          useNativeDriver: true,
          isInteraction: false,
        }),
      );
      loop.start();
    };

    const applyReduceMotion = (reduceMotionEnabled: boolean) => {
      if (!isActive) {
        return;
      }

      if (reduceMotionEnabled) {
        stopRotation();
        return;
      }

      startRotation();
    };

    // A reduceMotionChanged event can arrive before the initial read resolves.
    // Keep that newer value and drop the stale read so the loop does not flicker.
    const applyInitialReduceMotion = (reduceMotionEnabled: boolean) => {
      if (sawReduceMotionChange) {
        return;
      }

      applyReduceMotion(reduceMotionEnabled);
    };

    const subscription = AccessibilityInfo.addEventListener(
      'reduceMotionChanged',
      (reduceMotionEnabled) => {
        sawReduceMotionChange = true;
        applyReduceMotion(reduceMotionEnabled);
      },
    );

    // A missing or rejected read cannot tell us the setting. Spin, matching the
    // previous behavior, instead of leaving the spinner stuck.
    const readReduceMotion = AccessibilityInfo.isReduceMotionEnabled();

    if (typeof readReduceMotion?.then === 'function') {
      void readReduceMotion.then(applyInitialReduceMotion, () => {
        applyInitialReduceMotion(false);
      });
    } else {
      applyInitialReduceMotion(false);
    }

    return () => {
      isActive = false;
      // React Native Web returns undefined when matchMedia is unavailable.
      subscription?.remove();

      if (loop) {
        loop.stop();
      }
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
