/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import React from 'react';

import AvatarNetwork, { AvatarNetworkSize } from '../AvatarNetwork';
import type { BadgeNetworkProps } from './BadgeNetwork.types';

const BadgeNetwork = ({
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

export default BadgeNetwork;
