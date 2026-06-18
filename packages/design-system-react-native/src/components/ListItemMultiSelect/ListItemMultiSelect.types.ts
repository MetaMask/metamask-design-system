import type { ListItemMultiSelectPropsShared } from '@metamask/design-system-shared';

import type { ListItemProps } from '../ListItem/ListItem.types';

type ListItemInteractiveProps = Extract<ListItemProps, { isInteractive: true }>;

/**
 * ListItemMultiSelect component props.
 *
 * Interactive list row for multi-select lists. Wraps {@link ListItem} with
 * `isInteractive`, selection styling, and a trailing Checkbox.
 */
export type ListItemMultiSelectProps = Omit<
  ListItemInteractiveProps,
  'isInteractive' | 'endAccessory'
> &
  ListItemMultiSelectPropsShared;
