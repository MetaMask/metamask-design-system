import React, { forwardRef } from 'react';

import { twMerge } from '../../utils/tw-merge';
import { Box } from '../Box';

import type { HeaderBaseProps } from './HeaderBase.types';

export const HeaderBase = forwardRef<HTMLDivElement, HeaderBaseProps>(
  (
    {
      startAccessory,
      endAccessory,
      className,
      children,
      childrenWrapperProps,
      startAccessoryWrapperProps,
      endAccessoryWrapperProps,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={twMerge(
        // Three-column grid keeps the title horizontally centered: side
        // columns each take an equal share of the remaining space, the title
        // sits in the auto-sized center column. No JS measurement needed.
        'grid grid-cols-[1fr_auto_1fr] items-center',
        className,
      )}
      {...props}
    >
      {startAccessory && (
        <Box
          {...startAccessoryWrapperProps}
          className={twMerge(
            'col-start-1 justify-self-start',
            startAccessoryWrapperProps?.className,
          )}
        >
          {startAccessory}
        </Box>
      )}
      {children && (
        <Box
          {...childrenWrapperProps}
          className={twMerge(
            // Always pin the title to column 2 so missing side accessories
            // leave their empty `1fr` track in place and keep the title
            // visually centered.
            'col-start-2 col-end-3',
            childrenWrapperProps?.className,
          )}
        >
          {children}
        </Box>
      )}
      {endAccessory && (
        <Box
          {...endAccessoryWrapperProps}
          className={twMerge(
            'col-start-3 justify-self-end',
            endAccessoryWrapperProps?.className,
          )}
        >
          {endAccessory}
        </Box>
      )}
    </div>
  ),
);

HeaderBase.displayName = 'HeaderBase';
