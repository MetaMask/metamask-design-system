import React, { forwardRef, useContext } from 'react';

import { twMerge } from '../../utils/tw-merge';
import { Box, BoxBackgroundColor } from '../Box';
import { MODAL_DISMISS_SURFACE_ATTR } from '../Modal/Modal.constants';
import { ModalContext } from '../Modal/Modal.context';

import type { ModalOverlayProps } from './ModalOverlay.types';

/**
 * Inside `Modal`, the scrim is painted by the native `<dialog>` `::backdrop`,
 * so this element is a transparent, dismissible layer that fills the dialog
 * (no second scrim stacked on top of the backdrop). Add a color via
 * `className` (for example `bg-black/20`) for an extra tint.
 *
 * Rendered standalone (outside `Modal`), it keeps its original behavior: a
 * fixed, full-viewport overlay with the default overlay color.
 */
export const ModalOverlay = forwardRef<HTMLDivElement, ModalOverlayProps>(
  ({ className, ...props }, ref) => {
    const isInsideModal = useContext(ModalContext) !== undefined;

    if (isInsideModal) {
      return (
        <Box
          ref={ref}
          aria-hidden="true"
          {...{ [MODAL_DISMISS_SURFACE_ATTR]: '' }}
          className={twMerge('absolute inset-0', className)}
          {...props}
        />
      );
    }

    return (
      <Box
        ref={ref}
        backgroundColor={BoxBackgroundColor.OverlayDefault}
        aria-hidden="true"
        className={twMerge(
          'fixed inset-0 z-[1050] motion-safe:animate-fade-in',
          className,
        )}
        {...props}
      />
    );
  },
);

ModalOverlay.displayName = 'ModalOverlay';
