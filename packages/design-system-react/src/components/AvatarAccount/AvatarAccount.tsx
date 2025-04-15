import React from 'react';

import { AvatarAccountVariant } from '../../types';
import { AvatarBase, AvatarBaseShape, AvatarBaseSize } from '../AvatarBase';
import { Jazzicon } from '../temp-components/Jazzicon';
import { Blockies } from '../temp-components/Blockies';
import { MAP_AVATARACCOUNT_SIZE_SIZENUMBER } from './AvatarAccount.constants';
import type { AvatarAccountProps } from './AvatarAccount.types';

export const AvatarAccount = React.forwardRef<
  HTMLDivElement,
  AvatarAccountProps
>(
  (
    {
      address,
      variant = AvatarAccountVariant.Jazzicon,
      className,
      size = AvatarBaseSize.Md,
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
        size={size as AvatarBaseSize}
        className={className}
        {...props}
      >
        {AvatarArtComponent}
      </AvatarBase>
    );
  },
);

AvatarAccount.displayName = 'AvatarAccount';
