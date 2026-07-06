/**
 * BadgeWrapper - positionAnchorShape
 * Convert from enum to const object (ADR-0003)
 */
export const BadgeWrapperPositionAnchorShape = {
  /**
   * Represents a rectangular anchoring shape
   */
  Rectangular: 'rectangular',
  /**
   * Represents a circular anchoring shape
   */
  Circular: 'circular',
} as const;
export type BadgeWrapperPositionAnchorShape =
  (typeof BadgeWrapperPositionAnchorShape)[keyof typeof BadgeWrapperPositionAnchorShape];

/**
 * BadgeWrapper - position
 * Convert from enum to const object (ADR-0003)
 */
export const BadgeWrapperPosition = {
  /**
   * Positions the badge at the top right
   */
  TopRight: 'top-right',
  /**
   * Positions the badge at the bottom right
   */
  BottomRight: 'bottom-right',
  /**
   * Positions the badge at the bottom left
   */
  BottomLeft: 'bottom-left',
  /**
   * Positions the badge at the top left
   */
  TopLeft: 'top-left',
} as const;
export type BadgeWrapperPosition =
  (typeof BadgeWrapperPosition)[keyof typeof BadgeWrapperPosition];

/**
 * BadgeWrapper - customPosition type (ADR-0004)
 * Platform-independent custom position definition
 */
export type BadgeWrapperCustomPosition = {
  top?: number | string | undefined;
  right?: number | string | undefined;
  bottom?: number | string | undefined;
  left?: number | string | undefined;
};

/**
 * BadgeWrapper component shared props (ADR-0004)
 * Platform-independent properties shared across React and React Native
 */
export type BadgeWrapperPropsShared = {
  /**
   * Optional prop to determine the shape of the anchoring element.
   * This prop gets used along with position, positionXOffset, and positionYOffset
   * to determine the final position.
   * Possible values:
   * - BadgeWrapperPositionAnchorShape.Circular
   * - BadgeWrapperPositionAnchorShape.Rectangular
   *
   * @default BadgeWrapperPositionAnchorShape.Circular
   */
  positionAnchorShape?: BadgeWrapperPositionAnchorShape;
  /**
   * Optional prop to control the preset position of the badge.
   * This prop gets used along with positionAnchorShape, positionXOffset, and positionYOffset
   * to determine the final position.
   *
   * @default BadgeWrapperPosition.TopRight
   */
  position?: BadgeWrapperPosition;
  /**
   * Optional prop to move the preset position horizontally.
   *
   * @default 0
   */
  positionXOffset?: number;
  /**
   * Optional prop to move the preset position vertically.
   *
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
};
