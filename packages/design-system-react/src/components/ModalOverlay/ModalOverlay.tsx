import React, { forwardRef } from 'react';

import { twMerge } from '../../utils/tw-merge.js';
import { Box, BoxBackgroundColor } from '../Box/index.js';

import type { ModalOverlayProps } from './ModalOverlay.types.js';

export const ModalOverlay = forwardRef<HTMLDivElement, ModalOverlayProps>(
  ({ className, ...props }, ref) => (
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
  ),
);

ModalOverlay.displayName = 'ModalOverlay';
