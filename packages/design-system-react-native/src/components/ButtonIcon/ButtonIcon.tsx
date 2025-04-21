/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useMemo, useState } from 'react';
import type { GestureResponderEvent } from 'react-native';

import { ButtonIconSize } from '../../types';
import Icon from '../Icon';
import type { IconProps } from '../Icon';
import ButtonAnimated from '../temp-components/ButtonAnimated';
import { MAPPING_BUTTONICONSIZE_ICONSIZE } from './ButtonIcon.constants';
import type { ButtonIconProps } from './ButtonIcon.types';
import {
  generateButtonIconContainerClassNames,
  generateButtonIconIconColorClassNames,
} from './ButtonIcon.utilities';

const ButtonIcon = ({
  size = ButtonIconSize.Md,
  iconName,
  iconProps,
  isDisabled = false,
  isInverse = false,
  isFloating = false,
  onPressIn,
  onPressOut,
  twClassName,
  style,
  ...props
}: ButtonIconProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const tw = useTailwind();
  const twContainerClassNames = useMemo(() => {
    return generateButtonIconContainerClassNames({
      isDisabled,
      isPressed,
      isFloating,
      size,
      twClassName,
    });
  }, [isDisabled, isPressed, isFloating, size, twClassName]);

  const twIconColorClassNames = useMemo(() => {
    return generateButtonIconIconColorClassNames({
      isInverse,
      isFloating,
    });
  }, [isInverse, isFloating]);

  const finalIconProps: Partial<IconProps> = {
    color: twIconColorClassNames,
    size: MAPPING_BUTTONICONSIZE_ICONSIZE[size],
    ...iconProps,
  };
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
      <Icon name={iconName} {...finalIconProps} />
    </ButtonAnimated>
  );
};

export default ButtonIcon;
