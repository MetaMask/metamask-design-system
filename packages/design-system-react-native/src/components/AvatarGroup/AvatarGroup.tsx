import {
  AvatarBaseShape,
  AvatarGroupSize,
  AvatarGroupVariant,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useCallback } from 'react';
import { View } from 'react-native';

import type { AccountAvatarProps } from '../AccountAvatar';
import { AccountAvatar } from '../AccountAvatar';
import { AvatarBase } from '../AvatarBase';
import { FontWeight, Text, TextColor, TextVariant } from '../Text';
import type { FaviconAvatarProps } from '../FaviconAvatar';
import { FaviconAvatar } from '../FaviconAvatar';
import type { NetworkAvatarProps } from '../NetworkAvatar';
import { NetworkAvatar } from '../NetworkAvatar';
import type { TokenAvatarProps } from '../TokenAvatar';
import { TokenAvatar } from '../TokenAvatar';

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
              <AccountAvatar
                key={`avatar-${index}`}
                {...(avatarProps as AccountAvatarProps)}
                size={size}
                hasBorder
              />
            );
          case AvatarGroupVariant.Favicon:
            return (
              <FaviconAvatar
                key={`avatar-${index}`}
                {...(avatarProps as FaviconAvatarProps)}
                size={size}
                hasBorder
              />
            );
          case AvatarGroupVariant.Network:
            return (
              <NetworkAvatar
                key={`avatar-${index}`}
                {...(avatarProps as NetworkAvatarProps)}
                size={size}
                hasBorder
              />
            );
          case AvatarGroupVariant.Token:
            return (
              <TokenAvatar
                key={`avatar-${index}`}
                {...(avatarProps as TokenAvatarProps)}
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
          size={size}
          shape={
            variant === AvatarGroupVariant.Network
              ? AvatarBaseShape.Square
              : AvatarBaseShape.Circle
          }
          {...overflowTextProps}
        >
          <Text
            variant={MAP_AVATARGROUP_SIZE_OVERFLOWTEXT_TEXTVARIANT[size]}
            color={TextColor.PrimaryInverse}
            fontWeight={FontWeight.Medium}
          >
            {`+${overflowCounter}`}
          </Text>
        </AvatarBase>
      )}
    </View>
  );
};
