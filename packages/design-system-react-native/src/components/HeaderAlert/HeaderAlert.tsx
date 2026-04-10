import React from 'react';

import { IconSize } from '../../types';
import { HeaderStandard } from '../HeaderStandard';
import { IconAlert } from '../IconAlert';

import type { HeaderAlertProps } from './HeaderAlert.types';

export const HeaderAlert: React.FC<HeaderAlertProps> = ({
  severity,
  iconAlertProps,
  ...headerStandardProps
}) => (
  <HeaderStandard {...headerStandardProps}>
    <IconAlert {...iconAlertProps} severity={severity} size={IconSize.Lg} />
  </HeaderStandard>
);

HeaderAlert.displayName = 'HeaderAlert';
