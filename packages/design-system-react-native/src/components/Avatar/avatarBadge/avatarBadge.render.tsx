import {
  AvatarBaseSize,
  AvatarBaseShape,
  type AvatarBadge,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { View } from 'react-native';
import type { StyleProp, ViewProps, ViewStyle } from 'react-native';

import { BadgeIcon } from '../../BadgeIcon';
import { BadgeStatus } from '../../BadgeStatus';
import { ImageOrSvg } from '../../temp-components/ImageOrSvg';
import type { ImageOrSvgSrc } from '../../temp-components/ImageOrSvg';

import {
  TWCLASSMAP_AVATARBASE_SIZE_DIMENSION,
  TWCLASSMAP_AVATARBASE_HASBORDER_SIZE_DIMENSION,
  TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_SQUARE,
  TWCLASSMAP_AVATARBASE_SIZE_BORDER,
} from '../../AvatarBase/AvatarBase.constants';

type AvatarBadgeContainerProps = ViewProps & {
  size?: AvatarBaseSize;
  shape?: AvatarBaseShape;
  hasBorder?: boolean;
  twClassName?: string;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

const AvatarBadgeContainer = ({
  children,
  size = AvatarBaseSize.Md,
  shape = AvatarBaseShape.Circle,
  hasBorder = false,
  twClassName,
  style,
}: AvatarBadgeContainerProps) => {
  const tw = useTailwind();

  return (
    <View
      style={[
        tw.style(
          'items-center justify-center overflow-hidden bg-section',
          shape === AvatarBaseShape.Circle
            ? 'rounded-full'
            : TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_SQUARE[size],
          hasBorder
            ? TWCLASSMAP_AVATARBASE_HASBORDER_SIZE_DIMENSION[size]
            : TWCLASSMAP_AVATARBASE_SIZE_DIMENSION[size],
          hasBorder && TWCLASSMAP_AVATARBASE_SIZE_BORDER[size],
          twClassName,
        ),
        style,
      ]}
    >
      {children}
    </View>
  );
};

export const renderAvatarBadge = (badge: AvatarBadge): React.ReactNode => {
  switch (badge.type) {
    case 'network':
      return (
        <AvatarBadgeContainer
          size={AvatarBaseSize.Xs}
          shape={AvatarBaseShape.Square}
          hasBorder
        >
          {badge.src ? (
            <ImageOrSvg
              src={badge.src as ImageOrSvgSrc}
              width="100%"
              height="100%"
              imageProps={{ resizeMode: 'contain' }}
            />
          ) : null}
        </AvatarBadgeContainer>
      );
    case 'status':
      return <BadgeStatus status={badge.status} />;
    case 'icon':
      return <BadgeIcon iconName={badge.iconName} />;
    case 'custom':
      return badge.element;
    default:
      return null;
  }
};
