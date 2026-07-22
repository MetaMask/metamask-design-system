import React from 'react';

import { SensitiveText } from '../../SensitiveText';

import type { TextOrChildrenProps } from './TextOrChildren.types';

export const TextOrChildren = ({
  children,
  textProps,
}: TextOrChildrenProps) => {
  if (typeof children === 'string') {
    return <SensitiveText {...textProps}>{children}</SensitiveText>;
  }
  return <>{children}</>;
};
