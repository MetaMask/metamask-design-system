import type { ComponentProps, ReactNode } from 'react';

import type { BoxProps } from '../Box';

/**
 * Box prop bag for the three internal slot wrappers (start accessory, title,
 * end accessory). Mirrors the legacy `BoxProps<'div'>` typing but is bound to
 * the MMDS `BoxProps` shape and carries an explicit `data-*` index signature
 * so consumers can pass test ids and other dataset attributes through
 * `Partial`/`Omit` indirection.
 */
type SlotWrapperProps = Omit<BoxProps, 'children'> & {
  [key: `data-${string}`]: string | undefined;
};

export type HeaderBaseProps = Omit<ComponentProps<'div'>, 'children'> & {
  /**
   * Title content rendered in the centered column. The title stays
   * horizontally centered regardless of the side accessories' widths
   * (CSS Grid handles the equal-sidebar layout — no JS measurement needed).
   */
  children?: ReactNode;
  /**
   * Props forwarded to the `Box` wrapping `children`. Use this to add
   * `data-testid`, override layout, or apply Tailwind utilities via
   * `className`.
   */
  childrenWrapperProps?: SlotWrapperProps;
  /**
   * Content rendered in the start (left in LTR) column. Typically a back
   * `ButtonIcon` or similar leading affordance.
   */
  startAccessory?: ReactNode;
  /**
   * Props forwarded to the `Box` wrapping `startAccessory`.
   */
  startAccessoryWrapperProps?: SlotWrapperProps;
  /**
   * Content rendered in the end (right in LTR) column. Typically a close
   * `ButtonIcon` or similar trailing affordance.
   */
  endAccessory?: ReactNode;
  /**
   * Props forwarded to the `Box` wrapping `endAccessory`.
   */
  endAccessoryWrapperProps?: SlotWrapperProps;
  /**
   * Optional prop for additional CSS classes to be applied to the HeaderBase
   * root. Merged with the component's defaults via `twMerge`.
   */
  className?: string;
};
