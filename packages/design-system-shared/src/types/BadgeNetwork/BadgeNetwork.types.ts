/**
 * BadgeNetwork component shared props (ADR-0004)
 * Platform-independent properties shared across React and React Native.
 * Note: `src` is not included here because it has a platform-specific type
 * (string in React, ImageOrSvgSrc in React Native).
 */
export type BadgeNetworkPropsShared = {
  /**
   * Optional name of the network.
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
