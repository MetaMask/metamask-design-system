/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useMemo } from 'react';
import { View } from 'react-native';

import type { IconProps } from '../../components/Icon';
import Icon from '../../components/Icon';
import type { TextProps } from '../../components/Text/Text.types';
import type { SpinnerProps } from '../../temp-components/Spinner';
import Spinner from '../../temp-components/Spinner';
import TextOrChildren from '../TextOrChildren/TextOrChildren';
import { DEFAULT_AVATARBASE_PROPS } from './AvatarBase.constants';
import type { AvatarBaseProps } from './AvatarBase.types';
import { generateAvatarBaseContainerClassNames } from './AvatarBase.utilities';

const AvatarBase = ({
  children,
  size = DEFAULT_AVATARBASE_PROPS.size,
  shape = DEFAULT_AVATARBASE_PROPS.shape,
  fallbackText,
  fallbackTextProps,
  fallbackIcon,
  fallbackIconProps,
  twClassName,
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

  const finalFallbackIconProps: Omit<IconProps, 'name'> = {
    ...DEFAULT_AVATARBASE_PROPS.fallbackIconProps,
    ...fallbackIconProps,
  };

  return (
    <View style={[tw`${twContainerClassNames}`, style]} {...props}>
      {fallbackText ? (
        <Text>{fallbackText}</Text>
      ) : fallbackIcon ? (
        fallbackIcon
      ) : (
        children
      )}
    </View>
  );
};

export default AvatarBase;
