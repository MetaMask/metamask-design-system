import React, { forwardRef } from 'react';

import { ButtonIconSize, ButtonIconVariant } from '../../types';
import { twMerge } from '../../utils/tw-merge';
import { Icon } from '../Icon';

import {
  TWCLASSMAP_BUTTONICON_SIZE_DIMENSION,
  MAP_BUTTONICON_SIZE_ICONSIZE,
} from './ButtonIcon.constants';
import type { ButtonIconProps } from './ButtonIcon.types';

export const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
  (
    {
      className,
      iconName,
      iconProps,
      ariaLabel,
      isDisabled = false,
      variant = ButtonIconVariant.Default,
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
      // Variant styles
      variant === ButtonIconVariant.Default && [
        'rounded-lg bg-transparent',
        isInteractive && 'hover:bg-hover active:bg-pressed',
        'text-icon-default',
      ],
      variant === ButtonIconVariant.Floating && [
        'rounded-full',
        'bg-icon-default text-background-default',
      ],
      variant === ButtonIconVariant.Filled && [
        'rounded-full',
        'bg-muted text-icon-default',
        isInteractive && 'hover:bg-muted-hover active:bg-muted-pressed',
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
        style={style}
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
