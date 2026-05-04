import type { ComponentProps, ReactNode, RefObject } from 'react';

import type { FocusableElement } from '../ModalFocus/ModalFocus.types';

export type ModalProps = Omit<ComponentProps<'div'>, 'children'> & {
  /**
   * Whether the modal is open. When `false`, nothing is rendered (and the
   * portal subtree is unmounted, releasing focus state).
   */
  isOpen: boolean;
  /**
   * Fired when the modal requests close — wire your state setter here.
   * Triggered by the configured close-on-overlay-click and close-on-escape
   * behaviors as well as any custom close affordances inside `children`.
   */
  onClose: () => void;
  /**
   * The modal subtree. Typically composed of `ModalOverlay` and
   * `ModalContent` (which read shared behavior via `useModalContext`).
   */
  children: ReactNode;
  /**
   * Optional prop for additional CSS classes to be applied to the Modal root.
   * Merged with the component's defaults via `twMerge`.
   */
  className?: string;
  /**
   * When `true`, clicking the overlay (outside the modal content) closes the
   * modal.
   *
   * @default true
   */
  isClosedOnOutsideClick?: boolean;
  /**
   * When `true`, pressing Escape closes the modal. When `false`, ensure the
   * modal exposes a visible/keyboard-reachable close affordance for
   * keyboard-only users.
   *
   * @default true
   */
  isClosedOnEscapeKey?: boolean;
  /**
   * When `true`, the first focusable element within the modal subtree is
   * focused on mount.
   *
   * @default true
   */
  autoFocus?: boolean;
  /**
   * The element to receive focus when the modal opens. Overrides `autoFocus`'s
   * "first focusable" behavior.
   */
  initialFocusRef?: RefObject<FocusableElement>;
  /**
   * The element to receive focus when the modal closes/unmounts.
   */
  finalFocusRef?: RefObject<FocusableElement>;
  /**
   * When `true`, focus is restored to the element that opened the modal once
   * the modal closes. Ignored when `finalFocusRef` is provided.
   *
   * @default false
   */
  restoreFocus?: boolean;
};
