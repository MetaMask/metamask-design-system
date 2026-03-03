/**
 * BadgeCount - size
 * Convert from enum to const object (ADR-0003)
 */
export const BadgeCountSize = {
  /**
   * Represents a medium badge count (14px height).
   */
  Md: 'md',
  /**
   * Represents a large badge count (20px height).
   */
  Lg: 'lg',
} as const;
export type BadgeCountSize =
  (typeof BadgeCountSize)[keyof typeof BadgeCountSize];

/**
 * BadgeCount component shared props (ADR-0004)
 * Platform-independent properties shared across React and React Native
 */
export type BadgeCountPropsShared = {
  /**
   * Optional prop to control the size of the BadgeCount
   * Different sizes map to specific height
   *
   * @default BadgeCountSize.Md
   */
  size?: BadgeCountSize;
  /**
   * Required prop to show the count number
   */
  count: number;
  /**
   * Optional prop to determine the max the count can go up to.
   * If count > max, the count will be shown as "max+"
   *
   * @default 99
   */
  max?: number;
};
