import { useCallback, useEffect, useMemo, useRef } from 'react';
import { Gesture } from 'react-native-gesture-handler';
import {
  Easing,
  runOnJS,
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
  getMarkHapticThresholds,
  getMarkValue,
  getTrackPercentFromValue,
  interpolateMarkColor,
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
 *   domain value → trackPercent → translateX (skipped while dragging, and
 *   when the incoming value does not match the most recent commit, indicating
 *   a stale echo from an older gesture). The same guard skips syncing
 *   `previousTrackPercentRef` so the haptic baseline cannot rewind.
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
    onMark,
    marks,
    fillColorStops,
    thumbColorStops,
    hasThemedColors,
    mapValueToTrackPercent,
    mapTrackPercentToValue,
  } = params;

  const hapticThresholds = useMemo(
    () => getMarkHapticThresholds(marks),
    [marks],
  );

  // --- Animated state ---

  const sliderWidth = useSharedValue(0);
  const translateX = useSharedValue(0);
  const thumbScale = useSharedValue(1);
  const isDragging = useSharedValue(false);
  // Generation-based stale-echo suppression.
  //
  // Inspired by RN TextInput's mostRecentEventCount pattern
  // (https://github.com/react/react-native/blob/v0.81.5/packages/react-native/Libraries/Components/TextInput/TextInput.js#L397):
  // each direct commit (tap, pan end, label press) increments commitCountRef
  // and records the committed value. useEffect increments echoCountRef as
  // prop-echoes arrive, suppressing any that don't match lastCommittedValueRef.
  //
  // Using a counter rather than a boolean flag (cf. Radix useControllableState,
  // React DOM shadow-property value equality) means the guard self-heals: if a
  // consumer rejects or remaps the committed value, echoCountRef increments on
  // the first non-matching prop change and catches up to commitCountRef, so
  // subsequent external updates are never permanently blocked.
  const lastCommittedValueRef = useRef<number>(value);
  const commitCountRef = useRef(0);
  const echoCountRef = useRef(0);
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
    if (isDraggingRef.current) {
      return;
    }

    // Stale-echo guard: suppress prop-echoes from older commits.
    // echoCountRef trails commitCountRef while echoes are in flight.
    // Each arriving prop change increments echoCountRef; if the value doesn't
    // match the latest commit it's a stale echo and we return early. On a
    // match (or when React batches multiple commits into one render) we catch
    // echoCountRef up to commitCountRef so the guard doesn't stay open.
    if (echoCountRef.current < commitCountRef.current) {
      echoCountRef.current += 1;
      if (value !== lastCommittedValueRef.current) {
        return;
      }
      echoCountRef.current = commitCountRef.current;
    }

    const trackPercent = getTrackPercentFromValue(
      value,
      minimumValue,
      maximumValue,
      mapValueToTrackPercent,
    );
    previousTrackPercentRef.current = trackPercent;
    translateX.value = trackPercentToPosition(trackPercent, sliderWidth.value);
  }, [
    mapValueToTrackPercent,
    maximumValue,
    minimumValue,
    sliderWidth,
    translateX,
    value,
  ]);

  // --- JS-thread bridges (stable refs for runOnJS from worklets) ---

  const emitValueChange = useCallback(
    (nextValue: number) => {
      onValueChange(nextValue);
    },
    [onValueChange],
  );

  // Called via runOnJS from worklets before emitValueChange so the echo guard
  // is primed before the value-prop change arrives on the JS thread.
  const markCommit = useCallback((committedValue: number) => {
    lastCommittedValueRef.current = committedValue;
    commitCountRef.current += 1;
  }, []);

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
          onMark?.();
          break;
        }
      }

      previousTrackPercentRef.current = newTrackPercent;
    },
    [hapticThresholds, onMark],
  );

  // --- Animated styles (thumb + fill width follow translateX) ---

  const activeFillColor = useDerivedValue(() => {
    if (!hasThemedColors) {
      return undefined;
    }

    return interpolateMarkColor(
      positionToTrackPercent(translateX.value, sliderWidth.value),
      fillColorStops,
    );
  });

  const activeThumbColor = useDerivedValue(() => {
    if (!hasThemedColors) {
      return undefined;
    }

    return interpolateMarkColor(
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

      // markCommit must be scheduled before emitValueChange so the echo guard
      // is set before the value-prop change round-trips back from the parent.
      runOnJS(markCommit)(domainValue);
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
    markCommit,
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

      const mark = marks.find((entry) => entry.step === rangeStep);
      if (!mark) {
        return;
      }

      const newValue = getMarkValue(mark, minimumValue, maximumValue);
      lastCommittedValueRef.current = newValue;
      commitCountRef.current += 1;
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
      marks,
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
