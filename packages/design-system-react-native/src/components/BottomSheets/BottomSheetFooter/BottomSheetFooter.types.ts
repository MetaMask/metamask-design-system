// Third party dependencies.
import type { ViewProps } from 'react-native';

// External dependencies.
import type { ButtonProps } from '../../Button/Button.types';

/**
 * Buttons alignment options for the BottomSheetFooter.
 */
export enum ButtonsAlignment {
  Horizontal = 'Horizontal',
  Vertical = 'Vertical',
}

/**
 * BottomSheetFooter component props.
 */
export type BottomSheetFooterProps = {
  /**
   * Optional prop to control the alignment of the buttons.
   *
   * @default ButtonsAlignment.Horizontal
   */
  buttonsAlignment?: ButtonsAlignment;
  /**
   * Array of button props that will be rendered as buttons in the footer.
   */
  buttonPropsArray: ButtonProps[];
  /**
   * Tailwind CSS classes for the footer container.
   */
  twClassName?: string;
} & ViewProps;
