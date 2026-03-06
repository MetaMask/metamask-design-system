import { BoxBackgroundColor, IconColor, IconName, IconSize } from '../../types';

type BannerAlertSeverityType = 'info' | 'success' | 'warning' | 'danger';

export const DEFAULT_BANNER_ALERT_SEVERITY: BannerAlertSeverityType = 'info';

export const MAP_BANNER_ALERT_SEVERITY_ICON_NAME: Record<
  BannerAlertSeverityType,
  IconName
> = {
  info: IconName.Info,
  success: IconName.Confirmation,
  warning: IconName.Danger,
  danger: IconName.Danger,
};

export const MAP_BANNER_ALERT_SEVERITY_ICON_COLOR: Record<
  BannerAlertSeverityType,
  IconColor
> = {
  info: IconColor.PrimaryDefault,
  success: IconColor.SuccessDefault,
  warning: IconColor.WarningDefault,
  danger: IconColor.ErrorDefault,
};

export const MAP_BANNER_ALERT_SEVERITY_BACKGROUND_COLOR: Record<
  BannerAlertSeverityType,
  BoxBackgroundColor
> = {
  info: BoxBackgroundColor.PrimaryMuted,
  success: BoxBackgroundColor.SuccessMuted,
  warning: BoxBackgroundColor.WarningMuted,
  danger: BoxBackgroundColor.ErrorMuted,
};

export const BANNER_ALERT_ICON_SIZE = IconSize.Lg;
export const BANNER_ALERT_ICON_TEST_ID = 'banner-alert-icon';
