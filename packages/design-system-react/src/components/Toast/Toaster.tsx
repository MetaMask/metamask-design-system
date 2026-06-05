import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import type { RefObject } from 'react';

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

let registeredRef: RefObject<ToasterRef | null> | null = null;

const assertRegisteredRef = (method: 'dismiss' | 'toast'): ToasterRef => {
  if (!registeredRef?.current) {
    const invocation = method === 'toast' ? 'toast()' : `toast.${method}()`;
    throw new Error(
      `${invocation} called before <Toaster /> mounted. Render <Toaster /> once at the root of your app.`,
    );
  }
  return registeredRef.current;
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
    const [isVisible, setIsVisible] = useState(false);
    const replacementTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
      null,
    );
    const autoDismissTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
      null,
    );
    const exitTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const enterAnimationFrameRef = useRef<number | null>(null);
    const pendingToastRef = useRef<ToastOptions | undefined>(undefined);
    const innerRef = useRef<ToasterRef | null>(null);

    const clearPendingTimers = () => {
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
    };

    const closeToast = () => {
      clearPendingTimers();
      pendingToastRef.current = undefined;
      setIsVisible(false);
      exitTimerRef.current = setTimeout(() => {
        exitTimerRef.current = null;
        setToastOptions(undefined);
      }, TOAST_ANIMATION_DURATION);
    };

    // Replace the currently mounted toast rather than queueing multiple toasts.
    // This mirrors the old app-level toast service behavior while keeping the
    // imperative API centered in the mounted Toaster instance.
    const showToast = (options: ToastOptions) => {
      const normalizedOptions = { hasNoTimeout: false, ...options };
      const timeoutDuration = 0;

      if (toastOptions) {
        pendingToastRef.current = normalizedOptions;
        setIsVisible(false);
        if (exitTimerRef.current !== null) {
          clearTimeout(exitTimerRef.current);
          exitTimerRef.current = null;
        }
        exitTimerRef.current = setTimeout(() => {
          exitTimerRef.current = null;
          setToastOptions(pendingToastRef.current);
          pendingToastRef.current = undefined;
        }, TOAST_ANIMATION_DURATION);
        return;
      }

      if (replacementTimerRef.current !== null) {
        clearTimeout(replacementTimerRef.current);
      }

      replacementTimerRef.current = setTimeout(() => {
        replacementTimerRef.current = null;
        setToastOptions(normalizedOptions);
      }, timeoutDuration);
    };

    innerRef.current = { closeToast, showToast };

    useImperativeHandle(ref, () => innerRef.current as ToasterRef);

    // Register the mounted instance so toast() can be called from anywhere.
    useLayoutEffect(() => {
      registeredRef = innerRef;
      return () => {
        if (registeredRef === innerRef) {
          registeredRef = null;
        }
      };
    }, []);

    // Delay the enter transition until after mount so the DOM can paint the
    // offscreen starting position before we slide the toast into view.
    useEffect(() => {
      if (toastOptions && !isVisible) {
        enterAnimationFrameRef.current = requestAnimationFrame(() => {
          enterAnimationFrameRef.current = requestAnimationFrame(() => {
            setIsVisible(true);
            enterAnimationFrameRef.current = null;
          });
        });
      }
      return () => {
        clearPendingTimers();
      };
    }, [toastOptions]); // intentionally omit isVisible — only react to new toast options

    // Auto-dismiss once the toast is visible, unless the caller requested a
    // persistent toast.
    useEffect(() => {
      if (isVisible && toastOptions && !toastOptions.hasNoTimeout) {
        autoDismissTimerRef.current = setTimeout(() => {
          autoDismissTimerRef.current = null;
          innerRef.current?.closeToast();
        }, TOAST_VISIBILITY_DURATION);
        return () => {
          clearPendingTimers();
        };
      }
      return undefined;
    }, [isVisible]); // intentionally omit toastOptions — timer fires once per visibility change

    useEffect(() => {
      return () => {
        clearPendingTimers();
        pendingToastRef.current = undefined;
      };
    }, []);

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
              closeToast();
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
  assertRegisteredRef('toast').showToast(options);
}) as ToastFunction;

toast.dismiss = () => {
  assertRegisteredRef('dismiss').closeToast();
};
