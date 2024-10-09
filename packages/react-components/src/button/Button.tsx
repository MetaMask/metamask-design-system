import React from 'react';
import { twMerge } from 'tailwind-merge';

import type { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => (
  <button
    className={twMerge('bg-blue-800 text-white px-4 py-2 rounded', className)}
    {...props}
  >
    {children}
  </button>
);
