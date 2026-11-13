import {
  BoxAlignItems,
  BoxFlexDirection,
} from '@metamask/design-system-shared';
import React from 'react';

import { Box } from '../Box';
import { TextOrChildren } from '../temp-components/TextOrChildren';

import type { BoxRowProps } from './BoxRow.types';

/**
 * @deprecated Use `Box` with `flexDirection={BoxFlexDirection.Row}`, `alignItems={BoxAlignItems.Center}`, and `gap={1}`
 * instead, render accessories as sibling children, and wrap string content with `Text`. This component will be
 * removed in a future major version of the design system. See MIGRATION.md.
 *
 * @param props - Component props.
 * @param props.children - Main content; strings are wrapped in `SensitiveText`.
 * @param props.className - Tailwind classes. Preferred over deprecated `twClassName`.
 * @param props.textProps - Props passed to `SensitiveText` when `children` is a string.
 * @param props.startAccessory - Node rendered before `children`.
 * @param props.endAccessory - Node rendered after `children`.
 * @param props.twClassName - Tailwind classes on the root `Box`.
 * @returns The rendered row.
 */
export const BoxRow = ({
  children,
  textProps,
  startAccessory,
  endAccessory,
  twClassName,
  className,
  ...rest
}: BoxRowProps) => (
  <Box
    flexDirection={BoxFlexDirection.Row}
    alignItems={BoxAlignItems.Center}
    gap={1}
    twClassName={twClassName}
    className={className}
    {...rest}
  >
    {startAccessory}
    <TextOrChildren textProps={textProps}>{children}</TextOrChildren>
    {endAccessory}
  </Box>
);

BoxRow.displayName = 'BoxRow';
