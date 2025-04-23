import React from 'react';

import { ButtonIconSize } from '../../types';
import { twMerge } from '../../utils/tw-merge';
import { Icon } from '../Icon';
import {
  TWCLASSMAP_BUTTONICON_SIZE_DIMENSION,
  MAP_BUTTONICON_SIZE_ICONSIZE,
} from './ButtonIcon.constants';
import type { ButtonIconProps } from './ButtonIcon.types';

export const ButtonIcon = React.forwardRef<HTMLButtonElement, ButtonIconProps>(
  (
    {
      className,
      iconName,
      iconProps,
      ariaLabel,
      isDisabled = false,
      isInverse = false,
      isFloating = false,
      size = ButtonIconSize.Md,
      style,
      ...props
    },
    ref,
  ) => {
    const isInteractive = !isDisabled;

    const mergedClassName = twMerge(
      // Base styles
      'inline-flex items-center justify-center p-0',
      // Size styles
      TWCLASSMAP_BUTTONICON_SIZE_DIMENSION[size],
      // Floating styles
      isFloating && [
        'rounded-full',
        !isInverse && 'bg-icon-default text-background-default',
        isInverse && 'bg-icon-default text-background-default',
      ],
      // Non-floating styles
      !isFloating && [
        'rounded bg-transparent',
        // Only apply hover/active styles when interactive
        isInteractive && 'hover:bg-hover active:bg-pressed',
        !isInverse && 'text-icon-default',
        isInverse && 'text-background-default',
      ],
      // Disabled state
      isDisabled && 'cursor-not-allowed opacity-50',
      className,
    );

    return (
      <button
        ref={ref}
        className={mergedClassName}
        disabled={isDisabled}
        aria-label={ariaLabel}
        {...props}
      >
        <Icon
          name={iconName}
          size={MAP_BUTTONICON_SIZE_ICONSIZE[size]}
          className={twMerge('text-inherit', iconProps?.className)}
          {...iconProps}
        />
      </button>
    );
  },
);

ButtonIcon.displayName = 'ButtonIcon';
