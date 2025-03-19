/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { View } from 'react-native';

import Text from '../Text';
import {
  DEFAULT_BADGECOUNT_PROPS,
  MAP_BADGECOUNT_SIZE_TEXTVARIANT,
  TWCLASSMAP_BADGECOUNT_SIZE_CONTAINER,
  MAP_BADGECOUNT_SIZE_LINEHEIGHT,
} from './BadgeCount.constants';
import type { BadgeCountProps, BadgeCountSize } from './BadgeCount.types';

const BadgeCount = ({
  size = DEFAULT_BADGECOUNT_PROPS.size, //BadgeCountSize.Md - 14px
  count,
  max = DEFAULT_BADGECOUNT_PROPS.max, // 99
  textProps, // color: TextColor.ErrorInverse, fontWeight: FontWeight.Medium
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
        color={DEFAULT_BADGECOUNT_PROPS.textProps.color}
        fontWeight={DEFAULT_BADGECOUNT_PROPS.textProps.fontWeight}
        {...textProps}
        twClassName={`${MAP_BADGECOUNT_SIZE_LINEHEIGHT[size]} ${textProps?.twClassName || ''}`}
      >
        {count > max ? `${max}+` : `${count}`}
      </Text>
    </View>
  );
};

export default BadgeCount;
