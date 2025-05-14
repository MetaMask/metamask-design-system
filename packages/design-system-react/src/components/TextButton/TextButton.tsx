import React from 'react';

import { TextButtonSize } from '../../types';
import { twMerge } from '../../utils/tw-merge';
import { ButtonBase } from '../ButtonBase';

import { MAP_TEXTBUTTON_SIZE_TEXTVARIANT } from './TextButton.constants';
import type { TextButtonProps } from './TextButton.types';

export const TextButton = React.forwardRef<HTMLButtonElement, TextButtonProps>(
  (
    {
      className,
      isInverse,
      isDisabled,
      size = TextButtonSize.BodyMd,
      textProps,
      ...props
    },
    ref,
  ) => {
    const mergedClassName = twMerge(
      // Reset padding, height and animations
      'h-auto rounded-none bg-transparent px-0',
      'transform-none transition-none active:scale-100',
      // Default text button styles
      !isInverse && 'text-primary-default',
      // Inverse styles
      isInverse && 'text-primary-inverse',
      // Hover/Active states - only applied when interactive
      !isDisabled && [
        !isInverse && [
          'hover:bg-hover hover:text-primary-default-hover hover:underline hover:decoration-primary-default-hover hover:decoration-2 hover:underline-offset-4',
          'active:bg-pressed active:text-primary-default-pressed active:decoration-primary-default-pressed',
        ],
        isInverse && [
          'hover:bg-hover hover:text-primary-inverse hover:underline hover:decoration-primary-inverse hover:decoration-2 hover:underline-offset-4',
          'active:bg-pressed active:text-primary-inverse active:decoration-primary-inverse',
        ],
      ],
      // Disabled styles
      isDisabled && ['opacity-50', 'cursor-not-allowed'],
      className,
    );

    return (
      <ButtonBase
        ref={ref}
        className={mergedClassName}
        isDisabled={isDisabled}
        textProps={{
          variant: MAP_TEXTBUTTON_SIZE_TEXTVARIANT[size],
          ...textProps,
        }}
        {...props}
      />
    );
  },
);

TextButton.displayName = 'TextButton';
