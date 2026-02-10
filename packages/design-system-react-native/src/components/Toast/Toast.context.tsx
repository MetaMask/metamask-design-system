// Third party dependencies.
import React, { useRef } from 'react';

// Internal dependencies.
import { ToastRef, ToastContextParams } from './Toast.types';

export const ToastContext = React.createContext<ToastContextParams>({
  toastRef: undefined,
});

export const ToastContextWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const toastRef = useRef<ToastRef | null>(null);

  // TODO: how to register service?

  return (
    <ToastContext.Provider value={{ toastRef }}>
      {children}
    </ToastContext.Provider>
  );
};
