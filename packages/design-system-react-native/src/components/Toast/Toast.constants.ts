// External dependencies.
import {
  BannerAlertSeverity,
  IconAlertSeverity,
} from '@metamask/design-system-shared';
import { AnimationDuration } from '@metamask/design-tokens';

/**
 * Animation constants.
 */
export const TOAST_VISIBILITY_DURATION = 2750;
export const TOAST_ANIMATION_DURATION = AnimationDuration.Regularly;
export const TOAST_BOTTOM_PADDING = 36;

export const TOAST_SEVERITY_ICON_MAP = {
  [BannerAlertSeverity.Success]: IconAlertSeverity.Success,
  [BannerAlertSeverity.Warning]: IconAlertSeverity.Warning,
  [BannerAlertSeverity.Danger]: IconAlertSeverity.Error,
} as const;
