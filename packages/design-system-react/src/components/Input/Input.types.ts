import type { ComponentPropsWithoutRef } from 'react';

import type { TextVariant } from '../../types';

export type InputProps = Omit<
  ComponentPropsWithoutRef<'input'>,
  'disabled' | 'readOnly'
> & {
  /**
   * Optional enum to select between Typography variants.
   *
   * @default TextVariant.BodyMd
   */
  textVariant?: TextVariant;
  /**
   * Optional boolean to disable Input.
   *
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Optional boolean to show readonly input.
   *
   * @default false
   */
  isReadonly?: boolean;
  /**
   * Optional prop for additional CSS classes.
   */
  className?: string;
  /**
   * Optional inline styles.
   */
  style?: React.CSSProperties;
};
