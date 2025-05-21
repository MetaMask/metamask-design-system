import React from 'react';

import { AvatarNetwork, AvatarNetworkSize } from '../AvatarNetwork';

import type { BadgeNetworkProps } from './BadgeNetwork.types';

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
