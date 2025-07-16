import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { View } from 'react-native';

import { AvatarBaseSize, AvatarBaseShape } from '../../types';
import { Text, TextColor, TextVariant, FontWeight } from '../Text';

import {
  TWCLASSMAP_AVATARBASE_SIZE_DIMENSION,
  TWCLASSMAP_AVATARBASE_HASBORDER_SIZE_DIMENSION,
  TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_SQUARE,
  TWCLASSMAP_AVATARBASE_SIZE_BORDER,
} from './AvatarBase.constants';
import type { AvatarBaseProps } from './AvatarBase.types';

export const AvatarBase = ({
  children,
  size = AvatarBaseSize.Md,
  shape = AvatarBaseShape.Circle,
  fallbackText,
  fallbackTextProps,
  hasBorder = false,
  twClassName = '',
  style,
  ...props
}: AvatarBaseProps) => {
  const tw = useTailwind();

  return (
    <View 
      style={[
        tw`items-center justify-center overflow-hidden bg-section ${
          shape === AvatarBaseShape.Circle
            ? 'rounded-full'
            : TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_SQUARE[size]
        } ${hasBorder ? TWCLASSMAP_AVATARBASE_HASBORDER_SIZE_DIMENSION[size] : TWCLASSMAP_AVATARBASE_SIZE_DIMENSION[size]} ${hasBorder ? TWCLASSMAP_AVATARBASE_SIZE_BORDER[size] : ''} ${twClassName}`,
        style
      ]} 
      {...props}
    >
      {fallbackText ? (
        <Text
          color={TextColor.TextMuted}
          variant={TextVariant.BodySm}
          fontWeight={FontWeight.Medium}
          {...fallbackTextProps}
          twClassName={`uppercase ${fallbackTextProps?.twClassName ?? ''}`.trim()}
        >
          {fallbackText}
        </Text>
      ) : (
        children
      )}
    </View>
  );
};
