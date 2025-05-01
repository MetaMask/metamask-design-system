import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useState } from 'react';
import type { GestureResponderEvent } from 'react-native';

import ButtonBase from '../../../ButtonBase';
import { IconColor, IconSize } from '../../../Icon';
import { TextVariant, FontWeight } from '../../../Text';
import type { ButtonSecondaryProps } from './ButtonSecondary.types';

const ButtonSecondary = ({
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
}: ButtonSecondaryProps) => {
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
          : isPressed || isLoading
            ? 'bg-background-pressed'
            : 'bg-transparent'
    }
    border-[1.5px]
    ${
      isInverse && isDanger
        ? isPressed || isLoading
          ? 'border-background-defaultPressed'
          : 'border-background-default'
        : isDanger
          ? isPressed || isLoading
            ? 'border-error-defaultPressed'
            : 'border-error-default'
          : isInverse
            ? 'border-primary-inverse'
            : 'border-icon-default'
    }
    ${twClassName}
  `;

  const twTextClassNames = isDanger
    ? isPressed || isLoading
      ? 'text-error-defaultPressed'
      : 'text-error-default'
    : isInverse
      ? 'text-primary-inverse'
      : 'text-text-default';

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
      testID="button-secondary"
      {...props}
    >
      {children}
    </ButtonBase>
  );
};

export default ButtonSecondary;
