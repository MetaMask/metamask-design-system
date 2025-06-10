import React, { forwardRef } from 'react';

import { twMerge } from '../../../../utils/tw-merge';
import { ButtonBase } from '../../../ButtonBase';

import type { ButtonPrimaryProps } from './ButtonPrimary.types';

export const ButtonPrimary = forwardRef<HTMLButtonElement, ButtonPrimaryProps>(
  (
    { className, isDanger, isInverse, isDisabled, isLoading, ...props },
    ref,
  ) => {
    const isInteractive = !(isDisabled ?? isLoading);

    const mergedClassName = twMerge(
      // Default primary styles
      !isDanger &&
        !isInverse && [
          'bg-icon-default text-primary-inverse',
          // Loading state uses pressed color
          isLoading && 'bg-icon-default-pressed',
        ],
      // Danger styles
      isDanger &&
        !isInverse && [
          'bg-error-default text-error-inverse',
          // Loading state uses pressed color
          isLoading && 'bg-error-default-pressed',
        ],
      // Inverse styles
      isInverse &&
        !isDanger && [
          'bg-default text-default',
          // Loading state uses pressed color
          isLoading && 'bg-default-pressed',
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
        !isDanger &&
          !isInverse && [
            'hover:bg-icon-default-hover',
            'active:bg-icon-default-pressed',
          ],
        isDanger &&
          !isInverse && [
            'hover:bg-error-default-hover',
            'active:bg-error-default-pressed',
          ],
        isInverse &&
          !isDanger && ['hover:bg-default-hover', 'active:bg-default-pressed'],
        isInverse &&
          isDanger && ['hover:bg-default-hover', 'active:bg-default-pressed'],
      ],
      'focus-visible:outline-none focus-visible:ring-0',
      isInverse
        ? 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background-default'
        : 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-default',
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

ButtonPrimary.displayName = 'ButtonPrimary';
