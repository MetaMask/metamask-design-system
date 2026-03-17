import { BannerAlertSeverity } from '@metamask/design-system-shared';

import {
  BoxBackgroundColor,
  BoxBorderColor,
  IconColor,
  IconName,
} from '../../types';

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

export const MAP_BANNER_ALERT_SEVERITY_BORDER_COLOR: Record<
  (typeof BannerAlertSeverity)[keyof typeof BannerAlertSeverity],
  BoxBorderColor
> = {
  info: BoxBorderColor.PrimaryDefault,
  success: BoxBorderColor.SuccessDefault,
  warning: BoxBorderColor.WarningDefault,
  danger: BoxBorderColor.ErrorDefault,
};
