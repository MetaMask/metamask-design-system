/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import React from 'react';
import JazzIcon from 'react-native-jazzicon';

import AvatarBase from '../../primitives/AvatarBase';
import { DEFAULT_AVATARACCOUNTJAZZICON_PROPS } from './AvatarAccountJazzicon.constants';
import type { AvatarAccountJazziconProps } from './AvatarAccountJazzicon.types';

const AvatarAccountJazzicon = ({
  size = DEFAULT_AVATARACCOUNTJAZZICON_PROPS.size,
  shape = DEFAULT_AVATARACCOUNTJAZZICON_PROPS.shape,
  address,
  ...props
}: AvatarAccountJazziconProps) => {
  return (
    <AvatarBase size={size} shape={shape} {...props}>
      <JazzIcon size={Number(size)} address={address} />
    </AvatarBase>
  );
};

export default AvatarAccountJazzicon;
