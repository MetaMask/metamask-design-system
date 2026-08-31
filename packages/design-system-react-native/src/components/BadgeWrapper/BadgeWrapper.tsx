import {
  BadgeWrapperPosition,
  BadgeWrapperPositionAnchorShape,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';

import type { BadgeWrapperProps } from './BadgeWrapper.types';

const CIRCULAR_BADGE_OVERLAP = -8;
const RECTANGULAR_BADGE_OVERLAP = -6;

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
  const badgeOverlap =
    positionAnchorShape === BadgeWrapperPositionAnchorShape.Circular
      ? CIRCULAR_BADGE_OVERLAP
      : RECTANGULAR_BADGE_OVERLAP;
  const finalPositions: StyleProp<ViewStyle> = customPosition
    ? (customPosition as StyleProp<ViewStyle>)
    : {
        ...(isTop ? { top: badgeOverlap } : { bottom: badgeOverlap }),
        ...(isLeft ? { left: badgeOverlap } : { right: badgeOverlap }),
        transform: [
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
