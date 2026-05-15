import type { ReactNode, RefObject } from 'react';

export type FocusableElement = {
  focus(options?: FocusOptions): void;
};

export type ModalFocusProps = {
  /**
   * The `ref` of the element to receive focus initially.
   */
  initialFocusRef?: RefObject<FocusableElement>;
  /**
   * The `ref` of the element to return focus to when `ModalFocus`
   * unmounts.
   */
  finalFocusRef?: RefObject<FocusableElement>;
  /**
   * If `true`, focus will be restored to the element that
   * triggered the `ModalFocus` once it unmounts.
   *
   * Ignored when `finalFocusRef` is provided.
   *
   * @default false
   */
  restoreFocus?: boolean;
  /**
   * The node to lock focus to.
   */
  children: ReactNode;
  /**
   * If `true`, the first focusable element within `children`
   * will be auto-focused once `ModalFocus` mounts.
   *
   * @default true
   */
  autoFocus?: boolean;
};
