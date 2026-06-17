import { AvatarBaseSize } from '../AvatarBase/AvatarBase.types';

export const AvatarFaviconSize = AvatarBaseSize;
export type AvatarFaviconSize = AvatarBaseSize;

/**
 * AvatarFavicon component shared props (ADR-0004)
 * Platform-independent properties shared across React and React Native.
 */
export type AvatarFaviconPropsShared = {
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
   * Optional prop to control the size of the avatar favicon.
   *
   * @default AvatarFaviconSize.Md
   */
  size?: AvatarFaviconSize;
};
