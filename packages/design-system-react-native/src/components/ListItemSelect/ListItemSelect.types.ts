import type { ListItemSelectPropsShared } from '@metamask/design-system-shared';
import type { ReactNode } from 'react';

import type { ListItemProps } from '../ListItem/ListItem.types';

type ListItemInteractiveProps = Extract<ListItemProps, { isInteractive: true }>;

/**
 * ListItemSelect component props.
 *
 * Interactive list row for single-select lists. Wraps {@link ListItem} with
 * `isInteractive` and selection styling.
 */
export type ListItemSelectProps = Omit<
  ListItemInteractiveProps,
  'isInteractive' | 'endAccessory'
> &
  ListItemSelectPropsShared & {
    /** Used when the check icon is not shown (see `showSelectedIcon`). */
    endAccessory?: ReactNode;
  };
