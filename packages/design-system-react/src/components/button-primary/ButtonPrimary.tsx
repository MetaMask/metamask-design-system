import React from 'react';

import { twMerge } from '../../utils/tw-merge';
import { ButtonBase } from '../button-base';
import type { ButtonPrimaryProps } from './ButtonPrimary.types';

export const ButtonPrimary = React.forwardRef<
  HTMLButtonElement,
  ButtonPrimaryProps
>(
  (
    { className, isDanger, isInverse, isDisabled, isLoading, ...props },
    ref,
  ) => {
    const isInteractive = !(isDisabled ?? isLoading);

    const mergedClassName = twMerge(
      // Default primary styles
      !isDanger && !isInverse && 'bg-primary-default text-primary-inverse',
      // Danger styles
      isDanger && !isInverse && 'bg-error-default text-error-inverse',
      // Inverse styles
      isInverse && !isDanger && 'bg-default text-default',
      // Inverse danger styles
      isInverse && isDanger && 'bg-default text-error-default',
      // Animation classes - only applied when interactive
      isInteractive && [
        'transition-[transform,colors,opacity]',
        'duration-100',
        'ease-linear',
        // Hover states based on variant
        !isDanger && !isInverse && 'hover:bg-primary-default-hover',
        isDanger && !isInverse && 'hover:bg-error-default-hover',
        isInverse && !isDanger && 'hover:bg-default-hover',
        isInverse && isDanger && 'hover:bg-default-hover',
        // Active/Pressed states
        !isDanger && !isInverse && 'active:bg-primary-default-pressed',
        isDanger && !isInverse && 'active:bg-error-default-pressed',
        isInverse && !isDanger && 'active:bg-default-pressed',
        isInverse && isDanger && 'active:bg-default-pressed',
        // Scale animation
        'active:scale-95',
        'active:ease-[cubic-bezier(0.3,0.8,0.3,1)]', // TODO: Add to design tokens
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

ButtonPrimary.displayName = 'ButtonPrimary';
