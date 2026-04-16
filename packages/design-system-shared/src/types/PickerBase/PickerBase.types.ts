import type { ReactNode } from 'react';

import type { TextOrChildrenPropsShared } from '../TextOrChildren';

/**
 * PickerBase — trailing arrow direction (maps to platform arrow icons).
 * Convert from enum to const object (ADR-0003).
 */
export const PickerBaseEndArrow = {
  Up: 'up',
  Down: 'down',
  Left: 'left',
  Right: 'right',
} as const;
export type PickerBaseEndArrow =
  (typeof PickerBaseEndArrow)[keyof typeof PickerBaseEndArrow];

/**
 * PickerBase component shared props (ADR-0004).
 */
export type PickerBasePropsShared = TextOrChildrenPropsShared & {
  /**
   * Optional node rendered before the label (for example an icon).
   */
  startAccessory?: ReactNode;
  /**
   * When set, the mapped trailing arrow icon is shown at the end of the row.
   * When omitted, use `endAccessory` for a custom trailing node instead.
   */
  endArrow?: PickerBaseEndArrow;
  /**
   * Optional node at the end of the row when `endArrow` is omitted (for example a custom icon or badge).
   */
  endAccessory?: ReactNode;
  /**
   * When true, disables the root control and applies disabled presentation.
   *
   * @default false
   */
  isDisabled?: boolean;
};
