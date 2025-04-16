import React, { useCallback } from 'react';

import { AvatarGroupSize, AvatarGroupVariant } from '../../types';
import { twMerge } from '../../utils/tw-merge';
import { AvatarAccount, AvatarAccountProps } from '../AvatarAccount';
import { AvatarBaseSize } from '../AvatarBase';
import { TWCLASSMAP_AVATARBASE_SIZE_BORDER } from '../AvatarBase/AvatarBase.constants';
import { AvatarFavicon, AvatarFaviconProps } from '../AvatarFavicon';
import { AvatarNetwork, AvatarNetworkProps } from '../AvatarNetwork';
import { AvatarToken, AvatarTokenProps } from '../AvatarToken';
import { Text, TextColor } from '../Text';
import {
  AVATAR_GROUP_SIZE_CLASS_MAP,
  AVATAR_GROUP_SIZE_ISREVERSE_NEGATIVESPACEBETWEENAVATARS_MAP,
  AVATAR_GROUP_SIZE_NEGATIVESPACEBETWEENAVATARS_MAP,
  AVATAR_GROUP_SIZE_OVERFLOWTEXT_TEXTVARIANT_MAP,
  AVATAR_GROUP_SQUARE_BORDER_RADIUS_MAP,
} from './AvatarGroup.constants';
import { AvatarGroupProps } from './AvatarGroup.types';

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
    const negativeSpaceBetweenAvatarsTwClassName = isReverse
      ? AVATAR_GROUP_SIZE_ISREVERSE_NEGATIVESPACEBETWEENAVATARS_MAP[size]
      : AVATAR_GROUP_SIZE_NEGATIVESPACEBETWEENAVATARS_MAP[size];
    const containerClassNames = twMerge(
      // Base style
      'inline-flex',
      // Reverse style
      isReverse ? 'flex-row-reverse' : 'flex-row',
      className,
    );
    const avatarListContainerClassNames = twMerge(
      // Base style
      'flex',
      // Reverse style
      isReverse ? 'flex-row-reverse' : 'flex-row',
    );
    const overflowTextContainerClassNames = twMerge(
      // Base style
      'flex bg-icon-default items-center justify-center overflow-hidden',
      // Size
      `${AVATAR_GROUP_SIZE_CLASS_MAP[size]}`,
      // Border radius
      variant === AvatarGroupVariant.Network
        ? AVATAR_GROUP_SQUARE_BORDER_RADIUS_MAP[size]
        : 'rounded-full',
      // Border
      TWCLASSMAP_AVATARBASE_SIZE_BORDER[size],
      // Negative spacing
      negativeSpaceBetweenAvatarsTwClassName,
    );

    const renderAvatarList = useCallback(
      () =>
        avatarPropsArr.slice(0, max).map((avatarProps, index) => {
          switch (variant) {
            case AvatarGroupVariant.Account:
              return (
                <AvatarAccount
                  hasBorder
                  key={`avatar-${index}`}
                  {...(avatarProps as AvatarAccountProps)}
                  size={size as unknown as AvatarBaseSize}
                  className={`${index > 0 && negativeSpaceBetweenAvatarsTwClassName} ${avatarProps.className}`}
                  style={{
                    zIndex: index + 1,
                    ...avatarProps.style,
                  }}
                  data-testid={`avatar-${variant}`}
                />
              );
            case AvatarGroupVariant.Favicon:
              return (
                <AvatarFavicon
                  hasBorder
                  key={`avatar-${index}`}
                  {...(avatarProps as AvatarFaviconProps)}
                  size={size as unknown as AvatarBaseSize}
                  className={`${index > 0 && negativeSpaceBetweenAvatarsTwClassName} ${avatarProps.className}`}
                  style={{
                    zIndex: index + 1,
                    ...avatarProps.style,
                  }}
                  data-testid={`avatar-${variant}`}
                />
              );
            case AvatarGroupVariant.Network:
              return (
                <AvatarNetwork
                  hasBorder
                  key={`avatar-${index}`}
                  {...(avatarProps as AvatarNetworkProps)}
                  size={size as unknown as AvatarBaseSize}
                  className={`${index > 0 && negativeSpaceBetweenAvatarsTwClassName} ${avatarProps.className}`}
                  style={{
                    zIndex: index + 1,
                    ...avatarProps.style,
                  }}
                  data-testid={`avatar-${variant}`}
                />
              );
            case AvatarGroupVariant.Token:
              return (
                <AvatarToken
                  hasBorder
                  key={`avatar-${index}`}
                  {...(avatarProps as AvatarTokenProps)}
                  size={size as unknown as AvatarBaseSize}
                  className={`${index > 0 && negativeSpaceBetweenAvatarsTwClassName} ${avatarProps.className}`}
                  style={{
                    zIndex: index + 1,
                    ...avatarProps.style,
                  }}
                  data-testid={`avatar-${variant}`}
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
        <div className={avatarListContainerClassNames}>
          {renderAvatarList()}
        </div>
        {shouldRenderOverflowCounter && (
          <div
            className={overflowTextContainerClassNames}
            style={{
              zIndex: avatarPropsArr.length,
            }}
          >
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
