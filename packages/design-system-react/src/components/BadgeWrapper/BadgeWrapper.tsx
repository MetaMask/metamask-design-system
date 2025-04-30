import React, {
  useState,
  useLayoutEffect,
  useMemo,
  useRef,
  CSSProperties,
} from 'react';

import {
  BadgeWrapperPosition,
  BadgeWrapperPositionAnchorShape,
} from '../../types';
import { twMerge } from '../../utils/tw-merge';
import type { BadgeWrapperProps } from './BadgeWrapper.types';

export const BadgeWrapper = React.forwardRef<HTMLDivElement, BadgeWrapperProps>(
  (
    {
      children,
      badge,
      position = BadgeWrapperPosition.BottomRight,
      positionAnchorShape = BadgeWrapperPositionAnchorShape.Circular,
      positionXOffset = 0,
      positionYOffset = 0,
      customPosition,
      className = '',
      style,
      ...props
    },
    ref,
  ) => {
    const [anchorWidth, setAnchorWidth] = useState(0);
    const [anchorHeight, setAnchorHeight] = useState(0);
    const [badgeWidth, setBadgeWidth] = useState(0);
    const [badgeHeight, setBadgeHeight] = useState(0);

    const anchorRef = useRef<HTMLDivElement | null>(null);
    const badgeRef = useRef<HTMLDivElement | null>(null);

    // Measure both elements once on mount
    useLayoutEffect(() => {
      if (anchorRef.current) {
        const { width, height } = anchorRef.current.getBoundingClientRect();
        setAnchorWidth(width);
        setAnchorHeight(height);
      }
      if (badgeRef.current) {
        const { width, height } = badgeRef.current.getBoundingClientRect();
        setBadgeWidth(width);
        setBadgeHeight(height);
      }
    }, []); // empty deps → run only after first render

    const finalPositions = useMemo<React.CSSProperties>(() => {
      if (customPosition) {
        return customPosition as CSSProperties;
      }

      const anchorShapeXOffset =
        positionAnchorShape === BadgeWrapperPositionAnchorShape.Rectangular
          ? 0
          : anchorWidth * 0.1464;
      const anchorShapeYOffset =
        positionAnchorShape === BadgeWrapperPositionAnchorShape.Rectangular
          ? 0
          : anchorHeight * 0.1464;

      const badgeCenteringXOffset = badgeWidth / 2;
      const badgeCenteringYOffset = badgeHeight / 2;

      const finalXOffset =
        anchorShapeXOffset - badgeCenteringXOffset + positionXOffset;
      const finalYOffset =
        anchorShapeYOffset - badgeCenteringYOffset + positionYOffset;

      switch (position) {
        case BadgeWrapperPosition.TopRight:
          return { top: finalYOffset, right: finalXOffset };
        case BadgeWrapperPosition.TopLeft:
          return { top: finalYOffset, left: finalXOffset };
        case BadgeWrapperPosition.BottomLeft:
          return { bottom: finalYOffset, left: finalXOffset };
        case BadgeWrapperPosition.BottomRight:
        default:
          return { bottom: finalYOffset, right: finalXOffset };
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

    const containerClassName = twMerge(
      'relative inline-flex self-start',
      className,
    );

    return (
      <div ref={ref} className={containerClassName} style={style} {...props}>
        <div className="inline-flex" ref={anchorRef}>
          {children}
        </div>

        <div ref={badgeRef} className="absolute" style={finalPositions}>
          {badge}
        </div>
      </div>
    );
  },
);

BadgeWrapper.displayName = 'BadgeWrapper';
