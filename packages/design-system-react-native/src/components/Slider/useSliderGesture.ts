import { useCallback, useEffect, useMemo, useRef } from 'react';
import { Gesture } from 'react-native-gesture-handler';
import {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { DEFAULT_TICK_THRESHOLDS } from './Slider.constants';
import type {
  UseSliderGestureParams,
  UseSliderGestureResult,
} from './Slider.types';
import {
  clampGesturePosition,
  defaultStepToValue,
  getTrackPercentFromValue,
  positionToTrackPercent,
  resolveTrackPercentToValue,
  resolveValueToTrackPercent,
  trackPercentToPosition,
} from './Slider.utilities';

/**
 * Owns Slider gesture handling, animated thumb/fill position, and range-label taps.
 *
 * Flow during drag (UI thread):
 *   touch X → clamp to track width → trackPercent → domain value → callbacks
 *
 * Flow when `value` prop changes (JS thread):
 *   domain value → trackPercent → translateX (thumb + progress fill)
 *
 * `mapValueToTrackPercent` / `mapTrackPercentToValue` must be worklets when provided.
 *
 * @param params - Gesture configuration and callbacks.
 * @returns Gesture state and handlers for Slider.
 */
export function useSliderGesture(
  params: UseSliderGestureParams,
): UseSliderGestureResult {
  const {
    value,
    minimumValue = 0,
    maximumValue = 100,
    step = 1,
    isDisabled = false,
    onValueChange,
    onDragEnd,
    onGrip,
    onTick,
    tickThresholds = DEFAULT_TICK_THRESHOLDS,
    mapValueToTrackPercent,
    mapTrackPercentToValue,
    stepToValue: stepToValueProp,
  } = params;
  const stepToValue = useMemo(
    () =>
      stepToValueProp ??
      ((rangeStep: number) =>
        defaultStepToValue(rangeStep, minimumValue, maximumValue)),
    [maximumValue, minimumValue, stepToValueProp],
  );

  // --- Animated state ---

  const sliderWidth = useSharedValue(0);
  const translateX = useSharedValue(0);
  const previousTrackPercentRef = useRef(
    getTrackPercentFromValue(
      value,
      minimumValue,
      maximumValue,
      mapValueToTrackPercent,
    ),
  );
  const isDraggingRef = useRef(false);

  // --- Position sync (domain value → thumb pixels) ---

  const syncPositionFromValue = useCallback(
    (nextValue: number, width = sliderWidth.value) => {
      const trackPercent = getTrackPercentFromValue(
        nextValue,
        minimumValue,
        maximumValue,
        mapValueToTrackPercent,
      );
      translateX.value = trackPercentToPosition(trackPercent, width);
    },
    [
      mapValueToTrackPercent,
      maximumValue,
      minimumValue,
      sliderWidth,
      translateX,
    ],
  );

  const handleLayout = useCallback(
    (event: { nativeEvent: { layout: { width: number } } }) => {
      const { width } = event.nativeEvent.layout;
      sliderWidth.value = width;
      syncPositionFromValue(value, width);
    },
    [sliderWidth, syncPositionFromValue, value],
  );

  useEffect(() => {
    syncPositionFromValue(value);
    if (!isDraggingRef.current) {
      previousTrackPercentRef.current = getTrackPercentFromValue(
        value,
        minimumValue,
        maximumValue,
        mapValueToTrackPercent,
      );
    }
  }, [
    mapValueToTrackPercent,
    maximumValue,
    minimumValue,
    syncPositionFromValue,
    value,
  ]);

  // --- JS-thread bridges (stable refs for runOnJS from worklets) ---

  const emitValueChange = useCallback(
    (nextValue: number) => {
      onValueChange(nextValue);
    },
    [onValueChange],
  );

  const emitDragEnd = useCallback(
    (nextValue: number) => {
      onDragEnd?.(nextValue);
    },
    [onDragEnd],
  );

  const triggerGrip = useCallback(() => {
    if (!isDisabled) {
      onGrip?.();
    }
  }, [isDisabled, onGrip]);

  const setDragging = useCallback((dragging: boolean) => {
    isDraggingRef.current = dragging;
  }, []);

  const checkThresholdCrossing = useCallback(
    (newTrackPercent: number) => {
      const prevTrackPercent = previousTrackPercentRef.current;

      for (const threshold of tickThresholds) {
        if (
          (prevTrackPercent < threshold && newTrackPercent >= threshold) ||
          (prevTrackPercent > threshold && newTrackPercent <= threshold)
        ) {
          onTick?.();
          break;
        }
      }

      previousTrackPercentRef.current = newTrackPercent;
    },
    [onTick, tickThresholds],
  );

  // --- Animated styles (thumb + fill width follow translateX) ---

  const progressStyle = useAnimatedStyle(() => ({
    width: translateX.value,
  }));

  const thumbStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  // --- Pan + tap gestures ---

  const gesture = useMemo(() => {
    // Gesture callbacks need explicit 'worklet' directives because this package
    // ships pre-built dist compiled by ts-bridge. The consumer's Reanimated Babel
    // plugin does not auto-detect the compiled namespaced Gesture form.

    const positionToDomainValue = (position: number) => {
      'worklet';

      const trackPercent = positionToTrackPercent(position, sliderWidth.value);
      const domainValue = resolveTrackPercentToValue(
        trackPercent,
        minimumValue,
        maximumValue,
        step,
        mapTrackPercentToValue,
      );

      return { trackPercent, domainValue };
    };

    const snapThumbToValue = (domainValue: number) => {
      'worklet';

      const snappedTrackPercent = resolveValueToTrackPercent(
        domainValue,
        minimumValue,
        maximumValue,
        mapValueToTrackPercent,
      );
      translateX.value = trackPercentToPosition(
        snappedTrackPercent,
        sliderWidth.value,
      );
    };

    // Finalize a gesture: emit callbacks, then re-sync thumb to stepped value.
    const commitAtPosition = (
      position: number,
      options: { checkThreshold: boolean; triggerGrip: boolean },
    ) => {
      'worklet';

      translateX.value = position;
      const { trackPercent, domainValue } = positionToDomainValue(position);

      runOnJS(emitValueChange)(domainValue);
      if (options.checkThreshold) {
        runOnJS(checkThresholdCrossing)(trackPercent);
      }
      runOnJS(emitDragEnd)(domainValue);
      if (options.triggerGrip) {
        runOnJS(triggerGrip)();
      }
      snapThumbToValue(domainValue);
    };

    const panGesture = Gesture.Pan()
      .enabled(!isDisabled)
      .onBegin(() => {
        'worklet';

        runOnJS(setDragging)(true);
        runOnJS(triggerGrip)();
      })
      .onUpdate((event) => {
        'worklet';

        const position = clampGesturePosition(event.x, sliderWidth.value);
        translateX.value = position;
        const { trackPercent, domainValue } = positionToDomainValue(position);

        runOnJS(emitValueChange)(domainValue);
        runOnJS(checkThresholdCrossing)(trackPercent);
      })
      .onEnd(() => {
        'worklet';

        // Thresholds already checked during onUpdate; grip fires again on release.
        commitAtPosition(translateX.value, {
          checkThreshold: false,
          triggerGrip: true,
        });
        runOnJS(setDragging)(false);
      });

    const tapGesture = Gesture.Tap()
      .enabled(!isDisabled)
      .onEnd((event) => {
        'worklet';

        const position = clampGesturePosition(event.x, sliderWidth.value);
        commitAtPosition(position, {
          checkThreshold: true,
          triggerGrip: false,
        });
      });

    return Gesture.Simultaneous(tapGesture, panGesture);
  }, [
    checkThresholdCrossing,
    emitDragEnd,
    emitValueChange,
    isDisabled,
    mapTrackPercentToValue,
    mapValueToTrackPercent,
    maximumValue,
    minimumValue,
    setDragging,
    sliderWidth,
    step,
    translateX,
    triggerGrip,
  ]);

  // --- Range label tap (JS thread; uses stepToValue from Slider.tsx) ---

  const handlePressStep = useCallback(
    (rangeStep: number) => {
      if (isDisabled) {
        return;
      }

      const newValue = stepToValue(rangeStep);
      onValueChange(newValue);
      const trackPercent = getTrackPercentFromValue(
        newValue,
        minimumValue,
        maximumValue,
        mapValueToTrackPercent,
      );
      checkThresholdCrossing(trackPercent);
      onDragEnd?.(newValue);
      syncPositionFromValue(newValue);
    },
    [
      checkThresholdCrossing,
      isDisabled,
      mapValueToTrackPercent,
      maximumValue,
      minimumValue,
      onDragEnd,
      onValueChange,
      stepToValue,
      syncPositionFromValue,
    ],
  );

  return {
    handleLayout,
    progressStyle,
    thumbStyle,
    gesture,
    handlePressStep,
  };
}
