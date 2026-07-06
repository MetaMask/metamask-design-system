import type { SliderPropsShared } from '@metamask/design-system-shared';
import type { ViewProps } from 'react-native';

/**
 * React Native Slider props.
 *
 * Extends {@link SliderPropsShared} for cross-platform API (value, range, labels,
 * custom scale hooks) and `ViewProps` for root container passthrough (e.g.
 * `testID`, `accessibilityLabel`). See README for consumer-facing prop docs.
 */
export type SliderProps = SliderPropsShared &
  ViewProps & {
    /**
     * Optional twrnc classes merged into the root container after component defaults.
     * Use for layout spacing the Box API does not cover (e.g. `mt-4`).
     */
    twClassName?: string;
  };

/**
 * Inputs for `useSliderGesture` — gesture handling and animated thumb/fill sync.
 *
 * Only `value` and `onValueChange` are required. Remaining fields default to the
 * same values as {@link SliderPropsShared} when omitted.
 */
export type UseSliderGestureParams = {
  /** Controlled domain value (`minimumValue`…`maximumValue`). */
  value: number;

  /**
   * Lower bound of the domain range.
   *
   * @default 0
   */
  minimumValue?: number;

  /**
   * Upper bound of the domain range.
   *
   * @default 100
   */
  maximumValue?: number;

  /**
   * Step increment applied by the default `mapTrackPercentToValue` mapper.
   * Custom mappers handle stepping inside `mapTrackPercentToValue`.
   *
   * @default 1
   */
  step?: number;

  /**
   * When true, pan/tap gestures and range-label presses are disabled.
   *
   * @default false
   */
  isDisabled?: boolean;

  /**
   * Called on every value change during pan drag, track tap, or range-label press.
   * Bridged from UI-thread worklets via `runOnJS`.
   */
  onValueChange: (value: number) => void;

  /**
   * Called when a gesture completes (finger lift, tap, or label press).
   * Omitted when the parent does not pass `onDragEnd`.
   */
  onDragEnd?: (value: number) => void;

  /**
   * Called when the user begins a pan (`onBegin`) and again when the pan ends.
   * Not fired on tap or range-label press. Use for haptic feedback.
   */
  onGrip?: () => void;

  /**
   * Called when track percent crosses a `tickThresholds` entry while dragging.
   * Evaluated on each pan `onUpdate` and on range-label press.
   */
  onTick?: () => void;

  /**
   * Track-percent positions (0–100) that trigger `onTick` when crossed.
   * Not domain values — use the same coordinate system as `rangeLabelSteps`.
   *
   * @default [25, 50, 75]
   */
  tickThresholds?: readonly number[];

  /**
   * Maps domain value → 0–100 track position for thumb/fill sync.
   * Must be a Reanimated worklet when provided (`'worklet';` in the function body).
   */
  mapValueToTrackPercent?: (value: number) => number;

  /**
   * Maps 0–100 track position → domain value during gestures.
   * Apply step rounding and snapping here for non-linear scales.
   * Must be a Reanimated worklet when provided (`'worklet';` in the function body).
   */
  mapTrackPercentToValue?: (trackPercent: number) => number;

  /**
   * Converts a tapped `rangeLabelSteps` entry to a domain value.
   * Default: `(step / 100) * (max - min) + min`.
   */
  stepToValue?: (step: number) => number;
};

/**
 * Return value of `useSliderGesture`.
 *
 * Wire `handleLayout`, animated styles, and `gesture` into `Slider.tsx`;
 * `handlePressStep` is bound to range-label `Pressable` targets.
 */
export type UseSliderGestureResult = {
  /**
   * Root `onLayout` handler. Stores track width and re-syncs thumb position
   * from the current `value` prop.
   */
  handleLayout: (event: { nativeEvent: { layout: { width: number } } }) => void;

  /** Animated width for the filled portion of the track (follows thumb). */
  progressStyle: ReturnType<
    typeof import('react-native-reanimated').useAnimatedStyle
  >;

  /** Animated `translateX` for the thumb relative to the track start. */
  thumbStyle: ReturnType<
    typeof import('react-native-reanimated').useAnimatedStyle
  >;

  /** Combined pan + tap gesture for the track/thumb hit area. */
  gesture: ReturnType<
    typeof import('react-native-gesture-handler').Gesture.Simultaneous
  >;

  /**
   * Sets value from a tapped range label: `stepToValue` → callbacks → thumb sync.
   * No-op when `isDisabled` is true.
   */
  handlePressStep: (rangeStep: number) => void;
};
