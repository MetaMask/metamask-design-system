import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useCallback } from 'react';

import { ButtonBase } from '../../../ButtonBase';
import type { IconColor } from '../../../Icon';
import { IconSize } from '../../../Icon';
import { TextVariant, FontWeight } from '../../../Text';

import type { ButtonPrimaryProps } from './ButtonPrimary.types';

export const ButtonPrimary = ({
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
}: ButtonPrimaryProps) => {
  const tw = useTailwind();

  const getContainerClassName = useCallback(
    (pressed: boolean): string => {
      if (isInverse && isDanger) {
        return `${pressed || isLoading ? 'bg-default-pressed' : 'bg-default'} ${twClassName}`;
      } else if (isDanger) {
        return `${pressed || isLoading ? 'bg-error-default-pressed' : 'bg-error-default'} ${twClassName}`;
      } else if (isInverse) {
        return `${pressed || isLoading ? 'bg-default-pressed' : 'bg-default'} ${twClassName}`;
      } else {
        return `${pressed || isLoading ? 'bg-icon-default-pressed' : 'bg-icon-default'} ${twClassName}`;
      }
    },
    [isInverse, isDanger, isLoading, twClassName],
  );

  const getTextClassName = useCallback(
    (pressed: boolean): string => {
      if (isInverse && isDanger) {
        return pressed || isLoading
          ? 'text-error-default-pressed'
          : 'text-error-default';
      } else if (isDanger) {
        return 'text-primary-inverse';
      } else if (isInverse) {
        return 'text-default';
      } else {
        return 'text-primary-inverse';
      }
    },
    [isInverse, isDanger, isLoading],
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
