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
      if (!isOpen) {
        return undefined;
      }

      const dialog = dialogRef.current;
      if (!dialog) {
        return undefined;
      }

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

      return () => {
        if (dialog.open && dialog.close) {
          dialog.close();
        }

        // Apply after close() so finalFocusRef wins over UA focus restore.
        if (finalFocusRef?.current) {
          finalFocusRef.current.focus();
        } else if (restoreFocus && previousActiveElement.current) {
          previousActiveElement.current.focus();
        }
      };
    }, [isOpen, autoFocus, initialFocusRef, finalFocusRef, restoreFocus]);

    useEffect(() => {
      if (!isOpen) {
        return undefined;
      }

      const dialog = dialogRef.current;
      if (!dialog) {
        return undefined;
      }

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

      dialog.addEventListener('cancel', handleCancel);
      dialog.addEventListener('click', handleClick);

      return () => {
        dialog.removeEventListener('cancel', handleCancel);
        dialog.removeEventListener('click', handleClick);
      };
    }, [isOpen, isClosedOnOutsideClick, isClosedOnEscapeKey, onClose]);

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
        role="presentation"
        ref={(node) => {
          dialogRef.current = node;
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        className={twMerge(
          'm-0 size-full max-h-none max-w-none border-0 bg-transparent p-0 backdrop:bg-transparent',
          className,
        )}
        {...(props as React.DialogHTMLAttributes<HTMLDialogElement>)}
      >
        <ModalContext.Provider value={context}>
          {children}
        </ModalContext.Provider>
      </dialog>
    );
  },
);

Modal.displayName = 'Modal';
