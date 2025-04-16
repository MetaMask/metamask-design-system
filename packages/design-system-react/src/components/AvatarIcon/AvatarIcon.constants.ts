import { AvatarIconSize, AvatarIconSeverity } from '../../types';
import { IconSize, IconColor } from '../Icon';
import { AvatarBaseSize } from '../AvatarBase';

export const AVATAR_ICON_SIZE_TO_ICON_SIZE_CLASSNAME_MAP: Record<
  AvatarIconSize,
  IconSize
> = {
  [AvatarIconSize.Xs]: IconSize.Xs, // 16px avatar -> 12px icon
  [AvatarIconSize.Sm]: IconSize.Sm, // 24px avatar -> 16px icon
  [AvatarIconSize.Md]: IconSize.Md, // 32px avatar -> 20px icon
  [AvatarIconSize.Lg]: IconSize.Lg, // 40px avatar -> 24px icon
  [AvatarIconSize.Xl]: IconSize.Xl, // 48px avatar -> 32px icon
};

export const AVATAR_ICON_SEVERITY_CLASSNAME_MAP: Record<
  AvatarIconSeverity,
  { background: string; iconColor: IconColor }
> = {
  [AvatarIconSeverity.Default]: {
    background: 'bg-background-muted',
    iconColor: IconColor.IconAlternative,
  },
  [AvatarIconSeverity.Info]: {
    background: 'bg-info-muted',
    iconColor: IconColor.InfoDefault,
  },
  [AvatarIconSeverity.Success]: {
    background: 'bg-success-muted',
    iconColor: IconColor.SuccessDefault,
  },
  [AvatarIconSeverity.Error]: {
    background: 'bg-error-muted',
    iconColor: IconColor.ErrorDefault,
  },
  [AvatarIconSeverity.Warning]: {
    background: 'bg-warning-muted',
    iconColor: IconColor.WarningDefault,
  },
};

export const AVATAR_ICON_TO_AVATAR_BASE_SIZE_MAP: Record<
  AvatarIconSize,
  AvatarBaseSize
> = {
  [AvatarIconSize.Xs]: AvatarBaseSize.Xs,
  [AvatarIconSize.Sm]: AvatarBaseSize.Sm,
  [AvatarIconSize.Md]: AvatarBaseSize.Md,
  [AvatarIconSize.Lg]: AvatarBaseSize.Lg,
  [AvatarIconSize.Xl]: AvatarBaseSize.Xl,
};
