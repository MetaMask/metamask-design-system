import { BoxFlexDirection } from '@metamask/design-system-shared';
import React from 'react';

import { Box } from '../Box/index.js';
import { TextOrChildren } from '../temp-components/TextOrChildren/index.js';

import type { BoxColumnProps } from './BoxColumn.types.js';

export const BoxColumn = ({
  children,
  textProps,
  topAccessory,
  bottomAccessory,
  twClassName,
  ...rest
}: BoxColumnProps) => (
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

BoxColumn.displayName = 'BoxColumn';
