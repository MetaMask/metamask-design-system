import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useState } from 'react';
import type { GestureResponderEvent } from 'react-native';

import { ButtonIconSize, ButtonIconVariant } from '../../types';
import type { IconColor } from '../Icon';
import { Icon } from '../Icon';
import { ButtonAnimated } from '../temp-components/ButtonAnimated';

import {
  MAP_BUTTONICON_SIZE_ICONSIZE,
  TWCLASSMAP_BUTTONICON_SIZE_DIMENSION,
} from './ButtonIcon.constants';
import type { ButtonIconProps } from './ButtonIcon.types';

export const ButtonIcon = ({
  size = ButtonIconSize.Md,
  iconName,
  iconProps,
  isDisabled = false,
  variant = ButtonIconVariant.Default,
  onPressIn,
  onPressOut,
  twClassName,
  style,
  ...props
}: ButtonIconProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const tw = useTailwind();

  let backgroundColor = 'bg-transparent';
  if (variant === ButtonIconVariant.Floating) {
    backgroundColor = 'bg-icon-default';
  } else if (variant === ButtonIconVariant.Filled) {
    backgroundColor = isPressed ? 'bg-muted-pressed' : 'bg-muted';
  } else if (isPressed) {
    backgroundColor = 'bg-pressed';
  }

  const twIconColorClassNames =
    variant === ButtonIconVariant.Floating
      ? 'text-primary-inverse'
      : 'text-icon-default';

  const borderRadiusClass =
    variant === ButtonIconVariant.Default ? 'rounded-lg' : 'rounded-full';

  const onPressInHandler = (event: GestureResponderEvent) => {
    setIsPressed(true);
    onPressIn?.(event);
  };

  const onPressOutHandler = (event: GestureResponderEvent) => {
    setIsPressed(false);
    onPressOut?.(event);
  };

  return (
    <ButtonAnimated
      disabled={isDisabled}
      onPressIn={onPressInHandler}
      onPressOut={onPressOutHandler}
      accessible
      testID="button-icon"
      {...props}
      style={[
        tw.style(
          'items-center justify-center',
          TWCLASSMAP_BUTTONICON_SIZE_DIMENSION[size],
          borderRadiusClass,
          backgroundColor,
          isDisabled ? 'opacity-50' : 'opacity-100',
          twClassName,
        ),
        style,
      ]}
    >
      <Icon
        name={iconName}
        color={twIconColorClassNames as IconColor}
        size={MAP_BUTTONICON_SIZE_ICONSIZE[size]}
        {...iconProps}
      />
    </ButtonAnimated>
  );
};
