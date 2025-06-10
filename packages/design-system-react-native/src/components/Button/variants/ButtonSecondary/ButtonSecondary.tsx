import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useCallback } from 'react';

import { ButtonBase } from '../../../ButtonBase';
import type { IconColor } from '../../../Icon';
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
  const tw = useTailwind();

  const getContainerClassName = useCallback(
    (pressed: boolean): string => {
      const baseClasses = `
        border-[1.5px]
        ${twClassName}
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
      } else {
        backgroundClass = isInverse
          ? pressed || isLoading
            ? 'bg-pressed'
            : 'bg-transparent'
          : pressed || isLoading
            ? 'bg-muted-pressed'
            : 'bg-muted';
        borderClass = isInverse
          ? 'border-primary-inverse'
          : 'border-transparent';
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
      } else if (isInverse) {
        return 'text-primary-inverse';
      } else {
        return 'text-default';
      }
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
