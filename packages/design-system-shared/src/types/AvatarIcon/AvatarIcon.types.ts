import { AvatarBaseSize } from '../AvatarBase/AvatarBase.types';

export const AvatarIconSize = AvatarBaseSize;
export type AvatarIconSize = AvatarBaseSize;

/**
 * AvatarIcon - severity
 * Convert from enum to const object (ADR-0003)
 */
export const AvatarIconSeverity = {
  /**
   * Represents neutral severity
   */
  Neutral: 'neutral',
  /**
   * Represents info severity
   */
  Info: 'info',
  /**
   * Represents success severity
   */
  Success: 'success',
  /**
   * Represents error severity
   */
  Error: 'error',
  /**
   * Represents warning severity
   */
  Warning: 'warning',
} as const;
export type AvatarIconSeverity =
  (typeof AvatarIconSeverity)[keyof typeof AvatarIconSeverity];

/**
 * AvatarIcon component shared props (ADR-0004)
 * Platform-independent properties shared across React and React Native.
 */
export type AvatarIconPropsShared = {
  /**
   * Required icon name from the icon set.
   * Typed as string to allow each platform to use its specific IconName type.
   */
  iconName: string;
  /**
   * Optional prop to control the size of the avatar icon.
   *
   * @default AvatarIconSize.Md
   */
  size?: AvatarIconSize;
  /**
   * Optional prop to control the severity of the avatar icon.
   *
   * @default AvatarIconSeverity.Neutral
   */
  severity?: AvatarIconSeverity;
};
