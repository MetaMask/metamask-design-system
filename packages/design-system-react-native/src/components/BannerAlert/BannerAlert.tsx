import { BannerAlertSeverity } from '@metamask/design-system-shared';
import React from 'react';

import { BoxBorderColor, IconSize } from '../../types';
import { BannerBase } from '../BannerBase';
import { Icon } from '../Icon';

import {
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
  const iconName = MAP_BANNER_ALERT_SEVERITY_ICON_NAME[severity];
  const iconColor = MAP_BANNER_ALERT_SEVERITY_ICON_COLOR[severity];
  const backgroundColor = MAP_BANNER_ALERT_SEVERITY_BACKGROUND_COLOR[severity];
  const borderColorClass =
    MAP_BANNER_ALERT_SEVERITY_BORDER_COLOR[severity] ??
    BoxBorderColor.BorderDefault;
  const mergedTwClassName = `border-l-4 ${borderColorClass}${
    twClassName ? ` ${twClassName}` : ''
  }`;

  return (
    <BannerBase
      startAccessory={
        <Icon
          name={iconName}
          color={iconColor}
          size={IconSize.Lg}
          {...iconProps}
        />
      }
      backgroundColor={backgroundColor}
      paddingLeft={2}
      twClassName={mergedTwClassName}
      {...props}
    />
  );
};
