import {
  useTailwind,
  ThemeProvider,
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
          ? 'bg-background-default-pressed'
          : 'bg-background-default'
        : isDanger
          ? isPressed || isLoading
            ? 'bg-error-default-pressed'
            : 'bg-error-default'
          : isInverse
            ? isPressed || isLoading
              ? 'bg-background-default-pressed'
              : 'bg-background-default'
            : isPressed || isLoading
              ? 'bg-primary-default-pressed'
              : 'bg-primary-default'
    }
    ${twClassName}
  `;

  const twTextClassNames =
    isInverse && isDanger
      ? isPressed || isLoading
        ? 'text-error-default-pressed'
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

export const ButtonPrimary = ({ isInverse, ...props }: ButtonPrimaryProps) => {
  // If inverse, use the current theme context
  if (isInverse) {
    return <ButtonPrimaryBase isInverse {...props} />;
  }
  // Otherwise, force light theme
  return (
    <ThemeProvider theme={Theme.Light}>
      <ButtonPrimaryBase isInverse={false} {...props} />
    </ThemeProvider>
  );
};
