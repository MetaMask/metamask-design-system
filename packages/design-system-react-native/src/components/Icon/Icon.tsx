import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';

import { IconColor, IconSize } from '../../types';

import { assetByIconName } from './Icon.assets';
import { TWCLASSMAP_ICON_SIZE_DIMENSION } from './Icon.constants';
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
  const { hitSlop, ...svgProps } = props;
  const twStyle = tw.style(
    color,
    TWCLASSMAP_ICON_SIZE_DIMENSION[size],
    twClassName,
  );

  return (
    <SVG
      name={name}
      fill="currentColor"
      style={[twStyle, style]}
      hitSlop={hitSlop ?? undefined}
      {...svgProps}
    />
  );
};
