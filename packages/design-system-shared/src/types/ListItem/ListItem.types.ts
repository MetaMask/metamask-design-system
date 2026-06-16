import type { ReactNode } from 'react';

import type { BoxSpacing } from '../Box';

/**
 * ListItem shared props (ADR-0004).
 */
export type ListItemPropsShared = {
  /**
   * When `true`, the root is a `Pressable`; when `false` (default), the root is a `Box`.
   */
  isInteractive?: boolean;
  /**
   * Optional content rendered below the main Content block inside the padded root.
   */
  children?: ReactNode;
  /**
   * Optional node rendered before the content row (e.g. leading icon), before `Content`.
   */
  startAccessory?: ReactNode;
  /**
   * Optional node rendered after the content row (e.g. chevron), after `Content`.
   */
  endAccessory?: ReactNode;
  /**
   * Gap between `startAccessory` / `endAccessory` and the inner `Content` row.
   * Uses design-system spacing tokens (`BoxSpacing`); `4` is 16px.
   *
   * @default 0
   */
  accessoryGap?: BoxSpacing;
};
