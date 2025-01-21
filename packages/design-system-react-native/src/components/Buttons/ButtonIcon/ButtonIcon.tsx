/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useMemo, useState } from 'react';
import type { GestureResponderEvent } from 'react-native';
import { Pressable, View } from 'react-native';

import type { SpinnerProps } from '../../../temp-components/Spinner';
import Spinner from '../../../temp-components/Spinner';
import type { IconProps, IconColor } from '../../Icon';
import Icon from '../../Icon';
import { DEFAULT_BUTTONICON_PROPS } from './ButtonIcon.constants';
import type { ButtonIconProps } from './ButtonIcon.types';
import {
  generateButtonIconContainerClassNames,
  generateButtonIconIconClassNames,
} from './ButtonIcon.utilities';

const ButtonIcon = ({
  variant = DEFAULT_BUTTONICON_PROPS.variant,
  size,
  isLoading = DEFAULT_BUTTONICON_PROPS.isLoading,
  spinnerProps,
  iconName,
  iconProps,
  isDisabled = DEFAULT_BUTTONICON_PROPS.isDisabled,
  isInverse = DEFAULT_BUTTONICON_PROPS.isInverse,
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
      isPressed,
      isLoading,
      twClassName,
    });
  }, [isPressed, isLoading, twClassName]);

  const twIconClassNames = useMemo(() => {
    return generateButtonIconIconClassNames({
      isPressed,
      isInverse,
      variant,
      isLoading,
    });
  }, [isPressed, isInverse, variant, isLoading]);

  const finalIconProps: Partial<IconProps> = {
    ...iconProps,
    twClassName: `${twIconClassNames} ${iconProps?.twClassName ?? ''}`,
  };

  const finalSpinnerProps: SpinnerProps = {
    color: twIconClassNames as IconColor,
    spinnerIconProps: {
      size,
    },
    ...spinnerProps,
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
    <Pressable
      disabled={isDisabled || isLoading}
      onPressIn={onPressInHandler}
      onPressOut={onPressOutHandler}
      accessible
      style={[tw`items-center justify-center self-start`, style]}
      testID="text-button"
      {...props}
    >
      {(isPressed || isLoading) && (
        <View
          style={tw`absolute -inset-1 rounded-full ${twContainerClassNames}`}
        ></View>
      )}
      {isLoading ? (
        <Spinner {...finalSpinnerProps} />
      ) : (
        <Icon name={iconName} size={size} {...finalIconProps} />
      )}
    </Pressable>
  );
};

export default ButtonIcon;
