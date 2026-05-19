import {
  AvatarBaseSize,
  AvatarBaseShape,
  BadgeWrapperPosition,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { View } from 'react-native';
import type { StyleProp, ViewProps, ViewStyle } from 'react-native';

import { BadgeWrapper } from '../BadgeWrapper';
import {
  getPositionAnchorShape,
  renderAvatarBadge,
} from '../Avatar/avatarBadge';

import {
  TWCLASSMAP_AVATARBASE_SIZE_DIMENSION,
  TWCLASSMAP_AVATARBASE_HASBORDER_SIZE_DIMENSION,
  TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_SQUARE,
  TWCLASSMAP_AVATARBASE_SIZE_BORDER,
} from './AvatarBase.constants';
import type { AvatarBaseProps } from './AvatarBase.types';

type AvatarBaseContainerProps = ViewProps & {
  size?: AvatarBaseSize;
  shape?: AvatarBaseShape;
  hasBorder?: boolean;
  twClassName?: string;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

const AvatarBaseContainer = ({
  children,
  size = AvatarBaseSize.Md,
  shape = AvatarBaseShape.Circle,
  hasBorder = false,
  twClassName,
  style,
  accessibilityLabel,
  ...props
}: AvatarBaseContainerProps) => {
  const tw = useTailwind();

  return (
    <View
      accessibilityRole={accessibilityLabel ? 'image' : undefined}
      accessibilityLabel={accessibilityLabel}
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
      {...props}
    >
      {children}
    </View>
  );
};

export const AvatarBase = ({
  children,
  size = AvatarBaseSize.Md,
  shape = AvatarBaseShape.Circle,
  hasBorder = false,
  badge,
  position = BadgeWrapperPosition.BottomRight,
  positionXOffset = 0,
  positionYOffset = 0,
  customPosition,
  twClassName,
  style,
  accessibilityLabel,
  ...props
}: AvatarBaseProps) => {
  const positionAnchorShape = getPositionAnchorShape(shape);

  const container = (
    <AvatarBaseContainer
      size={size}
      shape={shape}
      hasBorder={hasBorder}
      twClassName={twClassName}
      style={style}
      accessibilityLabel={accessibilityLabel}
      {...props}
    >
      {children}
    </AvatarBaseContainer>
  );

  if (!badge) {
    return container;
  }

  return (
    <BadgeWrapper
      badge={renderAvatarBadge(badge)}
      position={position}
      positionAnchorShape={positionAnchorShape}
      positionXOffset={positionXOffset}
      positionYOffset={positionYOffset}
      customPosition={customPosition}
    >
      {container}
    </BadgeWrapper>
  );
};
