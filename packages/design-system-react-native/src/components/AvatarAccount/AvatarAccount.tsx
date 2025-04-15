/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import React from 'react';

import {
  AvatarAccountSize,
  AvatarBaseShape,
  AvatarAccountVariant,
} from '../../types';
import Jazzicon from '../temp-components/Jazzicon';
import Blockies from '../temp-components/Blockies';
import AvatarBase from '../AvatarBase';
import type { AvatarAccountProps } from './AvatarAccount.types';

const AvatarAccount = ({
  address,
  variant = AvatarAccountVariant.Jazzicon,
  size = AvatarAccountSize.Md,
  shape = AvatarBaseShape.Circle,
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
