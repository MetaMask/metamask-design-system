import React from 'react';

import { Box } from '../../Box';
import { TextOrChildren } from '../TextOrChildren';
import { BoxAlignItems, BoxFlexDirection } from '../../../types';

import type { TextWithAccessoriesProps } from './TextWithAccessories.types';

export const TextWithAccessories = ({
  children,
  textProps,
  startAccessory,
  endAccessory,
  twClassName,
  ...rest
}: TextWithAccessoriesProps) => (
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

TextWithAccessories.displayName = 'TextWithAccessories';
