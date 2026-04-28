import React from 'react';

import { AvatarNetworkSize } from '../../types';
import { AvatarNetwork } from '../AvatarNetwork';
import { SelectButton } from '../SelectButton';

import type { NetworkSelectButtonProps } from './NetworkSelectButton.types';

export const NetworkSelectButton = ({
  networkName,
  networkSrc,
  avatarNetworkProps,
  startAccessory,
  ...selectButtonRest
}: NetworkSelectButtonProps) => (
  <SelectButton
    {...selectButtonRest}
    value={networkName}
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
  />
);

NetworkSelectButton.displayName = 'NetworkSelectButton';
