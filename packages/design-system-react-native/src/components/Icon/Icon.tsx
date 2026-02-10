import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useMemo } from 'react';

import { IconColor, IconSize } from '../../types';

import { assetByIconNameKebab } from './Icon.assets';
import type { IconProps } from './Icon.types';
import { generateIconClassNames } from './Icon.utilities';

export const Icon = ({
  size = IconSize.Md,
  name,
  color = IconColor.IconDefault,
  twClassName,
  style,
  ...props
}: IconProps) => {
  const tw = useTailwind();
  const SVG = assetByIconNameKebab[name];
  const twStyle = useMemo(() => {
    const mergedClassnames = generateIconClassNames({
      color,
      size,
      twClassName,
    });
    return tw`${mergedClassnames}`;
  }, [color, size, tw, twClassName]);

  return <SVG fill="currentColor" style={[twStyle, style]} {...props} />;
};
