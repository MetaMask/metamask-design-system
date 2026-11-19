import { resolveClassName } from '@metamask/design-system-shared';
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
  className,
  style,
  ...props
}: ButtonPrimaryProps) => {
  const getContainerClassName = useCallback(
    (pressed: boolean): string => {
      const twClasses =
        typeof twClassName === 'function' ? twClassName(pressed) : twClassName;
      const classes =
        typeof className === 'function' ? className(pressed) : className;

      let backgroundClass =
        pressed || isLoading ? 'bg-icon-default-pressed' : 'bg-icon-default';
      if (isDanger && !isInverse) {
        backgroundClass =
          pressed || isLoading
            ? 'bg-error-default-pressed'
            : 'bg-error-default';
      } else if (isInverse) {
        backgroundClass =
          pressed || isLoading ? 'bg-default-pressed' : 'bg-default';
      }

      return resolveClassName(backgroundClass, twClasses, classes);
    },
    [isInverse, isDanger, isLoading, twClassName, className],
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
      className={getContainerClassName}
      textClassName={getTextClassName}
      iconClassName={getTextClassName}
      style={style}
      {...props}
    >
      {children}
    </ButtonBase>
  );
};
