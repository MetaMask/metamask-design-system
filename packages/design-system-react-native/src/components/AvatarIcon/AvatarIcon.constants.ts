import type { AvatarIconProps } from './AvatarIcon.types';
import { AvatarIconSeverity } from './AvatarIcon.types';
import { IconSize, IconColor } from '../Icon';
import { AvatarIconSize, AvatarBaseShape } from '../../shared/enums';

// Mappings
export const TWCLASSMAP_AVATARICON_SEVERITY_BACKGROUNDCOLOR: Record<
  AvatarIconSeverity,
  string
> = {
  [AvatarIconSeverity.Default]: 'bg-background-muted',
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
  [AvatarIconSeverity.Default]: IconColor.IconAlternative,
  [AvatarIconSeverity.Info]: IconColor.InfoDefault,
  [AvatarIconSeverity.Success]: IconColor.SuccessDefault,
  [AvatarIconSeverity.Error]: IconColor.ErrorDefault,
  [AvatarIconSeverity.Warning]: IconColor.WarningDefault,
};

// Defaults
export const DEFAULT_AVATARICON_PROPS: Required<
  Pick<AvatarIconProps, 'size' | 'shape' | 'severity'>
> = {
  size: AvatarIconSize.Md,
  shape: AvatarBaseShape.Circle,
  severity: AvatarIconSeverity.Default,
};
