import React, { forwardRef, useContext, useEffect } from 'react';

import { twMerge } from '../../utils/tw-merge';
import { Box } from '../Box';
import { ModalContext } from '../Modal/Modal.context';
import { useStableId } from '../Modal/useStableId';

import type { ModalBodyProps } from './ModalBody.types';

export const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ className, children, tabIndex = 0, id, ...props }, ref) => {
    // The body describes the native `<dialog>` via `aria-describedby`.
    const generatedId = useStableId();
    const bodyId = id ?? generatedId;
    const registerDescriptionId =
      useContext(ModalContext)?.registerDescriptionId;
    useEffect(() => {
      if (!registerDescriptionId || !bodyId) {
        return undefined;
      }
      registerDescriptionId(bodyId);
      return () => registerDescriptionId(undefined);
    }, [registerDescriptionId, bodyId]);

    return (
      <Box
        ref={ref}
        id={bodyId}
        paddingHorizontal={4}
        tabIndex={tabIndex}
        className={twMerge('relative max-h-full overflow-y-auto', className)}
        {...props}
      >
        {children}
      </Box>
    );
  },
);

ModalBody.displayName = 'ModalBody';
