/** Slider geometry and behavior defaults — not typography or spacing tokens. */
export const THUMB_SIZE = 32;
export const THUMB_TOP_OFFSET = -13;
export const THUMB_LEFT_OFFSET = -16;
export const THUMB_BOTTOM_OFFSET = THUMB_TOP_OFFSET + THUMB_SIZE;
export const THUMB_TO_LABEL_GAP = 8;
/** Scale applied to the thumb while the user is dragging. */
export const THUMB_GRIP_SCALE = 1.12;
/** Duration (ms) for thumb grip scale in/out. */
export const THUMB_GRIP_ANIMATION_DURATION = 100;
/** Matches root `py-2` vertical padding on the slider container. */
export const SLIDER_VERTICAL_PADDING = 8;
export const RANGE_LABEL_TOP =
  SLIDER_VERTICAL_PADDING + THUMB_BOTTOM_OFFSET + THUMB_TO_LABEL_GAP;

export const DEFAULT_RANGE_LABEL_STEPS = [0, 25, 50, 75, 100] as const;
export const DEFAULT_TICK_THRESHOLDS = [25, 50, 75] as const;
