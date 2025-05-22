import React from 'react';
import { Image } from 'react-native';

// @ts-ignore
import type { BlockiesProps } from './Blockies.types';
import { toDataUrl } from './Blockies.utilities';

export const Blockies = ({ address, size = 32, ...props }: BlockiesProps) => {
  return (
    <Image
      source={{ uri: toDataUrl(address) }}
      width={size}
      height={size}
      {...props}
    />
  );
};
