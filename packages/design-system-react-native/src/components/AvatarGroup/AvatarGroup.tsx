import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useCallback } from 'react';
import { View } from 'react-native';

import { AvatarGroupSize, AvatarGroupVariant } from '../../types';
import type { AvatarAccountProps } from '../AvatarAccount';
import { AvatarAccount } from '../AvatarAccount';
import { AvatarBase, AvatarBaseShape } from '../AvatarBase';
import type { AvatarFaviconProps } from '../AvatarFavicon';
import { AvatarFavicon } from '../AvatarFavicon';
import type { AvatarNetworkProps } from '../AvatarNetwork';
import { AvatarNetwork } from '../AvatarNetwork';
import type { AvatarTokenProps } from '../AvatarToken';
import { AvatarToken } from '../AvatarToken';
import { TextColor } from '../Text';

import {
  MAP_AVATARGROUP_SIZE_OVERFLOWTEXT_TEXTVARIANT,
  TWCLASSMAP_AVATARGROUP_SIZE_SPACEBETWEENAVATARS,
} from './AvatarGroup.constants';
import type { AvatarGroupProps } from './AvatarGroup.types';

export const AvatarGroup = ({
  variant,
  avatarPropsArr,
  size = AvatarGroupSize.Md,
  max = 4,
  isReverse = false,
  overflowTextProps,
  style,
  twClassName = '',
  ...props
}: AvatarGroupProps) => {
  const tw = useTailwind();
  const overflowCounter = avatarPropsArr.length - max;
  const shouldRenderOverflowCounter = overflowCounter > 0;
  const twContainerClassNames = `
    ${isReverse ? 'flex-row-reverse' : 'flex-row'}
    ${TWCLASSMAP_AVATARGROUP_SIZE_SPACEBETWEENAVATARS[size]}
    ${twClassName}
  `.trim();

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
    <View {...props} style={[tw`${twContainerClassNames}`, style]}>
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
