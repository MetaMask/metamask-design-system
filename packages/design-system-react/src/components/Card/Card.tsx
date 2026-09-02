import {
  BoxBackgroundColor,
  BoxBorderColor,
} from '@metamask/design-system-shared';
import React, { forwardRef } from 'react';

import { twMerge } from '../../utils/tw-merge';
import { Box } from '../Box';

import type { CardProps } from './Card.types';

export const Card = forwardRef<HTMLDivElement | HTMLButtonElement, CardProps>(
  (
    {
      children,
      className,
      onClick,
      asChild,
      flexDirection,
      padding = 4,
      borderWidth = 1,
      borderColor = BoxBorderColor.BorderDefault,
      backgroundColor = BoxBackgroundColor.BackgroundDefault,
      ...props
    },
    ref,
  ) => {
    const isPressable = Boolean(onClick) && !asChild;
    const mergedClassName = twMerge(
      // Box only emits a display class when flexDirection is set, and this
      // className overrides Box's own classes, so skip `block` in that case.
      !flexDirection && 'block',
      'rounded text-default',
      // A button or an asChild child shrinks to fit its content, unlike a div.
      (isPressable || asChild) && 'w-full',
      isPressable &&
        'cursor-pointer appearance-none text-start hover:bg-hover active:bg-pressed',
      className,
    );
    const boxRef = ref as React.Ref<HTMLDivElement>;

    const boxProps = {
      ...props,
      ref: boxRef,
      flexDirection,
      padding,
      borderWidth,
      borderColor,
      backgroundColor,
      className: mergedClassName,
    };

    if (asChild) {
      return (
        <Box asChild onClick={onClick} {...boxProps}>
          {children}
        </Box>
      );
    }

    if (onClick) {
      return (
        <Box asChild {...boxProps}>
          <button type="button" onClick={onClick}>
            {children}
          </button>
        </Box>
      );
    }

    return <Box {...boxProps}>{children}</Box>;
  },
);

Card.displayName = 'Card';
