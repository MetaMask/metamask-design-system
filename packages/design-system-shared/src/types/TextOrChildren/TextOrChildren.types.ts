import type { ReactNode } from 'react';

/**
 * Shared content contract for components that render either a string (via platform `Text`) or a React node (ADR-0004).
 * Platform packages extend this with `textProps` for their `Text` component.
 */
export type TextOrChildrenPropsShared = {
  /**
   * Main content: a string or any React node. When a string, platform implementations typically apply `textProps` from the platform layer.
   */
  children: ReactNode | string;
};
