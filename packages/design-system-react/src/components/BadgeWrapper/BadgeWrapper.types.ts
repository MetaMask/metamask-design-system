import type { ComponentProps } from 'react';

import {
  BadgeWrapperPosition,
  BadgeWrapperCustomPosition,
  BadgeWrapperPositionAnchorShape,
} from '../../types';

/**
 * Badge component props.
 */
export type BadgeWrapperProps = {
  /**
   * Optional prop to determine the shape of the anchoring element.
   * This prop gets used along with position, positionXOffset, and positionYOffset
   * to determine the final position.
   * Possible values:
   *   BadgeWrapperPositionAnchorShape.Circular,
   * - BadgeWrapperPositionAnchorShape.Rectangular,
   * @default BadgeWrapperPositionAnchorShape.Circular
   */
  positionAnchorShape?: BadgeWrapperPositionAnchorShape;
  /**
   * Optional prop to control the preset position of the badge.
   * This prop gets used along with positionAnchorShape, positionXOffset, and positionYOffset
   * to determine the final position.
   * @default BadgeWrapperPosition.TopRight
   */
  position?: BadgeWrapperPosition;
  /**
   * Optional prop to move the preset position horizontally.
   * This prop gets used along with position, positionAnchorShape, and positionYOffset
   * to determine the final position.
   * @default 0
   */
  positionXOffset?: number;
  /**
   * Optional prop to move the preset position vertically.
   * This prop gets used along with position, positionAnchorShape, and positionXOffset
   * to determine the final position.
   * @default 0
   */
  positionYOffset?: number;
  /**
   * Optional prop to customize the position through the position object.
   * Position object - {top: 0, right: 0, bottom: 0, left: 0}
   */
  customPosition?: BadgeWrapperCustomPosition;
  /**
   * The element that the badge will attach itself to.
   */
  children: React.ReactNode;
  /**
   * Any element that will be placed in the position of the badge.
   */
  badge: React.ReactNode;
  /**
   * Optional prop for additional CSS classes to be applied to the BadgeWrapper component.
   * These classes will be merged with the component's default classes using twMerge.
   */
  className?: string;
  /**
   * Optional prop to control the style.
   */
  style?: React.CSSProperties;
  /**
   * Optional prop to add a test id to the BadgeWrapper
   */
  'data-testid'?: string;
} & ComponentProps<'div'>;
