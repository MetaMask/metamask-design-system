import {
  AccountAvatarSize,
  AccountAvatarVariant,
  AvatarBaseShape,
} from '@metamask/design-system-shared';
import React from 'react';

import { resolveAccountAvatarBadge } from '../Avatar';
import { AvatarBase } from '../AvatarBase';
import { Blockies } from '../temp-components/Blockies';
import { Jazzicon } from '../temp-components/Jazzicon';
import { Polyicon } from '../temp-components/Polyicon';

import { MAP_AVATARACCOUNT_SIZE_SIZENUMBER } from './AccountAvatar.constants';
import type { AccountAvatarProps } from './AccountAvatar.types';

export const AccountAvatar = ({
  address,
  variant = AccountAvatarVariant.Jazzicon,
  size = AccountAvatarSize.Md,
  blockiesProps,
  jazziconProps,
  polyiconProps,
  maskiconProps,
  networkBadge,
  ...props
}: AccountAvatarProps) => {
  const artSize = MAP_AVATARACCOUNT_SIZE_SIZENUMBER[size];
  const resolvedPolyiconProps = polyiconProps ?? maskiconProps;
  let avatarArt;

  switch (variant) {
    case AccountAvatarVariant.Blockies:
      avatarArt = (
        <Blockies address={address} size={artSize} {...blockiesProps} />
      );
      break;
    case AccountAvatarVariant.Polyicon:
    case AccountAvatarVariant.Maskicon:
      avatarArt = (
        <Polyicon address={address} size={artSize} {...resolvedPolyiconProps} />
      );
      break;
    case AccountAvatarVariant.Jazzicon:
    default:
      avatarArt = (
        <Jazzicon address={address} size={artSize} {...jazziconProps} />
      );
      break;
  }

  const resolved = resolveAccountAvatarBadge({ networkBadge });

  return (
    <AvatarBase
      size={size}
      shape={AvatarBaseShape.Square}
      accessibilityRole="image"
      badge={resolved?.badge}
      position={resolved?.position}
      {...props}
    >
      {avatarArt}
    </AvatarBase>
  );
};

/** @deprecated Use AccountAvatar */
export const AvatarAccount = AccountAvatar;
