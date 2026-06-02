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
   * Sub-components (`ListItem.Title`, `ListItem.Description`, etc.) or
   * arbitrary content rendered inside the padded root.
   *
   * When children are provided, they render in-place and flat props
   * (`title`, `description`, `value`, etc.) are ignored. When absent,
   * flat props drive the layout via `Content`.
   */
  children?: ReactNode;
};
