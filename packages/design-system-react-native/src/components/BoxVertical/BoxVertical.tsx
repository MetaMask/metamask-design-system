import { BoxFlexDirection } from '@metamask/design-system-shared';
import React from 'react';

import { Box } from '../Box';
import { TextOrChildren } from '../temp-components/TextOrChildren';

import type { BoxVerticalProps } from './BoxVertical.types';

export const BoxVertical = ({
  children,
  textProps,
  topAccessory,
  bottomAccessory,
  twClassName,
  ...rest
}: BoxVerticalProps) => (
  <Box
    flexDirection={BoxFlexDirection.Column}
    twClassName={twClassName}
    {...rest}
  >
    {topAccessory}
    <TextOrChildren textProps={textProps}>{children}</TextOrChildren>
    {bottomAccessory}
  </Box>
);

BoxVertical.displayName = 'BoxVertical';
