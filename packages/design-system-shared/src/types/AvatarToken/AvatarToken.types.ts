import { AvatarBaseSize } from '../AvatarBase/AvatarBase.types';

export const AvatarTokenSize = AvatarBaseSize;
export type AvatarTokenSize = AvatarBaseSize;

/**
 * AvatarToken component shared props (ADR-0004)
 * Platform-independent properties shared across React and React Native.
 */
export type AvatarTokenPropsShared = {
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
   * Optional prop to control the size of the avatar token.
   *
   * @default AvatarTokenSize.Md
   */
  size?: AvatarTokenSize;
};
