import {
  useTailwind,
  withThemeProvider,
} from '@metamask/design-system-twrnc-preset';
import React from 'react';

import { assetByIconName } from './Icon.assets';
import { DEFAULT_ICON_SIZE, DEFAULT_ICON_COLOR } from './Icon.constants';
import type { IconProps } from './Icon.types';
import { generateIconClassNames } from './Icon.utilities';

const Icon = ({
  size = DEFAULT_ICON_SIZE,
  name,
  color = DEFAULT_ICON_COLOR,
  style,
  ...props
}: IconProps) => {
  const tw = useTailwind();
  const SVG = assetByIconName[name];
  const mergedClassnames = generateIconClassNames({ color, size });

  return (
    <SVG
      name={name}
      fill="currentColor"
      style={[tw`${mergedClassnames}`]}
      {...props}
    />
  );
};

export default withThemeProvider(Icon);
