import type { ViewProps, StyleProp, ViewStyle } from 'react-native';

export enum BadgeWrapperPositionAnchorShape {
  Rectangular = 'Rectangular',
  Circular = 'Circular',
}

/**
 * BadgeWrapper Position.
 */
export enum BadgeWrapperPosition {
  TopRight = 'TopRight',
  BottomRight = 'BottomRight',
  BottomLeft = 'BottomLeft',
  TopLeft = 'TopLeft',
}

/**
 * Badge Position Obj.
 */
export interface BadgeWrapperCustomPosition {
  top?: number | string | undefined;
  right?: number | string | undefined;
  bottom?: number | string | undefined;
  left?: number | string | undefined;
}

/**
 * Badge component props.
 */
export type BadgeWrapperProps = {
  /**
   * Optional prop to determine the shape of the anchoring element.
   * This prop gets used along with position, positionXOffset, and positionYOffset
   * to determine the final position.
   * Possible values:
   *   BadgeAnchorElementShape.Circular,
   * - BadgeAnchorElementShape.Rectangular,
   * @default BadgeAnchorElementShape.Circular
   */
  positionAnchorShape?: BadgeWrapperPositionAnchorShape;
  /**
   * Optional prop to control the preset position of the badge.
   * This prop gets used along with positionAnchorShape, positionXOffset, and positionYOffset
   * to determine the final position.
   * @default BadgePosition.TopRight
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
   * Optional prop to add twrnc overriding classNames.
   */
  twClassName?: string;
  /**
   * Optional prop to control the style.
   */
  style?: StyleProp<ViewStyle>;
} & ViewProps;
