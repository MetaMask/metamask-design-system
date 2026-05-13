import type { TextFieldPropsShared } from '@metamask/design-system-shared';
import type { ComponentPropsWithoutRef, Ref } from 'react';

import type { InputProps } from '../Input/Input.types';

type TextFieldInputProps = Omit<
  InputProps,
  | 'autoFocus'
  | 'id'
  | 'isDisabled'
  | 'isReadOnly'
  | 'isStateStylesDisabled'
  | 'maxLength'
  | 'name'
  | 'onBlur'
  | 'onChange'
  | 'onFocus'
  | 'placeholder'
  | 'required'
  | 'type'
  | 'value'
>;

export type TextFieldProps = Omit<
  ComponentPropsWithoutRef<'div'>,
  'onBlur' | 'onChange' | 'onFocus' | 'onClick'
> &
  TextFieldPropsShared & {
    /**
     * Additional props for the inner `Input`. Do not pass `value`,
     * `placeholder`, `isDisabled`, `isReadOnly`, `onFocus`, `onBlur`,
     * `onChange`, `id`, `name`, `type`, `maxLength`, or `required` here;
     * use the TextField-level props above.
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
