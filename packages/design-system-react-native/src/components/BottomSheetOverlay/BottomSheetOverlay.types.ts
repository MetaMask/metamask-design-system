// Third party dependencies.
import type { TouchableOpacityProps, ViewProps } from 'react-native';

/**
 * Overlay component props.
 */
export type BottomSheetOverlayProps = {
  /**
   * Tailwind CSS classes for the overlay container.
   */
  twClassName?: string;
  /**
   * Callback function triggered when the overlay is pressed.
   */
  onPress?: () => void;
  /**
   * Props spread to the TouchableOpacity component (e.g., testID for the button).
   * Note: onPress should be passed as a top-level prop, not through this object.
   */
  touchableOpacityProps?: Omit<TouchableOpacityProps, 'onPress' | 'style'>;
} & ViewProps;
