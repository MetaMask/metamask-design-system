import React from 'react';

import { AvatarAccount } from '../AvatarAccount';
import { SelectButton } from '../SelectButton';

import type { AccountSelectButtonProps } from './AccountSelectButton.types';

export const AccountSelectButton = ({
  accountAddress,
  accountName,
  avatarAccountProps,
  startAccessory,
  ...selectButtonRest
}: AccountSelectButtonProps) => (
  <SelectButton
    {...selectButtonRest}
    value={accountName}
    startAccessory={
      accountAddress ? (
        <AvatarAccount {...avatarAccountProps} address={accountAddress} />
      ) : (
        startAccessory
      )
    }
  />
);

AccountSelectButton.displayName = 'AccountSelectButton';
