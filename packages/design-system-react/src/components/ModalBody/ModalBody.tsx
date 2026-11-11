import React, { forwardRef } from 'react';

import { twMerge } from '../../utils/tw-merge.js';
import { Box } from '../Box/index.js';

import type { ModalBodyProps } from './ModalBody.types.js';

export const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ className, children, tabIndex = 0, ...props }, ref) => (
    <Box
      ref={ref}
      paddingHorizontal={4}
      tabIndex={tabIndex}
      className={twMerge('relative max-h-full overflow-y-auto', className)}
      {...props}
    >
      {children}
    </Box>
  ),
);

ModalBody.displayName = 'ModalBody';
