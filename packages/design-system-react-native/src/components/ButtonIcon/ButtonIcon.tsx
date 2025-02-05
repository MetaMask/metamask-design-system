/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useMemo, useState } from 'react';
import type { GestureResponderEvent } from 'react-native';

import ButtonAnimated from '../../primitives/ButtonAnimated';
import type { IconProps } from '../Icon';
import Icon from '../Icon';
import {
  DEFAULT_BUTTONICON_PROPS,
  MAPPING_BUTTONICONSIZE_ICONSIZE,
} from './ButtonIcon.constants';
import type { ButtonIconProps, ButtonIconSize } from './ButtonIcon.types';
import {
  generateButtonIconContainerClassNames,
  generateButtonIconIconColorClassNames,
} from './ButtonIcon.utilities';

const ButtonIcon = ({
  size = DEFAULT_BUTTONICON_PROPS.size,
  iconName,
  iconProps,
  isDisabled = DEFAULT_BUTTONICON_PROPS.isDisabled,
  isInverse = DEFAULT_BUTTONICON_PROPS.isInverse,
  isFloating = DEFAULT_BUTTONICON_PROPS.isFloating,
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
    size: MAPPING_BUTTONICONSIZE_ICONSIZE[size as ButtonIconSize],
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
