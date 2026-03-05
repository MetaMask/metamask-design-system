import type { ReactNode } from 'react';

/**
 * BannerBase component shared props (ADR-0004)
 * Platform-independent content and structure shared across React and React Native.
 */
export type BannerBasePropsShared = {
  /**
   * Optional title rendered at the top of the banner body.
   */
  title?: ReactNode;
  /**
   * Optional description rendered below the title.
   */
  description?: ReactNode;
  /**
   * Optional children rendered below the description.
   */
  children?: ReactNode;
  /**
   * Optional text label for the action button.
   */
  actionButtonLabel?: string;
  /**
   * Optional accessory rendered at the start of the banner.
   */
  startAccessory?: ReactNode;
};
