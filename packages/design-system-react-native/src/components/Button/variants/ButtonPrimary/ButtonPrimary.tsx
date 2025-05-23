import {
  useTailwind,
  withThemeProvider,
  Theme,
} from '@metamask/design-system-twrnc-preset';
import React, { useState } from 'react';
import type { GestureResponderEvent } from 'react-native';

import { ButtonBase } from '../../../ButtonBase';
import type { IconColor } from '../../../Icon';
import { IconSize } from '../../../Icon';
import { TextVariant, FontWeight } from '../../../Text';

import type { ButtonPrimaryProps } from './ButtonPrimary.types';

const ButtonPrimaryBase = ({
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
}: ButtonPrimaryProps) => {
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
            ? 'bg-error-defaultPressed'
            : 'bg-error-default'
          : isInverse
            ? isPressed || isLoading
              ? 'bg-background-defaultPressed'
              : 'bg-background-default'
            : isPressed || isLoading
              ? 'bg-primary-defaultPressed'
              : 'bg-primary-default'
    }
    ${twClassName}
  `;

  const twTextClassNames =
    isInverse && isDanger
      ? isPressed || isLoading
        ? 'text-error-defaultPressed'
        : 'text-error-default'
      : isDanger
        ? 'text-primary-inverse'
        : isInverse
          ? 'text-text-default'
          : 'text-primary-inverse';

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
        ...startIconProps,
        twClassName: `${twTextClassNames} ${startIconProps?.twClassName ?? ''}`,
      }}
      endIconProps={{
        size: IconSize.Sm,
        ...endIconProps,
        twClassName: `${twTextClassNames} ${startIconProps?.twClassName ?? ''}`,
      }}
      isLoading={isLoading}
      onPressIn={onPressInHandler}
      onPressOut={onPressOutHandler}
      style={[tw`${twContainerClassNames}`, style]}
      {...props}
    >
      {children}
    </ButtonBase>
  );
};

const ButtonPrimaryLightOnly = withThemeProvider(
  ButtonPrimaryBase,
  Theme.Light,
);

export const ButtonPrimary = ({ isInverse, ...props }: ButtonPrimaryProps) => {
  if (isInverse) {
    return <ButtonPrimaryBase isInverse={isInverse} {...props} />;
  }
  return <ButtonPrimaryLightOnly isInverse={isInverse} {...props} />;
};
