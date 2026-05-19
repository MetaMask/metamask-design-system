import type { AvatarNetworkBadgeShared } from '../Avatar/AvatarBadge.types';
import { AvatarBaseSize } from '../AvatarBase/AvatarBase.types';

export const AccountAvatarSize = AvatarBaseSize;
export type AccountAvatarSize = AvatarBaseSize;

/** @deprecated Use AccountAvatarSize */
export const AvatarAccountSize = AccountAvatarSize;
/** @deprecated Use AccountAvatarSize */
export type AvatarAccountSize = AccountAvatarSize;

/**
 * AccountAvatar - variant
 */
export const AccountAvatarVariant = {
  Blockies: 'blockies',
  Jazzicon: 'jazzicon',
  Polyicon: 'polyicon',
  /** @deprecated Use AccountAvatarVariant.Polyicon */
  Maskicon: 'polyicon',
} as const;

export type AccountAvatarVariant =
  (typeof AccountAvatarVariant)[keyof typeof AccountAvatarVariant];

/** @deprecated Use AccountAvatarVariant */
export const AvatarAccountVariant = AccountAvatarVariant;
/** @deprecated Use AccountAvatarVariant */
export type AvatarAccountVariant = AccountAvatarVariant;

/**
 * AccountAvatar component shared props (ADR-0004)
 */
export type AccountAvatarPropsShared = {
  /**
   * Required address used as a unique identifier to generate the account avatar art.
   */
  address: string;
  /**
   * Optional prop to control the variant of the account avatar.
   *
   * @default AccountAvatarVariant.Jazzicon
   */
  variant?: AccountAvatarVariant;
  /**
   * Optional prop to control the size of the account avatar.
   *
   * @default AccountAvatarSize.Md
   */
  size?: AccountAvatarSize;
  /**
   * Optional network badge (bottom-right).
   */
  networkBadge?: AvatarNetworkBadgeShared;
};

/** @deprecated Use AccountAvatarPropsShared */
export type AvatarAccountPropsShared = AccountAvatarPropsShared;
