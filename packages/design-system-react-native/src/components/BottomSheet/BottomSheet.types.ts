import type { BottomSheetDialogProps } from '../BottomSheetDialog/BottomSheetDialog.types';

/**
 * BottomSheet component props.
 */
export type BottomSheetProps = {
  /**
   * Optional callback. Will be **always** invoked when provided.
   * This callback serves as a replacement for `shouldNavigateBack` prop.
   */
  goBack?: () => void;

  /**
   * Optional boolean that indicates if the KeyboardAvoidingView is enabled.
   *
   * @default true
   */
  keyboardAvoidingViewEnabled?: boolean;
} & BottomSheetDialogProps;

export type BottomSheetPostCallback = () => void;

export type BottomSheetRef = {
  onOpenBottomSheet: (callback?: BottomSheetPostCallback) => void;
  onCloseBottomSheet: (callback?: BottomSheetPostCallback) => void;
};
