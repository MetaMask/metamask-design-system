import React from 'react';

import { AvatarNetworkSize } from '../../types';
import { AvatarNetwork } from '../AvatarNetwork';
import { SegmentButton } from '../SegmentButton';

import type { NetworkSegmentButtonProps } from './NetworkSegmentButton.types';

export const NetworkSegmentButton = ({
  networkName,
  networkSrc,
  avatarNetworkProps,
  startAccessory,
  ...segmentButtonRest
}: NetworkSegmentButtonProps) => (
  <SegmentButton
    {...segmentButtonRest}
    startAccessory={
      networkSrc ? (
        <AvatarNetwork
          {...avatarNetworkProps}
          size={avatarNetworkProps?.size ?? AvatarNetworkSize.Xs}
          src={networkSrc}
          name={networkName ?? avatarNetworkProps?.name}
        />
      ) : (
        startAccessory
      )
    }
  >
    {networkName ?? ''}
  </SegmentButton>
);

NetworkSegmentButton.displayName = 'NetworkSegmentButton';
