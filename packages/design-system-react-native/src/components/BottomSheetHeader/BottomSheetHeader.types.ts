import type { ButtonIconProps } from '../ButtonIcon/ButtonIcon.types';
import type { HeaderBaseProps } from '../HeaderBase/HeaderBase.types';

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
} & HeaderBaseProps;
