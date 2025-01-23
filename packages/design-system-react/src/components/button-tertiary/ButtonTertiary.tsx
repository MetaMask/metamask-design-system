import React from 'react';

import { twMerge } from '../../utils/tw-merge';
import { ButtonBase } from '../button-base';
import type { ButtonTertiaryProps } from './ButtonTertiary.types';

export const ButtonTertiary = React.forwardRef<
  HTMLButtonElement,
  ButtonTertiaryProps
>(
  (
    { className, isDanger, isDisabled, isLoading, isInverse, ...props },
    ref,
  ) => {
    const isInteractive = !(isDisabled ?? isLoading);

    const mergedClassName = twMerge(
      // Base styles (always applied)
      'bg-transparent',

      // Text color based on variant combinations
      isDanger && !isInverse && 'text-error-default',
      !isDanger && !isInverse && 'text-primary-default',
      !isDanger && isInverse && 'text-primary-inverse',
      isDanger && isInverse && ['text-error-default', 'bg-default'],

      // Interactive styles when not disabled/loading
      isInteractive && [
        'transition-[transform,colors,opacity]',
        'duration-100',
        'ease-linear',
        'hover:bg-hover',
        'active:bg-pressed',
        'active:scale-[0.98]',
        'active:ease-[cubic-bezier(0.3,0.8,0.3,1)]',
      ],

      // Loading styles
      isLoading && [
        isDanger && isInverse ? 'bg-default-pressed' : 'bg-pressed',
        'cursor-not-allowed',
      ],

      // Disabled styles (but not loading)
      isDisabled && !isLoading && ['opacity-50', 'cursor-not-allowed'],

      className,
    );

    return (
      <ButtonBase
        ref={ref}
        className={mergedClassName}
        isDisabled={isDisabled}
        isLoading={isLoading}
        {...props}
      />
    );
  },
);

ButtonTertiary.displayName = 'ButtonTertiary';
