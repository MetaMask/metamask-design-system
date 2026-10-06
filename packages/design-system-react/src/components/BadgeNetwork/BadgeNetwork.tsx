import React, { forwardRef } from 'react';

import { AvatarNetwork, AvatarNetworkSize } from '../AvatarNetwork/index.js';

import type { BadgeNetworkProps } from './BadgeNetwork.types.js';

export const BadgeNetwork = forwardRef<HTMLDivElement, BadgeNetworkProps>(
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
