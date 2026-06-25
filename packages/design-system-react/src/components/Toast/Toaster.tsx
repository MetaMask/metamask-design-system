import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { twMerge } from '../../utils/tw-merge';

import { Toast } from './Toast';
import {
  TOAST_ANIMATION_DURATION,
  TOAST_VISIBILITY_DURATION,
} from './Toast.constants';
import type {
  ToastOptions,
  ToastProps,
  ToasterProps,
  ToasterRef,
} from './Toast.types';

type ToastStoreListener = (options: ToastOptions | undefined) => void;

let storeToastOptions: ToastOptions | undefined;
const toastStoreListeners = new Set<ToastStoreListener>();

const normalizeToastOptions = (options: ToastOptions): ToastOptions => ({
  hasNoTimeout: false,
  ...options,
});

const emitToastStoreChange = () => {
  toastStoreListeners.forEach((listener) => listener(storeToastOptions));
};

const setStoreToastOptions = (options: ToastOptions) => {
  storeToastOptions = normalizeToastOptions(options);
  emitToastStoreChange();
};

const clearStoreToastOptions = () => {
  storeToastOptions = undefined;
  emitToastStoreChange();
};

const subscribeToToastStore = (listener: ToastStoreListener) => {
  toastStoreListeners.add(listener);
  listener(storeToastOptions);

  return () => {
    toastStoreListeners.delete(listener);
  };
};

const getToastProps = ({
  hasNoTimeout: _hasNoTimeout,
  ...toastProps
}: ToastOptions): ToastProps => toastProps;

const ToasterComponent = forwardRef<ToasterRef, ToasterProps>(
  ({ className, ...props }, ref) => {
    const [toastOptions, setToastOptions] = useState<ToastOptions | undefined>(
      undefined,
    );
    const toastOptionsRef = useRef<ToastOptions | undefined>(undefined);
    const [isVisible, setIsVisible] = useState(false);
    const isVisibleRef = useRef(false);
    const replacementTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
      null,
    );
    const autoDismissTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
      null,
    );
    const exitTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const enterAnimationFrameRef = useRef<number | null>(null);
    const pendingToastRef = useRef<ToastOptions | undefined>(undefined);

    const setCurrentToastOptions = useCallback(
      (options: ToastOptions | undefined) => {
        toastOptionsRef.current = options;
        setToastOptions(options);
      },
      [],
    );

    const setCurrentIsVisible = useCallback((nextIsVisible: boolean) => {
      isVisibleRef.current = nextIsVisible;
      setIsVisible(nextIsVisible);
    }, []);

    const clearPendingTimers = useCallback(() => {
      if (replacementTimerRef.current !== null) {
        clearTimeout(replacementTimerRef.current);
        replacementTimerRef.current = null;
      }
      if (autoDismissTimerRef.current !== null) {
        clearTimeout(autoDismissTimerRef.current);
        autoDismissTimerRef.current = null;
      }
      if (exitTimerRef.current !== null) {
        clearTimeout(exitTimerRef.current);
        exitTimerRef.current = null;
      }
      if (enterAnimationFrameRef.current !== null) {
        cancelAnimationFrame(enterAnimationFrameRef.current);
        enterAnimationFrameRef.current = null;
      }
    }, []);

    const closeRenderedToast = useCallback(() => {
      if (!toastOptionsRef.current && !isVisibleRef.current) {
        clearPendingTimers();
        pendingToastRef.current = undefined;
        return;
      }

      clearPendingTimers();
      pendingToastRef.current = undefined;
      setCurrentIsVisible(false);
      exitTimerRef.current = setTimeout(() => {
        exitTimerRef.current = null;
        setCurrentToastOptions(undefined);
      }, TOAST_ANIMATION_DURATION);
    }, [clearPendingTimers, setCurrentIsVisible, setCurrentToastOptions]);

    // Replace the currently mounted toast rather than queueing multiple toasts.
    // This mirrors the old app-level toast service behavior while keeping the
    // imperative API centered in the shared single-toast store.
    const showRenderedToast = useCallback(
      (options: ToastOptions) => {
        const normalizedOptions = normalizeToastOptions(options);
        const timeoutDuration = 0;

        if (toastOptionsRef.current) {
          pendingToastRef.current = normalizedOptions;
          setCurrentIsVisible(false);
          if (exitTimerRef.current !== null) {
            clearTimeout(exitTimerRef.current);
            exitTimerRef.current = null;
          }
          exitTimerRef.current = setTimeout(() => {
            exitTimerRef.current = null;
            setCurrentToastOptions(pendingToastRef.current);
            pendingToastRef.current = undefined;
          }, TOAST_ANIMATION_DURATION);
          return;
        }

        if (replacementTimerRef.current !== null) {
          clearTimeout(replacementTimerRef.current);
        }

        replacementTimerRef.current = setTimeout(() => {
          replacementTimerRef.current = null;
          setCurrentToastOptions(normalizedOptions);
        }, timeoutDuration);
      },
      [setCurrentIsVisible, setCurrentToastOptions],
    );

    useImperativeHandle(
      ref,
      () => ({
        closeToast: clearStoreToastOptions,
        showToast: setStoreToastOptions,
      }),
      [],
    );

    // Subscribe before sibling passive effects run so toast() can be called
    // from anywhere once the app root has rendered <Toaster />.
    useLayoutEffect(() => {
      return subscribeToToastStore((options) => {
        if (options) {
          showRenderedToast(options);
          return;
        }

        closeRenderedToast();
      });
    }, [closeRenderedToast, showRenderedToast]);

    // Delay the enter transition until after mount so the DOM can paint the
    // offscreen starting position before we slide the toast into view.
    useEffect(() => {
      if (toastOptions && !isVisible) {
        enterAnimationFrameRef.current = requestAnimationFrame(() => {
          enterAnimationFrameRef.current = requestAnimationFrame(() => {
            setCurrentIsVisible(true);
            enterAnimationFrameRef.current = null;
          });
        });
      }
      return () => {
        clearPendingTimers();
      };
    }, [clearPendingTimers, setCurrentIsVisible, toastOptions]); // intentionally omit isVisible — only react to new toast options

    // Auto-dismiss once the toast is visible, unless the caller requested a
    // persistent toast.
    useEffect(() => {
      if (isVisible && toastOptions && !toastOptions.hasNoTimeout) {
        autoDismissTimerRef.current = setTimeout(() => {
          autoDismissTimerRef.current = null;
          clearStoreToastOptions();
        }, TOAST_VISIBILITY_DURATION);
        return () => {
          clearPendingTimers();
        };
      }
      return undefined;
    }, [clearPendingTimers, isVisible, toastOptions]);

    useEffect(() => {
      return () => {
        clearPendingTimers();
        pendingToastRef.current = undefined;
        toastOptionsRef.current = undefined;
        isVisibleRef.current = false;
      };
    }, [clearPendingTimers]);

    if (!toastOptions) {
      return null;
    }

    const {
      onClose: toastOnClose,
      className: toastClassName,
      ...toastProps
    } = getToastProps(toastOptions);

    return (
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className={twMerge(
          'pointer-events-none fixed inset-x-4 bottom-4 z-[1000] flex justify-center',
          className,
        )}
        {...props}
      >
        <div
          className="pointer-events-auto w-full transition-transform ease-in-out"
          style={{
            transitionDuration: `${TOAST_ANIMATION_DURATION}ms`,
            transform: isVisible
              ? 'translateY(0)'
              : 'translateY(calc(100% + 16px))',
          }}
        >
          <Toast
            {...toastProps}
            className={toastClassName}
            onClose={() => {
              clearStoreToastOptions();
              toastOnClose?.();
            }}
          />
        </div>
      </div>
    );
  },
);

ToasterComponent.displayName = 'Toaster';

type ToastFunction = ((options: ToastOptions) => void) & {
  dismiss: () => void;
};

export const Toaster = ToasterComponent;

export const toast = ((options: ToastOptions) => {
  setStoreToastOptions(options);
}) as ToastFunction;

toast.dismiss = () => {
  clearStoreToastOptions();
};
