import { IconSize, IconColor } from '@metamask/design-system-shared';
import React from 'react';

import { twMerge } from '../../utils/tw-merge.js';

import { TWCLASSMAP_ICON_SIZE_DIMENSION } from './Icon.constants.js';
import type { IconProps } from './Icon.types.js';
import { Icons } from './icons/index.js';

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

  const IconComponent = Icons[name];

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
