import {
  BoxAlignItems,
  BoxFlexDirection,
} from '@metamask/design-system-shared';
import React, { useMemo } from 'react';

import { Box } from '../Box';

import type { SegmentGroupProps } from './SegmentGroup.types';
import { SegmentGroupContext } from './SegmentGroupContext';

export const SegmentGroup = ({
  value,
  onChange,
  variant,
  children,
  twClassName,
  style,
  ...boxRest
}: SegmentGroupProps) => {
  const contextValue = useMemo(
    () => ({ value, onChange, variant }),
    [value, onChange, variant],
  );

  return (
    <SegmentGroupContext.Provider value={contextValue}>
      <Box
        {...boxRest}
        flexDirection={BoxFlexDirection.Row}
        alignItems={BoxAlignItems.Center}
        gap={3}
        accessibilityRole="tablist"
        twClassName={twClassName}
        style={style}
      >
        {children}
      </Box>
    </SegmentGroupContext.Provider>
  );
};

SegmentGroup.displayName = 'SegmentGroup';
