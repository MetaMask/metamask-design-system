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
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Internal dependencies.
import { Toast } from './Toast';
import {
  TOAST_ANIMATION_DURATION,
  TOAST_BOTTOM_PADDING,
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
  bottomOffset: _bottomOffset,
  hasNoTimeout: _hasNoTimeout,
  onClose: _onClose,
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
    const { bottom: bottomNotchSpacing } = useSafeAreaInsets();
    const translateYProgress = useSharedValue(screenHeight);
    const bottomOffset = toastOptions?.bottomOffset ?? 0;
    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ translateY: translateYProgress.value - bottomOffset }],
    }));
    const baseStyle: StyleProp<ViewStyle> = useMemo(
      () => [tw.style('absolute left-4 right-4 bottom-0'), animatedStyle],
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
      translateYProgress.value = withTiming(
        screenHeight,
        { duration: TOAST_ANIMATION_DURATION },
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
      const translateYToValue = -(TOAST_BOTTOM_PADDING + bottomNotchSpacing);

      translateYProgress.value = height;

      if (toastOptions.hasNoTimeout) {
        translateYProgress.value = withTiming(translateYToValue, {
          duration: TOAST_ANIMATION_DURATION,
        });
      } else {
        translateYProgress.value = withTiming(
          translateYToValue,
          { duration: TOAST_ANIMATION_DURATION },
          () => {
            translateYProgress.value = withDelay(
              TOAST_VISIBILITY_DURATION,
              withTiming(
                height,
                { duration: TOAST_ANIMATION_DURATION },
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
