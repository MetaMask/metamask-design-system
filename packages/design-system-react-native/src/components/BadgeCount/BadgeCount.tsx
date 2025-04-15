/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { View } from 'react-native';

import { BadgeCountSize } from '../../types';
import Text, { TextColor, FontWeight } from '../Text';
import {
  MAP_BADGECOUNT_SIZE_TEXTVARIANT,
  TWCLASSMAP_BADGECOUNT_SIZE_CONTAINER,
  MAP_BADGECOUNT_SIZE_LINEHEIGHT,
} from './BadgeCount.constants';
import type { BadgeCountProps } from './BadgeCount.types';

const BadgeCount = ({
  size = BadgeCountSize.Md,
  count,
  max = 99,
  textProps,
  twClassName = '',
  style,
  ...props
}: BadgeCountProps) => {
  const tw = useTailwind();
  const twContainerClassNames = `
    bg-error-default
    rounded-lg
    items-center
    justify-center
    self-start
    ${TWCLASSMAP_BADGECOUNT_SIZE_CONTAINER[size]}
    ${twClassName}`;

  return (
    <View style={[tw`${twContainerClassNames}`, style]} {...props}>
      <Text
        variant={MAP_BADGECOUNT_SIZE_TEXTVARIANT[size as BadgeCountSize]}
        color={TextColor.ErrorInverse}
        fontWeight={FontWeight.Medium}
        {...textProps}
        twClassName={`${MAP_BADGECOUNT_SIZE_LINEHEIGHT[size]} ${textProps?.twClassName || ''}`}
      >
        {count > max ? `${max}+` : `${count}`}
      </Text>
    </View>
  );
};

export default BadgeCount;
