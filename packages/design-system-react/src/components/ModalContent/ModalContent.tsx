import React, { forwardRef } from 'react';

import { twMerge } from '../../utils/tw-merge';
import {
  Box,
  BoxAlignItems,
  BoxBackgroundColor,
  BoxBorderColor,
  BoxFlexDirection,
  BoxJustifyContent,
} from '../Box';
import { MODAL_DISMISS_SURFACE_ATTR } from '../Modal/Modal.constants';

import { TWCLASSMAP_MODAL_CONTENT_SIZE } from './ModalContent.constants';
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
    return (
      <div
        ref={ref}
        className={twMerge(
          'absolute inset-0 flex items-start justify-center p-4 sm:py-8 md:py-12',
          '[@media(max-height:475px)]:p-2',
          className,
        )}
        {...{ [MODAL_DISMISS_SURFACE_ATTR]: '' }}
        {...props}
      >
        <Box
          asChild
          backgroundColor={BoxBackgroundColor.BackgroundElevated1}
          borderColor={BoxBorderColor.BorderAlternative}
          borderWidth={1}
          justifyContent={BoxJustifyContent.Start}
          alignItems={BoxAlignItems.Stretch}
          flexDirection={BoxFlexDirection.Column}
          paddingTop={4}
          paddingBottom={4}
          {...modalDialogProps}
          className={twMerge(
            'flex max-h-full w-full rounded-[32px] shadow-lg motion-safe:animate-slide-up',
            TWCLASSMAP_MODAL_CONTENT_SIZE[size],
            modalDialogProps?.className,
          )}
        >
          <section>{children}</section>
        </Box>
      </div>
    );
  },
);

ModalContent.displayName = 'ModalContent';
