import { BoxBorderColor } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { forwardRef } from 'react';
import type { View } from 'react-native';

import { Box } from '../Box';

import type { SectionDividerProps } from './SectionDivider.types';

export const SectionDivider = forwardRef<View, SectionDividerProps>(
  (
    { borderWidth, borderColor, marginVertical, twClassName, style, ...props },
    ref,
  ) => {
    const tw = useTailwind();
    const borderTopWidth = borderWidth ?? 1;
    let borderTopClass: string;
    if (borderTopWidth === 0) {
      borderTopClass = 'border-t-0';
    } else if (borderTopWidth === 1) {
      borderTopClass = 'border-t';
    } else {
      borderTopClass = `border-t-${borderTopWidth}`;
    }

    return (
      <Box
        {...props}
        ref={ref}
        borderColor={borderColor ?? BoxBorderColor.BorderMuted}
        marginVertical={marginVertical ?? 5}
        style={[tw.style('self-stretch', borderTopClass, twClassName), style]}
      />
    );
  },
);

SectionDivider.displayName = 'SectionDivider';
