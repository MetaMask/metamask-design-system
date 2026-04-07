import { BannerAlertSeverity } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';

import { BannerBase } from '../BannerBase';
import { Icon, IconSize } from '../Icon';

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
  style,
  ...props
}) => {
  const tw = useTailwind();
  const iconName = MAP_BANNER_ALERT_SEVERITY_ICON_NAME[severity];
  const iconColor = MAP_BANNER_ALERT_SEVERITY_ICON_COLOR[severity];
  const backgroundColor = MAP_BANNER_ALERT_SEVERITY_BACKGROUND_COLOR[severity];
  const borderColorClass = MAP_BANNER_ALERT_SEVERITY_BORDER_COLOR[severity];
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
      style={[tw.style(`border-l-4 ${borderColorClass}`), style]}
      {...props}
    />
  );
};
