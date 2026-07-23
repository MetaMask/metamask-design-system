import {
  Theme,
  usePureBlack,
  useTailwind,
  useTheme,
} from '@metamask/design-system-twrnc-preset';
import { lightTheme, resolveDarkTheme } from '@metamask/design-tokens';
import { debounce } from 'lodash';
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useImperativeHandle,
} from 'react';
import {
  AccessibilityInfo,
  LayoutChangeEvent,
  View,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { scheduleOnRN } from 'react-native-worklets';

// Internal dependencies.
import {
  BOTTOMSHEETDIALOG_CLOSE_DURATION,
  BOTTOMSHEETDIALOG_CLOSE_EASING,
  BOTTOMSHEETDIALOG_DRAG_DISMISS_OFFSET,
  BOTTOMSHEETDIALOG_DRAG_DISMISS_VELOCITY,
  BOTTOMSHEETDIALOG_DRAG_ELASTIC_DOWN,
  BOTTOMSHEETDIALOG_OFFSCREEN_FACTOR,
  BOTTOMSHEETDIALOG_SPRING,
} from './BottomSheetDialog.constants';
import type {
  BottomSheetDialogRef,
  BottomSheetDialogProps,
} from './BottomSheetDialog.types';

const sheetCloseEasing = Easing.bezier(
  BOTTOMSHEETDIALOG_CLOSE_EASING[0],
  BOTTOMSHEETDIALOG_CLOSE_EASING[1],
  BOTTOMSHEETDIALOG_CLOSE_EASING[2],
  BOTTOMSHEETDIALOG_CLOSE_EASING[3],
);

export const BottomSheetDialog = forwardRef<
  BottomSheetDialogRef,
  BottomSheetDialogProps
>(
  (
    {
      children,
      isFullscreen = false,
      isInteractable = true,
      keyboardAvoidingViewEnabled = true,
      onClose,
      onCloseStart,
      onOpen,
      style,
      twClassName,
      ...props
    },
    ref,
  ) => {
    const tw = useTailwind();
    const currentTheme = useTheme();
    const isPureBlack = usePureBlack();
    const shadowLg =
      currentTheme === Theme.Light
        ? lightTheme.shadows.size.lg
        : resolveDarkTheme(isPureBlack).shadows.size.lg;

    const { top: screenTopPadding, bottom: screenBottomPadding } =
      useSafeAreaInsets();
    const { y: frameY, height: screenHeight } = useSafeAreaFrame();

    const maxSheetHeight = screenHeight - screenTopPadding;
    // X and Y values start on top left of the DIALOG
    // currentYOffset will be used to animate the Y position of the Dialog
    const currentYOffset = useSharedValue(screenHeight);
    const topOfDialogYValue = useSharedValue(0);
    const bottomOfDialogYValue = useSharedValue(screenHeight);
    const gestureStartYOffset = useSharedValue(0);
    const reduceMotion = useSharedValue(false);
    const isMounted = useRef(false);

    useEffect(() => {
      let isActive = true;

      // Promise.resolve: RN test mocks may return a bare boolean / undefined.
      void Promise.resolve(AccessibilityInfo.isReduceMotionEnabled())
        .then((enabled) => {
          if (isActive) {
            reduceMotion.value = Boolean(enabled);
          }
        })
        .catch(() => {
          // AccessibilityInfo can reject in non-native test environments.
        });

      const subscription = AccessibilityInfo.addEventListener(
        'reduceMotionChanged',
        (enabled) => {
          reduceMotion.value = enabled;
        },
      );

      return () => {
        isActive = false;
        subscription?.remove?.();
      };
    }, [reduceMotion]);

    const onOpenCB = useCallback(() => {
      onOpen?.();
    }, [onOpen]);
    const onCloseCB = useCallback(() => {
      onClose?.();
    }, [onClose]);
    const onCloseStartCB = useCallback(() => {
      onCloseStart?.();
    }, [onCloseStart]);

    const onCloseDialog = useCallback(
      (callback?: () => void) => {
        onCloseStartCB();

        const closeConfig = reduceMotion.value
          ? { duration: 0 }
          : {
              duration: BOTTOMSHEETDIALOG_CLOSE_DURATION,
              easing: sheetCloseEasing,
            };

        currentYOffset.value = withTiming(
          bottomOfDialogYValue.value,
          closeConfig,
          () => {
            scheduleOnRN(onCloseCB);
            if (callback) {
              scheduleOnRN(callback);
            }
          },
        );
        // Ref values do not affect deps.
      },
      [onCloseCB, onCloseStartCB],
    );

    const gestureHandler = useMemo(() => {
      // These gesture callbacks need explicit 'worklet' directives because this
      // package ships a pre-built dist compiled by ts-bridge (tsc), which emits the
      // gesture chain as a namespaced call (react_native_gesture_handler_1.Gesture).
      // The consumer's Reanimated/Worklets Babel plugin does run over dist (that's
      // why useAnimatedStyle below works), but its gesture auto-detection doesn't
      // recognize that compiled namespaced form, so without these directives the
      // callbacks run on the JS thread and slow drags lag behind the finger.
      const gesture = Gesture.Pan()
        .enabled(isInteractable)
        .onStart(() => {
          'worklet';

          // Starts tracking vertical position of gesture.
          gestureStartYOffset.value = currentYOffset.value;
        })
        .onUpdate((event) => {
          'worklet';

          const { translationY } = event;
          // Top hard-stop (web dragElastic.top: 0). Downward tracks the finger
          // 1:1 for a continuous drag; release decides dismiss vs snap-back.
          if (translationY <= 0) {
            currentYOffset.value = topOfDialogYValue.value;
          } else {
            currentYOffset.value =
              gestureStartYOffset.value +
              translationY * BOTTOMSHEETDIALOG_DRAG_ELASTIC_DOWN;
          }
        })
        .onEnd((event) => {
          'worklet';

          const { velocityY } = event;
          const dragOffset = currentYOffset.value - topOfDialogYValue.value;
          const shouldDismiss =
            dragOffset > BOTTOMSHEETDIALOG_DRAG_DISMISS_OFFSET ||
            velocityY > BOTTOMSHEETDIALOG_DRAG_DISMISS_VELOCITY;

          if (shouldDismiss) {
            // Keep dismiss on the UI thread — scheduleOnRN(onCloseDialog) stalls a
            // frame and drops finger velocity, which is why RN felt less smooth
            // than the web demo.
            scheduleOnRN(onCloseStartCB);
            const closeConfig = reduceMotion.value
              ? { duration: 0 }
              : {
                  duration: BOTTOMSHEETDIALOG_CLOSE_DURATION,
                  easing: sheetCloseEasing,
                };
            currentYOffset.value = withTiming(
              bottomOfDialogYValue.value,
              closeConfig,
              (finished) => {
                if (finished) {
                  scheduleOnRN(onCloseCB);
                }
              },
            );
          } else if (reduceMotion.value) {
            currentYOffset.value = withTiming(topOfDialogYValue.value, {
              duration: 0,
            });
          } else {
            // Snap-back inherits release velocity so it doesn't "die" then restart.
            currentYOffset.value = withSpring(topOfDialogYValue.value, {
              ...BOTTOMSHEETDIALOG_SPRING,
              velocity: velocityY,
              reduceMotion: ReduceMotion.System,
            });
          }
        });

      return gesture;
    }, [
      isInteractable,
      currentYOffset,
      gestureStartYOffset,
      topOfDialogYValue,
      bottomOfDialogYValue,
      reduceMotion,
      onCloseStartCB,
      onCloseCB,
    ]);

    // Animate in sheet on initial render.
    const onOpenDialog = (callback?: () => void) => {
      // Starts setting the Y position of the dialog offscreen (105%).
      currentYOffset.value = bottomOfDialogYValue.value;

      const onOpened = () => {
        scheduleOnRN(onOpenCB);
        if (callback) {
          scheduleOnRN(callback);
        }
      };

      if (reduceMotion.value) {
        currentYOffset.value = withTiming(
          topOfDialogYValue.value,
          { duration: 0 },
          onOpened,
        );
      } else {
        currentYOffset.value = withSpring(
          topOfDialogYValue.value,
          {
            ...BOTTOMSHEETDIALOG_SPRING,
            reduceMotion: ReduceMotion.System,
          },
          onOpened,
        );
      }
    };

    const onDebouncedCloseDialog = useMemo(
      // Prevent hide from being called multiple times. Potentially caused by taps in quick succession.
      () => debounce(onCloseDialog, 2000, { leading: true }),
      [onCloseDialog],
    );

    useEffect(
      () =>
        // Automatically handles animation when content changes
        // Disable for now since network switches causes the screen to hang with this on.
        // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        onDebouncedCloseDialog.cancel(),
      [children, onDebouncedCloseDialog],
    );

    const updateSheetHeight = (e: LayoutChangeEvent) => {
      const { height } = e.nativeEvent.layout;
      // Offscreen position at 105% of sheet height (matches web y: '105%').
      bottomOfDialogYValue.value = height * BOTTOMSHEETDIALOG_OFFSCREEN_FACTOR;

      if (!isMounted.current) {
        isMounted.current = true;
        onOpenDialog();
      }
    };

    const animatedSheetStyle = useAnimatedStyle(
      () => ({
        transform: [
          {
            translateY: currentYOffset.value,
          },
        ],
      }),
      [],
    );

    const sheetStyle = useMemo(
      () => [
        tw.style(
          isPureBlack ? 'bg-alternative' : 'bg-default',
          'rounded-t-3xl overflow-hidden border border-muted',
          twClassName,
        ),
        {
          maxHeight: maxSheetHeight,
          paddingBottom: Platform.select({
            ios: screenBottomPadding,
            macos: screenBottomPadding,
            default: screenBottomPadding + 16,
          }),
          ...(isFullscreen && { height: maxSheetHeight }),
          ...shadowLg,
        },
        style,
      ],

      [
        tw,
        isPureBlack,
        maxSheetHeight,
        screenBottomPadding,
        isFullscreen,
        shadowLg,
        style,
        twClassName,
      ],
    );

    const combinedSheetStyle = useMemo(
      () => [...sheetStyle, animatedSheetStyle],

      [sheetStyle],
    );

    useImperativeHandle(ref, () => ({
      onOpenDialog,
      onCloseDialog,
    }));

    return (
      <KeyboardAvoidingView
        style={tw.style('absolute bottom-0 inset-x-0')}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={
          Platform.OS === 'ios' ? -screenBottomPadding : frameY
        }
        enabled={keyboardAvoidingViewEnabled}
        {...props}
      >
        <Animated.View onLayout={updateSheetHeight} style={combinedSheetStyle}>
          {isInteractable && (
            <GestureDetector gesture={gestureHandler}>
              {/* Drag handle — only this starts drag (matches web handle-only dismiss) */}
              <View style={tw.style('self-stretch items-center pt-3 pb-2')}>
                <View
                  style={tw.style('h-1 w-10 rounded-full bg-border-muted')}
                />
              </View>
            </GestureDetector>
          )}
          {children}
        </Animated.View>
      </KeyboardAvoidingView>
    );
  },
);
