import type { ComponentProps, ReactNode } from 'react';

import type { BoxProps } from '../Box';

/**
 * ModalContent dialog max-width.
 * - `Sm` → 360px (default)
 * - `Md` → 480px
 * - `Lg` → 720px
 */
export const ModalContentSize = {
  Sm: 'sm',
  Md: 'md',
  Lg: 'lg',
} as const;
export type ModalContentSize =
  (typeof ModalContentSize)[keyof typeof ModalContentSize];

/**
 * Box prop bag used for the inner dialog `<section>`. Mirrors the legacy
 * `modalDialogProps` typing but is bound to the MMDS `BoxProps` shape and
 * carries an explicit `data-*` index signature so consumers can pass through
 * test ids and other dataset attributes through `Partial`/`Omit` indirection.
 */
type DialogBoxProps = Omit<BoxProps, 'children'> & {
  [key: `data-${string}`]: string | undefined;
};

export type ModalContentProps = Omit<ComponentProps<'div'>, 'children'> & {
  /**
   * Content rendered inside the dialog. Typically composed of `ModalHeader`,
   * `ModalBody`, and `ModalFooter`.
   */
  children: ReactNode;
  /**
   * Optional max-width for the inner dialog. Use one of `ModalContentSize`
   * tokens (Sm/Md/Lg → 360/480/720px). Override entirely via
   * `modalDialogProps.className="max-w-..."` if you need a custom width.
   *
   * @default ModalContentSize.Sm
   */
  size?: ModalContentSize;
  /**
   * Props forwarded to the inner dialog `Box` (the `<section
   * role="dialog">`). Use this to add `data-testid`, override layout, change
   * background, or apply Tailwind utilities via `className`.
   */
  modalDialogProps?: DialogBoxProps;
  /**
   * Optional prop for additional CSS classes applied to the outer
   * positioning element. Merged with the component's defaults via `twMerge`.
   */
  className?: string;
};
