import React, { forwardRef, useEffect, useRef } from 'react';

import { twMerge } from '../../utils/tw-merge';

import { ModalContext } from './Modal.context';
import type { ModalContextType } from './Modal.context';
import type { ModalProps } from './Modal.types';

export const Modal = forwardRef<HTMLDialogElement, ModalProps>(
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
    const dialogRef = useRef<HTMLDialogElement>(null);
    const previousActiveElement = useRef<HTMLElement | null>(null);

    useEffect(() => {
      const dialog = dialogRef.current;
      if (!dialog) return;

      if (isOpen) {
        previousActiveElement.current =
          (document.activeElement as HTMLElement) || document.body;

        if (dialog.showModal) {
          dialog.showModal();
        }

        if (autoFocus && initialFocusRef?.current) {
          initialFocusRef.current.focus();
        } else if (autoFocus) {
          const focusableElement = dialog.querySelector<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
          );
          focusableElement?.focus();
        }
      } else if (dialog.close) {
        dialog.close();
      }
    }, [isOpen, autoFocus, initialFocusRef]);

    useEffect(() => {
      const dialog = dialogRef.current;
      if (!dialog) return;

      const handleCancel = (event: Event) => {
        if (!isClosedOnEscapeKey) {
          event.preventDefault();
        } else {
          onClose();
        }
      };

      const handleClick = (event: MouseEvent) => {
        if (isClosedOnOutsideClick && event.target === dialog) {
          onClose();
        }
      };

      const handleClose = () => {
        if (finalFocusRef?.current) {
          finalFocusRef.current.focus();
        } else if (restoreFocus && previousActiveElement.current) {
          previousActiveElement.current.focus();
        }
      };

      dialog.addEventListener('cancel', handleCancel);
      dialog.addEventListener('click', handleClick);
      dialog.addEventListener('close', handleClose);

      return () => {
        dialog.removeEventListener('cancel', handleCancel);
        dialog.removeEventListener('click', handleClick);
        dialog.removeEventListener('close', handleClose);
      };
    }, [
      isClosedOnOutsideClick,
      isClosedOnEscapeKey,
      onClose,
      finalFocusRef,
      restoreFocus,
    ]);

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

    return (
      <dialog
        ref={(node) => {
          dialogRef.current = node;
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        className={twMerge('backdrop:bg-overlay-default', className)}
        {...(props as React.DialogHTMLAttributes<HTMLDialogElement>)}
      >
        <ModalContext.Provider value={context}>{children}</ModalContext.Provider>
      </dialog>
    );
  },
);

Modal.displayName = 'Modal';
