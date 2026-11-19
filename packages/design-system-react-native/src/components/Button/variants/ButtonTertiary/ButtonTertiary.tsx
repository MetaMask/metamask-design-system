import { resolveClassName } from '@metamask/design-system-shared';
import React, { useCallback } from 'react';

import { ButtonBase } from '../../../ButtonBase';

import type { ButtonTertiaryProps } from './ButtonTertiary.types';

// Internal Button variant.
// Consumers should use `Button` with `variant`.
export const ButtonTertiary = ({
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
}: ButtonTertiaryProps) => {
  const getContainerClassName = useCallback(
    (pressed: boolean): string => {
      const twClasses =
        typeof twClassName === 'function' ? twClassName(pressed) : twClassName;
      const classes =
        typeof className === 'function' ? className(pressed) : className;

      const baseClasses = `
        ${isInverse && !isDanger ? 'border-[1.5px]' : 'border-0'}
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
          pressed || isLoading ? 'bg-error-muted-pressed' : 'bg-transparent';
        borderClass =
          pressed || isLoading
            ? 'border-error-muted-pressed'
            : 'border-transparent';
      } else if (isInverse) {
        backgroundClass =
          pressed || isLoading ? 'bg-pressed' : 'bg-transparent';
        borderClass = 'border-primary-inverse';
      } else {
        backgroundClass =
          pressed || isLoading ? 'bg-pressed' : 'bg-transparent';
        borderClass =
          pressed || isLoading
            ? 'border-background-pressed'
            : 'border-transparent';
      }

      return resolveClassName(
        `${backgroundClass} ${borderClass} ${baseClasses}`,
        twClasses,
        classes,
      );
    },
    [isInverse, isDanger, isLoading, twClassName, className],
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
      // Use neutral text color for all states (default, pressed, loading)
      return 'text-default';
    },
    [isDanger, isInverse, isLoading],
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
