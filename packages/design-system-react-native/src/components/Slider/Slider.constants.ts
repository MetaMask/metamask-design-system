import type { SliderMark } from '@metamask/design-system-shared';

/** Slider geometry and behavior defaults — not typography or spacing tokens. */
export const THUMB_SIZE = 32;
export const THUMB_TOP_OFFSET = -13;
/** Negative offset so the thumb center aligns with the track start at 0%. */
export const THUMB_LEFT_OFFSET = -16;
export const THUMB_BOTTOM_OFFSET = THUMB_TOP_OFFSET + THUMB_SIZE;
export const THUMB_TO_LABEL_GAP = 8;
/** Scale applied to the thumb while the user is dragging. */
export const THUMB_GRIP_SCALE = 1.12;
/** Duration (ms) for thumb grip scale in/out. */
export const THUMB_GRIP_ANIMATION_DURATION = 100;
/**
 * Grace window (ms) after any direct (worklet-driven) position commit during
 * which a `value`-prop echo is treated as potentially stale and skipped.
 *
 * A tap or range-label press commits the thumb position synchronously on the
 * UI thread, then asynchronously round-trips through the JS thread
 * (`onValueChange`/`onDragEnd` → consumer state update → re-render → `value`
 * prop change → effect → `useAnimatedReaction`) to also sync `propValue`.
 * If a second, newer commit happens before that round trip completes, the
 * stale echo would otherwise snap the thumb backward for one frame before
 * the newer echo corrects it. Keep this comfortably above a slow JS-thread
 * round trip while staying under normal human tap cadence (~100–250ms).
 */
export const SELF_ECHO_GRACE_MS = 120;
/** Matches root `py-2` vertical padding on the slider container. */
export const SLIDER_VERTICAL_PADDING = 8;
export const RANGE_LABEL_TOP =
  SLIDER_VERTICAL_PADDING + THUMB_BOTTOM_OFFSET + THUMB_TO_LABEL_GAP;
/** Approximate line height for BodyMd range labels below the track. */
export const SLIDER_LABEL_LINE_HEIGHT = 20;
/** Bottom padding when range labels may render (RANGE_LABEL_TOP + label height). */
export const SLIDER_BOTTOM_PADDING = RANGE_LABEL_TOP + SLIDER_LABEL_LINE_HEIGHT;
/**
 * Default horizontal inset on the root container; equals |THUMB_LEFT_OFFSET| so
 * the thumb can overhang at min/max without clipping.
 */
export const SLIDER_TRACK_INSET = Math.abs(THUMB_LEFT_OFFSET);
/**
 * Edge marker inset (percent) so dots/labels at 0/100 stay on the visible track.
 * The thumb at 0% sits half its width (THUMB_SIZE / 2) left of the track start;
 * a small inset keeps edge markers from sitting under the thumb center.
 */
export const DOT_EDGE_INSET_PERCENT = '2%';
export const DOT_EDGE_MAX_PERCENT = '98%';

export const DEFAULT_MARKS: readonly SliderMark[] = [
  { step: 0, label: '0%', haptic: false },
  { step: 25, label: '25%', haptic: true },
  { step: 50, label: '50%', haptic: true },
  { step: 75, label: '75%', haptic: true },
  { step: 100, label: '100%', haptic: false },
];
