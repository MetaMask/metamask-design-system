/**
 * Pure helpers for Slider coordinate conversion and UI defaults.
 *
 * Three coordinate systems:
 * - **Domain value** — the controlled `value` prop (`minimumValue`…`maximumValue`).
 * - **Track percent** — normalized 0–100 position along the track (used for dots,
 *   labels, and haptic thresholds; may be non-linear via `map*` hooks).
 * - **Pixel position** — thumb/fill offset in layout pixels (`translateX`).
 *
 * Functions marked with `'worklet'` run on the UI thread inside gesture handlers.
 * JS-thread callers use the non-worklet wrappers (`getTrackPercentFromValue`, etc.).
 */

import type {
  SliderTick,
  SliderTickColor,
} from '@metamask/design-system-shared';
import { interpolateColor } from 'react-native-reanimated';

import {
  DOT_EDGE_INSET_PERCENT,
  DOT_EDGE_MAX_PERCENT,
} from './Slider.constants';

export type SliderColorStop = {
  step: number;
  color: string;
};

// --- Track-percent primitives (worklet) ---

export function clampTrackPercent(trackPercent: number): number {
  'worklet';

  return Math.max(0, Math.min(100, trackPercent));
}

// --- Domain ↔ track-percent mappers (worklet) ---

/**
 * Linear default: domain value → 0–100 track position.
 *
 * @param value - Domain value to map.
 * @param minimumValue - Lower bound of the domain range.
 * @param maximumValue - Upper bound of the domain range.
 * @returns Track percent clamped to 0–100.
 */
export function defaultMapValueToTrackPercent(
  value: number,
  minimumValue: number,
  maximumValue: number,
): number {
  'worklet';

  const range = maximumValue - minimumValue;
  if (range === 0) {
    return 0;
  }

  const percent = ((value - minimumValue) / range) * 100;
  return clampTrackPercent(percent);
}

/**
 * Linear default: track position → stepped domain value.
 *
 * @param trackPercent - Track position from 0–100.
 * @param minimumValue - Lower bound of the domain range.
 * @param maximumValue - Upper bound of the domain range.
 * @param step - Step increment for rounding.
 * @returns Stepped domain value clamped to the range.
 */
export function defaultMapTrackPercentToValue(
  trackPercent: number,
  minimumValue: number,
  maximumValue: number,
  step: number,
): number {
  'worklet';

  const range = maximumValue - minimumValue;
  if (range === 0) {
    return minimumValue;
  }

  const rawValue =
    (clampTrackPercent(trackPercent) / 100) * range + minimumValue;
  const stepped = Math.round(rawValue / step) * step;
  return Math.max(minimumValue, Math.min(maximumValue, stepped));
}

/**
 * UI-thread entry: custom `mapTrackPercentToValue` or linear default.
 *
 * @param trackPercent - Track position from 0–100.
 * @param minimumValue - Lower bound of the domain range.
 * @param maximumValue - Upper bound of the domain range.
 * @param step - Step increment for the default mapper.
 * @param mapTrackPercentToValue - Optional custom mapper.
 * @returns Domain value for the track position.
 */
export function resolveTrackPercentToValue(
  trackPercent: number,
  minimumValue: number,
  maximumValue: number,
  step: number,
  mapTrackPercentToValue?: (trackPercent: number) => number,
): number {
  'worklet';

  if (mapTrackPercentToValue) {
    return mapTrackPercentToValue(trackPercent);
  }

  return defaultMapTrackPercentToValue(
    trackPercent,
    minimumValue,
    maximumValue,
    step,
  );
}

/**
 * UI-thread entry: custom `mapValueToTrackPercent` or linear default.
 *
 * @param value - Domain value to map.
 * @param minimumValue - Lower bound of the domain range.
 * @param maximumValue - Upper bound of the domain range.
 * @param mapValueToTrackPercent - Optional custom mapper.
 * @returns Track percent for the domain value.
 */
export function resolveValueToTrackPercent(
  value: number,
  minimumValue: number,
  maximumValue: number,
  mapValueToTrackPercent?: (value: number) => number,
): number {
  'worklet';

  if (mapValueToTrackPercent) {
    return mapValueToTrackPercent(value);
  }

  return defaultMapValueToTrackPercent(value, minimumValue, maximumValue);
}

// --- Track-percent ↔ pixel position (worklet) ---

export function trackPercentToPosition(
  trackPercent: number,
  width: number,
): number {
  'worklet';

  if (width === 0) {
    return 0;
  }

  return (clampTrackPercent(trackPercent) / 100) * width;
}

export function positionToTrackPercent(
  position: number,
  width: number,
): number {
  'worklet';

  if (width === 0) {
    return 0;
  }

  return clampTrackPercent((position / width) * 100);
}

/**
 * Clamps a touch X coordinate to the track bounds.
 *
 * @param position - Touch X in track coordinates.
 * @param width - Track width in pixels.
 * @returns Clamped pixel position.
 */
export function clampGesturePosition(position: number, width: number): number {
  'worklet';

  return Math.max(0, Math.min(position, width));
}

// --- JS-thread domain ↔ track-percent ---

/**
 * JS-thread entry for mapping domain value → track percent.
 * Used by Slider (labels, a11y) and useSliderGesture (prop/layout sync).
 *
 * @param value - Domain value to map.
 * @param minimumValue - Lower bound of the domain range.
 * @param maximumValue - Upper bound of the domain range.
 * @param mapValueToTrackPercent - Optional custom mapper.
 * @returns Track percent for the domain value.
 */
export function getTrackPercentFromValue(
  value: number,
  minimumValue: number,
  maximumValue: number,
  mapValueToTrackPercent?: (value: number) => number,
): number {
  if (mapValueToTrackPercent) {
    return mapValueToTrackPercent(value);
  }

  return defaultMapValueToTrackPercent(value, minimumValue, maximumValue);
}

// --- Range label / dot defaults (Slider.tsx) ---

/**
 * Default linear track-percent → domain value for a tick.
 *
 * @param step - Track-percent step from a tick entry.
 * @param minimumValue - Lower bound of the domain range.
 * @param maximumValue - Upper bound of the domain range.
 * @returns Domain value for the step.
 */
export function defaultStepToValue(
  step: number,
  minimumValue: number,
  maximumValue: number,
): number {
  return (step / 100) * (maximumValue - minimumValue) + minimumValue;
}

/**
 * Domain value for a tick: explicit `value` or linear default from step.
 *
 * @param tick - Tick entry.
 * @param minimumValue - Lower bound of the domain range.
 * @param maximumValue - Upper bound of the domain range.
 * @returns Domain value for the tick.
 */
export function getTickValue(
  tick: SliderTick,
  minimumValue: number,
  maximumValue: number,
): number {
  if (tick.value !== undefined) {
    return tick.value;
  }

  return defaultStepToValue(tick.step, minimumValue, maximumValue);
}

/**
 * Track-percent thresholds that trigger onTick while dragging.
 *
 * @param ticks - Tick entries.
 * @returns Haptic threshold positions.
 */
export function getTickHapticThresholds(
  ticks: readonly SliderTick[],
): number[] {
  return ticks
    .filter((tick) => tick.haptic ?? Boolean(tick.label))
    .map((tick) => tick.step);
}

/**
 * Resolves a tick color token or raw color string to a hex/rgb value.
 *
 * @param color - Tick color token or raw hex/rgb string.
 * @param palette - Flattened theme color palette.
 * @param fallback - Fallback color when token is not found.
 * @returns Resolved color string.
 */
export function resolveTickColor(
  color: SliderTickColor,
  palette: Record<string, string>,
  fallback: string,
): string {
  if (color.startsWith('#') || color.startsWith('rgb')) {
    return color;
  }

  return palette[color] ?? fallback;
}

/**
 * Builds color interpolation stops from ticks, applying fallback for missing colors.
 *
 * @param ticks - Tick entries.
 * @param palette - Flattened theme color palette.
 * @param fallbackToken - Default token key when tick.color is omitted.
 * @returns Sorted color stops for interpolation.
 */
export function buildColorStops(
  ticks: readonly SliderTick[],
  palette: Record<string, string>,
  fallbackToken: string,
): SliderColorStop[] {
  const fallback = palette[fallbackToken] ?? '#000000';

  return [...ticks]
    .sort((a, b) => a.step - b.step)
    .map((tick) => ({
      step: tick.step,
      color: tick.color
        ? resolveTickColor(tick.color, palette, fallback)
        : fallback,
    }));
}

/**
 * Interpolates a color along the track based on tick color stops.
 *
 * @param trackPercent - Current track position from 0–100.
 * @param stops - Sorted color stops.
 * @returns Interpolated color string.
 */
export function interpolateTickColor(
  trackPercent: number,
  stops: readonly SliderColorStop[],
): string {
  'worklet';

  if (stops.length === 0) {
    return '#000000';
  }

  if (stops.length === 1) {
    return stops[0].color;
  }

  const inputRange = stops.map((stop) => stop.step);
  const outputRange = stops.map((stop) => stop.color);

  return interpolateColor(
    clampTrackPercent(trackPercent),
    inputRange,
    outputRange,
    'RGB',
  );
}

/**
 * Whether any tick defines a theme color.
 *
 * @param ticks - Tick entries.
 * @returns True when at least one tick has a color.
 */
export function hasThemedTickColors(ticks: readonly SliderTick[]): boolean {
  return ticks.some((tick) => Boolean(tick.color));
}

/**
 * Marker `left` percent for range dots and labels; edge steps inset to stay on track.
 *
 * @param step - Track-percent step from a tick entry.
 * @returns CSS `left` percentage string.
 */
export function getDotLeftPercent(step: number): string {
  if (step === 0) {
    return DOT_EDGE_INSET_PERCENT;
  }
  if (step === 100) {
    return DOT_EDGE_MAX_PERCENT;
  }

  return `${step}%`;
}

// --- Accessibility (Slider.tsx) ---

/**
 * Clamps and steps a domain value for increment/decrement actions.
 *
 * @param value - Domain value to clamp.
 * @param minimumValue - Lower bound of the domain range.
 * @param maximumValue - Upper bound of the domain range.
 * @param step - Step increment for rounding.
 * @returns Clamped and stepped domain value.
 */
export function clampValueToRange(
  value: number,
  minimumValue: number,
  maximumValue: number,
  step: number,
): number {
  const range = maximumValue - minimumValue;
  if (range === 0) {
    return minimumValue;
  }

  const clamped = Math.max(minimumValue, Math.min(maximumValue, value));
  return Math.round(clamped / step) * step;
}
