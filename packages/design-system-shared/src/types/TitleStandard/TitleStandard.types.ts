import type { ReactNode } from 'react';

/**
 * TitleStandard component shared props (ADR-0004).
 * Platform-independent properties shared across React and React Native implementations.
 */
export type TitleStandardPropsShared = {
  /**
   * Main title text. The React Native implementation renders this with TextVariant.HeadingLg.
   */
  title?: string;
  /**
   * Optional accessory rendered inline to the right of the title.
   */
  titleAccessory?: ReactNode;
  /**
   * Optional accessory rendered in its own row above the title.
   * If topLabel is provided, topLabel takes priority.
   */
  topAccessory?: ReactNode;
  /**
   * Optional label rendered above the title. Takes priority over topAccessory.
   */
  topLabel?: string;
  /**
   * Optional accessory rendered below the title.
   * If bottomLabel is provided, bottomLabel takes priority.
   */
  bottomAccessory?: ReactNode;
  /**
   * Optional label rendered below the title. Takes priority over bottomAccessory.
   */
  bottomLabel?: string;
};
