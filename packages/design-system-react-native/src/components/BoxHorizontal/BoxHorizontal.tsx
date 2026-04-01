import {
  BoxAlignItems,
  BoxFlexDirection,
} from '@metamask/design-system-shared';
import React from 'react';

import { Box } from '../Box';
import { TextOrChildren } from '../temp-components/TextOrChildren';

import type { BoxHorizontalProps } from './BoxHorizontal.types';

export const BoxHorizontal = ({
  children,
  textProps,
  startAccessory,
  endAccessory,
  twClassName,
  ...rest
}: BoxHorizontalProps) => (
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

BoxHorizontal.displayName = 'BoxHorizontal';
