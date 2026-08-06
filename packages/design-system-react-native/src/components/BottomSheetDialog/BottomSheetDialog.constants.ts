/**
 * Motion tokens for sheet open / close / drag-dismiss / in-sheet nav.
 *
 * Springs are only for interactive settle (open, snap-back).
 * Surface exits and content nav use tweens on the two iOS curves.
 */

/**
 * Sheet open / snap-back spring — critically damped, no bounce.
 * Matches Framer `stiffness: 540, damping: 55` (mass 1).
 */
export const BOTTOMSHEETDIALOG_SPRING = {
  stiffness: 540,
  damping: 55,
  mass: 1,
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

/**
 * Content / surface ease — easeOutExpo-style: [0.16, 1, 0.3, 1].
 */
export const BOTTOMSHEETDIALOG_CONTENT_EASING = [0.16, 1, 0.3, 1] as const;

/**
 * In-sheet stack push / pop duration in ms (0.45s).
 * Full-width slide; drill deeper left, back right.
 */
export const BOTTOMSHEETDIALOG_STACK_PUSH_DURATION = 450;

/**
 * In-sheet stack push curve — content ease, not the sheet dismiss curve.
 */
export const BOTTOMSHEETDIALOG_STACK_PUSH_EASING =
  BOTTOMSHEETDIALOG_CONTENT_EASING;

/**
 * Incoming screen opacity: 0.22s easeOut, delayed 0.05s.
 */
export const BOTTOMSHEETDIALOG_STACK_OPACITY_IN_DURATION = 220;
export const BOTTOMSHEETDIALOG_STACK_OPACITY_IN_DELAY = 50;

/**
 * Outgoing screen opacity: 0.08s easeIn (vanishes before the new screen lands).
 */
export const BOTTOMSHEETDIALOG_STACK_OPACITY_OUT_DURATION = 80;

/**
 * In-sheet content height resize — same 0.45s content ease as the slide
 * so height and X move as one gesture (no layout-spring bounce).
 */
export const BOTTOMSHEETDIALOG_STACK_HEIGHT_DURATION = 450;

/**
 * Height resize expo-out curve: [0.16, 1, 0.3, 1].
 */
export const BOTTOMSHEETDIALOG_STACK_HEIGHT_EASING =
  BOTTOMSHEETDIALOG_CONTENT_EASING;
