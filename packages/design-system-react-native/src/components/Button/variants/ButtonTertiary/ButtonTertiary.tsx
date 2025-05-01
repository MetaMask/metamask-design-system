import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useState } from 'react';
import type { GestureResponderEvent } from 'react-native';

import ButtonBase from '../../../ButtonBase';
import { IconColor, IconSize } from '../../../Icon';
import { TextVariant, FontWeight } from '../../../Text';
import type { ButtonTertiaryProps } from './ButtonTertiary.types';

const ButtonTertiary = ({
  children,
  textProps,
  spinnerProps,
  startIconProps,
  endIconProps,
  isDanger = false,
  isInverse = false,
  isLoading = false,
  onPressIn,
  onPressOut,
  twClassName = '',
  style,
  ...props
}: ButtonTertiaryProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const tw = useTailwind();
  const twContainerClassNames = `
    ${
      isInverse && isDanger
        ? isPressed || isLoading
          ? 'bg-background-defaultPressed'
          : 'bg-background-default'
        : isDanger
          ? isPressed || isLoading
            ? 'bg-error-mutedPressed'
            : 'bg-transparent'
          : isInverse
            ? isPressed || isLoading
              ? 'bg-background-pressed'
              : 'bg-transparent'
            : isPressed || isLoading
              ? 'bg-background-pressed'
              : 'bg-transparent'
    }
    ${isInverse && !isDanger ? 'border-[1.5px]' : 'border-0'}
    ${
      isInverse && isDanger
        ? isPressed || isLoading
          ? 'border-background-defaultPressed'
          : 'border-background-default'
        : isDanger
          ? isPressed || isLoading
            ? 'border-error-mutedPressed'
            : 'border-transparent'
          : isInverse
            ? 'border-primary-inverse'
            : isPressed || isLoading
              ? 'border-background-pressed'
              : 'border-transparent'
    }
  `;

  const twTextClassNames = isDanger
    ? isPressed || isLoading
      ? 'text-error-defaultPressed'
      : 'text-error-default'
    : isInverse
      ? 'text-primary-inverse'
      : isPressed || isLoading
        ? 'text-primary-defaultPressed'
        : 'text-primary-default';

  const onPressInHandler = (event: GestureResponderEvent) => {
    setIsPressed(true);
    onPressIn?.(event);
  };

  const onPressOutHandler = (event: GestureResponderEvent) => {
    setIsPressed(false);
    onPressOut?.(event);
  };

  return (
    <ButtonBase
      textProps={{
        variant: TextVariant.BodyMd,
        fontWeight: FontWeight.Medium,
        numberOfLines: 1,
        ellipsizeMode: 'clip',
        ...textProps,
        twClassName: `${twTextClassNames} ${textProps?.twClassName ?? ''}`,
      }}
      spinnerProps={{
        color: twTextClassNames as IconColor,
        loadingTextProps: {
          twClassName: twTextClassNames,
        },
        ...spinnerProps,
      }}
      startIconProps={{
        size: IconSize.Sm,
        testID: 'start-icon',
        ...startIconProps,
        twClassName: `${twTextClassNames} ${startIconProps?.twClassName ?? ''}`,
      }}
      endIconProps={{
        size: IconSize.Sm,
        testID: 'end-icon',
        ...endIconProps,
        twClassName: `${twTextClassNames} ${endIconProps?.twClassName ?? ''}`,
      }}
      isLoading={isLoading}
      onPressIn={onPressInHandler}
      onPressOut={onPressOutHandler}
      style={[tw`${twContainerClassNames}`, style]}
      testID="button-tertiary"
      {...props}
    >
      {children}
    </ButtonBase>
  );
};

export default ButtonTertiary;
