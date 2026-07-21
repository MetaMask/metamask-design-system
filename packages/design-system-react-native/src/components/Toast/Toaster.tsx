// Third party dependencies.
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, {
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import type { RefObject } from 'react';
import { Dimensions } from 'react-native';
import type { LayoutChangeEvent, StyleProp, ViewStyle } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { scheduleOnRN } from 'react-native-worklets';

// Internal dependencies.
import { Toast } from './Toast';
import {
  TOAST_DISMISS_DISTANCE_THRESHOLD,
  TOAST_DISMISS_VELOCITY_THRESHOLD,
  TOAST_SPRING_CONFIG,
  TOAST_SWIPE_ACTIVE_OFFSET_Y,
  TOAST_SWIPE_FAIL_OFFSET_X,
  TOAST_TOP_PADDING,
  TOAST_VISIBILITY_DURATION,
} from './Toast.constants';
import type {
  ToastOptions,
  ToastProps,
  ToasterProps,
  ToasterRef,
} from './Toast.types';

const screenHeight = Dimensions.get('window').height;

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
  onClose: _onClose,
  topOffset: _topOffset,
  twClassName: _twClassName,
  ...toastProps
}: ToastOptions): Omit<ToastProps, 'twClassName'> => toastProps;

const getHiddenTranslateY = (height: number, offset: number) =>
  -(height + offset);

const ToasterComponent = forwardRef<ToasterRef, ToasterProps>(
  ({ twClassName, ...props }, ref) => {
    const tw = useTailwind();
    const [toastOptions, setToastOptions] = useState<ToastOptions | undefined>(
      undefined,
    );
    const replacementTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
      null,
    );
    const autoDismissTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
      null,
    );
    const animationStartedRef = useRef(false);
    const visibleAtRef = useRef<number | null>(null);
    const hasNoTimeoutRef = useRef(false);
    const { top: topInset } = useSafeAreaInsets();
    const toastHeight = useSharedValue(screenHeight);
    const hiddenTranslateY = useSharedValue(-screenHeight);
    const visibleTranslateY = useSharedValue(0);
    const gestureStartY = useSharedValue(0);
    const translateYProgress = useSharedValue(-screenHeight);
    const isDismissing = useSharedValue(false);
    const topOffset = toastOptions?.topOffset ?? 0;
    hasNoTimeoutRef.current = Boolean(toastOptions?.hasNoTimeout);
    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ translateY: translateYProgress.value + topOffset }],
    }));
    const baseStyle = useMemo(
      () =>
        [
          tw.style('absolute left-4 right-4 top-0'),
          animatedStyle,
        ] as StyleProp<ViewStyle>,
      [tw, animatedStyle],
    );
    const innerRef = useRef<ToasterRef | null>(null);

    const clearScheduledAutoDismiss = () => {
      if (autoDismissTimeoutRef.current !== null) {
        clearTimeout(autoDismissTimeoutRef.current);
        autoDismissTimeoutRef.current = null;
      }
    };

    const resetState = () => {
      animationStartedRef.current = false;
      visibleAtRef.current = null;
      isDismissing.value = false;
      clearScheduledAutoDismiss();
      setToastOptions(undefined);
    };

    const startDismissAnimation = () => {
      clearScheduledAutoDismiss();
      isDismissing.value = true;
      visibleAtRef.current = null;
      translateYProgress.value = withSpring(
        hiddenTranslateY.value,
        TOAST_SPRING_CONFIG,
        (finished) => {
          if (finished) {
            scheduleOnRN(resetState);
          }
        },
      );
    };

    const scheduleAutoDismiss = (delayMs: number) => {
      clearScheduledAutoDismiss();
      autoDismissTimeoutRef.current = setTimeout(() => {
        autoDismissTimeoutRef.current = null;
        startDismissAnimation();
      }, delayMs);
    };

    const beginAutoDismiss = () => {
      visibleAtRef.current = Date.now();
      scheduleAutoDismiss(TOAST_VISIBILITY_DURATION);
    };

    const resumeAutoDismissAfterSwipe = () => {
      if (hasNoTimeoutRef.current || isDismissing.value) {
        return;
      }

      // Entrance was interrupted before auto-dismiss started — start a full timer.
      if (visibleAtRef.current === null) {
        beginAutoDismiss();
        return;
      }

      const elapsed = Date.now() - visibleAtRef.current;
      if (elapsed >= TOAST_VISIBILITY_DURATION) {
        startDismissAnimation();
        return;
      }

      scheduleAutoDismiss(TOAST_VISIBILITY_DURATION - elapsed);
    };

    const showToast = (options: ToastOptions) => {
      let timeoutDuration = 0;
      const normalizedOptions = {
        hasNoTimeout: false,
        ...options,
      };
      if (toastOptions) {
        // Always clear any pending auto-dismiss from the previous toast, including
        // when the replacement is persistent (hasNoTimeout). Otherwise the old
        // timer can fire and dismiss the new toast.
        clearScheduledAutoDismiss();
        cancelAnimation(translateYProgress);
        timeoutDuration = 100;
        animationStartedRef.current = false;
        visibleAtRef.current = null;
        isDismissing.value = false;
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

    const closeToast = () => {
      if (replacementTimerRef.current !== null) {
        clearTimeout(replacementTimerRef.current);
        replacementTimerRef.current = null;
      }
      startDismissAnimation();
    };

    const closeToastRef = useRef(closeToast);
    const resumeAutoDismissAfterSwipeRef = useRef(resumeAutoDismissAfterSwipe);
    const clearScheduledAutoDismissRef = useRef(clearScheduledAutoDismiss);
    closeToastRef.current = closeToast;
    resumeAutoDismissAfterSwipeRef.current = resumeAutoDismissAfterSwipe;
    clearScheduledAutoDismissRef.current = clearScheduledAutoDismiss;

    const dismissToastFromSwipe = () => {
      closeToastRef.current();
    };

    const resumeAutoDismissFromSwipe = () => {
      resumeAutoDismissAfterSwipeRef.current();
    };

    const clearScheduledAutoDismissFromSwipe = () => {
      clearScheduledAutoDismissRef.current();
    };

    const swipeGesture = useMemo(
      () =>
        // These gesture callbacks need explicit 'worklet' directives because this
        // package ships a pre-built dist compiled by ts-bridge (tsc), which emits the
        // gesture chain as a namespaced call (react_native_gesture_handler_1.Gesture).
        // The consumer's Reanimated/Worklets Babel plugin does run over dist, but its
        // gesture auto-detection doesn't recognize that compiled namespaced form.
        Gesture.Pan()
          .activeOffsetY(TOAST_SWIPE_ACTIVE_OFFSET_Y)
          .failOffsetX([-TOAST_SWIPE_FAIL_OFFSET_X, TOAST_SWIPE_FAIL_OFFSET_X])
          .onStart(() => {
            'worklet';

            // Don't interrupt an in-progress dismiss animation.
            if (isDismissing.value) {
              return;
            }
            scheduleOnRN(clearScheduledAutoDismissFromSwipe);
            cancelAnimation(translateYProgress);
            gestureStartY.value = translateYProgress.value;
          })
          .onUpdate((event) => {
            'worklet';

            if (isDismissing.value) {
              return;
            }
            const nextTranslateY = gestureStartY.value + event.translationY;
            // Toast sits at the top; only allow dragging upward (more negative).
            translateYProgress.value = Math.min(
              nextTranslateY,
              visibleTranslateY.value,
            );
          })
          .onEnd((event) => {
            'worklet';

            if (isDismissing.value) {
              return;
            }
            const { translationY, velocityY } = event;
            const dismissDistance = Math.max(
              toastHeight.value * TOAST_DISMISS_DISTANCE_THRESHOLD,
              24,
            );
            const hasReachedDismissOffset = translationY <= -dismissDistance;
            const hasReachedSwipeThreshold =
              Math.abs(velocityY) > TOAST_DISMISS_VELOCITY_THRESHOLD;
            const isQuickDismissing = velocityY < 0;

            const shouldDismiss =
              hasReachedDismissOffset ||
              (hasReachedSwipeThreshold && isQuickDismissing);

            if (shouldDismiss) {
              scheduleOnRN(dismissToastFromSwipe);
              return;
            }

            translateYProgress.value = withSpring(
              visibleTranslateY.value,
              TOAST_SPRING_CONFIG,
              (finished) => {
                // A new pan cancels this spring via cancelAnimation; only resume
                // auto-dismiss when the spring-back completed naturally.
                if (finished) {
                  scheduleOnRN(resumeAutoDismissFromSwipe);
                }
              },
            );
          }),
      // Shared values and swipe JS wrappers are stable for the component lifetime.
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [],
    );

    innerRef.current = {
      closeToast,
      showToast,
    };

    useImperativeHandle(ref, () => innerRef.current as ToasterRef);

    useLayoutEffect(() => {
      registeredRef = innerRef;
      return () => {
        if (registeredRef === innerRef) {
          registeredRef = null;
        }
      };
    }, []);

    if (!toastOptions) {
      return null;
    }

    const { onClose: toastOnClose, twClassName: toastTwClassName } =
      toastOptions;
    const toastProps = getToastProps(toastOptions);
    const { actionButtonLabel, actionButtonOnPress, ...restToastProps } =
      toastProps;
    const toastTwClassNames = [twClassName, toastTwClassName]
      .filter(Boolean)
      .join(' ');

    const onAnimatedViewLayout = (e: LayoutChangeEvent) => {
      const { height } = e.nativeEvent.layout;
      const nextHiddenTranslateY = getHiddenTranslateY(height, topOffset);
      const nextVisibleTranslateY = topInset + TOAST_TOP_PADDING;

      hiddenTranslateY.value = nextHiddenTranslateY;
      visibleTranslateY.value = nextVisibleTranslateY;
      toastHeight.value = height;

      if (animationStartedRef.current) {
        return;
      }

      animationStartedRef.current = true;
      translateYProgress.value = nextHiddenTranslateY;

      if (toastOptions.hasNoTimeout) {
        translateYProgress.value = withSpring(
          nextVisibleTranslateY,
          TOAST_SPRING_CONFIG,
        );
      } else {
        translateYProgress.value = withSpring(
          nextVisibleTranslateY,
          TOAST_SPRING_CONFIG,
          (finished) => {
            if (finished) {
              scheduleOnRN(beginAutoDismiss);
            }
          },
        );
      }
    };

    return (
      <GestureDetector gesture={swipeGesture}>
        <Animated.View
          onLayout={onAnimatedViewLayout}
          style={baseStyle}
          {...props}
        >
          {actionButtonLabel && actionButtonOnPress ? (
            <Toast
              {...toastProps}
              actionButtonLabel={actionButtonLabel}
              actionButtonOnPress={actionButtonOnPress}
              onClose={() => {
                closeToast();
                toastOnClose?.();
              }}
              twClassName={toastTwClassNames}
            />
          ) : (
            <Toast
              {...restToastProps}
              onClose={() => {
                closeToast();
                toastOnClose?.();
              }}
              twClassName={toastTwClassNames}
            />
          )}
        </Animated.View>
      </GestureDetector>
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
