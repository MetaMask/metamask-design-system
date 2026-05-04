import type { InputPropsShared } from '@metamask/design-system-shared';
import type { ComponentPropsWithoutRef } from 'react';

export type InputProps = Omit<
  ComponentPropsWithoutRef<'input'>,
  'defaultValue' | 'disabled' | 'readOnly' | 'value'
> &
  InputPropsShared & {
    /**
     * Optional prop for additional CSS classes.
     */
    className?: string;
    /**
     * Optional inline styles.
     */
    style?: React.CSSProperties;
  };
