import type { ListItemPropsShared } from '@metamask/design-system-shared';
import type { ReactNode } from 'react';
import type { PressableProps } from 'react-native';

import type { BoxProps } from '../Box/Box.types';
import type { ContentProps } from '../Content/Content.types';

type ListItemPropsBase = ListItemPropsShared &
  ContentProps & {
    /**
     * Slot sub-components (`ListItem.Title`, `ListItem.Description`, etc.) or
     * arbitrary content rendered below `Content` in prop mode.
     *
     * When structural slot sub-components (`ListItem.Avatar`,
     * `ListItem.StartAccessory`, `ListItem.EndAccessory`,
     * `ListItem.TopAccessory`, `ListItem.BottomAccessory`) are present among
     * children, ListItem switches to slot mode: structural slots are extracted
     * and repositioned in the layout row, and remaining children render
     * in-place inside the main content column.
     *
     * When no structural slots are detected, flat prop mode is used: `Content`
     * renders the layout from flat props (`title`, `description`, `value`,
     * etc.) and any children render below it.
     */
    children?: ReactNode;
  };

/**
 * ListItem component props.
 *
 * Wraps {@link Content} in a padded root (`px-4 py-3`). When `isInteractive` is
 * `false` (default), the root is a `Box`; when `true`, the root is a `Pressable`.
 */
export type ListItemProps =
  | (ListItemPropsBase & { isInteractive?: false } & Omit<BoxProps, 'children'>)
  | (ListItemPropsBase & {
      isInteractive: true;
    } & Omit<PressableProps, 'children'>);
