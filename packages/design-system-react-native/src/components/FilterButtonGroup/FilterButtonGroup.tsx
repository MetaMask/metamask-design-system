import { FilterButtonGroupContext } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useMemo } from 'react';
import { ScrollView } from 'react-native';

import type { FilterButtonGroupProps } from './FilterButtonGroup.types';

export const FilterButtonGroup = ({
  value,
  onChange,
  variant,
  children,
  twClassName,
  style,
  contentContainerStyle,
  ...scrollRest
}: FilterButtonGroupProps) => {
  const tw = useTailwind();

  const contextValue = useMemo(
    () => ({ value, onChange, variant }),
    [value, onChange, variant],
  );

  return (
    <FilterButtonGroupContext.Provider value={contextValue}>
      <ScrollView
        {...scrollRest}
        horizontal
        showsHorizontalScrollIndicator={false}
        accessibilityRole="tablist"
        style={[tw.style('self-stretch'), style]}
        contentContainerStyle={[
          tw.style('flex flex-row items-center gap-1', twClassName),
          contentContainerStyle,
        ]}
      >
        {children}
      </ScrollView>
    </FilterButtonGroupContext.Provider>
  );
};

FilterButtonGroup.displayName = 'FilterButtonGroup';
