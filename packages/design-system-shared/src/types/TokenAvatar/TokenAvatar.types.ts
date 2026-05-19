import type {
  AvatarIconBadgeShared,
  AvatarNetworkBadgeShared,
} from '../Avatar/AvatarBadge.types';
import { AvatarBaseSize } from '../AvatarBase/AvatarBase.types';

export const TokenAvatarSize = AvatarBaseSize;
export type TokenAvatarSize = AvatarBaseSize;

/** @deprecated Use TokenAvatarSize */
export const AvatarTokenSize = TokenAvatarSize;
/** @deprecated Use TokenAvatarSize */
export type AvatarTokenSize = TokenAvatarSize;

/**
 * TokenAvatar component shared props (ADR-0004)
 */
export type TokenAvatarPropsShared = {
  /**
   * Optional name of the token.
   * Used as alt text for the image, and the first letter is used as fallback
   * text when no explicit fallbackText is provided.
   */
  name?: string;
  /**
   * Optional text to display when no image is provided or when the image
   * fails to load. If not provided, the first letter of name is used.
   */
  fallbackText?: string;
  /**
   * Optional prop to control the size of the token avatar.
   *
   * @default TokenAvatarSize.Md
   */
  size?: TokenAvatarSize;
  /**
   * Optional network badge (bottom-right). Only one of `networkBadge` or
   * `iconBadge` should be provided; if both are set, `networkBadge` wins.
   */
  networkBadge?: AvatarNetworkBadgeShared;
  /**
   * Optional icon badge (bottom-right, renders as BadgeIcon). Only one of
   * `networkBadge` or `iconBadge` should be provided; if both are set,
   * `networkBadge` wins.
   */
  iconBadge?: AvatarIconBadgeShared;
};

/** @deprecated Use TokenAvatarPropsShared */
export type AvatarTokenPropsShared = TokenAvatarPropsShared;
