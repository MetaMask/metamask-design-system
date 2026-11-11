import { BannerAlertSeverity, IconSize } from '@metamask/design-system-shared';
import React, { forwardRef } from 'react';

import { BannerBase } from '../BannerBase/index.js';
import { Icon } from '../Icon/index.js';

import {
  MAP_BANNER_ALERT_SEVERITY_BACKGROUND_COLOR,
  MAP_BANNER_ALERT_SEVERITY_ICON_COLOR,
  MAP_BANNER_ALERT_SEVERITY_ICON_NAME,
} from './BannerAlert.constants.js';
import type { BannerAlertProps } from './BannerAlert.types.js';

export const BannerAlert = forwardRef<HTMLDivElement, BannerAlertProps>(
  (
    { severity = BannerAlertSeverity.Info, iconProps, className, ...props },
    ref,
  ) => {
    const iconName = MAP_BANNER_ALERT_SEVERITY_ICON_NAME[severity];
    const iconColor = MAP_BANNER_ALERT_SEVERITY_ICON_COLOR[severity];
    const backgroundColor =
      MAP_BANNER_ALERT_SEVERITY_BACKGROUND_COLOR[severity];

    return (
      <BannerBase
        ref={ref}
        startAccessory={
          <Icon
            name={iconName}
            color={iconColor}
            size={IconSize.Lg}
            {...iconProps}
          />
        }
        backgroundColor={backgroundColor}
        className={className}
        {...props}
      />
    );
  },
);

BannerAlert.displayName = 'BannerAlert';
