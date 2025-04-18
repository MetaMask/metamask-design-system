import React from 'react';

import { twMerge } from '../../../../utils/tw-merge';
import { ButtonBase } from '../../../ButtonBase';
import type { ButtonSecondaryProps } from './ButtonSecondary.types';

export const ButtonSecondary = React.forwardRef<
  HTMLButtonElement,
  ButtonSecondaryProps
>(
  (
    { className, isDanger, isInverse, isDisabled, isLoading, ...props },
    ref,
  ) => {
    const isInteractive = !(isDisabled ?? isLoading);

    const mergedClassName = twMerge(
      // Default secondary styles
      !isDanger &&
        !isInverse && [
          'border-2 border-icon-muted bg-transparent text-default',
          // Loading state uses pressed color
          isLoading && 'bg-pressed',
        ],
      // Danger styles
      isDanger &&
        !isInverse && [
          'border-2 border-error-default bg-error-muted text-error-default',
          // Loading state uses error muted pressed color
          isLoading && 'bg-error-muted-pressed text-error-default-pressed',
        ],
      // Inverse styles
      isInverse &&
        !isDanger && [
          'border-2 border-primary-inverse bg-transparent text-primary-inverse',
          // Loading state uses pressed color
          isLoading && 'bg-pressed',
        ],
      // Inverse danger styles
      isInverse &&
        isDanger && [
          'border-0 bg-default text-error-default',
          // Loading state uses pressed color
          isLoading && 'bg-default-pressed',
        ],
      // Hover/Active states - only applied when interactive
      isInteractive && [
        !isDanger && !isInverse && ['hover:bg-hover', 'active:bg-pressed'],
        isDanger &&
          !isInverse && [
            'hover:bg-error-muted-hover',
            'active:bg-error-muted-pressed',
          ],
        isInverse && !isDanger && ['hover:bg-hover', 'active:bg-pressed'],
        isInverse &&
          isDanger && ['hover:bg-default-hover', 'active:bg-default-pressed'],
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

ButtonSecondary.displayName = 'ButtonSecondary';
