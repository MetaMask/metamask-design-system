/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import React from 'react';

import AvatarBase from '../../primitives/AvatarBase';
import Jazzicon from '../../primitives/Jazzicon';
import Blockies from '../../primitives/Blockies';
import { DEFAULT_AVATARACCOUNT_PROPS } from './AvatarAccount.constants';
import type { AvatarAccountProps } from './AvatarAccount.types';
import { AvatarAccountVariant } from './AvatarAccount.types';

const AvatarAccount = ({
  address,
  variant = DEFAULT_AVATARACCOUNT_PROPS.variant,
  size = DEFAULT_AVATARACCOUNT_PROPS.size,
  shape = DEFAULT_AVATARACCOUNT_PROPS.shape,
  ...props
}: AvatarAccountProps) => {
  let AvatarArtComponent;

  switch (variant) {
    case AvatarAccountVariant.Blockies:
      AvatarArtComponent = (
        <Blockies address={address} size={Number(size)} testID="blockies" />
      );
      break;
    case AvatarAccountVariant.Jazzicon:
    default:
      AvatarArtComponent = (
        <Jazzicon address={address} size={Number(size)} testID="jazzicon" />
      );
      break;
  }

  return (
    <AvatarBase size={size} shape={shape} accessibilityRole="image" {...props}>
      {AvatarArtComponent}
    </AvatarBase>
  );
};

export default AvatarAccount;
