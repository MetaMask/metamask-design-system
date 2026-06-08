import type { ReactNode } from 'react';

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
};
