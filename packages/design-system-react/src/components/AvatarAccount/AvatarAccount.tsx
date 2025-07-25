import React, { forwardRef } from 'react';
import { AVATAR_ACCOUNT_SIZE_TO_PIXELS } from '@metamask/design-system-shared';

import {
  AvatarAccountVariant,
  AvatarAccountSize,
  AvatarBaseShape,
} from '../../types';
import { AvatarBase } from '../AvatarBase';
import { Blockies } from '../temp-components/Blockies';
import { Jazzicon } from '../temp-components/Jazzicon';
import { Maskicon } from '../temp-components/Maskicon';

import type { AvatarAccountProps } from './AvatarAccount.types';

export const AvatarAccount = forwardRef<HTMLDivElement, AvatarAccountProps>(
  (
    {
      address,
      variant = AvatarAccountVariant.Jazzicon,
      className,
      size = AvatarAccountSize.Md,
      blockiesProps,
      jazziconProps,
      maskiconProps,
      ...props
    },
    ref,
  ) => {
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
        ref={ref}
        shape={AvatarBaseShape.Circle}
        size={size}
        className={className}
        {...props}
      >
        {AvatarArtComponent}
      </AvatarBase>
    );
  },
);

AvatarAccount.displayName = 'AvatarAccount';
