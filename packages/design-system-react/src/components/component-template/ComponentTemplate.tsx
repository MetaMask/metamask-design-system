import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ComponentTemplateProps } from './ComponentTemplate.types';

export const ComponentTemplate: React.FC<ComponentTemplateProps> = ({
  title = 'Component Template',
  className,
}) => {
  return (
    <div className={twMerge('bg-red-100 p-2', className)}>
      <h2 className="text-2xl font-bold text-center text-red-800">{title}</h2>
    </div>
  );
};
