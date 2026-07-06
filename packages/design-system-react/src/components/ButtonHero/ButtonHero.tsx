import React, { forwardRef } from 'react';

import { twMerge } from '../../utils/tw-merge';
import { ButtonBase } from '../ButtonBase';

import type { ButtonHeroProps } from './ButtonHero.types';

export const ButtonHero = forwardRef<HTMLButtonElement, ButtonHeroProps>(
  ({ className, isDisabled, isLoading, ...props }, ref) => {
    const isInteractive = !(isDisabled || isLoading);

    const mergedClassName = twMerge(
      // Base hero styles - locked to light theme primary colors
      'bg-primary-default text-primary-inverse',
      // Loading state
      isLoading && 'bg-primary-default-pressed',
      // Hover/Active states - only applied when interactive
      isInteractive && [
        'hover:bg-primary-default-hover',
        'active:bg-primary-default-pressed',
      ],
      'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-default',
      className,
    );

    return (
      <ButtonBase
        ref={ref}
        className={mergedClassName}
        isDisabled={isDisabled}
        isLoading={isLoading}
        data-theme="light"
        {...props}
      />
    );
  },
);

ButtonHero.displayName = 'ButtonHero';
