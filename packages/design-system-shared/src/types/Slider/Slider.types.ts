/**
 * Slider component shared props (ADR-0004)
 * Platform-independent properties shared across React and React Native
 */

/**
 * Semantic color tokens for tick theming (flat palette keys).
 */
export const TickColor = {
  SuccessDefault: 'success-default',
  WarningDefault: 'warning-default',
  ErrorDefault: 'error-default',
  PrimaryDefault: 'primary-default',
  InfoDefault: 'info-default',
  /** Default thumb color fallback. */
  IconDefault: 'icon-default',
  /** Default fill color fallback. */
  IconAlternative: 'icon-alternative',
} as const;
export type TickColor = (typeof TickColor)[keyof typeof TickColor];

export type SliderTickColor =
  | TickColor
  | `#${string}`
  | `rgb${string}`
  | `rgba${string}`;

export type SliderTick = {
  /** Track-percent position (0–100). */
  step: number;
  /** Label text. Omit for dot-only markers. */
  label?: string;
  /** Domain value when tick is tapped. Default: linear from step. */
  value?: number;
  /** Theme color token or raw hex/rgb. Omit for default slider colors. */
  color?: SliderTickColor;
  /** Fires onTick when crossed. Default: true when label is set. */
  haptic?: boolean;
};

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
   * Tick markers along the track. Each entry defines position, optional label,
   * optional domain value, optional theme color, and optional haptic threshold.
   *
   * @default DEFAULT_TICKS (0%, 25%, 50%, 75%, 100%)
   */
  ticks?: readonly SliderTick[];

  /**
   * When true, renders tappable labels below the track for ticks with a label.
   *
   * @default false
   */
  showRangeLabels?: boolean;

  /**
   * When true, renders dots on the track at each tick position.
   *
   * @default false
   */
  showRangeDots?: boolean;

  /**
   * Fires once when pan begins and once when pan ends; not fired on tap or
   * range-label press. Use for haptic feedback (e.g. ImpactMoment.SliderGrip).
   */
  onGrip?: () => void;

  /**
   * Fired when the track percent crosses a haptic tick threshold while dragging.
   */
  onTick?: () => void;

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
};
