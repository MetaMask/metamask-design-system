import React from 'react';
import { AVATAR_ACCOUNT_SIZE_TO_PIXELS } from '@metamask/design-system-shared';

import {
  AvatarAccountSize,
  AvatarBaseShape,
  AvatarAccountVariant,
} from '../../types';
import { AvatarBase } from '../AvatarBase';
import { Blockies } from '../temp-components/Blockies';
import { Jazzicon } from '../temp-components/Jazzicon';
import { Maskicon } from '../temp-components/Maskicon';

import type { AvatarAccountProps } from './AvatarAccount.types';

export const AvatarAccount = ({
  address,
  variant = AvatarAccountVariant.Jazzicon,
  size = AvatarAccountSize.Md,
  blockiesProps,
  jazziconProps,
  maskiconProps,
  ...props
}: AvatarAccountProps) => {
  let AvatarArtComponent;

  switch (variant) {
    case AvatarAccountVariant.Blockies:
      AvatarArtComponent = (
        <Blockies 
          address={address} 
          size={AVATAR_ACCOUNT_SIZE_TO_PIXELS[size]} 
          {...blockiesProps} 
        />
      );
      break;
    case AvatarAccountVariant.Maskicon:
      AvatarArtComponent = (
        <Maskicon 
          address={address} 
          size={AVATAR_ACCOUNT_SIZE_TO_PIXELS[size]} 
          {...maskiconProps} 
        />
      );
      break;
    case AvatarAccountVariant.Jazzicon:
    default:
      AvatarArtComponent = (
        <Jazzicon 
          address={address} 
          size={AVATAR_ACCOUNT_SIZE_TO_PIXELS[size]} 
          {...jazziconProps} 
        />
      );
      break;
  }

  return (
    <AvatarBase
      size={size}
      shape={AvatarBaseShape.Circle}
      accessibilityRole="image"
      {...props}
    >
      {AvatarArtComponent}
    </AvatarBase>
  );
};
