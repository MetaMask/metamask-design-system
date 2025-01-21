import {
  useTailwind,
  withThemeProvider,
} from '@metamask/design-system-twrnc-preset';
import React, { useMemo } from 'react';
import type { GestureResponderEvent } from 'react-native';
import { Pressable } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

import type { IconProps } from '../../components/Icon';
import Icon from '../../components/Icon';
import type { TextProps } from '../../components/Text/Text.types';
import type { SpinnerProps } from '../../temp-components/Spinner';
import Spinner from '../../temp-components/Spinner';
import TextOrChildren from '../TextOrChildren/TextOrChildren';
import { DEFAULT_BUTTONBASE_PROPS } from './ButtonBase.constants';
import type { ButtonBaseProps } from './ButtonBase.types';
import { generateButtonBaseClassNames } from './ButtonBase.utilities';

const ButtonBase = ({
  children,
  textProps,
  size = DEFAULT_BUTTONBASE_PROPS.size,
  isLoading,
  loadingText,
  spinnerProps,
  startIconName,
  startIconProps,
  startAccessory,
  endIconName,
  endIconProps,
  endAccessory,
  isDisabled,
  isFullWidth,
  twClassName,
  onPressIn,
  onPressOut,
  style,
  ...props
}: ButtonBaseProps) => {
  const tw = useTailwind();
  const twStyle = useMemo(() => {
    const mergedClassnames = generateButtonBaseClassNames({
      size,
      twClassName,
      isLoading,
      isDisabled,
      isFullWidth,
    });
    return tw`${mergedClassnames}`;
  }, [tw, size, twClassName, isLoading, isDisabled, isFullWidth]);
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

  const finalTextProps: Omit<Partial<TextProps>, 'children'> = {
    ...DEFAULT_BUTTONBASE_PROPS.textProps,
    ...textProps,
  };
  const finalStartIconName = startIconName ?? startIconProps?.name;
  const finalStartIconProps: Partial<IconProps> = {
    ...DEFAULT_BUTTONBASE_PROPS.startIconProps,
    ...startIconProps,
  };

  const finalEndIconName = endIconName ?? endIconProps?.name;
  const finalEndIconProps: Partial<IconProps> = {
    ...DEFAULT_BUTTONBASE_PROPS.endIconProps,
    ...endIconProps,
  };

  const finalSpinnerProps: SpinnerProps = {
    ...DEFAULT_BUTTONBASE_PROPS.spinnerProps,
    loadingText,
    ...spinnerProps,
  };

  return (
    <Animated.View style={scaleStyle}>
      <Pressable
        disabled={isDisabled ?? isLoading}
        accessibilityRole="button"
        accessible
        style={[twStyle, style]}
        onPressIn={onPressInHandler}
        onPressOut={onPressOutHandler}
        {...props}
      >
        {isLoading ? (
          <Spinner {...finalSpinnerProps} />
        ) : (
          <>
            {finalStartIconName ? (
              <Icon name={finalStartIconName} {...finalStartIconProps} />
            ) : (
              startAccessory
            )}
            <TextOrChildren textProps={finalTextProps}>
              {children}
            </TextOrChildren>
            {finalEndIconName ? (
              <Icon name={finalEndIconName} {...finalEndIconProps} />
            ) : (
              endAccessory
            )}
          </>
        )}
      </Pressable>
    </Animated.View>
  );
};

export default withThemeProvider(ButtonBase);
