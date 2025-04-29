import { AvatarIconSize, AvatarIconSeverity } from '../../types';
import { IconSize, IconColor } from '../Icon';

// Mappings
export const TWCLASSMAP_AVATARICON_SEVERITY_BACKGROUNDCOLOR: Record<
  AvatarIconSeverity,
  string
> = {
  [AvatarIconSeverity.Neutral]: 'bg-background-muted',
  [AvatarIconSeverity.Info]: 'bg-info-muted',
  [AvatarIconSeverity.Success]: 'bg-success-muted',
  [AvatarIconSeverity.Error]: 'bg-error-muted',
  [AvatarIconSeverity.Warning]: 'bg-warning-muted',
};
export const MAP_AVATARICON_SIZE_ICONSIZE: Record<AvatarIconSize, IconSize> = {
  [AvatarIconSize.Xs]: IconSize.Xs, // 16px avatar -> 12px icon
  [AvatarIconSize.Sm]: IconSize.Sm, // 24px avatar -> 16px icon
  [AvatarIconSize.Md]: IconSize.Md, // 32px avatar -> 20px icon
  [AvatarIconSize.Lg]: IconSize.Lg, // 40px avatar -> 24px icon
  [AvatarIconSize.Xl]: IconSize.Xl, // 48px avatar -> 32px icon
};
export const MAP_AVATARICON_SEVERITY_ICONCOLOR: Record<
  AvatarIconSeverity,
  IconColor
> = {
  [AvatarIconSeverity.Neutral]: IconColor.IconAlternative,
  [AvatarIconSeverity.Info]: IconColor.InfoDefault,
  [AvatarIconSeverity.Success]: IconColor.SuccessDefault,
  [AvatarIconSeverity.Error]: IconColor.ErrorDefault,
  [AvatarIconSeverity.Warning]: IconColor.WarningDefault,
};
