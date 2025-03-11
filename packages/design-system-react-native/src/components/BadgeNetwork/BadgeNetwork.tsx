/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import React from 'react';

import AvatarNetwork, { AvatarNetworkSize } from '../AvatarNetwork';
import type { BadgeNetworkProps } from './BadgeNetwork.types';

const BadgeNetwork = (props: BadgeNetworkProps) => (
  <AvatarNetwork {...props} size={AvatarNetworkSize.Xs} />
);

export default BadgeNetwork;
