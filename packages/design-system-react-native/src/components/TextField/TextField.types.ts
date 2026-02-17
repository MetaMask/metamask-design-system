// Third party dependencies.
import type { TextInputProps, ViewProps } from 'react-native';

/**
 * TextField sizes.
 */
export enum TextFieldSize {
  Sm = '32',
  Md = '40',
  Lg = '48',
}

/**
 * TextField component props.
 */
export type TextFieldProps = {
  /**
   * Size of the TextField.
   *
   * @default TextFieldSize.Md
   */
  size?: TextFieldSize;
  /**
   * Content to display before the input.
   */
  startAccessory?: React.ReactNode;
  /**
   * Content to display after the input.
   */
  endAccessory?: React.ReactNode;
  /**
   * Whether to show the error state.
   *
   * @default false
   */
  isError?: boolean;
  /**
   * Whether the input is disabled.
   *
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Whether the input is read-only.
   *
   * @default false
   */
  isReadonly?: boolean;
  /**
   * Tailwind CSS classes for the container.
   */
  twClassName?: string;
  /**
   * Placeholder text for the input.
   */
  placeholder?: string;
  /**
   * Current value of the input.
   */
  value?: string;
  /**
   * Callback when the input text changes.
   */
  onChangeText?: (text: string) => void;
  /**
   * Callback when the input loses focus.
   */
  onBlur?: TextInputProps['onBlur'];
  /**
   * Callback when the input gains focus.
   */
  onFocus?: TextInputProps['onFocus'];
  /**
   * Whether to auto-focus the input on mount.
   *
   * @default false
   */
  autoFocus?: boolean;
  /**
   * Optional custom input element to replace the default TextInput.
   */
  inputElement?: React.ReactNode;
  /**
   * Props spread to the internal TextInput component (e.g., testID, keyboardType).
   * Note: Common props (placeholder, value, onChangeText, onBlur, onFocus, autoFocus)
   * should be passed as top-level props, not through this object.
   */
  textInputProps?: Omit<
    TextInputProps,
    | 'editable'
    | 'onBlur'
    | 'onFocus'
    | 'autoFocus'
    | 'placeholder'
    | 'value'
    | 'onChangeText'
    | 'style'
  >;
} & ViewProps;
