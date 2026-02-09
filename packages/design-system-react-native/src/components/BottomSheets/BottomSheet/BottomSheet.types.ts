// Internal dependencies.
import { BottomSheetDialogProps } from './foundation/BottomSheetDialog/BottomSheetDialog.types';

/**
 * BottomSheet component props.
 */
export type BottomSheetProps = {
  /**
   * Optional boolean that indicates if sheet isUnmounted from the stack or not when closed.
   *
   * @default true
   */
  shouldNavigateBack?: boolean;

  /**
   * Optional callback that get's called `shouldNavigateBack` is true and sheet gets closed.
   */
  goBack: () => void;

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
