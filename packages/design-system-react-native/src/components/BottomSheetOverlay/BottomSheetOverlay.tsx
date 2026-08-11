import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
} from 'react';
import { AccessibilityInfo, TouchableOpacity } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { scheduleOnRN } from 'react-native-worklets';

import {
  OVERLAY_CLOSE_DURATION,
  OVERLAY_OPEN_DURATION,
  OVERLAY_OPEN_EASING,
} from './BottomSheetOverlay.constants';
import type {
  BottomSheetOverlayProps,
  BottomSheetOverlayRef,
} from './BottomSheetOverlay.types';

const overlayOpenEasing = Easing.bezier(
  OVERLAY_OPEN_EASING[0],
  OVERLAY_OPEN_EASING[1],
  OVERLAY_OPEN_EASING[2],
  OVERLAY_OPEN_EASING[3],
);

export const BottomSheetOverlay = forwardRef<
  BottomSheetOverlayRef,
  BottomSheetOverlayProps
>(
  (
    { style, twClassName, onPress, touchableOpacityProps, ...props },
    ref,
  ) => {
    const tw = useTailwind();
    const opacityVal = useSharedValue(0);
    const reduceMotion = useSharedValue(false);

    useEffect(() => {
      let isActive = true;

      const openOverlay = (instant: boolean) => {
        opacityVal.value = withTiming(1, {
          duration: instant ? 0 : OVERLAY_OPEN_DURATION,
          easing: overlayOpenEasing,
        });
      };

      // Start open animation immediately; snap to instant if reduce-motion is on.
      openOverlay(false);

      // Promise.resolve: RN test mocks may return a bare boolean / undefined.
      void Promise.resolve(AccessibilityInfo.isReduceMotionEnabled())
        .then((enabled) => {
          if (!isActive) {
            return;
          }
          reduceMotion.value = Boolean(enabled);
          if (enabled) {
            openOverlay(true);
          }
        })
        .catch(() => {
          // AccessibilityInfo can reject in non-native test environments.
        });

      const subscription = AccessibilityInfo.addEventListener(
        'reduceMotionChanged',
        (enabled) => {
          reduceMotion.value = enabled;
        },
      );

      return () => {
        isActive = false;
        subscription?.remove?.();
      };
    }, [opacityVal, reduceMotion]);

    const onCloseOverlay = useCallback(
      (callback?: () => void) => {
        opacityVal.value = withTiming(
          0,
          {
            duration: reduceMotion.value ? 0 : OVERLAY_CLOSE_DURATION,
            // Matches web BACKDROP_CLOSE ease: 'easeIn'
            easing: Easing.in(Easing.ease),
          },
          () => {
            if (callback) {
              scheduleOnRN(callback);
            }
          },
        );
      },
      [opacityVal, reduceMotion],
    );

    useImperativeHandle(ref, () => ({
      onCloseOverlay,
    }));

    const animatedStyle = useAnimatedStyle(
      () => ({
        opacity: opacityVal.value,
      }),
      [],
    );

    return (
      <Animated.View
        style={[
          tw.style('absolute inset-0 bg-overlay-default', twClassName),
          style,
          animatedStyle,
        ]}
        {...props}
      >
        {onPress && (
          <TouchableOpacity
            onPress={onPress}
            {...touchableOpacityProps}
            style={tw.style('flex-1')}
          />
        )}
      </Animated.View>
    );
  },
);

BottomSheetOverlay.displayName = 'BottomSheetOverlay';
