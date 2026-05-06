// External dependencies.
import { IconAlertSeverity } from '@metamask/design-system-shared';
import { AnimationDuration } from '@metamask/design-tokens';

import { ToastSeverity } from './Toast.types';

/**
 * Animation constants.
 */
export const TOAST_VISIBILITY_DURATION = 2750;
export const TOAST_ANIMATION_DURATION = AnimationDuration.Regularly;
export const TOAST_BOTTOM_PADDING = 36;

export const TOAST_SEVERITY_ICON_MAP = {
  [ToastSeverity.Success]: IconAlertSeverity.Success,
  [ToastSeverity.Warning]: IconAlertSeverity.Warning,
  [ToastSeverity.Danger]: IconAlertSeverity.Error,
} as const;
