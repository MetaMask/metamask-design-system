import { BoxBorderColor } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { forwardRef } from 'react';
import type { View } from 'react-native';

import { Box } from '../Box';

import type { SectionDividerProps } from './SectionDivider.types';

export const SectionDivider = forwardRef<View, SectionDividerProps>(
  (
    { borderWidth, borderColor, marginVertical, twClassName, style, ...rest },
    ref,
  ) => {
    const tw = useTailwind();
    const w = borderWidth ?? 1;
    const borderTopClass =
      w === 0 ? 'border-t-0' : w === 1 ? 'border-t' : `border-t-${w}`;

    return (
      <Box
        ref={ref}
        borderColor={borderColor ?? BoxBorderColor.BorderMuted}
        marginVertical={marginVertical ?? 5}
        style={[tw.style('self-stretch', borderTopClass, twClassName), style]}
        {...rest}
      />
    );
  },
);

SectionDivider.displayName = 'SectionDivider';
