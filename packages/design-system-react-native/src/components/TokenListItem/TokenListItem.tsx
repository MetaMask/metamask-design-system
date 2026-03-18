import React from 'react';

import { AvatarTokenSize } from '../../types';
import { AvatarToken } from '../AvatarToken';
import { ListItemBase } from '../ListItemBase';

import type { TokenListItemProps } from './TokenListItem.types';

export const TokenListItem: React.FC<TokenListItemProps> = ({
  avatarTokenProps,
  ...listItemBaseProps
}) => (
  <ListItemBase
    startAccessory={
      <AvatarToken size={AvatarTokenSize.Lg} {...avatarTokenProps} />
    }
    {...listItemBaseProps}
  />
);

TokenListItem.displayName = 'TokenListItem';
