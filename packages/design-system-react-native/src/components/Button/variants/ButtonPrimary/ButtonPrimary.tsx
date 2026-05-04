import React, { useCallback } from 'react';

import { ButtonBase } from '../../../ButtonBase';

import type { ButtonPrimaryProps } from './ButtonPrimary.types';

// Internal Button variant.
// Consumers should use `Button` with `variant`.
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
  const getContainerClassName = useCallback(
    (pressed: boolean): string => {
      const classNameStr =
        typeof twClassName === 'function' ? twClassName(pressed) : twClassName;

      if (isInverse && isDanger) {
        return `${pressed || isLoading ? 'bg-default-pressed' : 'bg-default'} ${classNameStr}`;
      }
      if (isDanger) {
        return `${pressed || isLoading ? 'bg-error-default-pressed' : 'bg-error-default'} ${classNameStr}`;
      }
      if (isInverse) {
        return `${pressed || isLoading ? 'bg-default-pressed' : 'bg-default'} ${classNameStr}`;
      }
      return `${pressed || isLoading ? 'bg-icon-default-pressed' : 'bg-icon-default'} ${classNameStr}`;
    },
    [isInverse, isDanger, isLoading, twClassName],
  );

  const getTextClassName = useCallback(
    (pressed: boolean): string => {
      if (isInverse && isDanger) {
        return pressed || isLoading
          ? 'text-error-default-pressed'
          : 'text-error-default';
      }
      if (isDanger) {
        return 'text-primary-inverse';
      }
      if (isInverse) {
        return 'text-default';
      }
      return 'text-primary-inverse';
    },
    [isInverse, isDanger, isLoading],
  );

  return (
    <ButtonBase
      textProps={textProps}
      spinnerProps={spinnerProps}
      startIconProps={startIconProps}
      endIconProps={endIconProps}
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
