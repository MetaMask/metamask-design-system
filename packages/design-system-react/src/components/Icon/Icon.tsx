import { IconSize, IconColor } from '@metamask/design-system-shared';
import React, { Suspense } from 'react';

import { twMerge } from '../../utils/tw-merge';

import { TWCLASSMAP_ICON_SIZE_DIMENSION } from './Icon.constants';
import { getIconComponent, isIconName } from './Icon.registry';
import type { IconProps } from './Icon.types';

const IconRenderer: React.FC<IconProps> = ({
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

  if (!isIconName(name)) {
    console.warn(`Icon "${String(name)}" not found`);
    return null;
  }

  const IconComponent = getIconComponent(name);

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

export const Icon: React.FC<IconProps> = (props) => (
  <Suspense fallback={null}>
    <IconRenderer {...props} />
  </Suspense>
);
