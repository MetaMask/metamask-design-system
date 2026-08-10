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
export const SectionDivider = forwardRef<HTMLDivElement, SectionDividerProps>(
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
        ref={ref}
        borderColor={borderColor ?? BoxBorderColor.BorderMuted}
        marginVertical={marginVertical ?? 5}
        className={twMerge('self-stretch', borderTopClass, className)}
        style={style}
        {...rest}
      />
    );
  },
);

SectionDivider.displayName = 'SectionDivider';
