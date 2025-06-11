import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useState } from 'react';
import type { GestureResponderEvent } from 'react-native';

import { ButtonIconSize } from '../../types';
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

  // Determine background color based on state
  let backgroundColor = 'bg-transparent';
  if (isFloating) {
    backgroundColor = 'bg-icon-default';
  } else if (isPressed) {
    backgroundColor = 'bg-pressed';
  }

  const twContainerClassNames = `
    items-center justify-center
    ${TWCLASSMAP_BUTTONICON_SIZE_DIMENSION[size]}
    ${isFloating ? 'rounded-full' : 'rounded-sm'}
    ${backgroundColor}
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
