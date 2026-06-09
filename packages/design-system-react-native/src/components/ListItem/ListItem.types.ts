import type { ListItemPropsShared } from '@metamask/design-system-shared';
import type { PressableProps } from 'react-native';

import type { BoxProps } from '../Box/Box.types';
import type { ContentProps } from '../Content/Content.types';

type ListItemPropsBase = ListItemPropsShared & ContentProps;

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
