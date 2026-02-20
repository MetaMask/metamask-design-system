import { BadgeStatusSize } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { View } from 'react-native';

import {
  TWCLASSMAP_BADGESTATUS_STATUS_CIRCLE,
  TWCLASSMAP_BADGESTATUS_SIZE,
} from './BadgeStatus.constants';
import type { BadgeStatusProps } from './BadgeStatus.types';

export const BadgeStatus = ({
  status,
  size = BadgeStatusSize.Md,
  hasBorder = true,
  twClassName,
  style,
  ...props
}: BadgeStatusProps) => {
  const tw = useTailwind();

  return (
    <View
      {...props}
      style={[
        tw.style(
          'self-start rounded-full',
          hasBorder && 'border-2 border-background-default',
          twClassName,
        ),
        style,
      ]}
    >
      <View
        style={[
          tw.style(
            'rounded-full border-2',
            TWCLASSMAP_BADGESTATUS_SIZE[size],
            TWCLASSMAP_BADGESTATUS_STATUS_CIRCLE[status],
          ),
        ]}
      />
    </View>
  );
};
