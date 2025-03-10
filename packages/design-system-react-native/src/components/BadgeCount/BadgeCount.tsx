/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { View } from 'react-native';

import Text from '../Text';
import {
  DEFAULT_BADGECOUNT_PROPS,
  MAP_BADGECOUNT_SIZE_TEXTVARIANT,
  MAP_BADGECOUNT_SIZE_MINWIDTH,
  MAP_BADGECOUNT_SIZE_LINEHEIGHT,
} from './BadgeCount.constants';
import type { BadgeCountProps, BadgeCountSize } from './BadgeCount.types';

const BadgeCount = ({
  size = DEFAULT_BADGECOUNT_PROPS.size,
  count,
  max = DEFAULT_BADGECOUNT_PROPS.max,
  textProps,
  twClassName,
  style,
  ...props
}: BadgeCountProps) => {
  const tw = useTailwind();
  const twContainerClassNames = `
    bg-error-default
    min-w-[${MAP_BADGECOUNT_SIZE_MINWIDTH[size as BadgeCountSize]}px] 
    h-[${size}px]
    rounded-full
    items-center
    justify-center
    self-start
    ${twClassName}`;

  return (
    <View style={[tw`${twContainerClassNames}`, style]} {...props}>
      <Text
        variant={MAP_BADGECOUNT_SIZE_TEXTVARIANT[size as BadgeCountSize]}
        color={DEFAULT_BADGECOUNT_PROPS.textProps.color}
        fontWeight={DEFAULT_BADGECOUNT_PROPS.textProps.fontWeight}
        {...textProps}
        twClassName={`leading-[${MAP_BADGECOUNT_SIZE_LINEHEIGHT[size]}px] ${textProps?.twClassName}`}
      >
        {count > max ? `${max}+` : `${count}`}
      </Text>
    </View>
  );
};

export default BadgeCount;
