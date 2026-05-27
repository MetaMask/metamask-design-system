import { ToastSeverity } from '@metamask/design-system-shared';

import { IconColor, IconName } from '../../types';

export const TOAST_VISIBILITY_DURATION = 2750;
/** Duration of the enter/exit CSS transition in milliseconds. */
export const TOAST_ANIMATION_DURATION = 200;

export const TOAST_SEVERITY_ICON_MAP = {
  [ToastSeverity.Success]: {
    name: IconName.Confirmation,
    color: IconColor.SuccessDefault,
  },
  [ToastSeverity.Warning]: {
    name: IconName.Danger,
    color: IconColor.WarningDefault,
  },
  [ToastSeverity.Danger]: {
    name: IconName.Danger,
    color: IconColor.ErrorDefault,
  },
} as const;
