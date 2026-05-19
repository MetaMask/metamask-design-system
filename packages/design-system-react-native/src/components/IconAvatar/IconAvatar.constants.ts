import { AvatarIconSeverity, IconColor } from '@metamask/design-system-shared';

export const TWCLASSMAP_ICONAVATAR_SEVERITY_BACKGROUNDCOLOR: Record<
  AvatarIconSeverity,
  string
> = {
  [AvatarIconSeverity.Neutral]: 'bg-muted',
  [AvatarIconSeverity.Info]: 'bg-info-muted',
  [AvatarIconSeverity.Success]: 'bg-success-muted',
  [AvatarIconSeverity.Error]: 'bg-error-muted',
  [AvatarIconSeverity.Warning]: 'bg-warning-muted',
};

export const MAP_ICONAVATAR_SEVERITY_ICONCOLOR: Record<
  AvatarIconSeverity,
  IconColor
> = {
  [AvatarIconSeverity.Neutral]: IconColor.IconAlternative,
  [AvatarIconSeverity.Info]: IconColor.InfoDefault,
  [AvatarIconSeverity.Success]: IconColor.SuccessDefault,
  [AvatarIconSeverity.Error]: IconColor.ErrorDefault,
  [AvatarIconSeverity.Warning]: IconColor.WarningDefault,
};
