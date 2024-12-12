import {
  useTailwind,
  withThemeProvider,
} from '@metamask/design-system-twrnc-preset';
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
  style,
  ...props
}: IconProps) => {
  const tw = useTailwind();
  const SVG = assetByIconName[name];
  const styles = useMemo(() => {
    const mergedClassnames = generateIconClassNames({ color, size });
    return tw`${mergedClassnames}`;
  }, [color, size, tw]);

  return <SVG name={name} fill="currentColor" style={[styles]} {...props} />;
};

export default withThemeProvider(Icon);
