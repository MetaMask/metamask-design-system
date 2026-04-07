import { BannerAlertSeverity } from '@metamask/design-system-shared';
import React, { forwardRef } from 'react';

import { twMerge } from '../../utils/tw-merge';
import { BannerBase } from '../BannerBase';
import { Icon, IconSize } from '../Icon';

import {
  MAP_BANNER_ALERT_SEVERITY_BACKGROUND_COLOR,
  MAP_BANNER_ALERT_SEVERITY_BORDER_COLOR,
  MAP_BANNER_ALERT_SEVERITY_ICON_COLOR,
  MAP_BANNER_ALERT_SEVERITY_ICON_NAME,
} from './BannerAlert.constants';
import type { BannerAlertProps } from './BannerAlert.types';

export const BannerAlert = forwardRef<HTMLDivElement, BannerAlertProps>(
  (
    { severity = BannerAlertSeverity.Info, iconProps, className, ...props },
    ref,
  ) => {
    const iconName = MAP_BANNER_ALERT_SEVERITY_ICON_NAME[severity];
    const iconColor = MAP_BANNER_ALERT_SEVERITY_ICON_COLOR[severity];
    const backgroundColor =
      MAP_BANNER_ALERT_SEVERITY_BACKGROUND_COLOR[severity];
    const borderColorClass = MAP_BANNER_ALERT_SEVERITY_BORDER_COLOR[severity];
    const mergedClassName = twMerge('border-l-4', borderColorClass, className);

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
        paddingLeft={2}
        className={mergedClassName}
        {...props}
      />
    );
  },
);

BannerAlert.displayName = 'BannerAlert';
