import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useEffect } from 'react';
import {
  Animated,
  Easing,
  TouchableOpacity,
  useAnimatedValue,
} from 'react-native';

// Internal dependencies.
import { DEFAULT_OVERLAY_ANIMATION_DURATION } from './BottomSheetOverlay.constants';
import { BottomSheetOverlayProps } from './BottomSheetOverlay.types';

export const BottomSheetOverlay: React.FC<BottomSheetOverlayProps> = ({
  style,
  twClassName,
  onPress,
  touchableOpacityProps,
  ...viewProps
}) => {
  const tw = useTailwind();
  const opacityVal = useAnimatedValue(0);

  useEffect(() => {
    Animated.timing(opacityVal, {
      toValue: 1,
      duration: DEFAULT_OVERLAY_ANIMATION_DURATION,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [opacityVal]);

  return (
    <Animated.View
      style={[
        tw.style('absolute inset-0 bg-overlay-default', twClassName),
        style,
        { opacity: opacityVal },
      ]}
      {...viewProps}
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
};
