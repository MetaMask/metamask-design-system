// External dependencies.
import type { ButtonIconProps } from '../ButtonIcon/index.js';
import type { TextFieldProps } from '../TextField/index.js';

/**
 * TextFieldSearch component props.
 */
export type TextFieldSearchProps = TextFieldProps & {
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
