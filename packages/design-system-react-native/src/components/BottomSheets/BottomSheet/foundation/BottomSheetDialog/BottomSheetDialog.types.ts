// Third party dependencies.
import { ViewProps } from 'react-native';

/**
 * BottomSheetDialog component props.
 */
export type BottomSheetDialogProps = {
  /**
   * Optional content to wrap to display.
   */
  children?: React.ReactNode;
  /**
   * Optional prop to toggle full screen state of BottomSheetDialog.
   *
   * @default false
   */
  isFullscreen?: boolean;
  /**
   * Optional boolean that indicates if sheet is swippable. This affects whether or not tapping on the overlay will dismiss the sheet as well.
   *
   * @default true
   */
  isInteractable?: boolean;
  /**
   * Optional boolean that indicates if the KeyboardAvoidingView is enabled.
   *
   * @default true
   */
  keyboardAvoidingViewEnabled?: boolean;
  /**
   * Optional callback that gets triggered when sheet is closed.
   */
  onClose?: (hasPendingAction?: boolean) => void;
  /**
   * Optional callback that gets triggered when sheet is opened.
   */
  onOpen?: (hasPendingAction?: boolean) => void;
} & ViewProps;

export type BottomSheetDialogRef = {
  onCloseDialog: (callback?: () => void) => void;
  onOpenDialog: (callback?: () => void) => void;
};

