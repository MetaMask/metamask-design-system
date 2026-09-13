import {
  FilterButtonGroupContext,
  FilterButtonVariant,
  SegmentedControlSize,
  mergeTwClassName,
} from '@metamask/design-system-shared';
import React, { Children, useMemo } from 'react';

import { Box } from '../Box';

import type { SegmentedControlProps } from './SegmentedControl.types';

export const SegmentedControl = ({
  value,
  onChange,
  size = SegmentedControlSize.Sm,
  isFullWidth = false,
  children,
  twClassName,
  style,
  ...rest
}: SegmentedControlProps) => {
  const contextValue = useMemo(
    () => ({
      value,
      onChange,
      variant: FilterButtonVariant.Secondary,
      size,
      isEqualWidth: isFullWidth,
    }),
    [value, onChange, size, isFullWidth],
  );

  const widthClass = isFullWidth ? 'self-stretch' : 'self-start';

  return (
    <FilterButtonGroupContext.Provider value={contextValue}>
      <Box
        {...rest}
        accessibilityRole="tablist"
        twClassName={mergeTwClassName(
          `${widthClass} flex-row items-center gap-1 rounded-full border border-muted p-1`,
          twClassName,
        )}
        style={style}
      >
        {Children.map(children, (child, index) =>
          isFullWidth ? (
            <Box key={index} twClassName="flex-1">
              {child}
            </Box>
          ) : (
            <React.Fragment key={index}>{child}</React.Fragment>
          ),
        )}
      </Box>
    </FilterButtonGroupContext.Provider>
  );
};

SegmentedControl.displayName = 'SegmentedControl';
