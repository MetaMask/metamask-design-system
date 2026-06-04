import {
  BoxAlignItems,
  BoxFlexDirection,
} from '@metamask/design-system-shared';
import React from 'react';

import { Box } from '../Box';
import { renderTextOrChildren } from '../utils';

import type { BoxRowProps } from './BoxRow.types';

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
    {renderTextOrChildren(children, textProps)}
    {endAccessory}
  </Box>
);

BoxRow.displayName = 'BoxRow';
