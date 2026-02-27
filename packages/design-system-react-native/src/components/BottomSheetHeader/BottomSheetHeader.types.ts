import type { ButtonIconProps } from '../ButtonIcon/ButtonIcon.types';
import type { HeaderBaseProps } from '../HeaderBase/HeaderBase.types';

/**
 * Variant options for BottomSheetHeader component.
 * - Compact: Center-aligned title with HeadingSm text (default)
 * - Display: Left-aligned title with HeadingLg text
 */
export enum BottomSheetHeaderVariant {
  Display = 'display',
  Compact = 'compact',
}

/**
 * BottomSheetHeader component props.
 *
 * Extends HeaderBase's props (which extends ViewProps) to inherit standard
 * props such as `testID`, `accessibilityLabel`, and other View props.
 */
export type BottomSheetHeaderProps = {
  /**
   * Callback function triggered when the back button is pressed.
   * When provided, a back arrow ButtonIcon is rendered as the start accessory.
   */
  onBack?: () => void;
  /**
   * Props spread to the back ButtonIcon component for additional properties
   * like `testID` or `accessibilityLabel`. Use this for testing or accessibility purposes.
   * Note: `iconName` and `onPress` are managed internally and excluded.
   */
  backButtonProps?: Partial<Omit<ButtonIconProps, 'iconName' | 'onPress'>>;
  /**
   * Callback function triggered when the close button is pressed.
   * When provided, a close ButtonIcon is rendered as the end accessory.
   */
  onClose?: () => void;
  /**
   * Props spread to the close ButtonIcon component for additional properties
   * like `testID` or `accessibilityLabel`. Use this for testing or accessibility purposes.
   * Note: `iconName` and `onPress` are managed internally and excluded.
   */
  closeButtonProps?: Partial<Omit<ButtonIconProps, 'iconName' | 'onPress'>>;
  /**
   * Variant controlling header alignment and text size.
   * - Compact: center-aligned with HeadingSm text
   * - Display: left-aligned with HeadingLg text
   *
   * @default BottomSheetHeaderVariant.Compact
   */
  variant?: BottomSheetHeaderVariant;
} & Omit<HeaderBaseProps, 'variant'>;
