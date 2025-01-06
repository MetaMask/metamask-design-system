import React from 'react';

import { twMerge } from '../../utils/tw-merge';
import { ButtonBase, ButtonBaseSize } from '../button-base';
import { ButtonLinkSize } from './ButtonLink.types';
import type { ButtonLinkProps } from './ButtonLink.types';

const mapToButtonBaseSize = (size: ButtonLinkSize): ButtonBaseSize => {
  if (size === ButtonLinkSize.Auto) {
    return ButtonBaseSize.Md;
  }
  return size as unknown as ButtonBaseSize;
};

export const ButtonLink = React.forwardRef<HTMLButtonElement, ButtonLinkProps>(
  (
    {
      className,
      isDanger,
      isDisabled,
      isLoading,
      size = ButtonLinkSize.Md,
      ...props
    },
    ref,
  ) => {
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
      size === ButtonLinkSize.Auto && 'inline p-0 h-auto',
      className,
    );

    return (
      <ButtonBase
        ref={ref}
        className={mergedClassName}
        isDisabled={isDisabled}
        isLoading={isLoading}
        size={mapToButtonBaseSize(size)}
        {...props}
      />
    );
  },
);

ButtonLink.displayName = 'ButtonLink';
