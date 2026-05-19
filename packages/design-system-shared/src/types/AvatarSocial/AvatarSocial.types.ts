/**
 * SocialAvatar component shared props (ADR-0004)
 */
export type SocialAvatarPropsShared = {
  /**
   * Optional name of the social profile or platform.
   * Used as alt text for the image, and the first letter is used as fallback
   * text when no explicit fallbackText is provided.
   */
  name?: string;
  /**
   * Optional text to display when no image is provided or when the image
   * fails to load. If not provided, the first letter of name is used.
   */
  fallbackText?: string;
};
