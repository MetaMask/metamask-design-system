import { BoxBorderColor } from '@metamask/design-system-shared';
import React, { forwardRef } from 'react';

import { twMerge } from '../../utils/tw-merge';
import { Box } from '../Box';

import { TWCLASSMAP_SECTION_DIVIDER_BORDER_TOP_WIDTH } from './SectionDivider.constants';
import type { SectionDividerProps } from './SectionDivider.types';

/**
 * Horizontal line that separates stacked sections. Renders an `hr`.
 */
export const SectionDivider = forwardRef<HTMLHRElement, SectionDividerProps>(
  (
    {
      borderWidth = 1,
      borderColor = BoxBorderColor.BorderMuted,
      marginVertical = 5,
      className,
      style,
      ...props
    },
    ref,
  ) => (
    <Box
      {...props}
      asChild
      borderColor={borderColor}
      marginVertical={marginVertical}
      className={twMerge(
        'self-stretch border-0',
        TWCLASSMAP_SECTION_DIVIDER_BORDER_TOP_WIDTH[borderWidth],
        className,
      )}
      style={style}
    >
      <hr ref={ref} />
    </Box>
  ),
);

SectionDivider.displayName = 'SectionDivider';
