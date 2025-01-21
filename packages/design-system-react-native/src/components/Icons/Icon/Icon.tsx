import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useMemo } from 'react';

import { assetByIconName } from './Icon.assets';
import {
  DEFAULT_ICON_ICONSIZE,
  DEFAULT_ICON_ICONCOLOR,
} from './Icon.constants';
import type { IconProps } from './Icon.types';
import { generateIconClassNames } from './Icon.utilities';

const Icon = ({
  size = DEFAULT_ICON_ICONSIZE,
  name,
  color = DEFAULT_ICON_ICONCOLOR,
  twClassName,
  style,
  ...props
}: IconProps) => {
  const tw = useTailwind();
  const SVG = assetByIconName[name];
  const twStyle = useMemo(() => {
    const mergedClassnames = generateIconClassNames({
      color,
      size,
      twClassName,
    });
    return tw`${mergedClassnames}`;
  }, [color, size, tw, twClassName]);

  return (
    <SVG name={name} fill="currentColor" style={[twStyle, style]} {...props} />
  );
};

export default Icon;
