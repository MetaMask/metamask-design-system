import React from 'react';
import { twMerge } from '../../utils/tw-merge';
import { ComponentNameProps } from './ComponentName.types';

export const ComponentName: React.FC<ComponentNameProps> = ({
  children,
  className,
}) => {
  const mergedClassName = twMerge('your-default-classes', className);

  return <div className={mergedClassName}>{children}</div>;
};
