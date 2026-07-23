/**
 * Motion tokens for sheet open / close / drag-dismiss.
 *
 * Springs are only for interactive settle (open, snap-back).
 * Surface exits use tweens on the iOS sheet curve.
 */

/**
 * Sheet open / snap-back spring — critically damped, no bounce.
 *
 * Framer stiffness/damping (540/55) is not 1:1 with Reanimated's solver;
 * duration + dampingRatio: 1 maps to the same "settles fast, no bounce" intent.
 */
export const BOTTOMSHEETDIALOG_SPRING = {
  duration: 380,
  dampingRatio: 1,
} as const;

/**
 * Offscreen start/end multiplier for open/close (y: 105%).
 */
export const BOTTOMSHEETDIALOG_OFFSCREEN_FACTOR = 1.05;

/**
 * Sheet dismiss tween duration in ms (0.28s).
 */
export const BOTTOMSHEETDIALOG_CLOSE_DURATION = 280;

/**
 * iOS sheet curve — fast start, soft landing: [0.32, 0.72, 0, 1].
 */
export const BOTTOMSHEETDIALOG_CLOSE_EASING = [0.32, 0.72, 0, 1] as const;

/**
 * Drag dismiss distance threshold in px.
 */
export const BOTTOMSHEETDIALOG_DRAG_DISMISS_OFFSET = 120;

/**
 * Drag dismiss velocity threshold in px/s.
 */
export const BOTTOMSHEETDIALOG_DRAG_DISMISS_VELOCITY = 800;

/**
 * Downward drag follow factor (1 = 1:1 with the finger).
 *
 * Web dragElastic.bottom 0.6 assumes Framer constraints locked at 0
 * (all travel is rubber-band). On RN that scale lags the finger;
 * native sheets track 1:1, then spring or tween on release.
 */
export const BOTTOMSHEETDIALOG_DRAG_ELASTIC_DOWN = 1;
