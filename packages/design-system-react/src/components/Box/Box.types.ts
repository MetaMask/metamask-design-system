import type { BoxPropsShared } from '@metamask/design-system-shared';
import type { ComponentProps } from 'react';

export type BoxProps = ComponentProps<'div'> &
  BoxPropsShared & {
    /**
     * Optional prop for additional CSS classes to be applied to the Box component.
     */
    className?: string;
    /**
     * Optional boolean that determines if the component should merge its props onto its immediate child
     * instead of rendering a div element
     *
     * @default false
     */
    asChild?: boolean;
  };
