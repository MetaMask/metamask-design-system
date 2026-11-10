// Third party dependencies.
import type { ViewProps } from 'react-native';

// External dependencies.
import type { ButtonProps } from '../Button/Button.types';

/**
 * Buttons alignment options for the BottomSheetFooter.
 */
export enum ButtonsAlignment {
  Horizontal = 'Horizontal',
  Vertical = 'Vertical',
}

/**
 * Button props for BottomSheetFooter with variant enforced by the component.
 */
export type BottomSheetFooterButtonProps = Omit<ButtonProps, 'variant'>;

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
   * Optional props for the primary action button.
   * Renders with ButtonVariant.Primary automatically.
   * Appears after the secondary button (rightmost in a horizontal layout,
   * below it in a vertical layout) and above the tertiary button when set.
   */
  primaryButtonProps?: BottomSheetFooterButtonProps;
  /**
   * Optional props for the secondary action button.
   * Renders with ButtonVariant.Secondary automatically.
   * Appears first (leftmost in horizontal layout, top in vertical layout).
   */
  secondaryButtonProps?: BottomSheetFooterButtonProps;
  /**
   * Optional props for the tertiary action button.
   * Renders with ButtonVariant.Tertiary automatically.
   * Appears last. Use a vertical layout to place it under the other buttons.
   */
  tertiaryButtonProps?: BottomSheetFooterButtonProps;
  /**
   * Tailwind CSS classes for the footer container.
   */
  twClassName?: string;
} & ViewProps;
