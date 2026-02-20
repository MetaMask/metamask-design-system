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
   * Appears second (rightmost in horizontal layout, bottom in vertical layout).
   */
  primaryButtonProps?: BottomSheetFooterButtonProps;
  /**
   * Optional props for the secondary action button.
   * Renders with ButtonVariant.Secondary automatically.
   * Appears first (leftmost in horizontal layout, top in vertical layout).
   */
  secondaryButtonProps?: BottomSheetFooterButtonProps;
  /**
   * Tailwind CSS classes for the footer container.
   */
  twClassName?: string;
} & ViewProps;
