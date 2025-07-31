import React from 'react';

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
        <Blockies address={address} size={Number(size)} {...blockiesProps} />
      );
      break;
    case AvatarAccountVariant.Maskicon:
      AvatarArtComponent = (
        <Maskicon address={address} size={Number(size)} {...maskiconProps} />
      );
      break;
    case AvatarAccountVariant.Jazzicon:
    default:
      AvatarArtComponent = (
        <Jazzicon address={address} size={Number(size)} {...jazziconProps} />
      );
      break;
  }

  return (
    <AvatarBase
      size={size}
      shape={AvatarBaseShape.Square}
      accessibilityRole="image"
      {...props}
    >
      {AvatarArtComponent}
    </AvatarBase>
  );
};
