import type { ComponentProps, CSSProperties, ReactNode } from 'react';

/**
 * Popover - placement of the floating element relative to the reference element.
 * Mirrors the placements supported by `react-popper` (`Auto` enables both
 * `flip` and `preventOverflow` automatically).
 */
export const PopoverPosition = {
  Auto: 'auto',
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

export type PopoverProps = Omit<ComponentProps<'div'>, 'role'> & {
  /**
   * The contents of the Popover.
   */
  children?: ReactNode;
  /**
   * Additional class names to merge onto the Popover root.
   */
  className?: string;
  /**
   * Inline styles applied to the Popover root. Merged after the styles
   * computed by `react-popper`.
   */
  style?: CSSProperties;
  /**
   * Placement relative to `referenceElement`. When `PopoverPosition.Auto`,
   * `flip` and `preventOverflow` are forced on regardless of their props.
   *
   * @default PopoverPosition.Auto
   */
  position?: PopoverPosition;
  /**
   * ARIA role applied to the Popover root.
   *
   * @default PopoverRole.Tooltip
   */
  role?: PopoverRole;
  /**
   * Render an arrow pointing at the reference element.
   *
   * @default false
   */
  hasArrow?: boolean;
  /**
   * Props forwarded to the arrow element.
   */
  arrowProps?: ComponentProps<'div'>;
  /**
   * Match the popover width to the reference element's `clientWidth`.
   *
   * @default false
   */
  matchWidth?: boolean;
  /**
   * Keep the Popover within the viewport. Forced on when
   * `position === PopoverPosition.Auto`.
   *
   * @default false
   */
  preventOverflow?: boolean;
  /**
   * Allow flipping to the opposite side when there is not enough space.
   * Forced on when `position === PopoverPosition.Auto`.
   *
   * @default false
   */
  flip?: boolean;
  /**
   * Hide the Popover when the reference element is scrolled out of view.
   *
   * @default true
   */
  referenceHidden?: boolean;
  /**
   * The element the Popover is positioned against.
   */
  referenceElement?: HTMLElement | null;
  /**
   * Whether the Popover is open. Nothing is rendered when `false`.
   */
  isOpen?: boolean;
  /**
   * `[skidding, distance]` offset (in px) applied to the Popover.
   *
   * @default [0, 8]
   */
  offset?: [number, number];
  /**
   * Render the Popover into `document.body` via `createPortal`.
   *
   * @default false
   */
  isPortal?: boolean;
  /**
   * Called when the user presses the Escape key while the Popover is open.
   */
  onPressEscKey?: () => void;
  /**
   * Called when the user clicks outside the Popover and the reference element
   * while the Popover is open.
   */
  onClickOutside?: () => void;
};
