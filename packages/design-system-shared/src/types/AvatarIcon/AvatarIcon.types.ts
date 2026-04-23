import type { IconName } from '../Icon';

export { AvatarBaseSize as AvatarIconSize } from '../AvatarBase';

/**
 * AvatarIcon - severity
 * Convert from enum to const object (ADR-0003)
 */
export const AvatarIconSeverity = {
  /**
   * Represents a neutral severity
   */
  Neutral: 'neutral',
  /**
   * Represents an info severity
   */
  Info: 'info',
  /**
   * Represents a success severity
   */
  Success: 'success',
  /**
   * Represents an error severity
   */
  Error: 'error',
  /**
   * Represents a warning severity
   */
  Warning: 'warning',
} as const;
export type AvatarIconSeverity =
  (typeof AvatarIconSeverity)[keyof typeof AvatarIconSeverity];

/**
 * AvatarIcon component shared props (ADR-0004)
 * Platform-independent properties shared across React and React Native
 */
export type AvatarIconPropsShared = {
  /**
   * Required icon name from the icon set
   */
  iconName: IconName;
  /**
   * Optional prop to control the severity of the avatar
   * Possible values:
   * - AvatarIconSeverity.Neutral
   * - AvatarIconSeverity.Info
   * - AvatarIconSeverity.Success
   * - AvatarIconSeverity.Error
   * - AvatarIconSeverity.Warning
   *
   * @default AvatarIconSeverity.Neutral
   */
  severity?: AvatarIconSeverity;
};
