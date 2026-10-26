// External dependencies.
import type { ButtonIconProps } from '../ButtonIcon';
import type { TextFieldProps } from '../TextField';

/**
 * TextFieldSearch component props.
 */
export type TextFieldSearchProps = TextFieldProps & {
  /**
   * Accessible name for the inner `TextInput`. Required, including when the
   * search field does not have a visible label.
   */
  inputAccessibilityLabel: string;
  /**
   * Optional prop to pass any additional props to the clear button.
   */
  clearButtonProps?: Partial<ButtonIconProps>;
  /**
   * Function to trigger when pressing the clear button.
   * The clear button is automatically shown when the input has a value.
   */
  onPressClearButton: () => void;
};
