import type { TextButtonPropsShared } from '@metamask/design-system-shared';
import type { ComponentProps } from 'react';

import type { TextProps } from '../Text';

export type TextButtonProps = TextButtonPropsShared &
  Omit<TextProps, 'asChild' | 'children' | 'color'> &
  Omit<
    ComponentProps<'button'>,
    'children' | 'color' | 'disabled' | 'onClick'
  > & {
    /**
     * Called when the user clicks the label. Primary interaction for this control.
     */
    onClick?: ComponentProps<'button'>['onClick'];
  };
