import React from 'react';

import { AvatarNetwork, AvatarNetworkSize } from '../AvatarNetwork/index.js';

import type { BadgeNetworkProps } from './BadgeNetwork.types.js';

export const BadgeNetwork = ({
  src,
  name,
  fallbackText,
  ...props
}: BadgeNetworkProps) => (
  <AvatarNetwork
    src={src}
    name={name}
    fallbackText={fallbackText}
    {...props}
    size={AvatarNetworkSize.Xs}
    hasBorder
  />
);
