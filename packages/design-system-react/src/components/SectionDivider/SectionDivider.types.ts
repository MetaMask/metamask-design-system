import type { BoxProps } from '../Box/Box.types';

/**
 * SectionDivider props match `BoxProps`. Override defaults with any `Box` prop
 * (for example `marginVertical={0}` or `borderWidth={0}`) or with `className` /
 * `style`.
 *
 * `borderWidth` is mapped to a **top-only** border (`border-t*`) so the line
 * reads as a single hairline on a zero-height box.
 */
export type SectionDividerProps = BoxProps;
