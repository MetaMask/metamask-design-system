import type { ReactNode } from 'react';

/**
 * BannerBase action button layout (ADR-0003).
 * Controls where the action button renders relative to the banner body.
 */
export const BannerBaseActionButtonLayout = {
  /** Action button below title / description / children (default). */
  Below: 'below',
  /** Action button to the right of the body, left of the close button. */
  End: 'end',
} as const;

export type BannerBaseActionButtonLayout =
  (typeof BannerBaseActionButtonLayout)[keyof typeof BannerBaseActionButtonLayout];

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
   * Layout for the action button relative to the banner body.
   *
   * - `below` — under title / description / children (default).
   * - `end` — right of the body, left of the close button.
   *
   * @default BannerBaseActionButtonLayout.Below
   */
  actionButtonLayout?: BannerBaseActionButtonLayout;
  /**
   * Optional accessory rendered at the start of the banner.
   */
  startAccessory?: ReactNode;
};
