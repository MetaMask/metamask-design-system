import React from 'react';

import { AvatarNetwork, AvatarNetworkSize } from '../AvatarNetwork';
import type { BadgeNetworkProps } from './BadgeNetwork.types';

export const BadgeNetwork = React.forwardRef<HTMLDivElement, BadgeNetworkProps>(
  ({ name, src, fallbackText, ...props }, ref) => {
    return (
      <AvatarNetwork
        name={name}
        src={src}
        fallbackText={fallbackText}
        ref={ref}
        {...props}
        size={AvatarNetworkSize.Xs}
        hasBorder
      />
    );
  },
);

BadgeNetwork.displayName = 'BadgeNetwork';
