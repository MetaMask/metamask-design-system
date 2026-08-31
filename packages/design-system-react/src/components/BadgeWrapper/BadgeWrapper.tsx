import {
  BadgeWrapperPosition,
  BadgeWrapperPositionAnchorShape,
} from '@metamask/design-system-shared';
import type { CSSProperties } from 'react';
import React, { forwardRef } from 'react';

import { twMerge } from '../../utils/tw-merge';

import type { BadgeWrapperProps } from './BadgeWrapper.types';

const STATIC_BADGE_SIZE = 16;
const CIRCULAR_ANCHOR_EDGE_INSET = 4;

export const BadgeWrapper = forwardRef<HTMLDivElement, BadgeWrapperProps>(
  (
    {
      children,
      childrenContainerProps,
      badge,
      badgeContainerProps,
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
    const finalPositions: React.CSSProperties = (() => {
      if (customPosition) {
        return customPosition as CSSProperties;
      }

      const edgeInset =
        positionAnchorShape === BadgeWrapperPositionAnchorShape.Circular
          ? CIRCULAR_ANCHOR_EDGE_INSET
          : 0;
      const isTop =
        position === BadgeWrapperPosition.TopRight ||
        position === BadgeWrapperPosition.TopLeft;
      const isLeft =
        position === BadgeWrapperPosition.TopLeft ||
        position === BadgeWrapperPosition.BottomLeft;

      return {
        ...(isTop ? { top: edgeInset } : { bottom: edgeInset }),
        ...(isLeft ? { left: edgeInset } : { right: edgeInset }),
        transform: `translate(${(isLeft ? -8 : 8) + positionXOffset}px, ${(isTop ? -8 : 8) + positionYOffset}px)`,
      };
    })();

    const containerClassName = twMerge(
      'relative inline-flex self-start',
      className,
    );

    return (
      <div ref={ref} className={containerClassName} style={style} {...props}>
        <div className="inline-flex" {...childrenContainerProps}>
          {children}
        </div>

        <div
          {...badgeContainerProps}
          className="absolute inline-flex size-4 items-center justify-center"
          style={{
            width: STATIC_BADGE_SIZE,
            height: STATIC_BADGE_SIZE,
            ...finalPositions,
            ...(badgeContainerProps?.style as CSSProperties),
          }}
        >
          {badge}
        </div>
      </div>
    );
  },
);

BadgeWrapper.displayName = 'BadgeWrapper';
