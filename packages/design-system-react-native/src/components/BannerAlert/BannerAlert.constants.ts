import { BannerAlertSeverity } from '@metamask/design-system-shared';

import {
  BoxBackgroundColor,
  BoxBorderColor,
  IconColor,
  IconName,
  IconSize,
} from '../../types';

export const DEFAULT_BANNER_ALERT_SEVERITY = BannerAlertSeverity.Info;

type BannerAlertSeverityType =
  (typeof BannerAlertSeverity)[keyof typeof BannerAlertSeverity];

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

export const MAP_BANNER_ALERT_SEVERITY_BORDER_COLOR: Record<
  BannerAlertSeverityType,
  BoxBorderColor
> = {
  info: BoxBorderColor.PrimaryDefault,
  success: BoxBorderColor.SuccessDefault,
  warning: BoxBorderColor.WarningDefault,
  danger: BoxBorderColor.ErrorDefault,
};

export const BANNER_ALERT_ICON_SIZE = IconSize.Lg;
export const BANNER_ALERT_ICON_TEST_ID = 'banner-alert-icon';
