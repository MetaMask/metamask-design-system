import type { ReactNode } from 'react';

/**
 * TextButton - size
 * Convert from enum to const object (ADR-0003)
 */
export const TextButtonSize = {
  /**
   * Large body text size
   */
  BodyLg: 'body-lg',
  /**
   * Medium body text size (default)
   */
  BodyMd: 'body-md',
  /**
   * Small body text size
   */
  BodySm: 'body-sm',
  /**
   * Extra small body text size
   */
  BodyXs: 'body-xs',
} as const;
export type TextButtonSize =
  (typeof TextButtonSize)[keyof typeof TextButtonSize];

/**
 * TextButton component shared props (ADR-0004)
 * Platform-independent properties shared across React and React Native
 */
export type TextButtonPropsShared = {
  /**
   * The content to be rendered within the TextButton.
   */
  children: ReactNode;
  /**
   * Optional prop that when true, disables the button.
   *
   * @default false
   */
  isDisabled?: boolean;
};
