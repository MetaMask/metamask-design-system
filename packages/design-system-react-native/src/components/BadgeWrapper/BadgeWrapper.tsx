/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useCallback, useState, useMemo } from 'react';
import { View, LayoutChangeEvent } from 'react-native';

import type { BadgeWrapperProps } from './BadgeWrapper.types';
import {
  BadgeWrapperPositionAnchorShape,
  BadgeWrapperPosition,
} from './BadgeWrapper.types';

const BadgeWrapper = ({
  children,
  badge,
  position = BadgeWrapperPosition.BottomRight,
  positionAnchorShape = BadgeWrapperPositionAnchorShape.Circular,
  positionXOffset = 0,
  positionYOffset = 0,
  customPosition,
  twClassName = '',
  style,
  ...props
}: BadgeWrapperProps) => {
  const tw = useTailwind();
  const [anchorWidth, setAnchorWidth] = useState<number>(0);
  const [anchorHeight, setAnchorHeight] = useState<number>(0);
  const [badgeWidth, setbadgeWidth] = useState<number>(0);
  const [badgeHeight, setbadgeHeight] = useState<number>(0);

  // Fetching the dimensions of the anchor and bagde element to properly position the badge
  const getAnchorSize = useCallback((event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setAnchorWidth(width);
    setAnchorHeight(height);
  }, []);
  const getBadgeSize = useCallback((event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setbadgeWidth(width);
    setbadgeHeight(height);
  }, []);

  const finalPositions = useMemo(() => {
    if (customPosition) {
      return customPosition;
    }
    // 0.1464 is a mathematical coeeficient to move
    // from a 0,0 corner of a rectangular shape to the closest "corner"
    // of a circular shape anchor element
    const anchorShapeXOffset =
      positionAnchorShape === BadgeWrapperPositionAnchorShape.Rectangular
        ? 0
        : anchorWidth * 0.1464;
    const anchorShapeYOffset =
      positionAnchorShape === BadgeWrapperPositionAnchorShape.Rectangular
        ? 0
        : anchorHeight * 0.1464;
    // This is to center the badge in the corner of the anchor element
    const badgeCenteringXOffset = badgeWidth / 2;
    const badgeCenteringYOffset = badgeHeight / 2;

    const finalXOffset =
      anchorShapeXOffset - badgeCenteringXOffset + positionXOffset;
    const finalYOffset =
      anchorShapeYOffset - badgeCenteringYOffset + positionYOffset;
    switch (position) {
      case BadgeWrapperPosition.TopRight:
        return {
          top: finalYOffset,
          right: finalXOffset,
        };
      case BadgeWrapperPosition.BottomLeft:
        return {
          bottom: finalYOffset,
          left: finalXOffset,
        };
      case BadgeWrapperPosition.TopLeft:
        return {
          top: finalYOffset,
          left: finalXOffset,
        };
      case BadgeWrapperPosition.BottomRight:
      default:
        return {
          bottom: finalYOffset,
          right: finalXOffset,
        };
    }
  }, [
    position,
    positionAnchorShape,
    anchorWidth,
    anchorHeight,
    badgeWidth,
    badgeHeight,
    positionXOffset,
    positionYOffset,
    customPosition,
  ]);

  return (
    <View style={[tw`relative self-start`, style]} {...props}>
      <View onLayout={getAnchorSize}>{children}</View>
      <View
        onLayout={getBadgeSize}
        style={[tw`absolute`, { ...finalPositions }]}
      >
        {badge}
      </View>
    </View>
  );
};

export default BadgeWrapper;
