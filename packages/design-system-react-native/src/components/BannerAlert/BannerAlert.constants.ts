import {
  BannerAlertSeverity,
  BoxBackgroundColor,
  IconColor,
  IconName,
} from '@metamask/design-system-shared';

export const MAP_BANNER_ALERT_SEVERITY_ICON_NAME: Record<
  (typeof BannerAlertSeverity)[keyof typeof BannerAlertSeverity],
  IconName
> = {
  info: IconName.Info,
  success: IconName.Confirmation,
  warning: IconName.Danger,
  danger: IconName.Danger,
};

export const MAP_BANNER_ALERT_SEVERITY_ICON_COLOR: Record<
  (typeof BannerAlertSeverity)[keyof typeof BannerAlertSeverity],
  IconColor
> = {
  info: IconColor.PrimaryDefault,
  success: IconColor.SuccessDefault,
  warning: IconColor.WarningDefault,
  danger: IconColor.ErrorDefault,
};

export const MAP_BANNER_ALERT_SEVERITY_BACKGROUND_COLOR: Record<
  (typeof BannerAlertSeverity)[keyof typeof BannerAlertSeverity],
  BoxBackgroundColor
> = {
  info: BoxBackgroundColor.PrimaryMuted,
  success: BoxBackgroundColor.SuccessMuted,
  warning: BoxBackgroundColor.WarningMuted,
  danger: BoxBackgroundColor.ErrorMuted,
};
