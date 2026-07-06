// Third party dependencies.
import type { ViewProps } from 'react-native';

/**
 * BottomSheetDialog component props.
 */
export type BottomSheetDialogProps = {
  /**
   * Optional content to display inside the dialog.
   */
  children?: React.ReactNode;
  /**
   * Optional prop to toggle full screen state of BottomSheetDialog.
   *
   * @default false
   */
  isFullscreen?: boolean;
  /**
   * Optional boolean that indicates if the sheet is swippable.
   * This affects whether or not tapping on the overlay will dismiss
   * the sheet as well, and whether the drag handle indicator is shown.
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
   * Optional callback that gets triggered when the sheet is closed.
   */
  onClose?: (hasPendingAction?: boolean) => void;
  /**
   * Optional callback that gets triggered when the sheet is opened.
   */
  onOpen?: (hasPendingAction?: boolean) => void;
  /**
   * Tailwind CSS classes for the dialog container.
   */
  twClassName?: string;
} & ViewProps;

/**
 * Ref handle for imperative control of the BottomSheetDialog.
 */
export type BottomSheetDialogRef = {
  /**
   * Imperatively close the dialog with an optional callback after animation completes.
   */
  onCloseDialog: (callback?: () => void) => void;
  /**
   * Imperatively open the dialog with an optional callback after animation completes.
   */
  onOpenDialog: (callback?: () => void) => void;
};
