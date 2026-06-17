import type { TextButtonPropsShared } from '@metamask/design-system-shared';
import type { ComponentProps } from 'react';

import type { TextProps } from '../Text';

export type TextButtonProps = TextButtonPropsShared &
  Omit<TextProps, 'asChild' | 'children' | 'color'> &
  Omit<
    ComponentProps<'button'>,
    'children' | 'color' | 'onClick'
  > & {
    /**
     * Called when the user clicks the label. Primary interaction for this control.
     */
    onClick?: ComponentProps<'button'>['onClick'];
    /**
     * Optional boolean that determines if the component should merge its props onto its immediate child
     * instead of rendering a button element.
     *
     * @default false
     */
    asChild?: boolean;
  };
