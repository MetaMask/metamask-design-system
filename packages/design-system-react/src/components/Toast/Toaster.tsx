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
    const dismissTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const innerRef = useRef<ToasterRef | null>(null);

    const closeToast = () => {
      if (replacementTimerRef.current !== null) {
        clearTimeout(replacementTimerRef.current);
        replacementTimerRef.current = null;
      }
      if (dismissTimerRef.current !== null) {
        clearTimeout(dismissTimerRef.current);
        dismissTimerRef.current = null;
      }
      setIsVisible(false);
      dismissTimerRef.current = setTimeout(() => {
        dismissTimerRef.current = null;
        setToastOptions(undefined);
      }, TOAST_ANIMATION_DURATION);
    };

    const showToast = (options: ToastOptions) => {
      const normalizedOptions = { hasNoTimeout: false, ...options };
      let timeoutDuration = 0;

      if (toastOptions) {
        setIsVisible(false);
        if (dismissTimerRef.current !== null) {
          clearTimeout(dismissTimerRef.current);
          dismissTimerRef.current = null;
        }
        timeoutDuration = TOAST_ANIMATION_DURATION;
        setToastOptions(undefined);
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

    useLayoutEffect(() => {
      registeredRef = innerRef;
      return () => {
        if (registeredRef === innerRef) {
          registeredRef = null;
        }
      };
    }, []);

    // Trigger enter animation after toast is mounted in the DOM.
    useEffect(() => {
      if (toastOptions && !isVisible) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsVisible(true);
          });
        });
      }
    }, [toastOptions]); // eslint-disable-line react-hooks/exhaustive-deps

    // Auto-dismiss timer.
    useEffect(() => {
      if (isVisible && toastOptions && !toastOptions.hasNoTimeout) {
        dismissTimerRef.current = setTimeout(() => {
          dismissTimerRef.current = null;
          innerRef.current?.closeToast();
        }, TOAST_VISIBILITY_DURATION);
        return () => {
          if (dismissTimerRef.current !== null) {
            clearTimeout(dismissTimerRef.current);
          }
        };
      }
      return undefined;
    }, [isVisible]); // eslint-disable-line react-hooks/exhaustive-deps

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
          'pointer-events-none fixed bottom-4 left-4 right-4 z-[1000] flex justify-center',
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
