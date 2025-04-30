import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useCallback } from 'react';
import { View } from 'react-native';

import { AvatarGroupSize, AvatarGroupVariant } from '../../types';
import AvatarAccount, { AvatarAccountProps } from '../AvatarAccount';
import AvatarBase, { AvatarBaseShape } from '../AvatarBase';
import AvatarFavicon, { AvatarFaviconProps } from '../AvatarFavicon';
import AvatarNetwork, { AvatarNetworkProps } from '../AvatarNetwork';
import AvatarToken, { AvatarTokenProps } from '../AvatarToken';
import Text, { TextColor } from '../Text';
import {
  MAP_AVATARGROUP_SIZE_OVERFLOWTEXT_TEXTVARIANT,
  TWCLASSMAP_AVATARGROUP_SIZE_SPACEBETWEENAVATARS,
} from './AvatarGroup.constants';
import { AvatarGroupProps } from './AvatarGroup.types';

const AvatarGroup = ({
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
  const twContainerClassNames = `
    ${isReverse ? 'flex-row-reverse' : 'flex-row'}
    ${TWCLASSMAP_AVATARGROUP_SIZE_SPACEBETWEENAVATARS[size]}
  `;

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
              `Invalid Avatar Variant: ${variant}. Expected one of: ${Object.values(AvatarGroupVariant).join(', ')}`,
            );
        }
      }),
    [avatarPropsArr, max, size, tw],
  );

  return (
    <View style={[tw`${twContainerClassNames}`, style]} {...props}>
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

export default AvatarGroup;
