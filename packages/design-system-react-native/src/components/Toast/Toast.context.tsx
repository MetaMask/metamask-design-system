// Third party dependencies.
import React, { createContext, useRef } from 'react';

// Internal dependencies.
import type { ToastRef, ToastContextParams } from './Toast.types';

export const ToastContext = createContext<ToastContextParams>({
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
