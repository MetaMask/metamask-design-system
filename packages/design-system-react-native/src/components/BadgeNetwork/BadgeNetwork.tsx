/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import React from 'react';

import AvatarNetwork, { AvatarNetworkSize } from '../AvatarNetwork';
import type { BadgeNetworkProps } from './BadgeNetwork.types';

const BadgeNetwork = ({
  name,
  fallbackText,
  fallbackTextProps,
  ...props
}: BadgeNetworkProps) => (
  <AvatarNetwork
    name={name}
    fallbackText={fallbackText}
    fallbackTextProps={fallbackTextProps}
    {...props}
    size={AvatarNetworkSize.Xs}
    hasBorder
  />
);

export default BadgeNetwork;
