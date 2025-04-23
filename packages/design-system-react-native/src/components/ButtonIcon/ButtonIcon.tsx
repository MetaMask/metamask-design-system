/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useState } from 'react';
import type { GestureResponderEvent } from 'react-native';

import { ButtonIconSize } from '../../types';
import Icon, { IconColor } from '../Icon';
import ButtonAnimated from '../temp-components/ButtonAnimated';
import {
  MAP_BUTTONICON_SIZE_ICONSIZE,
  TWCLASSMAP_BUTTONICON_SIZE_DIMENSION,
} from './ButtonIcon.constants';
import type { ButtonIconProps } from './ButtonIcon.types';

const ButtonIcon = ({
  size = ButtonIconSize.Md,
  iconName,
  iconProps,
  isDisabled = false,
  isInverse = false,
  isFloating = false,
  onPressIn,
  onPressOut,
  twClassName = '',
  style,
  ...props
}: ButtonIconProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const tw = useTailwind();
  const twContainerClassNames = `
    items-center justify-center
    ${TWCLASSMAP_BUTTONICON_SIZE_DIMENSION[size]}
    ${isFloating ? 'rounded-full' : 'rounded-sm'}
    ${isFloating ? 'bg-icon-default' : isPressed ? 'bg-background-pressed' : 'bg-transparent'}
    ${isDisabled ? 'opacity-50' : 'opacity-100'}
    ${twClassName}`;

  const twIconColorClassNames =
    isInverse || isFloating ? 'text-primary-inverse' : 'text-icon-default';

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
      style={[tw`${twContainerClassNames}`, style]}
      testID="button-icon"
      {...props}
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

export default ButtonIcon;
