/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useMemo } from 'react';
import { View } from 'react-native';

import { AvatarBaseSize, AvatarBaseShape } from '../../types';
import Text, { TextColor, TextVariant, FontWeight } from '../Text';
import type { AvatarBaseProps } from './AvatarBase.types';
import { generateAvatarBaseContainerClassNames } from './AvatarBase.utilities';

const AvatarBase = ({
  children,
  size = AvatarBaseSize.Md,
  shape = AvatarBaseShape.Circle,
  fallbackText,
  fallbackTextProps,
  hasBorder = false,
  hasSolidBackgroundColor = false,
  twClassName = '',
  style,
  ...props
}: AvatarBaseProps) => {
  const tw = useTailwind();
  const twContainerClassNames = useMemo(() => {
    return generateAvatarBaseContainerClassNames({
      size,
      shape,
      hasBorder,
      hasSolidBackgroundColor,
      twClassName,
    });
  }, [size, shape, hasBorder, twClassName]);

  return (
    <View style={[tw`${twContainerClassNames}`, style]} {...props}>
      <View
        style={tw`bg-background-muted absolute top-0 left-0 bottom-0 right-0`}
      />
      {fallbackText ? (
        <Text
          color={TextColor.TextMuted}
          variant={TextVariant.BodySm}
          fontWeight={FontWeight.Medium}
          {...fallbackTextProps}
          twClassName={`uppercase ${fallbackTextProps?.twClassName ? ` ${fallbackTextProps.twClassName}` : ''}`.trim()}
        >
          {fallbackText}
        </Text>
      ) : (
        children
      )}
    </View>
  );
};

export default AvatarBase;
