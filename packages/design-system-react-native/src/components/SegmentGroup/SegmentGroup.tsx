import {
  BoxAlignItems,
  BoxFlexDirection,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useMemo } from 'react';
import { ScrollView } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

import { TWCLASSMAP_BOX_GAP } from '../Box/Box.constants';

import type { SegmentGroupProps } from './SegmentGroup.types';
import { SegmentGroupContext } from './SegmentGroupContext';

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

  const mergedContentContainerStyle: StyleProp<ViewStyle> = [
    tw.style(
      'flex',
      BoxFlexDirection.Row,
      BoxAlignItems.Center,
      TWCLASSMAP_BOX_GAP[3],
      twClassName,
    ),
    contentContainerStyle,
  ];

  return (
    <SegmentGroupContext.Provider value={contextValue}>
      <ScrollView
        {...scrollRest}
        horizontal
        showsHorizontalScrollIndicator={false}
        accessibilityRole="tablist"
        style={[tw.style('self-stretch'), style]}
        contentContainerStyle={mergedContentContainerStyle}
      >
        {children}
      </ScrollView>
    </SegmentGroupContext.Provider>
  );
};

SegmentGroup.displayName = 'SegmentGroup';
