/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { View } from 'react-native';

import {
  TWCLASSMAP_BADGESTATUS_STATUS_CIRCLE,
  TWCLASSMAP_BADGESTATUS_SIZE,
} from './BadgeStatus.constants';
import type { BadgeStatusProps } from './BadgeStatus.types';
import { BadgeStatusSize } from './BadgeStatus.types';

const BadgeStatus = ({
  status,
  size = BadgeStatusSize.Md,
  hasBorder = true,
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
        ${hasBorder ? 'border-2 border-background-default' : ''} 
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
          rounded-full 
          border-2
          ${TWCLASSMAP_BADGESTATUS_SIZE[size]} 
          ${TWCLASSMAP_BADGESTATUS_STATUS_CIRCLE[status]}
          `,
        ]}
      />
    </View>
  );
};

export default BadgeStatus;
