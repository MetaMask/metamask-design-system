import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { Children } from 'react';
import { DimensionValue, View } from 'react-native';

import { Box, BoxAlignItems, BoxFlexDirection } from '../Box';

import {
  DEFAULT_LISTITEM_GAP,
  DEFAULT_LISTITEM_VERTICALALIGNMENT,
  TESTID_LISTITEM_BOTTOM_ACCESSORY_WRAPPER,
  TESTID_LISTITEM_GAP,
  TESTID_LISTITEM_TOP_ACCESSORY_WRAPPER,
} from './ListItem.constants';
import type { ListItemProps } from './ListItem.types';
import { ListItemVerticalAlignment } from './ListItem.types';

const VERTICAL_ALIGNMENT_MAP: Record<ListItemVerticalAlignment, BoxAlignItems> =
  {
    [ListItemVerticalAlignment.Top]: BoxAlignItems.Start,
    [ListItemVerticalAlignment.Center]: BoxAlignItems.Center,
    [ListItemVerticalAlignment.Bottom]: BoxAlignItems.End,
  };

export const ListItem: React.FC<ListItemProps> = ({
  children,
  topAccessory,
  bottomAccessory,
  topAccessoryGap,
  bottomAccessoryGap,
  gap = DEFAULT_LISTITEM_GAP,
  verticalAlignment = DEFAULT_LISTITEM_VERTICALALIGNMENT,
  twClassName,
  style,
  ...props
}) => {
  const tw = useTailwind();

  return (
    <Box
      style={
        style
          ? [tw.style('p-4', twClassName), style]
          : tw.style('p-4', twClassName)
      }
      {...props}
    >
      {topAccessory && (
        <View
          testID={TESTID_LISTITEM_TOP_ACCESSORY_WRAPPER}
          style={{ marginBottom: topAccessoryGap ?? 0 }}
        >
          {topAccessory}
        </View>
      )}
      <Box
        flexDirection={BoxFlexDirection.Row}
        alignItems={VERTICAL_ALIGNMENT_MAP[verticalAlignment]}
      >
        {Children.toArray(children)
          .filter((child) => Boolean(child))
          .map((child, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <View
                  style={{ width: gap as DimensionValue }}
                  testID={TESTID_LISTITEM_GAP}
                  accessible={false}
                />
              )}
              {child}
            </React.Fragment>
          ))}
      </Box>
      {bottomAccessory && (
        <View
          testID={TESTID_LISTITEM_BOTTOM_ACCESSORY_WRAPPER}
          style={{ marginTop: bottomAccessoryGap ?? 0 }}
        >
          {bottomAccessory}
        </View>
      )}
    </Box>
  );
};

ListItem.displayName = 'ListItem';
