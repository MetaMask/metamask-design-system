import React from 'react';

import { twMerge } from '../../utils/tw-merge';
import { ButtonBase } from '../button-base';
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
          'bg-default border-2 border-muted text-default',
          // Only apply hover/active styles when interactive
          isInteractive && [
            'hover:bg-default-hover hover:border-default',
            'active:bg-default-pressed',
          ],
        ],
      // Danger styles
      isDanger &&
        !isInverse && [
          'bg-default border-2 border-error-default text-error-default',
          // Only apply hover/active styles when interactive
          isInteractive && [
            'hover:bg-default-hover',
            'active:bg-default-pressed',
          ],
        ],
      // Inverse styles
      isInverse &&
        !isDanger && [
          'bg-transparent border-2 border-primary-inverse text-primary-inverse',
          // Only apply hover/active styles when interactive
          isInteractive && ['hover:bg-hover', 'active:bg-pressed'],
        ],
      // Inverse danger styles
      isInverse &&
        isDanger && [
          'bg-transparent border-2 border-error-inverse text-error-inverse',
          // Only apply hover/active styles when interactive
          isInteractive && ['hover:bg-hover', 'active:bg-pressed'],
        ],
      // Animation classes - only applied when interactive
      isInteractive && [
        'transition-[transform,colors,opacity]',
        'duration-100',
        'ease-linear',
        // Scale animation
        'active:scale-95',
        'active:ease-[cubic-bezier(0.3,0.8,0.3,1)]',
      ],
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
