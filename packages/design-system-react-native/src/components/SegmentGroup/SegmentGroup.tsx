import { SegmentGroupContext } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useMemo } from 'react';
import { ScrollView } from 'react-native';

import type { SegmentGroupProps } from './SegmentGroup.types';

export const SegmentGroup = ({
  value,
  onChange,
  variant,
  children,
  twClassName,
  style,
  contentContainerStyle,
  ...scrollRest
}: SegmentGroupProps) => {
  const tw = useTailwind();

  const contextValue = useMemo(
    () => ({ value, onChange, variant }),
    [value, onChange, variant],
  );

  return (
    <SegmentGroupContext.Provider value={contextValue}>
      <ScrollView
        {...scrollRest}
        horizontal
        showsHorizontalScrollIndicator={false}
        accessibilityRole="tablist"
        style={[tw.style('self-stretch'), style]}
        contentContainerStyle={[
          tw.style('flex-row items-center gap-2', twClassName),
          contentContainerStyle,
        ]}
      >
        {children}
      </ScrollView>
    </SegmentGroupContext.Provider>
  );
};

SegmentGroup.displayName = 'SegmentGroup';
