import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { Animated, TouchableOpacity } from 'react-native';

import {
  DEFAULT_OVERLAY_ANIMATION_DURATION,
  DEFAULT_OVERLAY_ANIMATION_EASING,
} from './BottomSheetOverlay.constants';
import type {
  BottomSheetOverlayProps,
  BottomSheetOverlayRef,
} from './BottomSheetOverlay.types';

export const BottomSheetOverlay = forwardRef<
  BottomSheetOverlayRef,
  BottomSheetOverlayProps
>(({ style, twClassName, onPress, touchableOpacityProps, ...props }, ref) => {
  const tw = useTailwind();
  const opacityVal = useRef(new Animated.Value(0)).current;

  const fadeIn = useCallback(() => {
    Animated.timing(opacityVal, {
      toValue: 1,
      duration: DEFAULT_OVERLAY_ANIMATION_DURATION,
      easing: DEFAULT_OVERLAY_ANIMATION_EASING,
      useNativeDriver: true,
    }).start();
  }, [opacityVal]);

  const fadeOut = useCallback(
    (callback?: () => void) => {
      Animated.timing(opacityVal, {
        toValue: 0,
        duration: DEFAULT_OVERLAY_ANIMATION_DURATION,
        easing: DEFAULT_OVERLAY_ANIMATION_EASING,
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (finished) {
          callback?.();
        }
      });
    },
    [opacityVal],
  );

  useImperativeHandle(ref, () => ({ fadeIn, fadeOut }), [fadeIn, fadeOut]);

  useEffect(() => {
    fadeIn();
  }, [fadeIn]);

  return (
    <Animated.View
      style={[
        tw.style('absolute inset-0 bg-overlay-default', twClassName),
        style,
        { opacity: opacityVal },
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
});

BottomSheetOverlay.displayName = 'BottomSheetOverlay';
