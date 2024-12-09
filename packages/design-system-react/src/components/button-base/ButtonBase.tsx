import React from 'react';

import { twMerge } from '../../utils/tw-merge';
import type { ButtonBaseProps } from './ButtonBase.types';

export const ButtonBase: React.FC<ButtonBaseProps> = ({
  children,
  className,
}) => {
  const mergedClassName = twMerge('text-default', className);

  return <div className={mergedClassName}>{children}</div>;
};
