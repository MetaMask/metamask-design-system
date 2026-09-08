import {
  BoxBackgroundColor,
  BoxBorderColor,
} from '@metamask/design-system-shared';
import type { KeyboardEvent } from 'react';
import React, { forwardRef } from 'react';

import { twMerge } from '../../utils/tw-merge';
import { Box } from '../Box';

import type { CardProps } from './Card.types';

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className,
      onClick,
      onKeyDown,
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
    const isInteractive = Boolean(onClick);
    // An `asChild` child such as a link or a button brings its own role, focus
    // behavior, and keyboard activation, so only the div needs affordances.
    const needsButtonAffordances = isInteractive && !asChild;

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
      onKeyDown?.(event);

      // Only activate when the card itself has focus. A keydown bubbling up
      // from an interactive child must keep that child's own behavior.
      if (
        event.target !== event.currentTarget ||
        event.defaultPrevented ||
        (event.key !== 'Enter' && event.key !== ' ')
      ) {
        return;
      }

      // Keep Space from scrolling the page, then dispatch a real click so
      // `onClick` still receives a MouseEvent.
      event.preventDefault();
      event.currentTarget.click();
    };

    return (
      <Box
        ref={ref}
        asChild={asChild}
        flexDirection={flexDirection}
        padding={padding}
        borderWidth={borderWidth}
        borderColor={borderColor}
        backgroundColor={backgroundColor}
        className={twMerge(
          // Box only emits a display class when flexDirection is set, and this
          // className overrides Box's own classes, so skip `block` in that case.
          !flexDirection && 'block',
          'rounded text-default',
          // An `asChild` child shrinks to fit its content, unlike a div.
          asChild && 'w-full',
          isInteractive &&
            'cursor-pointer hover:bg-default-hover active:bg-default-pressed',
          className,
        )}
        onClick={onClick}
        onKeyDown={needsButtonAffordances ? handleKeyDown : onKeyDown}
        role={needsButtonAffordances ? 'button' : undefined}
        tabIndex={needsButtonAffordances ? 0 : undefined}
        {...props}
      >
        {children}
      </Box>
    );
  },
);

Card.displayName = 'Card';
