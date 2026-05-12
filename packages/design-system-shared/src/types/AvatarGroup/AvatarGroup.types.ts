import { AvatarBaseSize } from '../AvatarBase/AvatarBase.types';

export const AvatarGroupSize = AvatarBaseSize;
export type AvatarGroupSize = AvatarBaseSize;

/**
 * AvatarGroup - variant
 * Convert from enum to const object (ADR-0003)
 */
export const AvatarGroupVariant = {
  /**
   * Displays AvatarAccount components in the group.
   */
  Account: 'account',
  /**
   * Displays AvatarFavicon components in the group.
   */
  Favicon: 'favicon',
  /**
   * Displays AvatarNetwork components in the group.
   */
  Network: 'network',
  /**
   * Displays AvatarToken components in the group.
   */
  Token: 'token',
} as const;
export type AvatarGroupVariant =
  (typeof AvatarGroupVariant)[keyof typeof AvatarGroupVariant];

/**
 * AvatarGroup component shared props (ADR-0004)
 * Platform-independent properties shared across React and React Native.
 */
export type AvatarGroupPropsShared = {
  /**
   * Required enum to select between Avatar Group variants.
   */
  variant: AvatarGroupVariant;
  /**
   * Optional enum to select between Avatar Group sizes.
   *
   * @default AvatarGroupSize.Md
   */
  size?: AvatarGroupSize;
  /**
   * Optional prop to select max number of Avatars visible,
   * before the overflow counter being displayed.
   *
   * @default 4
   */
  max?: number;
  /**
   * Optional prop to reverse the direction of the AvatarGroup.
   */
  isReverse?: boolean;
};
