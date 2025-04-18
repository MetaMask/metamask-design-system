import React from 'react';

import { AvatarNetwork, AvatarNetworkSize } from '../AvatarNetwork';
import type { BadgeNetworkProps } from './BadgeNetwork.types';

export const BadgeNetwork = React.forwardRef<HTMLDivElement, BadgeNetworkProps>(
  ({ ...props }, ref) => {
    return <AvatarNetwork {...props} size={AvatarNetworkSize.Xs} hasBorder />;
  },
);

BadgeNetwork.displayName = 'BadgeNetwork';
