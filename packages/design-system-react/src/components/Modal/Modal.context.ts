import { createContext, useContext } from 'react';

import type { ModalProps } from './Modal.types';

export type ModalContextType = Omit<ModalProps, 'children'> & {
  /**
   * Used by `ModalHeader` to tell the native `<dialog>` which element labels
   * it (`aria-labelledby`). Pass `undefined` to unregister.
   */
  registerTitleId?: (id: string | undefined) => void;
  /**
   * Used by `ModalBody` to tell the native `<dialog>` which element describes
   * it (`aria-describedby`). Pass `undefined` to unregister.
   */
  registerDescriptionId?: (id: string | undefined) => void;
};

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined,
);

export const useModalContext = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error(
      'useModalContext must be used within a Modal — make sure the consuming component is rendered inside <Modal />.',
    );
  }
  return context;
};
