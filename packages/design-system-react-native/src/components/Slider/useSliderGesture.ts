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
  getMarkHapticThresholds,
  getMarkValue,
  getTrackPercentFromValue,
  interpolateMarkColor,
  positionToTrackPercent,
  resolveTrackPercentToValue,
  resolveValueToTrackPercent,
  trackPercentToPosition,
} from './Slider.utilities';

type CommitEntry = {
  value: number;
  generation: number;
};

type PropReconciliation = {
  /** Write `value` into `propValue` for the UI-thread reaction. */
  syncPropValue: boolean;
  /** Update haptic baseline from the prop (external updates only). */
  syncBaseline: boolean;
};

/**
 * Owns Slider gesture handling, animated thumb/fill position, and range-label taps.
 *
 * Flow during drag (UI thread):
 *   touch X → clamp to track width → trackPercent → domain value → callbacks
 *
 * Flow when `value` prop changes (JS thread → UI thread via useAnimatedReaction):
 *   domain value → trackPercent → translateX (skipped while dragging).
 *
 * Stale controlled self-echoes (gesture → onValueChange → parent state → value
 * prop) are suppressed with a monotonically increasing commit generation — the
 * same sequence principle as React Native TextInput's `mostRecentEventCount`,
 * kept local so the public API stays a plain `value` number. Each gesture emit
 * records the value and generation; incoming props that match the last emitted
 * value while still in flight are acknowledged as echoes and must not rewind
 * the haptic baseline. Once the echo is acknowledged, or if any other value
 * arrives, it is treated as an external update and applied immediately.
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
  const propValue = useSharedValue(value);
  // True while commitGeneration > ackedGeneration — UI thread skips prop→thumb.
  const hasInflightCommits = useSharedValue(false);
  const previousTrackPercentRef = useRef(
    getTrackPercentFromValue(
      value,
      minimumValue,
      maximumValue,
      mapValueToTrackPercent,
    ),
  );
  const isDraggingRef = useRef(false);
  const commitGenerationRef = useRef(0);
  const ackedGenerationRef = useRef(0);
  const lastEmittedValueRef = useRef<number | null>(null);
  const lastEmittedGenerationRef = useRef(0);
  const recentCommitsRef = useRef<CommitEntry[]>([]);

  // --- Commit generation tracking (sequence ack, not a time heuristic) ---

  const recordDirectCommit = useCallback(
    (domainValue: number) => {
      commitGenerationRef.current += 1;
      const generation = commitGenerationRef.current;
      lastEmittedValueRef.current = domainValue;
      lastEmittedGenerationRef.current = generation;
      recentCommitsRef.current.push({ value: domainValue, generation });
      hasInflightCommits.value = true;
    },
    [hasInflightCommits],
  );

  /**
   * Reconciles an incoming controlled `value` against recent local commits.
   *
   * @param incoming - Next `value` prop.
   * @returns Whether to sync `propValue` / haptic baseline from the prop.
   */
  const reconcilePropValue = useCallback(
    (incoming: number): PropReconciliation => {
      // Check if this matches the last emitted value still in flight.
      if (
        lastEmittedValueRef.current !== null &&
        incoming === lastEmittedValueRef.current &&
        lastEmittedGenerationRef.current > ackedGenerationRef.current
      ) {
        // The parent caught up to the latest emit.
        ackedGenerationRef.current = lastEmittedGenerationRef.current;
        lastEmittedValueRef.current = null;
        hasInflightCommits.value = false;
        return { syncPropValue: true, syncBaseline: false };
      }

      // Check if this value was previously emitted.
      const match = recentCommitsRef.current.find(
        (entry) => entry.value === incoming,
      );

      if (match) {
        // If already acknowledged, it's either a late stale echo OR an external
        // update returning to a previous value. Either way, sync thumb position
        // but don't rewind the haptic baseline.
        if (match.generation <= ackedGenerationRef.current) {
          return { syncPropValue: true, syncBaseline: false };
        }
        // Otherwise it's an intermediate in-flight value - acknowledge it but don't update baseline.
        ackedGenerationRef.current = match.generation;
        hasInflightCommits.value =
          ackedGenerationRef.current < commitGenerationRef.current;
        return { syncPropValue: false, syncBaseline: false };
      }

      // Not a recent emit — external update. Clear state and apply it.
      ackedGenerationRef.current = commitGenerationRef.current;
      lastEmittedValueRef.current = null;
      recentCommitsRef.current = [];
      hasInflightCommits.value = false;
      return { syncPropValue: true, syncBaseline: true };
    },
    [hasInflightCommits],
  );

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
      const previousWidth = sliderWidth.value;
      sliderWidth.value = width;

      // After the first layout, never re-apply the raw `value` prop. A layout
      // pass can land while props still hold a lagged stale controlled echo
      // that useEffect intentionally kept out of `propValue`; syncing from
      // that echo would snap the thumb backward. Remap the current thumb
      // across the (possibly new) width instead.
      if (previousWidth > 0) {
        translateX.value = trackPercentToPosition(
          positionToTrackPercent(translateX.value, previousWidth),
          width,
        );
        return;
      }

      // First layout: `propValue` is initialized from `value` and only updated
      // when reconcilePropValue allows it.
      syncPositionFromValue(propValue.value, width);
    },
    [propValue, sliderWidth, syncPositionFromValue, translateX],
  );

  useEffect(() => {
    const { syncPropValue, syncBaseline } = reconcilePropValue(value);

    // Never push stale echoes into propValue — the animated reaction would
    // otherwise move the thumb even when syncBaseline is false.
    if (syncPropValue) {
      propValue.value = value;
    }

    if (isDraggingRef.current || !syncBaseline) {
      return;
    }

    previousTrackPercentRef.current = getTrackPercentFromValue(
      value,
      minimumValue,
      maximumValue,
      mapValueToTrackPercent,
    );
  }, [
    mapValueToTrackPercent,
    maximumValue,
    minimumValue,
    propValue,
    reconcilePropValue,
    value,
  ]);

  useAnimatedReaction(
    () => propValue.value,
    (currentValue, previousValue) => {
      if (isDragging.value) {
        return;
      }

      if (previousValue !== null && currentValue === previousValue) {
        return;
      }

      // Skip while newer local commits are unacked. Stale echoes are kept out
      // of propValue on the JS thread; this is a second guard for races.
      if (hasInflightCommits.value) {
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
      recordDirectCommit(nextValue);
      onValueChange(nextValue);
    },
    [onValueChange, recordDirectCommit],
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

      const mark = marks.find((entry) => entry.step === rangeStep);
      if (!mark) {
        return;
      }

      const newValue = getMarkValue(mark, minimumValue, maximumValue);
      emitValueChange(newValue);
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
      emitValueChange,
      isDisabled,
      mapValueToTrackPercent,
      maximumValue,
      minimumValue,
      onDragEnd,
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
