import React, { useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { useTailwind } from '@metamask/design-system-twrnc-preset';

import { AvatarGroupSize, AvatarGroupVariant } from '../../types';
import AvatarAccount, { AvatarAccountProps } from '../AvatarAccount';
import AvatarFavicon, { AvatarFaviconProps } from '../AvatarFavicon';
import AvatarNetwork, { AvatarNetworkProps } from '../AvatarNetwork';
import AvatarToken, { AvatarTokenProps } from '../AvatarToken';
import Text, { TextColor } from '../Text';
import { MAP_AVATARGROUP_SIZE_OVERFLOWTEXT_TEXTVARIANT } from './AvatarGroup.constants';
import { AvatarGroupProps } from './AvatarGroup.types';
import {
  generateAvatarGroupContainerClassNames,
  generateAvatarGroupOverflowTextContainerClassNames,
} from './AvatarGroup.utilities';

const AvatarGroup = ({
  variant,
  avatarPropsArr,
  size = AvatarGroupSize.Md,
  max = 4,
  isReverse = false,
  style,
  twClassName,
  ...props
}: AvatarGroupProps) => {
  const tw = useTailwind();
  const overflowCounter = avatarPropsArr.length - max;
  const shouldRenderOverflowCounter = overflowCounter > 0;
  const twContainerClassNames = useMemo(() => {
    return generateAvatarGroupContainerClassNames({
      size,
      isReverse,
      twClassName,
    });
  }, [size, isReverse, twClassName]);
  const twOverflowTextContainerClassNames = useMemo(() => {
    return generateAvatarGroupOverflowTextContainerClassNames({
      size,
      variant,
    });
  }, [size, variant]);

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
                testID={`avatar-${variant}`}
                hasBorder
                hasSolidBackgroundColor
              />
            );
          case AvatarGroupVariant.Favicon:
            return (
              <AvatarFavicon
                key={`avatar-${index}`}
                {...(avatarProps as AvatarFaviconProps)}
                size={size}
                testID={`avatar-${variant}`}
                hasBorder
                hasSolidBackgroundColor
              />
            );
          case AvatarGroupVariant.Network:
            return (
              <AvatarNetwork
                key={`avatar-${index}`}
                {...(avatarProps as AvatarNetworkProps)}
                size={size}
                testID={`avatar-${variant}`}
                hasBorder
                hasSolidBackgroundColor
              />
            );
          case AvatarGroupVariant.Token:
            return (
              <AvatarToken
                key={`avatar-${index}`}
                {...(avatarProps as AvatarTokenProps)}
                size={size}
                testID={`avatar-${variant}`}
                hasBorder
                hasSolidBackgroundColor
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
        <View style={tw`${twOverflowTextContainerClassNames}`}>
          <Text
            variant={MAP_AVATARGROUP_SIZE_OVERFLOWTEXT_TEXTVARIANT[size]}
            color={TextColor.PrimaryInverse}
            testID="avatar-overflow-text"
          >{`+${overflowCounter}`}</Text>
        </View>
      )}
    </View>
  );
};

export default AvatarGroup;
