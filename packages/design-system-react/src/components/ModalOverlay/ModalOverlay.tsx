import React, { forwardRef } from 'react';

import { twMerge } from '../../utils/tw-merge';
import { Box, BoxBackgroundColor } from '../Box';

import type { ModalOverlayProps } from './ModalOverlay.types';

export const ModalOverlay = forwardRef<HTMLDivElement, ModalOverlayProps>(
  ({ className, ...props }, ref) => (
    <Box
      ref={ref}
      backgroundColor={BoxBackgroundColor.OverlayDefault}
      aria-hidden="true"
      className={twMerge(
        'motion-safe:animate-fade-in fixed inset-0 z-[1050]',
        className,
      )}
      {...props}
    />
  ),
);

ModalOverlay.displayName = 'ModalOverlay';
