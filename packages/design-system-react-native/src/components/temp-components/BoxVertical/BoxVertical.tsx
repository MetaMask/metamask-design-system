import React from 'react';

import { BoxFlexDirection } from '../../../types';
import { Box } from '../../Box';
import { TextOrChildren } from '../TextOrChildren';

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
