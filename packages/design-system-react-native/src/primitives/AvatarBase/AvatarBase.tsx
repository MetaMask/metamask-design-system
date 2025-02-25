/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useMemo } from 'react';
import { View } from 'react-native';

import Text from '../../components/Text';
import type { TextProps } from '../../components/Text/Text.types';
import { DEFAULT_AVATARBASE_PROPS } from './AvatarBase.constants';
import type { AvatarBaseProps } from './AvatarBase.types';
import { generateAvatarBaseContainerClassNames } from './AvatarBase.utilities';

const AvatarBase = ({
  children,
  size = DEFAULT_AVATARBASE_PROPS.size,
  shape = DEFAULT_AVATARBASE_PROPS.shape,
  fallbackText,
  fallbackTextProps,
  twClassName = '',
  style,
  ...props
}: AvatarBaseProps) => {
  const tw = useTailwind();
  const twContainerClassNames = useMemo(() => {
    return generateAvatarBaseContainerClassNames({
      size,
      shape,
      twClassName,
    });
  }, [size, shape, twClassName]);

  const finalFallbackTextProps: Omit<TextProps, 'children'> = {
    ...DEFAULT_AVATARBASE_PROPS.fallbackTextProps,
    ...fallbackTextProps,
  };

  return (
    <View style={[tw`${twContainerClassNames}`, style]} {...props}>
      {fallbackText ? (
        <Text {...finalFallbackTextProps}>{fallbackText}</Text>
      ) : (
        children
      )}
    </View>
  );
};

export default AvatarBase;
