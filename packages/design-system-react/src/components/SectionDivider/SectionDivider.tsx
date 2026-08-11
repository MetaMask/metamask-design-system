import { BoxBorderColor } from '@metamask/design-system-shared';
import React, { forwardRef } from 'react';

import { twMerge } from '../../utils/tw-merge';
import { Box } from '../Box';

import type { SectionDividerProps } from './SectionDivider.types';

/**
 * Horizontal rule built on `Box`. Stretches on the cross axis by default, uses
 * a 1px muted **top-only** border so the line reads as a single hairline, and
 * applies vertical margin from the design scale.
 */
export const SectionDivider = forwardRef<HTMLHRElement, SectionDividerProps>(
  (
    { borderWidth, borderColor, marginVertical, className, style, ...rest },
    ref,
  ) => {
    const w = borderWidth ?? 1;
    let borderTopClass: string;
    if (w === 0) {
      borderTopClass = 'border-t-0';
    } else if (w === 1) {
      borderTopClass = 'border-t';
    } else {
      borderTopClass = `border-t-${w}`;
    }

    return (
      <Box
        // Render a semantic <hr /> while preserving Box API and class mappings
        asChild
        // Cast is safe: Box forwards the ref to the child when asChild is used
        ref={ref as unknown as React.Ref<HTMLDivElement>}
        borderColor={borderColor ?? BoxBorderColor.BorderMuted}
        marginVertical={marginVertical ?? 5}
        className={twMerge('self-stretch border-0', borderTopClass, className)}
        style={style}
        {...rest}
      >
        <hr />
      </Box>
    );
  },
);

SectionDivider.displayName = 'SectionDivider';
