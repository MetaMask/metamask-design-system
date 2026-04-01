import type { ReactNode } from 'react';

/**
 * TitleSubpage component shared props (ADR-0004).
 * Platform-independent properties shared across React and React Native implementations.
 */
export type TitleSubpagePropsShared = {
  /**
   * Main title text. The React Native implementation renders this with TextVariant.HeadingMd.
   */
  title?: string;
  /**
   * Optional accessory rendered inline to the right of the title.
   */
  titleAccessory?: ReactNode;
  /**
   * Optional accessory rendered to the left of the title and bottom content.
   */
  startAccessory?: ReactNode;
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
