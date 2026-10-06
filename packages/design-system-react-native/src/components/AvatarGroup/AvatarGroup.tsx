import {
  AvatarBaseShape,
  AvatarGroupSize,
  AvatarGroupVariant,
  TextColor,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useCallback } from 'react';
import { View } from 'react-native';

import type { AvatarAccountProps } from '../AvatarAccount/index.js';
import { AvatarAccount } from '../AvatarAccount/index.js';
import { AvatarBase } from '../AvatarBase/index.js';
import type { AvatarFaviconProps } from '../AvatarFavicon/index.js';
import { AvatarFavicon } from '../AvatarFavicon/index.js';
import type { AvatarNetworkProps } from '../AvatarNetwork/index.js';
import { AvatarNetwork } from '../AvatarNetwork/index.js';
import type { AvatarTokenProps } from '../AvatarToken/index.js';
import { AvatarToken } from '../AvatarToken/index.js';

import {
  MAP_AVATARGROUP_SIZE_OVERFLOWTEXT_TEXTVARIANT,
  TWCLASSMAP_AVATARGROUP_SIZE_SPACEBETWEENAVATARS,
} from './AvatarGroup.constants.js';
import type { AvatarGroupProps } from './AvatarGroup.types.js';

export const AvatarGroup = ({
  variant,
  avatarPropsArr,
  size = AvatarGroupSize.Md,
  max = 4,
  isReverse = false,
  overflowTextProps,
  style,
  twClassName,
  ...props
}: AvatarGroupProps) => {
  const tw = useTailwind();
  const overflowCounter = avatarPropsArr.length - max;
  const shouldRenderOverflowCounter = overflowCounter > 0;

  const renderAvatarList = useCallback(
    () =>
      avatarPropsArr.slice(0, max).map((avatarProps, index) => {
        switch (variant) {
          case AvatarGroupVariant.Account:
            return (
              <AvatarAccount
                key={`avatar-${index}`}
                {...(avatarProps as AvatarAccountProps)}
                size={size}
                hasBorder
              />
            );
          case AvatarGroupVariant.Favicon:
            return (
              <AvatarFavicon
                key={`avatar-${index}`}
                {...(avatarProps as AvatarFaviconProps)}
                size={size}
                hasBorder
              />
            );
          case AvatarGroupVariant.Network:
            return (
              <AvatarNetwork
                key={`avatar-${index}`}
                {...(avatarProps as AvatarNetworkProps)}
                size={size}
                hasBorder
              />
            );
          case AvatarGroupVariant.Token:
            return (
              <AvatarToken
                key={`avatar-${index}`}
                {...(avatarProps as AvatarTokenProps)}
                size={size}
                hasBorder
              />
            );
          default:
            throw new Error(
              `Invalid Avatar Variant: ${String(variant)}. Expected one of: ${Object.values(AvatarGroupVariant).join(', ')}`,
            );
        }
      }),
    [avatarPropsArr, max, size, variant],
  );

  return (
    <View
      {...props}
      style={[
        tw.style(
          isReverse ? 'flex-row-reverse' : 'flex-row',
          TWCLASSMAP_AVATARGROUP_SIZE_SPACEBETWEENAVATARS[size],
          twClassName,
        ),
        style,
      ]}
    >
      {renderAvatarList()}
      {shouldRenderOverflowCounter && (
        <AvatarBase
          twClassName="bg-icon-default"
          hasBorder
          fallbackText={`+${overflowCounter}`}
          fallbackTextProps={{
            variant: MAP_AVATARGROUP_SIZE_OVERFLOWTEXT_TEXTVARIANT[size],
            color: TextColor.PrimaryInverse,
          }}
          size={size}
          shape={
            variant === AvatarGroupVariant.Network
              ? AvatarBaseShape.Square
              : AvatarBaseShape.Circle
          }
          {...overflowTextProps}
        />
      )}
    </View>
  );
};
