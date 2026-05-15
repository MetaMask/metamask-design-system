import { BoxBorderColor } from '@metamask/design-system-shared';
import React, { forwardRef } from 'react';
import type { View } from 'react-native';

import { Box } from '../Box';

import type { SectionDividerProps } from './SectionDivider.types';

export const SectionDivider = forwardRef<View, SectionDividerProps>(
  (
    { borderWidth, borderColor, marginVertical, twClassName, style, ...rest },
    ref,
  ) => (
    <Box
      ref={ref}
      borderWidth={borderWidth ?? 1}
      borderColor={borderColor ?? BoxBorderColor.BorderMuted}
      marginVertical={marginVertical ?? 5}
      style={style}
      twClassName={`self-stretch ${twClassName ?? ''}`.trim()}
      {...rest}
    />
  ),
);

SectionDivider.displayName = 'SectionDivider';
