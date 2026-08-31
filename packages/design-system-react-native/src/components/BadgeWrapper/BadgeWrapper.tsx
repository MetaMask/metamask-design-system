import {
  BadgeWrapperPosition,
  BadgeWrapperPositionAnchorShape,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useCallback, useState, useMemo, useRef } from 'react';
import type { LayoutChangeEvent } from 'react-native';
import { View } from 'react-native';

import type { BadgeWrapperProps } from './BadgeWrapper.types';

// Below this, a measurement is treated as noise rather than a real resize.
const STABLE_SIZE_THRESHOLD_PX = 1;

/**
 * Tracks a measured element's rounded width/height via `onLayout`.
 *
 * `BadgeWrapper` positions an element based on its own measured size, so
 * applying that position can shift the next measurement by a sub-pixel
 * amount, which can flip-flop forever without this guard. Rounding alone
 * isn't enough to prevent that: two raw values close enough together to be
 * noise can still round to different integers if they straddle a `.5`
 * boundary. Instead this only accepts a new size once it has moved a full
 * pixel away from the last accepted raw measurement (starting from
 * `-Infinity`, so the first real measurement is always accepted), which
 * absorbs sub-pixel noise regardless of where it falls, while still
 * reacting to genuine size changes.
 *
 * @returns A `[width, height, onLayout]` tuple.
 */
const useStableMeasuredSize = () => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const lastAcceptedRawRef = useRef({ width: -Infinity, height: -Infinity });

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    const { width: rawWidth, height: rawHeight } = event.nativeEvent.layout;
    const lastAccepted = lastAcceptedRawRef.current;
    const hasMoved =
      Math.abs(rawWidth - lastAccepted.width) >= STABLE_SIZE_THRESHOLD_PX ||
      Math.abs(rawHeight - lastAccepted.height) >= STABLE_SIZE_THRESHOLD_PX;
    if (!hasMoved) {
      return;
    }
    lastAcceptedRawRef.current = { width: rawWidth, height: rawHeight };
    setWidth(Math.round(rawWidth));
    setHeight(Math.round(rawHeight));
  }, []);

  return [width, height, onLayout] as const;
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
  // Fetching the dimensions of the anchor and badge element to properly position the badge
  const [anchorWidth, anchorHeight, getAnchorSize] = useStableMeasuredSize();
  const [badgeWidth, badgeHeight, getBadgeSize] = useStableMeasuredSize();

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
    <View
      {...props}
      style={[tw.style('relative self-start', twClassName), style]}
    >
      <View onLayout={getAnchorSize} {...childrenContainerProps}>
        {children}
      </View>
      <View
        onLayout={getBadgeSize}
        style={[tw.style('absolute'), { ...finalPositions }]}
        {...badgeContainerProps}
      >
        {badge}
      </View>
    </View>
  );
};
