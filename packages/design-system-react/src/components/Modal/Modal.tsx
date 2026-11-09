import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { twMerge } from '../../utils/tw-merge';
import { MODAL_CONTENT_IGNORE_OUTSIDE_CLICK_ATTR } from '../ModalContent/ModalContent.constants';

import { MODAL_DISMISS_SURFACE_ATTR } from './Modal.constants';
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
      onCancel,
      onClick,
      onKeyDown,
      onMouseDown,
      'aria-labelledby': ariaLabelledBy,
      'aria-describedby': ariaDescribedBy,
      ...props
    },
    ref,
  ) => {
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const pointerDownTarget = useRef<EventTarget | null>(null);
    const [titleId, setTitleId] = useState<string | undefined>(undefined);
    const [descriptionId, setDescriptionId] = useState<string | undefined>(
      undefined,
    );

    // Latest focus-related props, read when the dialog opens/closes so the
    // open effect only needs to re-run when `isOpen` changes.
    const focusConfig = useRef({
      autoFocus,
      initialFocusRef,
      finalFocusRef,
      restoreFocus,
    });
    useEffect(() => {
      focusConfig.current = {
        autoFocus,
        initialFocusRef,
        finalFocusRef,
        restoreFocus,
      };
    });

    const setRefs = useCallback(
      (node: HTMLDialogElement | null) => {
        dialogRef.current = node;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref],
    );

    // The `<dialog>` is only mounted while `isOpen` is true, so this effect
    // runs once per open and its cleanup once per close/unmount.
    useEffect(() => {
      const dialog = dialogRef.current;
      if (!isOpen || !dialog) {
        return undefined;
      }

      const previouslyFocused =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null;

      if (!dialog.open) {
        if (typeof dialog.showModal === 'function') {
          dialog.showModal();
        } else {
          dialog.setAttribute('open', '');
        }
      }

      // `showModal()` natively focuses the first focusable descendant (or the
      // dialog itself), which is what `autoFocus` has always meant here.
      const { autoFocus: shouldAutoFocus, initialFocusRef: initialRef } =
        focusConfig.current;
      if (initialRef?.current) {
        initialRef.current.focus();
      } else if (!shouldAutoFocus) {
        dialog.focus({ preventScroll: true });
      }

      return () => {
        const { finalFocusRef: finalRef, restoreFocus: shouldRestore } =
          focusConfig.current;
        if (finalRef?.current) {
          finalRef.current.focus();
        } else if (shouldRestore && previouslyFocused?.isConnected) {
          previouslyFocused.focus();
        }
      };
    }, [isOpen]);

    const handleCancel = (event: React.SyntheticEvent<HTMLDialogElement>) => {
      onCancel?.(event);
      // Never let the browser close the dialog itself: `isOpen` stays the
      // single source of truth and the consumer decides via `onClose`.
      event.preventDefault();
      if (isClosedOnEscapeKey) {
        onClose();
      }
    };

    // Browsers only allow a cancelable `cancel` event for the first Escape
    // press without user activation (Chrome), so a second press would close the
    // dialog natively and bypass `isClosedOnEscapeKey`. Handling the keydown
    // and preventing its default stops the browser's close request entirely.
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
      onKeyDown?.(event);
      if (event.key === 'Escape' && !event.defaultPrevented) {
        event.preventDefault();
        if (isClosedOnEscapeKey) {
          onClose();
        }
      }
    };

    // Fires when the dialog was closed natively without going through
    // `isOpen` (for example a `<form method="dialog">` submit). Keeps
    // consumer state in sync.
    const handleNativeClose = () => {
      onClose();
    };

    const isDismissSurface = (target: EventTarget | null) =>
      target === dialogRef.current ||
      (target instanceof Element &&
        target.hasAttribute(MODAL_DISMISS_SURFACE_ATTR));

    const handleMouseDown = (event: React.MouseEvent<HTMLDialogElement>) => {
      onMouseDown?.(event);
      pointerDownTarget.current = event.target;
    };

    const handleClick = (event: React.MouseEvent<HTMLDialogElement>) => {
      onClick?.(event);
      const downTarget = pointerDownTarget.current;
      pointerDownTarget.current = null;

      if (!isClosedOnOutsideClick) {
        return;
      }
      const target = event.target as Element | null;
      if (target?.closest?.(`[${MODAL_CONTENT_IGNORE_OUTSIDE_CLICK_ATTR}]`)) {
        return;
      }
      // Require the press to start and end on a dismiss surface so dragging a
      // text selection out of the content doesn't close the modal.
      if (
        isDismissSurface(event.target) &&
        (downTarget === null || isDismissSurface(downTarget))
      ) {
        onClose();
      }
    };

    const context = useMemo<ModalContextType>(
      () => ({
        isOpen,
        onClose,
        isClosedOnOutsideClick,
        isClosedOnEscapeKey,
        autoFocus,
        initialFocusRef,
        finalFocusRef,
        restoreFocus,
        registerTitleId: setTitleId,
        registerDescriptionId: setDescriptionId,
      }),
      [
        isOpen,
        onClose,
        isClosedOnOutsideClick,
        isClosedOnEscapeKey,
        autoFocus,
        initialFocusRef,
        finalFocusRef,
        restoreFocus,
      ],
    );

    if (!isOpen) {
      return null;
    }

    return (
      <dialog
        tabIndex={-1}
        {...props}
        ref={setRefs}
        aria-labelledby={ariaLabelledBy ?? titleId}
        aria-describedby={ariaDescribedBy ?? descriptionId}
        className={twMerge(
          // Reset the browser's default dialog box (inset margin, padding,
          // border, fit-content sizing, max sizes, colors) so the dialog is a
          // transparent full-viewport container in the top layer. The native
          // `::backdrop` paints the scrim.
          'fixed inset-0 m-0 size-full max-h-none max-w-none border-0 bg-transparent p-0 text-inherit focus:outline-none',
          'backdrop:bg-overlay-default motion-safe:backdrop:animate-fade-in',
          className,
        )}
        onCancel={handleCancel}
        onClose={handleNativeClose}
        onKeyDown={handleKeyDown}
        onMouseDown={handleMouseDown}
        onClick={handleClick}
      >
        <ModalContext.Provider value={context}>
          {children}
        </ModalContext.Provider>
      </dialog>
    );
  },
);

Modal.displayName = 'Modal';
