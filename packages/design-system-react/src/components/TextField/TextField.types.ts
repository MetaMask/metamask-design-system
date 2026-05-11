import type { TextFieldPropsShared } from '@metamask/design-system-shared';
import type { ComponentPropsWithoutRef, Ref } from 'react';

import type { InputProps } from '../Input/Input.types';

export const TextFieldSize = {
  Sm: 'sm',
  Md: 'md',
  Lg: 'lg',
} as const;
export type TextFieldSize = (typeof TextFieldSize)[keyof typeof TextFieldSize];

export const TextFieldType = {
  Text: 'text',
  Number: 'number',
  Password: 'password',
  Search: 'search',
} as const;
export type TextFieldType = (typeof TextFieldType)[keyof typeof TextFieldType];

type TextFieldInputProps = Omit<
  InputProps,
  | 'autoFocus'
  | 'isDisabled'
  | 'isReadOnly'
  | 'isStateStylesDisabled'
  | 'onBlur'
  | 'onChange'
  | 'onFocus'
  | 'placeholder'
  | 'value'
>;

export type TextFieldProps = Omit<
  ComponentPropsWithoutRef<'div'>,
  'onBlur' | 'onChange' | 'onFocus' | 'onClick'
> &
  TextFieldPropsShared & {
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
     * Hint shown when value is empty.
     */
    placeholder?: string;
    /**
     * Additional props for the inner `Input`. Do not pass `value`,
     * `placeholder`, `isDisabled`, `isReadOnly`, `onFocus`, `onBlur`, or
     * `onChange` here; use the TextField-level props above.
     */
    inputProps?: TextFieldInputProps;
    /**
     * Ref to the inner `input` element. The component `ref` targets the
     * root `div`.
     */
    inputRef?: Ref<HTMLInputElement>;
    /**
     * Called when the inner input value changes.
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Called when the inner input receives focus.
     */
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Called when the inner input loses focus.
     */
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Called when the root container is clicked. Focuses the inner input.
     */
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    /**
     * Optional additional CSS classes for the root container.
     */
    className?: string;
    /**
     * Optional inline styles for the root container.
     */
    style?: React.CSSProperties;
  };
