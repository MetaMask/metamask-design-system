import React, { useCallback } from 'react';

import { ButtonBase } from '../../../ButtonBase';
import { IconSize } from '../../../Icon';
import { TextVariant, FontWeight } from '../../../Text';

import type { ButtonSecondaryProps } from './ButtonSecondary.types';

export const ButtonSecondary = ({
  children,
  textProps,
  spinnerProps,
  startIconProps,
  endIconProps,
  isDanger = false,
  isInverse = false,
  isLoading = false,
  twClassName = '',
  style,
  ...props
}: ButtonSecondaryProps) => {
  const getContainerClassName = useCallback(
    (pressed: boolean): string => {
      const classNameStr =
        typeof twClassName === 'function' ? twClassName(pressed) : twClassName;

      const baseClasses = `
        border
        ${classNameStr}
      `;

      let backgroundClass = '';
      let borderClass = '';

      if (isInverse && isDanger) {
        backgroundClass =
          pressed || isLoading ? 'bg-default-pressed' : 'bg-default';
        borderClass =
          pressed || isLoading
            ? 'border-background-default-pressed'
            : 'border-background-default';
      } else if (isDanger) {
        backgroundClass =
          pressed || isLoading ? 'bg-muted-pressed' : 'bg-muted';
        borderClass = 'border-transparent';
      } else if (isInverse) {
        backgroundClass =
          pressed || isLoading ? 'bg-pressed' : 'bg-transparent';
        borderClass = 'border-primary-inverse';
      } else {
        backgroundClass =
          pressed || isLoading ? 'bg-muted-pressed' : 'bg-muted';
        borderClass = 'border-transparent';
      }

      return `${backgroundClass} ${borderClass} ${baseClasses}`;
    },
    [isInverse, isDanger, isLoading, twClassName],
  );

  const getTextClassName = useCallback(
    (pressed: boolean): string => {
      if (isDanger) {
        return pressed || isLoading
          ? 'text-error-default-pressed'
          : 'text-error-default';
      }
      if (isInverse) {
        return 'text-primary-inverse';
      }
      return 'text-default';
    },
    [isDanger, isInverse, isLoading],
  );

  return (
    <ButtonBase
      textProps={{
        variant: TextVariant.BodyMd,
        fontWeight: FontWeight.Medium,
        numberOfLines: 1,
        ellipsizeMode: 'clip',
        ...textProps,
      }}
      spinnerProps={{
        ...spinnerProps,
      }}
      startIconProps={{
        size: IconSize.Sm,
        ...startIconProps,
      }}
      endIconProps={{
        size: IconSize.Sm,
        ...endIconProps,
      }}
      isLoading={isLoading}
      twClassName={getContainerClassName}
      textClassName={getTextClassName}
      iconClassName={getTextClassName}
      style={style}
      {...props}
    >
      {children}
    </ButtonBase>
  );
};
