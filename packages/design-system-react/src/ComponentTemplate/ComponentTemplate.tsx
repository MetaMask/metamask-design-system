import React from 'react';
import { twMerge } from 'tailwind-merge';

import type { ComponentTemplateProps } from './ComponentTemplate.types';

export const ComponentTemplate = React.forwardRef<
  HTMLDivElement,
  ComponentTemplateProps
>(({ title = 'Component Template', className, ...props }, ref) => {
  return (
    <div ref={ref} className={twMerge('bg-red-100 p-2', className)} {...props}>
      <h2 className="text-2xl font-bold text-center text-red-800">{title}</h2>
    </div>
  );
});

ComponentTemplate.displayName = 'ComponentTemplate';
