import React from 'react';

import Text from '../../components/Text';
import type { TextOrChildrenProps } from './TextOrChildren.types';

const TextOrChildren = ({ children, textProps }: TextOrChildrenProps) => {
  if (typeof children === 'string') {
    return <Text {...textProps}>{children}</Text>;
  }
  return <>{children}</>;
};

export default TextOrChildren;
