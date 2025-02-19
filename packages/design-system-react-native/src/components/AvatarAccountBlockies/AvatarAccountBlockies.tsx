/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import React, { useState, useEffect } from 'react';
import { SvgXml } from 'react-native-svg';

import AvatarBase from '../../primitives/AvatarBase';
import { DEFAULT_AVATARACCOUNTBLOCKIES_PROPS } from './AvatarAccountBlockies.constants';
import type { AvatarAccountBlockiesProps } from './AvatarAccountBlockies.types';

const AvatarAccountBlockies = ({
  size = DEFAULT_AVATARACCOUNTBLOCKIES_PROPS.size,
  shape = DEFAULT_AVATARACCOUNTBLOCKIES_PROPS.shape,
  address,
  ...props
}: AvatarAccountBlockiesProps) => {
  return (
    <AvatarBase size={size} shape={shape} {...props}>
      <JazzIcon size={Number(size)} address={address} />
    </AvatarBase>
  );
};

export default AvatarAccountBlockies;
