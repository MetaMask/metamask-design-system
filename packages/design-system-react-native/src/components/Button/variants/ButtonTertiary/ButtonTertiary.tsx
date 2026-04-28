import React, { useCallback } from 'react';

import { ButtonBase } from '../../../ButtonBase';
import { IconSize } from '../../../Icon';
import { TextVariant, FontWeight } from '../../../Text';

import type { ButtonTertiaryProps } from './ButtonTertiary.types';

// eslint-disable-next-line jsdoc/require-param, jsdoc/require-returns
/**
 * Internal variant of `Button`.
 * Consumers should use `Button` with `variant`; this variant component is not part of the public package API.
 */
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
  style,
  ...props
}: ButtonTertiaryProps) => {
  const getContainerClassName = useCallback(
    (pressed: boolean): string => {
      const classNameStr =
        typeof twClassName === 'function' ? twClassName(pressed) : twClassName;

      const baseClasses = `
        ${isInverse && !isDanger ? 'border-[1.5px]' : 'border-0'}
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
      // Use neutral text color for all states (default, pressed, loading)
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
