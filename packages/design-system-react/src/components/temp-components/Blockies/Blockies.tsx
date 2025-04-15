import React, { useState, useEffect } from 'react';

import type { BlockiesProps } from './Blockies.types';

export const Blockies = ({ address, size = 32, ...props }: BlockiesProps) => {
  const [bloModule, setBloModule] = useState<{
    blo: (address: string) => string;
  } | null>(null);

  useEffect(() => {
    import('blo').then((module) =>
      setBloModule(module as { blo: (address: string) => string }),
    );
  }, []);

  if (!bloModule) {
    return null;
  }

  return (
    <img
      src={bloModule.blo(address)}
      height={size}
      width={size}
      alt={`Blockies for ${address}`} // TODO: Add localization for this
      {...props}
    />
  );
};

Blockies.displayName = 'Blockies';
