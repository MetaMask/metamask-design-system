import React, { forwardRef } from 'react';

import { twMerge } from '../../../../utils/tw-merge';
import { ButtonBase } from '../../../ButtonBase';

import type { ButtonSecondaryProps } from './ButtonSecondary.types';

export const ButtonSecondary = forwardRef<
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
          'bg-muted text-default',
          // Loading state uses pressed color
          isLoading && 'bg-muted-pressed',
        ],
      // Danger styles
      isDanger &&
        !isInverse && [
          'bg-muted text-error-default',
          // Loading state uses pressed color
          isLoading && 'bg-muted-pressed',
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
        !isDanger &&
          !isInverse && ['hover:bg-muted-hover', 'active:bg-muted-pressed'],
        isDanger &&
          !isInverse && ['hover:bg-muted-hover', 'active:bg-muted-pressed'],
        isInverse && !isDanger && ['hover:bg-hover', 'active:bg-pressed'],
        isInverse &&
          isDanger && ['hover:bg-default-hover', 'active:bg-default-pressed'],
      ],
      // eslint-disable-next-line better-tailwindcss/sort-classes -- outline-none before ring-0 to match prior class order (limit release diff)
      'focus-visible:outline-none focus-visible:ring-0',
      // TODO: Remove `focus-visible:outline` when dropping Tailwind v3 — v4's outline-2 implies outline-style: solid
      /* eslint-disable better-tailwindcss/no-conflicting-classes -- Redundant outline+outline-2 kept to limit release diff; remove in follow-up (a72c63ac) */
      isInverse
        ? 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background-default'
        : 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-default',
      /* eslint-enable better-tailwindcss/no-conflicting-classes */
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
