import React, { useCallback } from 'react';

import { ButtonBase } from '../ButtonBase';

import type { ButtonFilterProps } from './ButtonFilter.types';

export const ButtonFilter: React.FC<ButtonFilterProps> = ({
  isActive = false,
  twClassName,
  textClassName,
  ...props
}) => {
  const getTextClassName = useCallback(
    (pressed: boolean) => {
      const baseTextClassName = isActive ? 'text-icon-inverse' : 'text-default';
      const customTextClassName = textClassName?.(pressed);

      return [baseTextClassName, customTextClassName].filter(Boolean).join(' ');
    },
    [isActive, textClassName],
  );

  const getTwClassName = useCallback(
    (pressed: boolean) => {
      const baseTwClassName = isActive
        ? 'bg-icon-default'
        : 'bg-background-muted';
      const customTwClassName =
        typeof twClassName === 'function' ? twClassName(pressed) : twClassName;

      return [baseTwClassName, customTwClassName].filter(Boolean).join(' ');
    },
    [isActive, twClassName],
  );

  return (
    <ButtonBase
      textClassName={getTextClassName}
      twClassName={getTwClassName}
      {...props}
    />
  );
};
