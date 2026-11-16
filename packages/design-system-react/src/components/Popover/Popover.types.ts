import type { ComponentProps, CSSProperties, ReactNode } from 'react';

/**
 * Popover - preferred placement relative to the reference element. The
 * Popover flips to the opposite side and shifts along the other axis when the
 * preferred placement would overflow the viewport.
 */
export const PopoverPosition = {
  Top: 'top',
  TopStart: 'top-start',
  TopEnd: 'top-end',
  Right: 'right',
  RightStart: 'right-start',
  RightEnd: 'right-end',
  Bottom: 'bottom',
  BottomStart: 'bottom-start',
  BottomEnd: 'bottom-end',
  Left: 'left',
  LeftStart: 'left-start',
  LeftEnd: 'left-end',
} as const;
export type PopoverPosition =
  (typeof PopoverPosition)[keyof typeof PopoverPosition];

/**
 * Popover - ARIA role for the floating element.
 * Use `Dialog` when the contents are interactive, `Tooltip` for purely
 * informational content.
 */
export const PopoverRole = {
  Tooltip: 'tooltip',
  Dialog: 'dialog',
} as const;
export type PopoverRole = (typeof PopoverRole)[keyof typeof PopoverRole];

export type PopoverProps = Omit<
  ComponentProps<'div'>,
  'role' | 'popover' | 'children'
> & {
  /**
   * The contents of the Popover.
   */
  children?: ReactNode;
  /**
   * Additional class names to merge onto the Popover root.
   */
  className?: string;
  /**
   * Inline styles applied to the Popover root. Merged after the computed
   * positioning styles.
   */
  style?: CSSProperties;
  /**
   * Whether the Popover is open. Nothing is rendered when `false`.
   */
  isOpen?: boolean;
  /**
   * Called when the browser closes the Popover: light dismiss (a click
   * outside), the Escape key, or another dismissible popover opening. Set
   * `isOpen` to `false` here to keep a controlled Popover in sync. Never
   * called when the Popover closes because `isOpen` became `false`.
   */
  onClose?: () => void;
  /**
   * Whether the browser may close the Popover on light dismiss and Escape
   * (`popover="auto"`). Set to `false` for popovers that must stay open until
   * `isOpen` changes, such as hover tooltips (`popover="manual"`).
   *
   * @default true
   */
  isDismissible?: boolean;
  /**
   * The element the Popover is positioned against.
   */
  referenceElement?: HTMLElement | null;
  /**
   * Preferred placement relative to `referenceElement`.
   *
   * @default PopoverPosition.Bottom
   */
  position?: PopoverPosition;
  /**
   * `[skidding, distance]` offset in px. Skidding moves the Popover along
   * the reference edge, distance moves it away from the reference.
   *
   * @default [0, 8]
   */
  offset?: [number, number];
  /**
   * ARIA role applied to the Popover root.
   *
   * @default PopoverRole.Tooltip
   */
  role?: PopoverRole;
};
