import type { ReactNode } from 'react';
import type { ViewProps } from 'react-native';

/**
 * Vertical alignment options for children inside the ListItem row.
 */
export const ListItemVerticalAlignment = {
  Top: 'top',
  Center: 'center',
  Bottom: 'bottom',
} as const;

export type ListItemVerticalAlignment =
  (typeof ListItemVerticalAlignment)[keyof typeof ListItemVerticalAlignment];

/**
 * ListItem component props.
 *
 * Extends `ViewProps` so the root View inherits standard React Native
 * props such as `testID` and `accessibilityLabel`.
 */
export type ListItemProps = {
  /**
   * Content to display inside the list item row.
   */
  children?: ReactNode;
  /**
   * Optional content displayed above the list item row.
   */
  topAccessory?: ReactNode;
  /**
   * Optional content displayed below the list item row.
   */
  bottomAccessory?: ReactNode;
  /**
   * Gap in pixels between the topAccessory and the row.
   *
   * @default 0
   */
  topAccessoryGap?: number;
  /**
   * Gap in pixels between the row and the bottomAccessory.
   *
   * @default 0
   */
  bottomAccessoryGap?: number;
  /**
   * Horizontal spacing between each child inside the row.
   *
   * @default 16
   */
  gap?: number | string;
  /**
   * Vertical alignment of children inside the row.
   *
   * @default ListItemVerticalAlignment.Center
   */
  verticalAlignment?: ListItemVerticalAlignment;
  /**
   * Optional Tailwind class names to override default styles on the root element.
   */
  twClassName?: string;
} & ViewProps;
