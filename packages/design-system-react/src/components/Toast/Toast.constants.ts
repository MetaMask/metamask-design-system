import { ToastSeverity } from '@metamask/design-system-shared';

import { IconColor, IconName } from '../../types';

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
