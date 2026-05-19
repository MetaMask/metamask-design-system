import React from 'react';

import { AvatarIcon } from './variants/AvatarIcon';
import { AvatarImageOrSvg } from './variants/AvatarImageOrSvg';
import { AvatarInitials } from './variants/AvatarInitials';

import type { AvatarProps } from './Avatar.types';

export const Avatar = (props: AvatarProps) => {
  switch (props.variant) {
    case 'imageOrSvg':
      return <AvatarImageOrSvg {...props} />;
    case 'icon':
      return <AvatarIcon {...props} />;
    case 'initials':
      return <AvatarInitials {...props} />;
    default: {
      const exhaustiveCheck: never = props;
      throw new Error(
        `Invalid Avatar variant: ${String((exhaustiveCheck as AvatarProps).variant)}`,
      );
    }
  }
};
