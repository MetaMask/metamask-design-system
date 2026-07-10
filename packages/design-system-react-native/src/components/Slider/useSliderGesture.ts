import { useCallback, useEffect, useMemo, useRef } from 'react';
import { Gesture } from 'react-native-gesture-handler';
import {
  Easing,
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {
  THUMB_GRIP_ANIMATION_DURATION,
  THUMB_GRIP_SCALE,
} from './Slider.constants';
import type {
  UseSliderGestureParams,
  UseSliderGestureResult,
} from './Slider.types';
import {
  clampGesturePosition,
  getTickHapticThresholds,
  getTickValue,
  getTrackPercentFromValue,
  interpolateTickColor,
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
 * Flow when `value` prop changes (JS thread → UI thread via useAnimatedReaction):
 *   domain value → trackPercent → translateX (skipped while dragging)
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
    ticks,
    fillColorStops,
    thumbColorStops,
    hasThemedColors,
    mapValueToTrackPercent,
    mapTrackPercentToValue,
  } = params;

  const hapticThresholds = useMemo(
    () => getTickHapticThresholds(ticks),
    [ticks],
  );

  // --- Animated state ---

  const sliderWidth = useSharedValue(0);
  const translateX = useSharedValue(0);
  const thumbScale = useSharedValue(1);
  const isDragging = useSharedValue(false);
  const propValue = useSharedValue(value);
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
    propValue.value = value;
    if (!isDraggingRef.current) {
      previousTrackPercentRef.current = getTrackPercentFromValue(
        value,
        minimumValue,
        maximumValue,
        mapValueToTrackPercent,
      );
    }
  }, [mapValueToTrackPercent, maximumValue, minimumValue, propValue, value]);

  useAnimatedReaction(
    () => propValue.value,
    (currentValue, previousValue) => {
      if (isDragging.value) {
        return;
      }

      if (previousValue !== null && currentValue === previousValue) {
        return;
      }

      const trackPercent = resolveValueToTrackPercent(
        currentValue,
        minimumValue,
        maximumValue,
        mapValueToTrackPercent,
      );
      translateX.value = trackPercentToPosition(
        trackPercent,
        sliderWidth.value,
      );
    },
    [mapValueToTrackPercent, maximumValue, minimumValue],
  );

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

      for (const threshold of hapticThresholds) {
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
    [hapticThresholds, onTick],
  );

  // --- Animated styles (thumb + fill width follow translateX) ---

  const activeFillColor = useDerivedValue(() => {
    if (!hasThemedColors) {
      return undefined;
    }

    return interpolateTickColor(
      positionToTrackPercent(translateX.value, sliderWidth.value),
      fillColorStops,
    );
  });

  const activeThumbColor = useDerivedValue(() => {
    if (!hasThemedColors) {
      return undefined;
    }

    return interpolateTickColor(
      positionToTrackPercent(translateX.value, sliderWidth.value),
      thumbColorStops,
    );
  });

  const progressStyle = useAnimatedStyle(
    () => ({
      width: translateX.value,
      ...(hasThemedColors && {
        backgroundColor: activeFillColor.value,
      }),
    }),
    [fillColorStops, hasThemedColors],
  );

  const thumbStyle = useAnimatedStyle(
    () => ({
      transform: [
        { translateX: translateX.value },
        { scale: thumbScale.value },
      ],
      ...(hasThemedColors && {
        backgroundColor: activeThumbColor.value,
      }),
    }),
    [hasThemedColors, thumbColorStops],
  );

  // --- Pan + tap gestures ---

  const gesture = useMemo(() => {
    // Gesture callbacks need explicit 'worklet' directives because this package
    // ships pre-built dist compiled by ts-bridge. The consumer's Reanimated Babel
    // plugin does not auto-detect the compiled namespaced Gesture form.

    const gripEasing = Easing.bezier(0.3, 0.8, 0.3, 1);

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
      .onStart(() => {
        'worklet';

        isDragging.value = true;
        thumbScale.value = withTiming(THUMB_GRIP_SCALE, {
          duration: THUMB_GRIP_ANIMATION_DURATION,
          easing: gripEasing,
        });
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
      })
      .onFinalize(() => {
        'worklet';

        isDragging.value = false;
        thumbScale.value = withTiming(1, {
          duration: THUMB_GRIP_ANIMATION_DURATION,
          easing: gripEasing,
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
    isDragging,
    mapTrackPercentToValue,
    mapValueToTrackPercent,
    maximumValue,
    minimumValue,
    setDragging,
    sliderWidth,
    step,
    thumbScale,
    translateX,
    triggerGrip,
  ]);

  // --- Range label tap (JS thread) ---

  const handlePressStep = useCallback(
    (rangeStep: number) => {
      if (isDisabled) {
        return;
      }

      const tick = ticks.find((entry) => entry.step === rangeStep);
      if (!tick) {
        return;
      }

      const newValue = getTickValue(tick, minimumValue, maximumValue);
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
      syncPositionFromValue,
      ticks,
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
