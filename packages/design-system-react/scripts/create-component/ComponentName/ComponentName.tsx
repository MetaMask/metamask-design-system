import React from 'react';

import { twMerge } from '../../utils/tw-merge.js';

import type { ComponentNameProps } from './ComponentName.types.js';

export const ComponentName: React.FC<ComponentNameProps> = ({
  children,
  className,
  style,
  ...props
}) => {
  const mergedClassName = twMerge('text-default', className);

  return (
    <div className={mergedClassName} style={style} {...props}>
      {children}
    </div>
  );
};
