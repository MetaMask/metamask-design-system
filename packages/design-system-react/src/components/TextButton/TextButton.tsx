import React from 'react';

import { twMerge } from '../../utils/tw-merge';
import { ButtonBase } from '../ButtonBase';
import { TextVariant } from '../Text';
import type { TextButtonProps } from './TextButton.types';

export const TextButton = React.forwardRef<HTMLButtonElement, TextButtonProps>(
  (
    {
      className,
      isInverse,
      isDisabled,
      isLoading,
      textVariant = TextVariant.BodyMd,
      textProps,
      ...props
    },
    ref,
  ) => {
    const isInteractive = !(isDisabled ?? isLoading);

    const mergedClassName = twMerge(
      // Reset padding, height and animations
      'px-0 h-auto bg-transparent rounded-none',
      'transform-none transition-none active:scale-100',
      // Default text button styles
      !isInverse && [
        'text-primary-default',
        // Loading state uses pressed color
        isLoading && 'text-primary-default-pressed',
      ],
      // Inverse styles
      isInverse && [
        'text-primary-inverse',
        // Loading state uses pressed color
        isLoading && 'text-primary-inverse',
      ],
      // Hover/Active states - only applied when interactive
      isInteractive && [
        !isInverse && [
          'hover:bg-hover hover:text-primary-default-hover hover:underline hover:decoration-2 hover:underline-offset-4 hover:decoration-primary-default-hover',
          'active:bg-pressed active:text-primary-default-pressed active:decoration-primary-default-pressed',
        ],
        isInverse && [
          'hover:bg-hover hover:text-primary-inverse hover:underline hover:decoration-2 hover:underline-offset-4 hover:decoration-primary-inverse',
          'active:bg-pressed active:text-primary-inverse active:decoration-primary-inverse',
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
        textProps={{
          variant: textVariant,
          ...textProps,
        }}
        {...props}
      />
    );
  },
);

TextButton.displayName = 'TextButton';
