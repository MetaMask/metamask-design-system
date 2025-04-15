import React from 'react';

import {
  AvatarAccountVariant,
  AvatarAccountSize,
  AvatarBaseShape,
} from '../../types';
import { AvatarBase } from '../avatar-base';
import { Jazzicon } from '../jazzicon';
import { Blockies } from '../blockies';
import type { AvatarAccountProps } from './AvatarAccount.types';
import { MAP_AVATARACCOUNT_SIZE_SIZENUMBER } from './AvatarAccount.constants';

export const AvatarAccount = React.forwardRef<
  HTMLDivElement,
  AvatarAccountProps
>(
  (
    {
      address,
      variant = AvatarAccountVariant.Jazzicon,
      className,
      size = AvatarAccountSize.Md,
      blockiesProps,
      jazziconProps,
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
            size={MAP_AVATARACCOUNT_SIZE_SIZENUMBER[size]}
            {...blockiesProps}
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
