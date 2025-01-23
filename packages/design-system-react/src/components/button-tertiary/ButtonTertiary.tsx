import React from 'react';

import { twMerge } from '../../utils/tw-merge';
import { ButtonBase } from '../button-base';
import type { ButtonTertiaryProps } from './ButtonTertiary.types';

export const ButtonTertiary = React.forwardRef<
  HTMLButtonElement,
  ButtonTertiaryProps
>(
  (
    { className, isDanger, isInverse, isDisabled, isLoading, ...props },
    ref,
  ) => {
    const isInteractive = !(isDisabled ?? isLoading);

    const mergedClassName = twMerge(
      // Default tertiary styles
      !isDanger &&
        !isInverse && [
          'bg-transparent text-primary-default',
          // Loading state uses pressed color
          isLoading && 'bg-pressed',
        ],
      // Danger styles
      isDanger &&
        !isInverse && [
          'bg-transparent text-error-default',
          // Loading state uses pressed color
          isLoading && 'bg-pressed',
        ],
      // Inverse styles
      isInverse &&
        !isDanger && [
          'bg-transparent text-primary-inverse',
          // Loading state uses pressed color
          isLoading && 'bg-pressed',
        ],
      // Inverse danger styles
      isInverse &&
        isDanger && [
          'bg-default text-error-default',
          // Loading state uses pressed color
          isLoading && 'bg-default-pressed',
        ],
      // Animation classes - only applied when interactive
      isInteractive && [
        'transition-[transform,colors,opacity]',
        'duration-100',
        'ease-linear',
        // Hover states
        'hover:bg-hover',
        // Active/Pressed states
        'active:bg-pressed',
        // Scale animation
        'active:scale-[0.98]',
        'active:ease-[cubic-bezier(0.3,0.8,0.3,1)]',
      ],
      // Loading styles
      isLoading && 'cursor-not-allowed',
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
