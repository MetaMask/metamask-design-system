import React, { forwardRef } from 'react';

import { BannerBase } from '../BannerBase';
import { Icon } from '../Icon';

import {
  BANNER_ALERT_ICON_SIZE,
  BANNER_ALERT_ICON_TEST_ID,
  DEFAULT_BANNER_ALERT_SEVERITY,
  MAP_BANNER_ALERT_SEVERITY_BACKGROUND_COLOR,
  MAP_BANNER_ALERT_SEVERITY_ICON_COLOR,
  MAP_BANNER_ALERT_SEVERITY_ICON_NAME,
} from './BannerAlert.constants';
import type { BannerAlertProps } from './BannerAlert.types';

export const BannerAlert = forwardRef<HTMLDivElement, BannerAlertProps>(
  ({ severity = DEFAULT_BANNER_ALERT_SEVERITY, ...props }, ref) => {
    const resolvedSeverity = severity as
      | 'info'
      | 'success'
      | 'warning'
      | 'danger';
    const iconName = MAP_BANNER_ALERT_SEVERITY_ICON_NAME[resolvedSeverity];
    const iconColor = MAP_BANNER_ALERT_SEVERITY_ICON_COLOR[resolvedSeverity];
    const backgroundColor =
      MAP_BANNER_ALERT_SEVERITY_BACKGROUND_COLOR[resolvedSeverity];

    return (
      <BannerBase
        ref={ref}
        startAccessory={
          <Icon
            data-testid={BANNER_ALERT_ICON_TEST_ID}
            name={iconName}
            color={iconColor}
            size={BANNER_ALERT_ICON_SIZE}
          />
        }
        backgroundColor={backgroundColor}
        paddingLeft={2}
        {...props}
      />
    );
  },
);

BannerAlert.displayName = 'BannerAlert';
