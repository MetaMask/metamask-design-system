import type { BoxProps } from '../Box';

/**
 * SectionDivider props match `Box`, except `asChild` and `children`.
 * The component always renders an `hr`.
 *
 * `borderWidth` sets the thickness of that line (`0` hides it). It does not
 * add a border on every side the way `Box` does.
 */
export type SectionDividerProps = Omit<BoxProps, 'asChild' | 'children'>;
