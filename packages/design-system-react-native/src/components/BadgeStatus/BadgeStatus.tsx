/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { View } from 'react-native';

import {
  DEFAULT_BADGESTATUS_PROPS,
  TWCLASSMAP_BADGESTATUS_STATUS_BACKGROUNDCOLOR,
  TWCLASSMAP_BADGESTATUS_STATUS_INNER_BORDERCOLOR,
} from './BadgeStatus.constants';
import type { BadgeStatusProps } from './BadgeStatus.types';

const BadgeStatus = ({
  status,
  size = DEFAULT_BADGESTATUS_PROPS.size,
  hasBorder = DEFAULT_BADGESTATUS_PROPS.hasBorder,
  twClassName = '',
  style,
  ...props
}: BadgeStatusProps) => {
  const tw = useTailwind();

  return (
    <View
      style={[
        tw`
        self-start
        rounded-full 
        ${hasBorder ? 'border-[2px] border-background-default' : ''} 
        ${twClassName}`,
        style,
      ]}
      {...props}
    >
      <View
        style={tw`bg-background-default absolute top-0 left-0 bottom-0 right-0 rounded-full`}
      />
      <View
        style={[
          tw`
            h-[${size}px] 
            w-[${size}px] 
            ${TWCLASSMAP_BADGESTATUS_STATUS_BACKGROUNDCOLOR[status]}
            rounded-full 
            border-[2px]
            ${TWCLASSMAP_BADGESTATUS_STATUS_INNER_BORDERCOLOR[status]}`,
        ]}
      />
    </View>
  );
};

export default BadgeStatus;
