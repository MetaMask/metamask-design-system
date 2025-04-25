import React from 'react';

import { twMerge } from '../../utils/tw-merge';
import type { ComponentNameProps } from './ComponentName.types';

export const ComponentName: React.FC<ComponentNameProps> = ({
  children,
  className,
  style,
}) => {
  const mergedClassName = twMerge('text-default', className);

  return (
    <div className={mergedClassName} style={style}>
      {children}
    </div>
  );
};
