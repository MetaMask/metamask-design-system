/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useMemo } from 'react';
import { View } from 'react-native';

import Text from '../../components/Text';
import { DEFAULT_AVATARBASE_PROPS } from './AvatarBase.constants';
import type { AvatarBaseProps } from './AvatarBase.types';
import { generateAvatarBaseContainerClassNames } from './AvatarBase.utilities';

const AvatarBase = ({
  children,
  size = DEFAULT_AVATARBASE_PROPS.size,
  shape = DEFAULT_AVATARBASE_PROPS.shape,
  fallbackText,
  fallbackTextProps,
  hasBorder = DEFAULT_AVATARBASE_PROPS.hasBorder,
  hasSolidBackgroundColor = DEFAULT_AVATARBASE_PROPS.hasSolidBackgroundColor,
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
          {...DEFAULT_AVATARBASE_PROPS.fallbackTextProps}
          {...fallbackTextProps}
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
