import React from 'react';

import { Text } from '../../Text';
import type { TextOrChildrenProps } from './TextOrChildren.types';

export const TextOrChildren = ({
  children,
  textProps,
}: TextOrChildrenProps) => {
  if (typeof children === 'string') {
    return <Text {...textProps}>{children}</Text>;
  }
  return <>{children}</>;
};
