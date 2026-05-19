import type {
  AvatarIconBadgeShared,
  AvatarNetworkBadgeShared,
  AvatarStatusBadgeShared,
} from '../Avatar/AvatarBadge.types';
import { AvatarBaseSize } from '../AvatarBase/AvatarBase.types';

export const FaviconAvatarSize = AvatarBaseSize;
export type FaviconAvatarSize = AvatarBaseSize;

/** @deprecated Use FaviconAvatarSize */
export const AvatarFaviconSize = FaviconAvatarSize;
/** @deprecated Use FaviconAvatarSize */
export type AvatarFaviconSize = FaviconAvatarSize;

/**
 * FaviconAvatar component shared props (ADR-0004)
 */
export type FaviconAvatarPropsShared = {
  /**
   * Optional name of the dapp.
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
   * Optional prop to control the size of the favicon avatar.
   *
   * @default FaviconAvatarSize.Md
   */
  size?: FaviconAvatarSize;
  /**
   * Optional network badge (bottom-right). Only one of `networkBadge` or
   * `statusBadge` should be provided; if both are set, `networkBadge` wins.
   */
  networkBadge?: AvatarNetworkBadgeShared;
  /**
   * Optional status badge (top-right). Only one of `networkBadge` or
   * `statusBadge` should be provided; if both are set, `networkBadge` wins.
   */
  statusBadge?: AvatarStatusBadgeShared;
};

/** @deprecated Use FaviconAvatarPropsShared */
export type AvatarFaviconPropsShared = FaviconAvatarPropsShared;
