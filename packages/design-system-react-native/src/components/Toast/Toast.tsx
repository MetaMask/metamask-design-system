// Third party dependencies.
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';
import {
  Dimensions,
  LayoutChangeEvent,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
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
  TOAST_TEST_ID,
  TOAST_LABELS_CONTAINER_TEST_ID,
  TOAST_VISIBILITY_DURATION,
  TOAST_ANIMATION_DURATION,
  TOAST_BOTTOM_PADDING,
} from './Toast.constants';
import {
  ButtonIconVariant,
  ToastCloseButtonOptions,
  ToastDescriptionOptions,
  ToastLabelOptions,
  ToastLinkButtonOptions,
  ToastOptions,
  ToastRef,
  ToastVariant,
} from './Toast.types';

const screenHeight = Dimensions.get('window').height;

const Toast = forwardRef((_, ref: React.ForwardedRef<ToastRef>) => {
  const tw = useTailwind();
  const [toastOptions, setToastOptions] = useState<ToastOptions | undefined>(
    undefined,
  );
  const { bottom: bottomNotchSpacing } = useSafeAreaInsets();
  const translateYProgress = useSharedValue(screenHeight);
  const bottomOffset = toastOptions?.bottomOffset ?? 0;
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: translateYProgress.value - bottomOffset },
    ],
  }));
  const baseStyle: StyleProp<ViewStyle> = useMemo(
    () => [
      tw.style(
        'absolute left-4 right-4 bottom-0 bg-background-section border border-border-muted rounded-xl p-3 flex-row items-center',
      ),
      animatedStyle,
    ],
    [tw, animatedStyle],
  );

  const resetState = () => setToastOptions(undefined);

  const showToast = (options: ToastOptions) => {
    let timeoutDuration = 0;
    if (toastOptions) {
      if (!options.hasNoTimeout) {
        cancelAnimation(translateYProgress);
      }
      timeoutDuration = 100;
      // Clear existing toast state to prevent animation conflicts when showing rapid successive toasts
      setToastOptions(undefined);
    }
    setTimeout(() => {
      setToastOptions(options);
    }, timeoutDuration);
  };

  const closeToast = () => {
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

  const renderCloseButton = (closeButtonOptions?: ToastCloseButtonOptions) => {
    if (closeButtonOptions?.variant === ButtonIconVariant.Icon) {
      return (
        <ButtonIcon
          onPress={() => closeButtonOptions?.onPress?.()}
          iconName={closeButtonOptions?.iconName}
        />
      );
    }
    return (
      <Button
        variant={ButtonVariant.Primary}
        onPress={() => closeButtonOptions?.onPress()}
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
        const { iconName } = toastOptions;
        return (
          <AvatarIcon
            iconName={iconName}
            size={AvatarIconSize.Md}
            style={tw.style('mr-4')}
          />
        );
      }
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
      startAccessory != null && React.isValidElement(startAccessory);

    return (
      <>
        {isStartAccessoryValid ? startAccessory : renderAvatar()}
        <View
          style={tw.style('flex-1 justify-center')}
          testID={TOAST_LABELS_CONTAINER_TEST_ID}
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
      testID={TOAST_TEST_ID}
    >
      {renderToastContent(toastOptions)}
    </Animated.View>
  );
});

export default Toast;
