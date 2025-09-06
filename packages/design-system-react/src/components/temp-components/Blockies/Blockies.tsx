import { extractAccountAddress } from '@metamask/design-system-shared';
import { blo } from 'blo';
import React from 'react';

import type { BlockiesProps } from './Blockies.types';

export const Blockies = ({ address, size = 32, ...props }: BlockiesProps) => {
  // Extract the account address from CAIP-10 format if needed
  const accountAddress = extractAccountAddress(address);

  return (
    <img
      src={blo(accountAddress as `0x${string}`)}
      height={size}
      width={size}
      alt={`Blockies for ${address}`} // TODO: Add localization for this
      {...props}
    />
  );
};

Blockies.displayName = 'Blockies';
