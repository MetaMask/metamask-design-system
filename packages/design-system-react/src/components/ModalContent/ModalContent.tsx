import React, { forwardRef, useEffect, useRef } from 'react';

import { twMerge } from '../../utils/tw-merge';
import {
  Box,
  BoxAlignItems,
  BoxBackgroundColor,
  BoxFlexDirection,
  BoxJustifyContent,
} from '../Box';
import { useModalContext } from '../Modal';
import { ModalFocus } from '../ModalFocus';

import {
  MODAL_CONTENT_IGNORE_OUTSIDE_CLICK_ATTR,
  TWCLASSMAP_MODAL_CONTENT_SIZE,
} from './ModalContent.constants';
import type { ModalContentProps } from './ModalContent.types';
import { ModalContentSize } from './ModalContent.types';

export const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(
  (
    {
      className,
      children,
      size = ModalContentSize.Sm,
      modalDialogProps,
      ...props
    },
    ref,
  ) => {
    const {
      onClose,
      isClosedOnEscapeKey,
      isClosedOnOutsideClick,
      initialFocusRef,
      finalFocusRef,
      restoreFocus,
      autoFocus,
    } = useModalContext();
    const modalDialogRef = useRef<HTMLElement>(null);

    useEffect(() => {
      const handleEscKey = (event: KeyboardEvent) => {
        if (isClosedOnEscapeKey && event.key === 'Escape') {
          onClose();
        }
      };
      const handleClickOutside = (event: MouseEvent) => {
        if (!isClosedOnOutsideClick) {
          return;
        }
        const target = event.target as HTMLElement | null;
        // Floating UI primitives (Popover, Tooltip, Select dropdown, etc.)
        // that portal alongside the Modal but are part of the modal
        // interaction can opt out of the outside-click handler by setting
        // `data-mm-modal-ignore-outside-click` on their root element.
        if (target?.closest(`[${MODAL_CONTENT_IGNORE_OUTSIDE_CLICK_ATTR}]`)) {
          return;
        }
        if (
          modalDialogRef.current &&
          !modalDialogRef.current.contains(target as Node)
        ) {
          onClose();
        }
      };

      document.addEventListener('keydown', handleEscKey);
      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('keydown', handleEscKey);
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isClosedOnEscapeKey, isClosedOnOutsideClick, onClose]);

    return (
      <ModalFocus
        initialFocusRef={initialFocusRef}
        finalFocusRef={finalFocusRef}
        restoreFocus={restoreFocus}
        autoFocus={autoFocus}
      >
        <div
          ref={ref}
          className={twMerge(
            'fixed inset-0 z-[1050] flex items-start justify-center p-4 sm:py-8 md:py-12',
            '[@media(max-height:475px)]:p-2',
            className,
          )}
          {...props}
        >
          <Box
            ref={modalDialogRef as React.Ref<HTMLDivElement>}
            asChild
            backgroundColor={BoxBackgroundColor.BackgroundDefault}
            justifyContent={BoxJustifyContent.Start}
            alignItems={BoxAlignItems.Stretch}
            flexDirection={BoxFlexDirection.Column}
            paddingTop={4}
            paddingBottom={4}
            {...modalDialogProps}
            className={twMerge(
              'flex max-h-full w-full rounded-lg shadow-lg motion-safe:animate-slide-up',
              TWCLASSMAP_MODAL_CONTENT_SIZE[size],
              modalDialogProps?.className,
            )}
          >
            <section role="dialog" aria-modal="true">
              {children}
            </section>
          </Box>
        </div>
      </ModalFocus>
    );
  },
);

ModalContent.displayName = 'ModalContent';
