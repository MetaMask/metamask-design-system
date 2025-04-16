import React from 'react';

import { twMerge } from '../../../../utils/tw-merge';
import { ButtonBase } from '../../../ButtonBase';
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
          // Loading state uses error muted pressed color
          isLoading && 'bg-error-muted-pressed text-error-default-pressed',
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
      // Hover/Active states - only applied when interactive
      isInteractive && [
        'hover:bg-hover',
        'active:bg-pressed',
        isInverse &&
          isDanger && ['hover:bg-default-hover', 'active:bg-default-pressed'],
        isDanger &&
          !isInverse && [
            'hover:bg-error-muted-hover',
            'active:bg-error-muted-pressed',
          ],
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
