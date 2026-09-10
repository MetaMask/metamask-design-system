import type { ReactNode } from 'react';

/**
 * Card component shared props (ADR-0004)
 * Platform-independent content and structure shared across React and React Native.
 */
export type CardPropsShared = {
  /**
   * Content to display inside the card.
   */
  children: ReactNode;
};
