/**
 * BadgeStatus - status
 * Convert from enum to const object (ADR-0003)
 */
export const BadgeStatusStatus = {
  /**
   * Represents an active status (Connected)
   */
  Active: 'active',
  /**
   * Represents an inactive status (Connected)
   */
  Inactive: 'inactive',
  /**
   * Represents a disconnected status
   */
  Disconnected: 'disconnected',
  /**
   * Represents a new status
   */
  New: 'new',
  /**
   * Represents an attention status
   */
  Attention: 'attention',
} as const;
export type BadgeStatusStatus =
  (typeof BadgeStatusStatus)[keyof typeof BadgeStatusStatus];

/**
 * BadgeStatus - size
 * Convert from enum to const object (ADR-0003)
 */
export const BadgeStatusSize = {
  /**
   * Represents a medium badge status (8px)
   */
  Md: 'md',
  /**
   * Represents a large badge status (10px)
   */
  Lg: 'lg',
} as const;
export type BadgeStatusSize =
  (typeof BadgeStatusSize)[keyof typeof BadgeStatusSize];

/**
 * BadgeStatus component shared props (ADR-0004)
 * Platform-independent properties shared across React and React Native
 */
export type BadgeStatusPropsShared = {
  /**
   * Required prop to control the status of the badge
   * Possible values:
   * - BadgeStatusStatus.Active (Connected)
   * - BadgeStatusStatus.Inactive (Connected)
   * - BadgeStatusStatus.Disconnected
   * - BadgeStatusStatus.New
   * - BadgeStatusStatus.Attention
   */
  status: BadgeStatusStatus;
  /**
   * Optional prop to determine whether the badge should display a border
   *
   * @default true
   */
  hasBorder?: boolean;
  /**
   * Optional prop to control the size of the BadgeStatus
   * Possible values:
   * - BadgeStatusSize.Md (8px)
   * - BadgeStatusSize.Lg (10px)
   *
   * @default BadgeStatusSize.Md
   */
  size?: BadgeStatusSize;
};
