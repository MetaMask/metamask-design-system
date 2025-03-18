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
    const shapeXOffset =
      positionAnchorShape === BadgeWrapperPositionAnchorShape.Rectangular
        ? 0
        : anchorWidth * 0.14;
    const shapeYOffset =
      positionAnchorShape === BadgeWrapperPositionAnchorShape.Rectangular
        ? 0
        : anchorHeight * 0.14;
    const badgeCenteringXOffset = badgeWidth / 2;
    const badgeCenteringYOffset = badgeHeight / 2;
    const finalXOffset = shapeXOffset - badgeCenteringXOffset + positionXOffset;
    const finalYOffset = shapeYOffset - badgeCenteringYOffset + positionYOffset;
    switch (position) {
      case BadgeWrapperPosition.TopRight:
        return {
          top: finalYOffset,
          right: finalXOffset,
        };
      case BadgeWrapperPosition.BottomRight:
        return {
          bottom: finalYOffset,
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
      default:
        return customPosition;
    }
  }, [
    anchorWidth,
    anchorHeight,
    badgeWidth,
    badgeHeight,
    positionXOffset,
    positionYOffset,
  ]);

  return (
    <View style={tw`relative self-start`}>
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
