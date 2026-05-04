import { createContext, useContext } from 'react';

import type { ModalProps } from './Modal.types';

export type ModalContextType = Omit<ModalProps, 'children'>;

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
