/**
 * Slider component shared props (ADR-0004)
 * Platform-independent properties shared across React and React Native
 */
export type SliderPropsShared = {
  /**
   * Current slider value. This component is fully controlled.
   */
  value: number;

  /**
   * Called when the slider value changes during drag, tap, or label press.
   */
  onValueChange: (value: number) => void;

  /**
   * Called when the user lifts their finger or taps the track.
   */
  onDragEnd?: (value: number) => void;

  /**
   * Minimum value of the slider range.
   *
   * @default 0
   */
  minimumValue?: number;

  /**
   * Maximum value of the slider range.
   *
   * @default 100
   */
  maximumValue?: number;

  /**
   * Step increment for value changes.
   *
   * @default 1
   */
  step?: number;

  /**
   * When true, disables slider interaction.
   *
   * @default false
   */
  isDisabled?: boolean;

  /**
   * Track-percent positions (0–100) for markers and labels — not domain values.
   *
   * @default [0, 25, 50, 75, 100]
   */
  rangeLabelSteps?: readonly number[];

  /**
   * When true, renders tappable labels below the track at each rangeLabelSteps position.
   *
   * @default false
   */
  showRangeLabels?: boolean;

  /**
   * When true, renders dots on the track at each rangeLabelSteps position.
   *
   * @default false
   */
  showRangeDots?: boolean;

  /**
   * Fired when the user begins or ends dragging the thumb.
   */
  onGrip?: () => void;

  /**
   * Fired when the track percent crosses a tick threshold while dragging.
   */
  onTick?: () => void;

  /**
   * Track-percent thresholds (0–100) for onTick — not domain values.
   *
   * @default [25, 50, 75]
   */
  tickThresholds?: readonly number[];

  /**
   * Maps domain value to 0–100 track position.
   * Default: linear `(value - min) / (max - min) * 100`, clamped 0–100.
   *
   * Must be a Reanimated worklet when provided (include `'worklet';` in the function body).
   */
  mapValueToTrackPercent?: (value: number) => number;

  /**
   * Maps 0–100 track position to domain value. Apply step rounding and snapping here.
   * Default: linear inverse of track percent with step rounding.
   *
   * Must be a Reanimated worklet when provided (include `'worklet';` in the function body).
   */
  mapTrackPercentToValue?: (trackPercent: number) => number;

  /**
   * Formats a rangeLabelSteps entry for display.
   *
   * @default `${step}%`
   */
  formatStepLabel?: (step: number) => string;

  /**
   * Converts a tapped rangeLabelSteps entry to a domain value.
   * Default: `(step / 100) * (max - min) + min`.
   */
  stepToValue?: (step: number) => number;
};
