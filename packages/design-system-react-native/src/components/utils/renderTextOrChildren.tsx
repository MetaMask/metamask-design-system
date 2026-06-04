import React from 'react';
import type { ReactNode } from 'react';

import { Text } from '../Text';
import type { TextProps } from '../Text';

export const renderTextOrChildren = (
  children: ReactNode,
  textProps?: Omit<Partial<TextProps>, 'children'>,
) => {
  if (typeof children === 'string') {
    return <Text {...textProps}>{children}</Text>;
  }
  return children;
};
