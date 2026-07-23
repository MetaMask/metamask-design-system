import React from 'react';

import { Icon } from '../Icon';

import { ICON_ALERT_SEVERITY_MAP } from './IconAlert.constants';
import type { IconAlertProps } from './IconAlert.types';

export const IconAlert = ({ severity, ...props }: IconAlertProps) => {
  const { name, color } = ICON_ALERT_SEVERITY_MAP[severity];
  return <Icon {...props} color={color} name={name} />;
};

IconAlert.displayName = 'IconAlert';
