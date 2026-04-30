// Third party dependencies.
import {
  BoxBackgroundColor,
  BoxBorderColor,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
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

// External dependencies.
import { IconColor, IconName, IconSize } from '../../types';
import { BannerBase } from '../BannerBase';
import { Icon } from '../Icon';

// Internal dependencies.
import {
  TOAST_VISIBILITY_DURATION,
  TOAST_ANIMATION_DURATION,
  TOAST_BOTTOM_PADDING,
} from './Toast.constants';
import type { ToastOptions, ToastProps, ToastRef } from './Toast.types';
import { ToastSeverity } from './Toast.types';

const screenHeight = Dimensions.get('window').height;

const TOAST_SEVERITY_ICON_MAP = {
  [ToastSeverity.Default]: {
    color: IconColor.IconDefault,
    name: IconName.FullCircle,
  },
  [ToastSeverity.Success]: {
    color: IconColor.SuccessDefault,
    name: IconName.Confirmation,
  },
  [ToastSeverity.Warning]: {
    color: IconColor.WarningDefault,
    name: IconName.Danger,
  },
  [ToastSeverity.Error]: {
    color: IconColor.ErrorDefault,
    name: IconName.Error,
  },
} as const;

export const ToastView = forwardRef<ToastRef, ToastProps>(
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

    const resetState = () => setToastOptions(undefined);

    const showToast = (options: ToastOptions) => {
      let timeoutDuration = 0;
      if (toastOptions) {
        cancelAnimation(translateYProgress);
        timeoutDuration = 100;
        // Clear existing toast state to prevent animation conflicts when showing rapid successive toasts
        setToastOptions(undefined);
      }
      if (replacementTimerRef.current !== null) {
        clearTimeout(replacementTimerRef.current);
      }
      replacementTimerRef.current = setTimeout(() => {
        replacementTimerRef.current = null;
        setToastOptions(options);
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

    useImperativeHandle(ref, () => ({
      showToast,
      closeToast,
    }));

    const renderSeverityAccessory = (options: ToastOptions) => {
      if (
        options.startAccessory !== null &&
        options.startAccessory !== undefined
      ) {
        return options.startAccessory;
      }

      const severity = options.severity ?? ToastSeverity.Default;
      const { color, name } = TOAST_SEVERITY_ICON_MAP[severity];

      return <Icon color={color} name={name} size={IconSize.Lg} />;
    };

    const onAnimatedViewLayout = (e: LayoutChangeEvent) => {
      /* istanbul ignore next - guard only; layout fires when toastOptions is set */
      if (toastOptions) {
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
      }
    };

    const renderToastContent = (options: ToastOptions) => {
      const handleClosePress = (
        event: Parameters<
          NonNullable<NonNullable<typeof options.closeButtonProps>['onPress']>
        >[0],
      ) => {
        closeToast();
        options.onClose?.();
        options.closeButtonProps?.onPress?.(event);
      };

      const actionProps =
        options.actionText && options.onActionPress
          ? {
              actionButtonLabel: options.actionText,
              actionButtonOnPress: options.onActionPress,
            }
          : {};

      return (
        <BannerBase
          {...actionProps}
          backgroundColor={BoxBackgroundColor.BackgroundSection}
          borderColor={BoxBorderColor.BorderMuted}
          borderWidth={1}
          closeButtonProps={{
            accessibilityLabel: 'Close toast',
            ...options.closeButtonProps,
            onPress: handleClosePress,
          }}
          description={options.description}
          startAccessory={renderSeverityAccessory(options)}
          title={options.text}
          twClassName={twClassName ? `rounded-xl ${twClassName}` : 'rounded-xl'}
        />
      );
    };

    if (!toastOptions) {
      return null;
    }

    return (
      <Animated.View
        onLayout={onAnimatedViewLayout}
        style={baseStyle}
        {...props}
      >
        {renderToastContent(toastOptions)}
      </Animated.View>
    );
  },
);
