import type { ComponentProps, ReactNode, RefObject } from 'react';

import type { FocusableElement } from '../ModalFocus/ModalFocus.types';

export type ModalProps = Omit<
  ComponentProps<'dialog'>,
  'children' | 'open' | 'onClose'
> & {
  /**
   * Whether the modal is open. Rendered as a native `<dialog>` opened with
   * `showModal()` (top layer, inert background, native `::backdrop`). When
   * `false`, nothing is rendered and the subtree is unmounted.
   */
  isOpen: boolean;
  /**
   * Fired when the modal requests close — wire your state setter here.
   * Triggered by the configured close-on-outside-click and close-on-escape
   * behaviors, by the dialog being closed natively (for example a
   * `<form method="dialog">` submit), and by any custom close affordances
   * inside `children`. The native `<dialog>` is never closed by the browser on
   * its own; `isOpen` stays the single source of truth.
   */
  onClose: () => void;
  /**
   * The modal subtree. Typically composed of `ModalContent` (and optionally
   * `ModalOverlay`), which read shared behavior via `useModalContext`.
   */
  children: ReactNode;
  /**
   * Optional prop for additional CSS classes to be applied to the Modal root.
   * Merged with the component's defaults via `twMerge`.
   */
  className?: string;
  /**
   * When `true`, clicking the backdrop or the empty area around the modal
   * content closes the modal.
   *
   * @default true
   */
  isClosedOnOutsideClick?: boolean;
  /**
   * When `true`, pressing Escape calls `onClose`. When `false`, Escape is
   * swallowed (the native `cancel` event is prevented), so ensure the modal
   * exposes a visible/keyboard-reachable close affordance for keyboard-only
   * users.
   *
   * @default true
   */
  isClosedOnEscapeKey?: boolean;
  /**
   * When `true`, the native dialog focus step runs on open (first focusable
   * element within the modal subtree). When `false`, focus is placed on the
   * dialog container itself instead.
   *
   * @default true
   */
  autoFocus?: boolean;
  /**
   * The element to receive focus when the modal opens. Overrides `autoFocus`'s
   * "first focusable" behavior (and is honored even when `autoFocus` is
   * `false`).
   */
  initialFocusRef?: RefObject<FocusableElement | null>;
  /**
   * The element to receive focus when the modal closes/unmounts.
   */
  finalFocusRef?: RefObject<FocusableElement | null>;
  /**
   * When `true`, focus is restored to the element that opened the modal once
   * the modal closes. Ignored when `finalFocusRef` is provided.
   *
   * @default false
   */
  restoreFocus?: boolean;
};
