import React from 'react';

import { twMerge } from '../../utils/tw-merge';
import { ICON_SIZE_CLASS_MAP } from './Icon.constants';
import { IconSize, IconColor } from './Icon.types';
import type { IconProps } from './Icon.types';

export const Icon: React.FC<IconProps> = ({
  name,
  size = IconSize.Md,
  color = IconColor.IconDefault,
  className,
  style,
  ...props
}) => {
  if (!name) {
    console.warn('Icon name is required');
    return null;
  }
  const mergedClassName = twMerge(
    'inline-block',
    ICON_SIZE_CLASS_MAP[size],
    color,
    className,
  );

  return (
    <svg
      className={mergedClassName}
      {...(props as React.SVGProps<SVGSVGElement>)}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
    >
      <path d="m337 51l-171 0c-75 0-119 45-119 119l0 172c0 74 44 119 119 119l171 0c75 0 119-45 119-119l0-172c1-74-44-119-119-119z m-3 220l-67 0 0 67c0 8-7 15-15 15-9 0-16-7-16-15l0-67-66 0c-9 0-16-7-16-15 0-8 7-15 16-15l66 0 0-67c0-8 7-15 16-15 8 0 15 7 15 15l0 67 67 0c8 0 15 7 15 15 0 8-7 15-15 15z" />
    </svg>
  );
};
