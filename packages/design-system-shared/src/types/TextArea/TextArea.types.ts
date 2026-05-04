import type { ReactNode } from 'react';

import type { InputPropsShared } from '../Input/Input.types';

/**
 * TextArea shared props (ADR-0004). A multiline input layered on the shared
 * `InputPropsShared` contract. Platform packages layer container and
 * `TextInput` behavior on top.
 */
export type TextAreaPropsShared = Omit<
  InputPropsShared,
  'isStateStylesDisabled'
> & {
  /**
   * Called when the text changes. Uses React Native `TextInput` naming; web
   * implementations may map this from the native input change event.
   */
  onChangeText?: (text: string) => void;
  /**
   * When true, the field shows an error state (for example border treatment).
   *
   * @default false
   */
  isError?: boolean;
  /** Replaces the default textarea input implementation. */
  inputElement?: ReactNode;
};
