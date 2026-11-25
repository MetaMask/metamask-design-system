import type { BoxBorderWidth } from '@metamask/design-system-shared';

/**
 * Top-only border width classes.
 *
 * Values are complete class strings so Tailwind's source scan emits each
 * utility. Box's `borderWidth` map is all-sides (`border`, `border-2`, …).
 */
export const TWCLASSMAP_SECTION_DIVIDER_BORDER_TOP_WIDTH: Record<
  BoxBorderWidth,
  string
> = {
  0: 'border-t-0',
  1: 'border-t',
  2: 'border-t-2',
  4: 'border-t-4',
  8: 'border-t-8',
};
