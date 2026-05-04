import type { ReactNode } from 'react';

import type { InputPropsShared } from '../Input/Input.types';

/**
 * TextField shared props (ADR-0004).
 *
 * Layers controlled text-field chrome (accessories, custom input slot, error
 * state, etc.) on top of the shared `InputPropsShared` contract. Styling,
 * `testID`, native-only `inputProps`, and typed focus/blur handlers stay on
 * the platform layer.
 */
export type TextFieldPropsShared = Omit<
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
  /** Optional content before the input. */
  startAccessory?: ReactNode;
  /** Optional content after the input. */
  endAccessory?: ReactNode;
  /** Replaces the default field input implementation. */
  inputElement?: ReactNode;
};
