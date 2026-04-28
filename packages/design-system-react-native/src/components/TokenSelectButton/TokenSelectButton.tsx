import React from 'react';

import { AvatarToken } from '../AvatarToken';
import { SelectButton } from '../SelectButton';

import type { TokenSelectButtonProps } from './TokenSelectButton.types';

export const TokenSelectButton = ({
  tokenName,
  tokenSrc,
  avatarTokenProps,
  startAccessory,
  ...selectButtonRest
}: TokenSelectButtonProps) => (
  <SelectButton
    {...selectButtonRest}
    value={tokenName}
    startAccessory={
      tokenSrc ? (
        <AvatarToken
          {...avatarTokenProps}
          src={tokenSrc}
          name={tokenName ?? avatarTokenProps?.name}
        />
      ) : (
        startAccessory
      )
    }
  />
);

TokenSelectButton.displayName = 'TokenSelectButton';
