// Third party dependencies.
import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import type { RefObject } from 'react';

// Internal dependencies.
import { ToastBase } from './ToastBase';
import type {
  ToastOptions,
  ToastProps,
  ToastRef,
} from './Toast.types';

let registeredRef: RefObject<ToastRef> | null = null;

const assertRegisteredRef = (method: string): ToastRef => {
  if (!registeredRef?.current) {
    throw new Error(
      `Toast.${method}() called before <Toast /> mounted. Render <Toast /> once at the root of your app.`,
    );
  }
  return registeredRef.current;
};

const ToastComponent = forwardRef<ToastRef, ToastProps>((props, ref) => {
  const innerRef = useRef<ToastRef>(null);

  useImperativeHandle(
    ref,
    () => ({
      showToast: (options) => innerRef.current?.showToast(options),
      closeToast: () => innerRef.current?.closeToast(),
    }),
    [],
  );

  useEffect(() => {
    registeredRef = innerRef;
    return () => {
      if (registeredRef === innerRef) {
        registeredRef = null;
      }
    };
  }, []);

  return <ToastBase ref={innerRef} {...props} />;
});

ToastComponent.displayName = 'Toast';

type ToastWithStatics = typeof ToastComponent & {
  /**
   * Show a toast notification. Requires `<Toast />` to be mounted.
   */
  show: (options: ToastOptions) => void;
  /**
   * Hide the currently visible toast, if any.
   */
  hide: () => void;
  /**
   * Clears the registered `<Toast />` ref. Intended for testing only.
   * @internal
   */
  resetForTesting: () => void;
};

export const Toast = ToastComponent as ToastWithStatics;

Toast.show = (options) => {
  assertRegisteredRef('show').showToast(options);
};

Toast.hide = () => {
  assertRegisteredRef('hide').closeToast();
};

Toast.resetForTesting = () => {
  registeredRef = null;
};
