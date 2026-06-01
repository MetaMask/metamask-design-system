import type { CSSProperties, ReactNode } from 'react';

import type { HelpTextProps } from '../HelpText';
import type { LabelProps } from '../Label';
import type { TextFieldProps } from '../TextField';

/**
 * Props forwarded to the inner `TextField`. Omits every key that
 * `FormTextField` already owns at the top level — passing those via
 * `textFieldProps` would either be silently overridden by the explicit prop
 * or, in the case of `isError`, desynchronize the `TextField` from the
 * `HelpText` severity. `className` / `style` remain available here to style
 * the inner `TextField` (merged with its own defaults).
 */
type FormTextFieldInnerTextFieldProps = Omit<
  TextFieldProps,
  | 'autoFocus'
  | 'endAccessory'
  | 'id'
  | 'inputElement'
  | 'inputProps'
  | 'inputRef'
  | 'isDisabled'
  | 'isError'
  | 'isReadOnly'
  | 'maxLength'
  | 'name'
  | 'onBlur'
  | 'onChange'
  | 'onFocus'
  | 'placeholder'
  | 'required'
  | 'size'
  | 'startAccessory'
  | 'truncate'
  | 'type'
  | 'value'
>;

type FormTextFieldBaseProps = Omit<TextFieldProps, 'className' | 'style'> & {
  /** Optional additional CSS classes for the root container. */
  className?: string;
  /** Optional inline styles for the root container. */
  style?: CSSProperties;
  /**
   * Help text rendered below the field. Renders with error styling when
   * `isError` is true.
   */
  helpText?: ReactNode;
  /** Additional props forwarded to the rendered `HelpText`. */
  helpTextProps?: Omit<HelpTextProps, 'severity' | 'children'>;
  /** Additional props forwarded to the inner `TextField`. */
  textFieldProps?: FormTextFieldInnerTextFieldProps;
};

type FormTextFieldWithLabelProps = FormTextFieldBaseProps & {
  /**
   * Label rendered above the field. When set, `id` is required so the label
   * can be associated with the inner `<input>`.
   */
  label: ReactNode;
  /** Additional props forwarded to the rendered `Label`. */
  labelProps?: Omit<LabelProps, 'htmlFor' | 'children'>;
  /**
   * Required when `label` is provided. Used as the `htmlFor` target of the
   * label and the `id` of the inner `<input>`.
   */
  id: string;
};

type FormTextFieldWithoutLabelProps = FormTextFieldBaseProps & {
  label?: never;
  labelProps?: never;
  id?: string;
};

export type FormTextFieldProps =
  | FormTextFieldWithLabelProps
  | FormTextFieldWithoutLabelProps;
