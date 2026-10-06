import {
  AvatarAccountSize,
  AvatarAccountVariant,
  AvatarBaseShape,
} from '@metamask/design-system-shared';
import React from 'react';

import { AvatarBase } from '../AvatarBase/index.js';
import { Blockies } from '../temp-components/Blockies/index.js';
import { Jazzicon } from '../temp-components/Jazzicon/index.js';
import { Maskicon } from '../temp-components/Maskicon/index.js';

import { MAP_AVATARACCOUNT_SIZE_SIZENUMBER } from './AvatarAccount.constants.js';
import type { AvatarAccountProps } from './AvatarAccount.types.js';

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
          size={MAP_AVATARACCOUNT_SIZE_SIZENUMBER[size]}
          {...blockiesProps}
        />
      );
      break;
    case AvatarAccountVariant.Maskicon:
      AvatarArtComponent = (
        <Maskicon
          address={address}
          size={MAP_AVATARACCOUNT_SIZE_SIZENUMBER[size]}
          {...maskiconProps}
        />
      );
      break;
    case AvatarAccountVariant.Jazzicon:
    default:
      AvatarArtComponent = (
        <Jazzicon
          address={address}
          size={MAP_AVATARACCOUNT_SIZE_SIZENUMBER[size]}
          {...jazziconProps}
        />
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
