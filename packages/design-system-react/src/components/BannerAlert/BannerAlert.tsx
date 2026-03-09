import { BannerAlertSeverity } from '@metamask/design-system-shared';
import React, { forwardRef } from 'react';

import { BoxBorderColor } from '../../types';
import { twMerge } from '../../utils/tw-merge';
import { BannerBase } from '../BannerBase';
import { Icon } from '../Icon';

import {
  BANNER_ALERT_ICON_SIZE,
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
    const borderColorClass =
      MAP_BANNER_ALERT_SEVERITY_BORDER_COLOR[severity] ??
      BoxBorderColor.BorderDefault;
    const mergedClassName = twMerge('border-l-4', borderColorClass, className);
    const resolvedIconProps = iconProps ?? {};

    return (
      <BannerBase
        ref={ref}
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
        className={mergedClassName}
        {...props}
      />
    );
  },
);

BannerAlert.displayName = 'BannerAlert';
