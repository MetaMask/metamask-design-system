import React from 'react';

import { twMerge } from '../../utils/tw-merge';
import { ButtonBase } from '../button-base';
import type { ButtonLinkProps } from './ButtonLink.types';

export const ButtonLink = React.forwardRef<HTMLButtonElement, ButtonLinkProps>(
  ({ className, isDanger, isDisabled, isLoading, ...props }, ref) => {
    const isInteractive = !(isDisabled ?? isLoading);

    const mergedClassName = twMerge(
      // Base styles (always applied)
      'bg-transparent',
      // Text color based on variant
      isDanger ? 'text-error-default' : 'text-primary-default',
      // Interactive styles
      isInteractive && [
        'transition-[transform,colors,opacity]',
        'duration-100',
        'ease-linear',
        'hover:bg-hover',
        'active:bg-pressed',
        'active:scale-95',
        'active:ease-[cubic-bezier(0.3,0.8,0.3,1)]',
      ],
      // Disabled/Loading styles
      !isInteractive && ['opacity-50', 'cursor-not-allowed'],
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

ButtonLink.displayName = 'ButtonLink';
