import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { BackHandler, KeyboardAvoidingView, Platform } from 'react-native';
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import { BottomSheetDialog } from '../BottomSheetDialog';
import type { BottomSheetDialogRef } from '../BottomSheetDialog';
import { BottomSheetOverlay } from '../BottomSheetOverlay/BottomSheetOverlay';
import type { BottomSheetOverlayRef } from '../BottomSheetOverlay/BottomSheetOverlay.types';

import type {
  BottomSheetPostCallback,
  BottomSheetProps,
  BottomSheetRef,
} from './BottomSheet.types';

export const BottomSheet = forwardRef<BottomSheetRef, BottomSheetProps>(
  (
    {
      children,
      onClose,
      onCloseStart,
      onOpen,
      goBack,
      style,
      twClassName,
      isInteractable = true,
      isFullscreen = false,
      keyboardAvoidingViewEnabled = true,
      ...props
    },
    ref,
  ) => {
    const tw = useTailwind();
    const { bottom: screenBottomPadding } = useSafeAreaInsets();
    const { y: frameY } = useSafeAreaFrame();
    const postCallback = useRef<BottomSheetPostCallback | undefined>(undefined);
    const bottomSheetDialogRef = useRef<BottomSheetDialogRef>(null);
    const bottomSheetOverlayRef = useRef<BottomSheetOverlayRef>(null);
    const didNavigateBackRef = useRef(false);
    const closeRequestedRef = useRef(false);
    const didRunPostCallbackRef = useRef(false);

    const onOpenCB = useCallback(() => {
      // Reset when the sheet is opened again.
      didNavigateBackRef.current = false;
      closeRequestedRef.current = false;
      didRunPostCallbackRef.current = false;

      onOpen?.(Boolean(postCallback.current));
      const callback = postCallback.current;
      postCallback.current = undefined;
      callback?.();
    }, [onOpen]);

    const onCloseCB = useCallback(() => {
      if (goBack && !didNavigateBackRef.current) {
        didNavigateBackRef.current = true;
        goBack?.();
      }

      const callback = postCallback.current;
      const hasCallback = Boolean(callback);

      onClose?.(hasCallback);

      if (!didRunPostCallbackRef.current && hasCallback) {
        didRunPostCallbackRef.current = true;
        postCallback.current = undefined;
        callback?.();
      }
    }, [goBack, onClose]);

    const onCloseStartCB = useCallback(() => {
      bottomSheetOverlayRef.current?.onCloseOverlay();
      onCloseStart?.();
    }, [onCloseStart]);

    // Dismiss the sheet when Android back button is pressed.
    useEffect(() => {
      if (Platform.OS !== 'android') {
        return undefined;
      }

      const hardwareBackPress = () => {
        if (isInteractable) {
          bottomSheetDialogRef.current?.onCloseDialog();
        }
        return true;
      };
      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        hardwareBackPress,
      );
      return () => {
        subscription.remove();
      };
    }, [isInteractable]);

    useImperativeHandle(ref, () => ({
      onCloseBottomSheet: (callback) => {
        if (closeRequestedRef.current) {
          return;
        }
        closeRequestedRef.current = true;
        postCallback.current = callback;
        bottomSheetDialogRef.current?.onCloseDialog();
      },
      onOpenBottomSheet: (callback) => {
        didNavigateBackRef.current = false;
        closeRequestedRef.current = false;
        didRunPostCallbackRef.current = false;
        postCallback.current = callback;
        bottomSheetDialogRef.current?.onOpenDialog();
      },
    }));

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={
          Platform.OS === 'ios' ? -screenBottomPadding : frameY
        }
        style={[tw.style('absolute inset-0 justify-end'), style]}
        enabled={keyboardAvoidingViewEnabled}
        {...props}
      >
        <BottomSheetOverlay
          ref={bottomSheetOverlayRef}
          onPress={
            isInteractable
              ? () => bottomSheetDialogRef.current?.onCloseDialog()
              : undefined
          }
        />
        <BottomSheetDialog
          isInteractable={isInteractable}
          onClose={onCloseCB}
          onCloseStart={onCloseStartCB}
          onOpen={onOpenCB}
          ref={bottomSheetDialogRef}
          isFullscreen={isFullscreen}
          twClassName={twClassName}
          keyboardAvoidingViewEnabled={keyboardAvoidingViewEnabled}
        >
          {children}
        </BottomSheetDialog>
      </KeyboardAvoidingView>
    );
  },
);

BottomSheet.displayName = 'BottomSheet';
