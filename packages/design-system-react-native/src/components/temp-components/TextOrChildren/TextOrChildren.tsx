import React from 'react';

import { SensitiveText } from '../../SensitiveText/index.js';

import type { TextOrChildrenProps } from './TextOrChildren.types.js';

export const TextOrChildren = ({
  children,
  textProps,
}: TextOrChildrenProps) => {
  if (typeof children === 'string') {
    return <SensitiveText {...textProps}>{children}</SensitiveText>;
  }
  return <>{children}</>;
};
