// Third party dependencies.
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, {
  forwardRef,
  isValidElement,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Dimensions, View } from 'react-native';
import type { LayoutChangeEvent, StyleProp, ViewStyle } from 'react-native';
// eslint-disable-next-line import-x/default
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
import { AvatarAccount, AvatarAccountSize } from '../AvatarAccount';
import { AvatarFavicon, AvatarFaviconSize } from '../AvatarFavicon';
import { AvatarIcon, AvatarIconSize } from '../AvatarIcon';
import { AvatarNetwork, AvatarNetworkSize } from '../AvatarNetwork';
import { Button, ButtonVariant } from '../Button';
import { ButtonIcon } from '../ButtonIcon';
import { Text, TextVariant, TextColor, FontWeight } from '../Text';

// Internal dependencies.
import {
  TOAST_VISIBILITY_DURATION,
  TOAST_ANIMATION_DURATION,
  TOAST_BOTTOM_PADDING,
} from './Toast.constants';
import type {
  ToastCloseButtonIconOptions,
  ToastCloseButtonOptions,
  ToastDescriptionOptions,
  ToastLabelOptions,
  ToastLinkButtonOptions,
  ToastOptions,
  ToastProps,
  ToastRef,
} from './Toast.types';
import { ToastVariant } from './Toast.types';

const screenHeight = Dimensions.get('window').height;

const Toast = forwardRef<ToastRef, ToastProps>(
  ({ twClassName, labelsContainerProps, ...props }, ref) => {
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
      () => [
        tw.style(
          'absolute left-4 right-4 bottom-0 bg-background-section border border-border-muted rounded-xl p-3 flex-row items-center',
          twClassName,
        ),
        animatedStyle,
      ],
      [tw, animatedStyle, twClassName],
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

    const renderLabel = (labelOptions: ToastLabelOptions) => (
      <Text variant={TextVariant.BodyMd}>
        {labelOptions.map(({ label, isBold }, index) => (
          <Text
            key={`toast-label-${index}`}
            variant={TextVariant.BodyMd}
            fontWeight={isBold ? FontWeight.Bold : undefined}
            color={TextColor.TextDefault}
          >
            {label}
          </Text>
        ))}
      </Text>
    );

    const renderDescription = (descriptionOptions?: ToastDescriptionOptions) =>
      descriptionOptions && (
        <Text
          variant={TextVariant.BodySm}
          color={TextColor.TextAlternative}
          style={tw.style('mt-1')}
        >
          {descriptionOptions.description}
        </Text>
      );

    const renderActionButton = (linkButtonOptions?: ToastLinkButtonOptions) =>
      linkButtonOptions && (
        <Button
          variant={ButtonVariant.Secondary}
          onPress={linkButtonOptions.onPress}
          style={tw.style('mt-2')}
        >
          {linkButtonOptions.label}
        </Button>
      );

    const renderCloseButton = (
      closeButtonOptions?: ToastCloseButtonOptions,
    ) => {
      if (closeButtonOptions && 'iconName' in closeButtonOptions) {
        const iconOptions = closeButtonOptions as ToastCloseButtonIconOptions;
        return (
          <ButtonIcon
            iconName={iconOptions.iconName}
            onPress={(e) => iconOptions.onPress?.(e)}
            size={iconOptions.size}
            isDisabled={iconOptions.isDisabled}
            twClassName={iconOptions.twClassName}
            style={iconOptions.style}
            iconProps={iconOptions.iconProps}
          />
        );
      }
      return (
        <Button
          variant={ButtonVariant.Primary}
          onPress={(e) => closeButtonOptions?.onPress?.(e)}
          startIconName={closeButtonOptions?.startIconName}
          endIconName={closeButtonOptions?.endIconName}
          style={closeButtonOptions?.style}
        >
          {closeButtonOptions?.children}
        </Button>
      );
    };

    const renderAvatar = () => {
      switch (toastOptions?.variant) {
        case ToastVariant.Plain:
          return null;
        case ToastVariant.Account: {
          const { accountAddress, accountAvatarType } = toastOptions;
          return (
            <AvatarAccount
              address={accountAddress}
              variant={accountAvatarType}
              size={AvatarAccountSize.Md}
              style={tw.style('mr-4')}
            />
          );
        }
        case ToastVariant.Network: {
          const { networkImageSource, networkName } = toastOptions;
          return (
            <AvatarNetwork
              name={networkName}
              src={networkImageSource}
              size={AvatarNetworkSize.Md}
              style={tw.style('mr-4')}
            />
          );
        }
        case ToastVariant.App: {
          const { appIconSource } = toastOptions;
          return (
            <AvatarFavicon
              src={appIconSource}
              size={AvatarFaviconSize.Md}
              style={tw.style('mr-4')}
            />
          );
        }
        case ToastVariant.Icon: {
          const { iconName, severity } = toastOptions;
          return (
            <AvatarIcon
              iconName={iconName}
              severity={severity}
              size={AvatarIconSize.Md}
              style={tw.style('mr-4')}
            />
          );
        }
        /* istanbul ignore next - all variants handled above */
        default:
          return null;
      }
    };

    const renderToastContent = (options: ToastOptions) => {
      const {
        labelOptions,
        descriptionOptions,
        linkButtonOptions,
        closeButtonOptions,
        startAccessory,
      } = options;

      const isStartAccessoryValid =
        startAccessory !== null &&
        startAccessory !== undefined &&
        isValidElement(startAccessory);

      return (
        <>
          {isStartAccessoryValid ? startAccessory : renderAvatar()}
          <View
            style={tw.style('flex-1 justify-center')}
            {...labelsContainerProps}
          >
            {renderLabel(labelOptions)}
            {renderDescription(descriptionOptions)}
            {renderActionButton(linkButtonOptions)}
          </View>
          {closeButtonOptions ? renderCloseButton(closeButtonOptions) : null}
        </>
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

export default Toast;
