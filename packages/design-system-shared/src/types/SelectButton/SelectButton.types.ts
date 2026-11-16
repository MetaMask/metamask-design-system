import type { ReactNode } from 'react';

import { ButtonBaseSize } from '../ButtonBase/ButtonBase.types';

/**
 * SelectButton size options (ADR-0003).
 * Alias to ButtonBaseSize to keep values in sync.
 */
export const SelectButtonSize = ButtonBaseSize;
export type SelectButtonSize = ButtonBaseSize;

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
export type SelectButtonPropsShared = {
  /**
   * Label shown when `value` is `undefined` or `null`. Optional: when neither `value` nor `placeholder` resolves to a non-empty string, no label is rendered and the control needs an accessible name (`aria-label` on web, `accessibilityLabel` on React Native).
   */
  placeholder?: string;
  /**
   * Height size of the button. Maps 1:1 to ButtonBaseSize values.
   *
   * @default Sm
   */
  size?: SelectButtonSize;
  /**
   * Selected label text. When `undefined` or `null`, `placeholder` is rendered instead. When the resolved label is `undefined`, `null`, or an empty string, no label is rendered.
   */
  value?: string | null;
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
   * Maps to the trailing arrow `Icon` at the end of the row.
   * Defaults to `down` when neither `hideEndArrow` nor `endAccessory` is used.
   * When `endAccessory` is passed and this prop is omitted, `endAccessory` is shown instead of the arrow.
   * When both are passed, `endArrowDirection` takes precedence and `endAccessory` is ignored.
   *
   * @default down (when no `endAccessory`)
   */
  endArrowDirection?: SelectButtonEndArrow;
  /**
   * When `true`, the trailing arrow is not rendered (`endAccessory` may still render).
   *
   * @default false
   */
  hideEndArrow?: boolean;
  /**
   * Optional node at the end of the row when no trailing arrow is shown (for example a custom icon or badge).
   */
  endAccessory?: ReactNode;
  /**
   * When true, disables the root control and applies disabled presentation.
   *
   * @default false
   */
  isDisabled?: boolean;
};
