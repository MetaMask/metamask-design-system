import {
  BoxAlignItems,
  BoxFlexDirection,
} from '@metamask/design-system-shared';
import React from 'react';

import { Box } from '../Box/index.js';
import { TextOrChildren } from '../temp-components/TextOrChildren/index.js';

import type { BoxRowProps } from './BoxRow.types.js';

export const BoxRow = ({
  children,
  textProps,
  startAccessory,
  endAccessory,
  twClassName,
  ...rest
}: BoxRowProps) => (
  <Box
    flexDirection={BoxFlexDirection.Row}
    alignItems={BoxAlignItems.Center}
    gap={1}
    twClassName={twClassName}
    {...rest}
  >
    {startAccessory}
    <TextOrChildren textProps={textProps}>{children}</TextOrChildren>
    {endAccessory}
  </Box>
);

BoxRow.displayName = 'BoxRow';
