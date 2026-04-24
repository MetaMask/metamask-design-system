import type { ReactNode } from 'react';

import type { TextOrChildrenPropsShared } from '../TextOrChildren';

/**
 * SelectButton — trailing arrow direction (maps to platform arrow icons).
 * Convert from enum to const object (ADR-0003).
 */
export const SelectButtonEndArrow = {
  Up: 'up',
  Down: 'down',
  Left: 'left',
  Right: 'right',
} as const;
export type SelectButtonEndArrow =
  (typeof SelectButtonEndArrow)[keyof typeof SelectButtonEndArrow];

/**
 * SelectButton visual variant (ADR-0003).
 * `primary` matches ButtonSecondary; `secondary` and `tertiary` match ButtonTertiary container styling.
 */
export const SelectButtonVariant = {
  Primary: 'primary',
  Secondary: 'secondary',
  Tertiary: 'tertiary',
} as const;
export type SelectButtonVariant =
  (typeof SelectButtonVariant)[keyof typeof SelectButtonVariant];

/**
 * SelectButton component shared props (ADR-0004).
 */
export type SelectButtonPropsShared = TextOrChildrenPropsShared & {
  /**
   * Visual variant: `primary` matches ButtonSecondary; `secondary` and `tertiary` match ButtonTertiary row styling; `tertiary` uses alternative text and trailing arrow icon color.
   *
   * @default primary
   */
  variant?: SelectButtonVariant;
  /**
   * Optional node rendered before the label (for example an icon).
   */
  startAccessory?: ReactNode;
  /**
   * When set, the mapped trailing arrow icon is shown at the end of the row.
   * When omitted, use `endAccessory` for a custom trailing node instead.
   */
  endArrowDirection?: SelectButtonEndArrow;
  /**
   * Optional node at the end of the row when `endArrowDirection` is omitted (for example a custom icon or badge).
   */
  endAccessory?: ReactNode;
  /**
   * When true, disables the root control and applies disabled presentation.
   *
   * @default false
   */
  isDisabled?: boolean;
};
