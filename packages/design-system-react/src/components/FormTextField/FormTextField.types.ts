import type { CSSProperties, ReactNode } from 'react';

import type { HelpTextProps } from '../HelpText';
import type { LabelProps } from '../Label';
import type { TextFieldProps } from '../TextField';

/**
 * Props forwarded to the inner `TextField`. Omits keys that consumers must
 * pass at the `FormTextField` level (so a single source of truth controls the
 * input identity and value); `className` / `style` here style the inner
 * `TextField` and are merged with its own defaults.
 */
type FormTextFieldInnerTextFieldProps = Omit<
  TextFieldProps,
  'id' | 'onChange' | 'value'
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
