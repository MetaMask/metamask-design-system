import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';

import { IconColor, IconSize } from '../../types';

import { assetByIconName } from './Icon.assets';
import type { IconProps } from './Icon.types';

export const Icon = ({
  size = IconSize.Md,
  name,
  color = IconColor.IconDefault,
  twClassName,
  style,
  ...props
}: IconProps) => {
  const tw = useTailwind();
  const SVG = assetByIconName[name];
  const twStyle = tw.style(color, `w-[${size}px]`, `h-[${size}px]`, twClassName);

  return (
    <SVG name={name} fill="currentColor" style={[twStyle, style]} {...props} />
  );
};
