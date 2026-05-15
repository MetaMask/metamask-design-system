import React, { forwardRef } from 'react';
import { createPortal } from 'react-dom';

import { twMerge } from '../../utils/tw-merge';

import { ModalContext } from './Modal.context';
import type { ModalContextType } from './Modal.context';
import type { ModalProps } from './Modal.types';

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      className,
      isOpen,
      onClose,
      children,
      isClosedOnOutsideClick = true,
      isClosedOnEscapeKey = true,
      autoFocus = true,
      initialFocusRef,
      finalFocusRef,
      restoreFocus,
      ...props
    },
    ref,
  ) => {
    if (!isOpen) {
      return null;
    }

    const context: ModalContextType = {
      isOpen,
      onClose,
      isClosedOnOutsideClick,
      isClosedOnEscapeKey,
      autoFocus,
      initialFocusRef,
      finalFocusRef,
      restoreFocus,
    };

    return createPortal(
      <ModalContext.Provider value={context}>
        <div ref={ref} className={twMerge(className)} {...props}>
          {children}
        </div>
      </ModalContext.Provider>,
      document.body,
    );
  },
);

Modal.displayName = 'Modal';
