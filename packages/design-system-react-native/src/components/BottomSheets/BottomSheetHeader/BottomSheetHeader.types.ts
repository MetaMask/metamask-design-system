// External dependencies.
import { ButtonIconProps } from '../../ButtonIcon/ButtonIcon.types';
import { HeaderBaseProps } from '../../HeaderBase/HeaderBase.types';

// Enums
export enum BottomSheetHeaderVariant {
  Display = 'display',
  Compact = 'compact',
}

/**
 * BottomSheetHeader component props.
 */
export type BottomSheetHeaderProps = {
  /**
   * Optional function to trigger when pressing the back button.
   */
  onBack?: () => void;
  /**
   * Optional props to pass to the back button component.
   */
  backButtonProps?: Partial<Omit<ButtonIconProps, 'iconName' | 'onPress'>>;
  /**
   * Optional function to trigger when pressing the close button.
   */
  onClose?: () => void;
  /**
   * Optional props to pass to the close button component.
   */
  closeButtonProps?: Partial<Omit<ButtonIconProps, 'iconName' | 'onPress'>>;
  /**
   * Optional prop to set the variant of the header (controls alignment and text size).
   * Display: left aligned with HeadingLG text.
   * Compact: center aligned with HeadingSM text.
   * @default BottomSheetHeaderVariant.Compact
   */
  variant?: BottomSheetHeaderVariant;
} & Omit<HeaderBaseProps, 'variant'>;
