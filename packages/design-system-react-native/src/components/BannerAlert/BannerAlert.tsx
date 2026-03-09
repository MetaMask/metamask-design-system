import { BannerAlertSeverity } from '@metamask/design-system-shared';
import React from 'react';

import { BoxBorderColor } from '../../types';
import { BannerBase } from '../BannerBase';
import { Icon } from '../Icon';

import {
  BANNER_ALERT_ICON_SIZE,
  MAP_BANNER_ALERT_SEVERITY_BACKGROUND_COLOR,
  MAP_BANNER_ALERT_SEVERITY_ICON_COLOR,
  MAP_BANNER_ALERT_SEVERITY_ICON_NAME,
  MAP_BANNER_ALERT_SEVERITY_BORDER_COLOR,
} from './BannerAlert.constants';
import type { BannerAlertProps } from './BannerAlert.types';

export const BannerAlert: React.FC<BannerAlertProps> = ({
  severity = BannerAlertSeverity.Info,
  iconProps,
  twClassName,
  ...props
}) => {
  const resolvedSeverity = severity as
    | 'info'
    | 'success'
    | 'warning'
    | 'danger';
  const iconName = MAP_BANNER_ALERT_SEVERITY_ICON_NAME[resolvedSeverity];
  const iconColor = MAP_BANNER_ALERT_SEVERITY_ICON_COLOR[resolvedSeverity];
  const backgroundColor =
    MAP_BANNER_ALERT_SEVERITY_BACKGROUND_COLOR[resolvedSeverity];
  const borderColorClass =
    MAP_BANNER_ALERT_SEVERITY_BORDER_COLOR[resolvedSeverity] ??
    BoxBorderColor.BorderDefault;
  const mergedTwClassName = `border-l-4 ${borderColorClass}${
    twClassName ? ` ${twClassName}` : ''
  }`;
  const resolvedIconProps = iconProps ?? {};

  return (
    <BannerBase
      startAccessory={
        <Icon
          {...resolvedIconProps}
          name={iconName}
          color={iconColor}
          size={BANNER_ALERT_ICON_SIZE}
        />
      }
      backgroundColor={backgroundColor}
      paddingLeft={2}
      twClassName={mergedTwClassName}
      {...props}
    />
  );
};
