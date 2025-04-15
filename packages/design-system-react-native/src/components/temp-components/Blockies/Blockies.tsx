/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import React from 'react';
import { Image } from 'react-native';

// @ts-ignore
import { toDataUrl } from './Blockies.utilities';

import type { BlockiesProps } from './Blockies.types';

const Blockies = ({ address, size = 32, ...props }: BlockiesProps) => {
  return (
    <Image
      source={{ uri: toDataUrl(address) }}
      width={size}
      height={size}
      {...props}
    />
  );
};

export default Blockies;
