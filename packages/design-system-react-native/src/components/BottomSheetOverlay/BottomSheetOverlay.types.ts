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

/**
 * Ref handle for imperative control of overlay fade animations.
 */
export type BottomSheetOverlayRef = {
  /**
   * Fade the overlay in.
   */
  fadeIn: () => void;
  /**
   * Fade the overlay out with an optional callback after animation completes.
   */
  fadeOut: (callback?: () => void) => void;
};
