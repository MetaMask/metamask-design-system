import { IconAlertSeverity } from '@metamask/design-system-shared';

import { IconColor, IconName } from '../../types';

export const ICON_ALERT_SEVERITY_MAP: Record<
  IconAlertSeverity,
  { name: IconName; color: IconColor }
> = {
  [IconAlertSeverity.Info]: {
    name: IconName.Info,
    color: IconColor.PrimaryDefault,
  },
  [IconAlertSeverity.Success]: {
    name: IconName.Confirmation,
    color: IconColor.SuccessDefault,
  },
  [IconAlertSeverity.Warning]: {
    name: IconName.Danger,
    color: IconColor.WarningDefault,
  },
  [IconAlertSeverity.Error]: {
    name: IconName.Error,
    color: IconColor.ErrorDefault,
  },
};
