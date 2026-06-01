// External dependencies.
import { IconAlertSeverity } from '@metamask/design-system-shared';

import { ToastSeverity } from './Toast.types';

export const TOAST_BOTTOM_PADDING = 36;

export const TOAST_SEVERITY_ICON_MAP = {
  [ToastSeverity.Success]: IconAlertSeverity.Success,
  [ToastSeverity.Warning]: IconAlertSeverity.Warning,
  [ToastSeverity.Danger]: IconAlertSeverity.Error,
} as const;
