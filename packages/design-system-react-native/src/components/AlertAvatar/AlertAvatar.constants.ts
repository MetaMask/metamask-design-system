import {
  AvatarIconSeverity,
  IconAlertSeverity,
  IconColor,
  IconName,
} from '@metamask/design-system-shared';

import { ICON_ALERT_SEVERITY_MAP } from '../IconAlert/IconAlert.constants';

export const MAP_ALERTAVATAR_SEVERITY_ICONNAME: Record<
  AvatarIconSeverity,
  IconName
> = {
  [AvatarIconSeverity.Neutral]: IconName.User,
  [AvatarIconSeverity.Info]:
    ICON_ALERT_SEVERITY_MAP[IconAlertSeverity.Info].name,
  [AvatarIconSeverity.Success]:
    ICON_ALERT_SEVERITY_MAP[IconAlertSeverity.Success].name,
  [AvatarIconSeverity.Warning]:
    ICON_ALERT_SEVERITY_MAP[IconAlertSeverity.Warning].name,
  [AvatarIconSeverity.Error]:
    ICON_ALERT_SEVERITY_MAP[IconAlertSeverity.Error].name,
};

export const TWCLASSMAP_ALERTAVATAR_SEVERITY_BACKGROUNDCOLOR: Record<
  AvatarIconSeverity,
  string
> = {
  [AvatarIconSeverity.Neutral]: 'bg-muted',
  [AvatarIconSeverity.Info]: 'bg-info-muted',
  [AvatarIconSeverity.Success]: 'bg-success-muted',
  [AvatarIconSeverity.Error]: 'bg-error-muted',
  [AvatarIconSeverity.Warning]: 'bg-warning-muted',
};

export const MAP_ALERTAVATAR_SEVERITY_ICONCOLOR: Record<
  AvatarIconSeverity,
  IconColor
> = {
  [AvatarIconSeverity.Neutral]: IconColor.IconAlternative,
  [AvatarIconSeverity.Info]: IconColor.InfoDefault,
  [AvatarIconSeverity.Success]: IconColor.SuccessDefault,
  [AvatarIconSeverity.Error]: IconColor.ErrorDefault,
  [AvatarIconSeverity.Warning]: IconColor.WarningDefault,
};
