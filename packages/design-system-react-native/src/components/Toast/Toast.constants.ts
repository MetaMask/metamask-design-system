// External dependencies.
import { IconAlertSeverity } from '@metamask/design-system-shared';
import type { WithSpringConfig } from 'react-native-reanimated';

import { ToastSeverity } from './Toast.types';

export {
  TOAST_ANIMATION_DURATION,
  TOAST_VISIBILITY_DURATION,
} from '@metamask/design-system-shared';

export const TOAST_TOP_PADDING = 8;

/**
 * Spring tuned to approximate iOS system banner motion (inspired by UIKit
 * spring with dampingRatio ~0.7-0.85 / SwiftUI .snappy).
 */
export const TOAST_SPRING_CONFIG: WithSpringConfig = {
  dampingRatio: 0.85,
  duration: 500,
};

/**
 * Fraction of toast height that must be dragged upward to dismiss.
 */
export const TOAST_DISMISS_DISTANCE_THRESHOLD = 0.35;

/**
 * Upward velocity (px/s) required to dismiss via a quick swipe.
 */
export const TOAST_DISMISS_VELOCITY_THRESHOLD = 800;

/**
 * Minimum upward translation before the pan gesture activates,
 * so taps and button presses still work.
 */
export const TOAST_SWIPE_ACTIVE_OFFSET_Y = -8;

/**
 * Horizontal movement that fails the pan gesture before it activates,
 * so horizontal scrolls elsewhere are not captured.
 */
export const TOAST_SWIPE_FAIL_OFFSET_X = 20;

export const TOAST_SEVERITY_ICON_MAP = {
  [ToastSeverity.Success]: IconAlertSeverity.Success,
  [ToastSeverity.Warning]: IconAlertSeverity.Warning,
  [ToastSeverity.Danger]: IconAlertSeverity.Danger,
} as const;
