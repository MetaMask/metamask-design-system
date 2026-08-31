import {
  BadgeWrapperPosition,
  BadgeWrapperPositionAnchorShape,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useMemo } from 'react';
import type { DimensionValue, StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';

import type { BadgeWrapperProps } from './BadgeWrapper.types';

// How far a circle inscribed in a square sits from the square's corner,
// as a fraction of its side. Used to pull the badge in from the anchor's
// bounding-box corner to where a circular anchor actually curves.
const CIRCULAR_ANCHOR_CORNER_OFFSET_RATIO = (2 - Math.sqrt(2)) / 4;
const CIRCULAR_ANCHOR_CORNER_OFFSET_PERCENT: DimensionValue = `${
  CIRCULAR_ANCHOR_CORNER_OFFSET_RATIO * 100
}%` as DimensionValue;

/**
 * Computes the badge's position style using percentage insets and a
 * percentage-based transform, so the layout engine can resolve everything
 * in one pass. No `onLayout` measuring, so no extra render pass and no
 * jump once a measurement comes back.
 *
 * @param options - The options for computing the position style.
 * @param options.position - Where the badge should sit relative to the anchor.
 * @param options.positionAnchorShape - The shape of the anchor element.
 * @param options.positionXOffset - Additional horizontal pixel offset.
 * @param options.positionYOffset - Additional vertical pixel offset.
 * @param options.customPosition - Bypasses this calculation entirely.
 * @returns The style to apply to the badge's absolutely-positioned container.
 */
const getBadgePositionStyle = ({
  position,
  positionAnchorShape,
  positionXOffset,
  positionYOffset,
  customPosition,
}: Pick<
  BadgeWrapperProps,
  | 'position'
  | 'positionAnchorShape'
  | 'positionXOffset'
  | 'positionYOffset'
  | 'customPosition'
>): StyleProp<ViewStyle> => {
  if (customPosition) {
    return customPosition;
  }

  const shapeOffset: DimensionValue =
    positionAnchorShape === BadgeWrapperPositionAnchorShape.Rectangular
      ? 0
      : CIRCULAR_ANCHOR_CORNER_OFFSET_PERCENT;
  const isTop =
    position === BadgeWrapperPosition.TopRight ||
    position === BadgeWrapperPosition.TopLeft;
  const isLeft =
    position === BadgeWrapperPosition.TopLeft ||
    position === BadgeWrapperPosition.BottomLeft;

  return {
    ...(isTop ? { top: shapeOffset } : { bottom: shapeOffset }),
    ...(isLeft ? { left: shapeOffset } : { right: shapeOffset }),
    // Centers the badge on that corner point using its own size (percentage
    // translate), then nudges it by any pixel offsets.
    transform: [
      { translateY: isTop ? '-50%' : '50%' },
      { translateY: positionYOffset },
      { translateX: isLeft ? '-50%' : '50%' },
      { translateX: positionXOffset },
    ],
  };
};

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

  const badgePositionStyle = useMemo(
    () =>
      getBadgePositionStyle({
        position,
        positionAnchorShape,
        positionXOffset,
        positionYOffset,
        customPosition,
      }),
    [
      position,
      positionAnchorShape,
      positionXOffset,
      positionYOffset,
      customPosition,
    ],
  );

  return (
    <View
      {...props}
      style={[tw.style('relative self-start', twClassName), style]}
    >
      <View {...childrenContainerProps}>{children}</View>
      <View
        style={[tw.style('absolute'), badgePositionStyle]}
        {...badgeContainerProps}
      >
        {badge}
      </View>
    </View>
  );
};
