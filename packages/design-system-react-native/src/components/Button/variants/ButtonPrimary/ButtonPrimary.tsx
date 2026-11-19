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

      if (isInverse && isDanger) {
        return resolveClassName(
          pressed || isLoading ? 'bg-default-pressed' : 'bg-default',
          twClasses,
          classes,
        );
      }
      if (isDanger) {
        return resolveClassName(
          pressed || isLoading
            ? 'bg-error-default-pressed'
            : 'bg-error-default',
          twClasses,
          classes,
        );
      }
      if (isInverse) {
        return resolveClassName(
          pressed || isLoading ? 'bg-default-pressed' : 'bg-default',
          twClasses,
          classes,
        );
      }
      return resolveClassName(
        pressed || isLoading ? 'bg-icon-default-pressed' : 'bg-icon-default',
        twClasses,
        classes,
      );
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
