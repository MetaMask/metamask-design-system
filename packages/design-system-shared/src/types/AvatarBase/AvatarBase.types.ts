import type { ReactNode } from 'react';

/**
 * AvatarBase - size
 * Convert from enum to const object (ADR-0003)
 */
export const AvatarBaseSize = {
  /**
   * Represents an extra small avatar size (16px).
   */
  Xs: 'xs',
  /**
   * Represents a small avatar size (24px).
   */
  Sm: 'sm',
  /**
   * Represents a medium avatar size (32px).
   */
  Md: 'md',
  /**
   * Represents a large avatar size (40px).
   */
  Lg: 'lg',
  /**
   * Represents an extra large avatar size (48px).
   */
  Xl: 'xl',
} as const;
export type AvatarBaseSize =
  (typeof AvatarBaseSize)[keyof typeof AvatarBaseSize];

/**
 * AvatarBase - shape
 * Convert from enum to const object (ADR-0003)
 */
export const AvatarBaseShape = {
  /**
   * Represents a circular Avatar.
   */
  Circle: 'circle',
  /**
   * Represents a squared Avatar.
   */
  Square: 'square',
} as const;
export type AvatarBaseShape =
  (typeof AvatarBaseShape)[keyof typeof AvatarBaseShape];

/**
 * AvatarBase component shared props (ADR-0004)
 * Platform-independent properties shared across React and React Native.
 */
export type AvatarBasePropsShared = {
  /**
   * Optional content to be rendered within the AvatarBase.
   * If fallbackText is provided, fallbackText takes precedence.
   */
  children?: ReactNode;
  /**
   * Optional text to display when no children are provided.
   */
  fallbackText?: string;
  /**
   * Optional prop to control the size of the AvatarBase.
   *
   * @default AvatarBaseSize.Md
   */
  size?: AvatarBaseSize;
  /**
   * Optional prop to control the shape of the AvatarBase.
   *
   * @default AvatarBaseShape.Circle
   */
  shape?: AvatarBaseShape;
  /**
   * Optional prop to include the border with the Avatar.
   * For internal use only.
   *
   * @default false
   */
  hasBorder?: boolean;
};
