import { extractAccountAddress } from '@metamask/design-system-shared';
import React from 'react';
import { Image } from 'react-native';

// @ts-ignore
import type { BlockiesProps } from './Blockies.types';
import { toDataUrl } from './Blockies.utilities';

export const Blockies = ({ address, size = 32, ...props }: BlockiesProps) => {
  // Extract the account address from CAIP-10 format if needed
  const accountAddress = extractAccountAddress(address);

  return (
    <Image
      source={{ uri: toDataUrl(accountAddress) }}
      width={size}
      height={size}
      {...props}
    />
  );
};
