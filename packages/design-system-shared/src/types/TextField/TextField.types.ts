import type { ReactNode } from 'react';

import type { InputPropsShared } from '../Input/Input.types';

/**
 * TextField size variants (ADR-0003).
 */
export const TextFieldSize = {
  Sm: 'sm',
  Md: 'md',
  Lg: 'lg',
} as const;
export type TextFieldSize = (typeof TextFieldSize)[keyof typeof TextFieldSize];

/**
 * Native input `type` attribute values supported by TextField (ADR-0003).
 */
export const TextFieldType = {
  Text: 'text',
  Number: 'number',
  Password: 'password',
  Search: 'search',
} as const;
export type TextFieldType = (typeof TextFieldType)[keyof typeof TextFieldType];

/**
 * TextField shared props (ADR-0004).
 *
 * Layers controlled text-field chrome (accessories, custom input slot, error
 * state, etc.) on top of the shared `InputPropsShared` contract. Styling,
 * `testID`, native-only `inputProps`, refs, and typed focus/blur handlers
 * stay on the platform layer.
 */
export type TextFieldPropsShared = Omit<
  InputPropsShared,
  'isStateStylesDisabled' | 'textVariant'
> & {
  /**
   * The size of the text field. Controls the height.
   *
   * @default TextFieldSize.Md
   */
  size?: TextFieldSize;
  /**
   * The native input `type` attribute.
   *
   * @default TextFieldType.Text
   */
  type?: TextFieldType;
  /**
   * If true, truncates overflowing input text with an ellipsis.
   *
   * @default true
   */
  truncate?: boolean;
  /**
   * Max number of characters to allow.
   */
  maxLength?: number;
  /**
   * Name attribute of the inner `input` element.
   */
  name?: string;
  /**
   * `id` of the inner `input` element.
   */
  id?: string;
  /**
   * If true, the inner input is marked as required.
   */
  required?: boolean;
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
