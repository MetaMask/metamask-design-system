import React, { useCallback, useMemo } from 'react';

import { twMerge } from '../../utils/tw-merge';

import { AvatarBaseSize } from '../avatar-base';
import { AvatarFavicon, AvatarFaviconProps } from '../avatar-favicon';
import { AvatarNetwork, AvatarNetworkProps } from '../avatar-network';
import { AvatarToken, AvatarTokenProps } from '../avatar-token';
import { Text, TextColor } from '../text';
import {
  AVATAR_GROUP_SIZE_CLASS_MAP,
  AVATAR_GROUP_SIZE_NEGATIVESPACEBETWEENAVATARS_MAP,
  AVATAR_GROUP_SIZE_OVERFLOWTEXT_TEXTVARIANT_MAP,
  AVATAR_GROUP_SQUARE_BORDER_RADIUS_MAP,
} from './AvatarGroup.constants';
import {
  AvatarGroupProps,
  AvatarGroupVariant,
  AvatarGroupSize,
} from './AvatarGroup.types';

export const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    {
      variant,
      avatarPropsArr,
      size = AvatarGroupSize.Md,
      max = 4,
      isReverse = false,
      style,
      className,
      ...props
    },
    ref,
  ) => {
    const overflowCounter = avatarPropsArr.length - max;
    const shouldRenderOverflowCounter = overflowCounter > 0;
    const containerClassNames = twMerge(
      'flex',
      isReverse ? 'flex-row-reverse' : 'flex-row',
      `-ml-[${AVATAR_GROUP_SIZE_NEGATIVESPACEBETWEENAVATARS_MAP[size]}px]`,
      className,
    );
    const twOverflowTextContainerClassNames = twMerge(
      'flex',
      'bg-icon-default items-center justify-center overflow-hidden',
      `${AVATAR_GROUP_SIZE_CLASS_MAP[size]}`,
      variant === AvatarGroupVariant.Network
        ? AVATAR_GROUP_SQUARE_BORDER_RADIUS_MAP[size]
        : 'rounded-full',
    );

    const renderAvatarList = useCallback(
      () =>
        avatarPropsArr.slice(0, max).map((avatarProps, index) => {
          switch (variant) {
            case AvatarGroupVariant.Favicon:
              return (
                <AvatarFavicon
                  key={`avatar-${index}`}
                  {...(avatarProps as AvatarFaviconProps)}
                  size={size as unknown as AvatarBaseSize}
                  data-testid={`avatar-${variant}`}
                  className={`ml-[${AVATAR_GROUP_SIZE_NEGATIVESPACEBETWEENAVATARS_MAP[size]}px]`}
                />
              );
            case AvatarGroupVariant.Network:
              return (
                <AvatarNetwork
                  key={`avatar-${index}`}
                  {...(avatarProps as AvatarNetworkProps)}
                  size={size as unknown as AvatarBaseSize}
                  data-testid={`avatar-${variant}`}
                  className={`ml-[${AVATAR_GROUP_SIZE_NEGATIVESPACEBETWEENAVATARS_MAP[size]}px]`}
                />
              );
            case AvatarGroupVariant.Token:
              return (
                <AvatarToken
                  key={`avatar-${index}`}
                  {...(avatarProps as AvatarTokenProps)}
                  size={size as unknown as AvatarBaseSize}
                  data-testid={`avatar-${variant}`}
                  className={`ml-[${AVATAR_GROUP_SIZE_NEGATIVESPACEBETWEENAVATARS_MAP[size]}px]`}
                />
              );
            default:
              throw new Error(
                `Invalid Avatar Variant: ${variant}. Expected one of: ${Object.values(AvatarGroupVariant).join(', ')}`,
              );
          }
        }),
      [avatarPropsArr, max, size],
    );

    return (
      <div ref={ref} {...props} style={style} className={containerClassNames}>
        {renderAvatarList()}
        {shouldRenderOverflowCounter && (
          <div className={twOverflowTextContainerClassNames}>
            <Text
              variant={AVATAR_GROUP_SIZE_OVERFLOWTEXT_TEXTVARIANT_MAP[size]}
              color={TextColor.PrimaryInverse}
              data-testid="avatar-overflow-text"
            >{`+${overflowCounter}`}</Text>
          </div>
        )}
      </div>
    );
  },
);
