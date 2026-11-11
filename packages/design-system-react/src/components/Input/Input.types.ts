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
    /**
     * Dataset attributes forwarded to the native `<input>`.
     *
     * JSX already accepts `data-*` on `<Input>`, but object literals such as
     * `TextField`'s `inputProps` do not. This index signature makes those
     * literals type-check. Same pattern as `Checkbox` `inputProps`.
     */
    [key: `data-${string}`]: string;
  };
