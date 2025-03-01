import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useTailwind } from '@metamask/design-system-twrnc-preset';

import AvatarFavicon, { AvatarFaviconProps } from '../AvatarFavicon';
import AvatarIcon, { AvatarIconProps } from '../AvatarIcon';
import Text, { TextColor } from '../Text';
import {
  MAP_AVATARGROUP_SIZE_SPACEBETWEENAVATARS,
  MAP_AVATARGROUP_SIZE_OVERFLOWTEXT_TEXTVARIANT,
  DEFAULT_AVATARGROUP_PROPS,
} from './AvatarGroup.constants';
import { AvatarGroupProps, AvatarGroupVariant } from './AvatarGroup.types';

const AvatarGroup = ({
  variant,
  avatarPropsArr,
  size = DEFAULT_AVATARGROUP_PROPS.size,
  max = DEFAULT_AVATARGROUP_PROPS.max,
  isReverse = DEFAULT_AVATARGROUP_PROPS.isReverse,
  style,
  twClassName,
  ...props
}: AvatarGroupProps) => {
  const tw = useTailwind();
  const overflowCounter = avatarPropsArr.length - max;
  const avatarNegativeSpacing = MAP_AVATARGROUP_SIZE_SPACEBETWEENAVATARS[size];
  const shouldRenderOverflowCounter = overflowCounter > 0;

  const renderAvatarList = useCallback(
    () =>
      avatarPropsArr.slice(0, max).map((avatarProps, index) => {
        const marginLeft = index === 0 ? 0 : avatarNegativeSpacing;
        switch (variant) {
          case AvatarGroupVariant.Favicon:
            return (
              <AvatarFavicon
                key={`avatar-${index}`}
                {...(avatarProps as AvatarFaviconProps)}
                size={size}
                testID={`avatar-${variant}`}
              />
            );
          case AvatarGroupVariant.Icon:
            return (
              <AvatarIcon
                key={`avatar-${index}`}
                {...(avatarProps as AvatarIconProps)}
                size={size}
                testID={`avatar-${variant}`}
              />
            );
          default:
            throw new Error(
              `Invalid Avatar Variant: ${variant}. Expected one of: ${Object.values(AvatarGroupVariant).join(', ')}`,
            );
        }
      }),
    [avatarPropsArr, avatarNegativeSpacing, max, size],
  );

  return (
    <View
      style={[
        tw`${isReverse ? 'flex-row-reverse' : 'flex-row'} ${twClassName as string} gap-[${avatarNegativeSpacing}px]`,
        style,
      ]}
      {...props}
    >
      {renderAvatarList()}
      {shouldRenderOverflowCounter && (
        <View
          style={tw`w-[${size}px] h-[${size}px] bg-icon-default rounded-full items-center justify-center`}
        >
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
