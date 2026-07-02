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
import Animated, {
  cancelAnimation,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Internal dependencies.
import { Toast } from './Toast';
import {
  TOAST_SPRING_CONFIG,
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

const ToasterComponent = forwardRef<ToasterRef, ToasterProps>(
  ({ twClassName, ...props }, ref) => {
    const tw = useTailwind();
    const [toastOptions, setToastOptions] = useState<ToastOptions | undefined>(
      undefined,
    );
    const replacementTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
      null,
    );
    const { top: topInset } = useSafeAreaInsets();
    const toastHeight = useSharedValue(screenHeight);
    const translateYProgress = useSharedValue(-screenHeight);
    const topOffset = toastOptions?.topOffset ?? 0;
    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ translateY: translateYProgress.value + topOffset }],
    }));
    const baseStyle: StyleProp<ViewStyle> = useMemo(
      () => [tw.style('absolute left-4 right-4 top-0'), animatedStyle],
      [tw, animatedStyle],
    );
    const innerRef = useRef<ToasterRef | null>(null);

    const resetState = () => setToastOptions(undefined);

    const showToast = (options: ToastOptions) => {
      let timeoutDuration = 0;
      const normalizedOptions = {
        hasNoTimeout: false,
        ...options,
      };
      if (toastOptions) {
        cancelAnimation(translateYProgress);
        timeoutDuration = 100;
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
      translateYProgress.value = withSpring(
        -toastHeight.value,
        TOAST_SPRING_CONFIG,
        () => {
          runOnJS(resetState)();
        },
      );
    };

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
      const hiddenTranslateY = -height;
      const visibleTranslateY = topInset + TOAST_TOP_PADDING;

      toastHeight.value = height;
      translateYProgress.value = hiddenTranslateY;

      if (toastOptions.hasNoTimeout) {
        translateYProgress.value = withSpring(
          visibleTranslateY,
          TOAST_SPRING_CONFIG,
        );
      } else {
        translateYProgress.value = withSpring(
          visibleTranslateY,
          TOAST_SPRING_CONFIG,
          () => {
            translateYProgress.value = withDelay(
              TOAST_VISIBILITY_DURATION,
              withSpring(
                hiddenTranslateY,
                TOAST_SPRING_CONFIG,
                runOnJS(resetState),
              ),
            );
          },
        );
      }
    };

    return (
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
