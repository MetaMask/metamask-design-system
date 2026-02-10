import React from 'react';

import { IconSize, IconColor } from '../../types';
import { twMerge } from '../../utils/tw-merge';

import { TWCLASSMAP_ICON_SIZE_DIMENSION } from './Icon.constants';
import type { IconProps } from './Icon.types';
import { IconsByName } from './icons';

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

  const IconComponent = IconsByName[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  const mergedClassName = twMerge(
    'inline-block',
    TWCLASSMAP_ICON_SIZE_DIMENSION[size],
    color,
    className,
  );

  return (
    <IconComponent
      className={mergedClassName}
      {...(props as React.SVGProps<SVGSVGElement>)}
      style={style}
    />
  );
};
