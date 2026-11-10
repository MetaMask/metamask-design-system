import React, { forwardRef } from 'react';

import { twMerge } from '../../utils/tw-merge';
import { Box } from '../Box';

import type { ModalBodyProps } from './ModalBody.types';

export const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ className, children, ...props }, ref) => (
    <Box
      ref={ref}
      paddingHorizontal={4}
      className={twMerge('relative max-h-full overflow-y-auto', className)}
      {...props}
    >
      {children}
    </Box>
  ),
);

ModalBody.displayName = 'ModalBody';
