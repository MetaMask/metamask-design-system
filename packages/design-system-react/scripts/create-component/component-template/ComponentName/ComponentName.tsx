import React from 'react';
import { twMerge } from '../../utils/tw-merge';
import { ComponentProps } from './ComponentName.types';

export const ComponentName: React.FC<ComponentProps> = ({
  children,
  className,
}) => {
  const mergedClassName = twMerge('your-default-classes', className);

  return <div className={mergedClassName}>{children}</div>;
};
