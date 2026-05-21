import type { ComponentProps, ReactNode } from 'react';

import type { ButtonProps } from '../Button';

/**
 * Layout direction for the action button row.
 *
 * Mirrors `BottomSheetFooter`'s `ButtonsAlignment` on the React Native side so
 * the modal/sheet families share semantics.
 */
export const ButtonsAlignment = {
  Horizontal: 'horizontal',
  Vertical: 'vertical',
} as const;
export type ButtonsAlignment =
  (typeof ButtonsAlignment)[keyof typeof ButtonsAlignment];

/**
 * Button props accepted by `ModalFooter`. The `variant` is enforced internally
 * by the component (Primary or Secondary, depending on slot), so consumers
 * cannot override it. The `data-*` index signature is preserved so test ids
 * and other dataset attributes can be passed through `Partial`/`Omit`
 * indirection.
 */
export type ModalFooterButtonProps = Omit<ButtonProps, 'variant'> & {
  [key: `data-${string}`]: string | undefined;
};

export type ModalFooterProps = ComponentProps<'footer'> & {
  /**
   * Optional custom content rendered above the action button row. Use this
   * for inline form controls (e.g. a "do not show again" checkbox) or to
   * fully replace the built-in button row by omitting both
   * `primaryButtonProps` and `secondaryButtonProps`.
   */
  children?: ReactNode;
  /**
   * Optional layout direction for the action button row.
   *
   * - `Horizontal` — buttons share the row, each takes `flex-1`.
   * - `Vertical`   — buttons stack with full width.
   *
   * @default ButtonsAlignment.Horizontal
   */
  buttonsAlignment?: ButtonsAlignment;
  /**
   * Optional props for the primary action button. Renders with
   * `ButtonVariant.Primary` automatically. Appears second (right in
   * horizontal layout, bottom in vertical layout).
   *
   * Pass the localized label as `children`. Wire the click handler via
   * `onClick`. `ModalFooter` is i18n-agnostic and intentionally does not pull
   * strings from any translation context.
   */
  primaryButtonProps?: ModalFooterButtonProps;
  /**
   * Optional props for the secondary action button. Renders with
   * `ButtonVariant.Secondary` automatically. Appears first (left in
   * horizontal layout, top in vertical layout).
   */
  secondaryButtonProps?: ModalFooterButtonProps;
  /**
   * Optional prop for additional CSS classes to be applied to the
   * ModalFooter root. Merged with the component's defaults via `twMerge`.
   */
  className?: string;
};
