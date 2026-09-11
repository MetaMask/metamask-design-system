import type { ReactNode } from 'react';

/**
 * HeaderSubpage shared props (ADR-0004).
 * Platform-independent properties shared across React and React Native.
 */
export type HeaderSubpagePropsShared = {
  /**
   * Optional leading visual (e.g. avatar), rendered before the title stack.
   */
  avatar?: ReactNode;
  /**
   * Optional title (string or node).
   * Default text styling: BodyMd, Medium, TextDefault.
   */
  title?: ReactNode;
  /**
   * Optional node rendered after the title (e.g. badges).
   */
  titleEndAccessory?: ReactNode;
  /**
   * Optional description (string or node).
   * Default text styling: BodySm, Medium, TextAlternative.
   */
  description?: ReactNode;
  /**
   * Callback when the back button is pressed.
   * If provided, a back button will be rendered as the start accessory.
   */
  onBack?: () => void;
  /**
   * Callback when the close button is pressed.
   * If provided, a close button will be added to the end accessories.
   */
  onClose?: () => void;
  /**
   * Optional content before the identity content.
   * Takes priority over `startButtonIconProps` and back shortcuts.
   */
  startAccessory?: ReactNode;
  /**
   * Optional content after the identity content.
   * Takes priority over `endButtonIconProps` and close shortcuts.
   */
  endAccessory?: ReactNode;
};
