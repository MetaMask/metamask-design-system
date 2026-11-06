import { BoxFlexDirection } from '@metamask/design-system-shared';
import React from 'react';

import { Box } from '../Box';
import { TextOrChildren } from '../temp-components/TextOrChildren';

import type { BoxColumnProps } from './BoxColumn.types';

/**
 * @deprecated Use `Box` with `flexDirection={BoxFlexDirection.Column}` instead, render accessories as sibling
 * children, and wrap string content with `Text`. This component will be removed in a future major version of the
 * design system. See MIGRATION.md.
 *
 * @param props - Component props.
 * @param props.children - Main content; strings are wrapped in `SensitiveText`.
 * @param props.textProps - Props passed to `SensitiveText` when `children` is a string.
 * @param props.topAccessory - Node rendered above `children`.
 * @param props.bottomAccessory - Node rendered below `children`.
 * @param props.twClassName - Tailwind classes on the root `Box`.
 * @returns The rendered column.
 */
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
