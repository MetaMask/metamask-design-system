import { BadgeCountSize } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { View } from 'react-native';

import { Text, TextColor, FontWeight } from '../Text';

import {
  MAP_BADGECOUNT_SIZE_TEXTVARIANT,
  TWCLASSMAP_BADGECOUNT_SIZE_CONTAINER,
} from './BadgeCount.constants';
import type { BadgeCountProps } from './BadgeCount.types';

export const BadgeCount = ({
  size = BadgeCountSize.Md,
  count,
  max = 99,
  textProps,
  twClassName,
  style,
  ...props
}: BadgeCountProps) => {
  const tw = useTailwind();

  return (
    <View
      {...props}
      style={[
        tw.style(
          'bg-error-default rounded-lg items-center justify-center self-start',
          TWCLASSMAP_BADGECOUNT_SIZE_CONTAINER[size],
          twClassName,
        ),
        style,
      ]}
    >
      <Text
        variant={MAP_BADGECOUNT_SIZE_TEXTVARIANT[size]}
        color={TextColor.ErrorInverse}
        fontWeight={FontWeight.Medium}
        twClassName="leading-0"
        {...textProps}
      >
        {count > max ? `${max}+` : `${count}`}
      </Text>
    </View>
  );
};
