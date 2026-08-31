import {
  BadgeWrapperPosition,
  BadgeWrapperPositionAnchorShape,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import type { DimensionValue, StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';

import type { BadgeWrapperProps } from './BadgeWrapper.types';

const CIRCULAR_ANCHOR_EDGE_INSET: DimensionValue = '7%';
const RECTANGULAR_ANCHOR_EDGE_INSET: DimensionValue = '11%';

export const BadgeWrapper = ({
  children,
  childrenContainerProps,
  badge,
  badgeContainerProps,
  position = BadgeWrapperPosition.BottomRight,
  positionAnchorShape = BadgeWrapperPositionAnchorShape.Circular,
  positionXOffset = 0,
  positionYOffset = 0,
  customPosition,
  twClassName,
  style,
  ...props
}: BadgeWrapperProps) => {
  const tw = useTailwind();
  const isTop =
    position === BadgeWrapperPosition.TopRight ||
    position === BadgeWrapperPosition.TopLeft;
  const isLeft =
    position === BadgeWrapperPosition.TopLeft ||
    position === BadgeWrapperPosition.BottomLeft;
  const edgeInset =
    positionAnchorShape === BadgeWrapperPositionAnchorShape.Circular
      ? CIRCULAR_ANCHOR_EDGE_INSET
      : RECTANGULAR_ANCHOR_EDGE_INSET;
  const finalPositions: StyleProp<ViewStyle> = customPosition
    ? (customPosition as StyleProp<ViewStyle>)
    : {
        ...(isTop ? { top: edgeInset } : { bottom: edgeInset }),
        ...(isLeft ? { left: edgeInset } : { right: edgeInset }),
        transform: [
          { translateX: isLeft ? '-50%' : '50%' },
          { translateY: isTop ? '-50%' : '50%' },
          { translateX: positionXOffset },
          { translateY: positionYOffset },
        ],
      };

  return (
    <View
      {...props}
      style={[tw.style('relative flex-row self-start', twClassName), style]}
    >
      <View {...childrenContainerProps}>{children}</View>
      <View
        {...badgeContainerProps}
        style={[
          tw.style('absolute'),
          finalPositions,
          badgeContainerProps?.style,
        ]}
      >
        {badge}
      </View>
    </View>
  );
};
