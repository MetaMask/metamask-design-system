import { blo } from 'blo';
import React from 'react';
import type { BlockiesProps } from './Blockies.types';

export const Blockies = ({ address, size = 32, ...props }: BlockiesProps) => {
  return (
    <img
      src={blo(address as `0x${string}`)}
      height={size}
      width={size}
      alt={`Blockies for ${address}`} // TODO: Add localization for this
      {...props}
    />
  );
};

Blockies.displayName = 'Blockies';
