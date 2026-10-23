import type { ListItemPropsShared } from '@metamask/design-system-shared';

import type { ContentProps } from '../Content/Content.types';

/**
 * ListItem component props (React platform-specific).
 *
 * Wraps {@link Content} in a padded root (`px-4 py-3`) with optional row shell
 * accessories. When `isInteractive` is `false` (default), the root is a non-
 * interactive `Box`. When `true`, the root is a focusable, clickable `Box`
 * with `role="button"` and `active:bg-pressed` feedback.
 *
 * Root styling uses React `className` / `style` from {@link ContentProps}
 * (`Box` props). Content slot props (`title`, `avatar`, inline accessories,
 * text props) are forwarded to {@link Content}.
 */
export type ListItemProps = ListItemPropsShared & ContentProps;
