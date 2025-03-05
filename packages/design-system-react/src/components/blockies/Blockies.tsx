import React, { useState, useEffect } from 'react';
import type { BlockiesProps } from './Blockies.types';

export const Blockies = ({
  address,
  size = 32,
  ...imageProps
}: BlockiesProps) => {
  const [bloModule, setBloModule] = useState<{
    blo: (address: string) => string;
  } | null>(null);

  useEffect(() => {
    import('blo')
      .then((module) => setBloModule(module))
      .catch((error) => console.error('Failed to load blo module:', error));
  }, []);

  if (!bloModule) {
    return null;
  }

  return (
    <img
      src={bloModule.blo(address)}
      height={size}
      width={size}
      {...imageProps}
    />
  );
};

Blockies.displayName = 'Blockies';
