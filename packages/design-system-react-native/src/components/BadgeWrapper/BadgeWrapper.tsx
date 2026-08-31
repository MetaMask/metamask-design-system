import {
  BadgeWrapperPosition,
  BadgeWrapperPositionAnchorShape,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import type { DimensionValue, StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';

import type { BadgeWrapperProps } from './BadgeWrapper.types';

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
  const finalPositions: StyleProp<ViewStyle> = (() => {
    if (customPosition) {
      return customPosition as StyleProp<ViewStyle>;
    }
    const edgeInset: DimensionValue =
      positionAnchorShape === BadgeWrapperPositionAnchorShape.Circular ? 4 : 0;
    const isTop =
      position === BadgeWrapperPosition.TopRight ||
      position === BadgeWrapperPosition.TopLeft;
    const isLeft =
      position === BadgeWrapperPosition.TopLeft ||
      position === BadgeWrapperPosition.BottomLeft;
    const halfBadgeSize = 8;

    return {
      ...(isTop ? { top: edgeInset } : { bottom: edgeInset }),
      ...(isLeft ? { left: edgeInset } : { right: edgeInset }),
      transform: [
        {
          translateX:
            (isLeft ? -halfBadgeSize : halfBadgeSize) + positionXOffset,
        },
        {
          translateY:
            (isTop ? -halfBadgeSize : halfBadgeSize) + positionYOffset,
        },
      ],
    };
  })();

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
          {
            width: 16,
            height: 16,
            alignItems: 'center',
            justifyContent: 'center',
          },
          finalPositions,
          badgeContainerProps?.style,
        ]}
      >
        {badge}
      </View>
    </View>
  );
};
