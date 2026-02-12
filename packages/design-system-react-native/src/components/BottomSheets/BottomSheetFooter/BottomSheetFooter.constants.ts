// External dependencies.
import { ButtonVariant } from '../../Button';

// Internal dependencies.
import type { BottomSheetFooterProps } from './BottomSheetFooter.types';
import { ButtonsAlignment } from './BottomSheetFooter.types';

// Defaults
export const DEFAULT_BOTTOMSHEETFOOTER_BUTTONSALIGNMENT =
  ButtonsAlignment.Horizontal;

// Sample consts
export const SAMPLE_BOTTOMSHEETFOOTER_PROPS: BottomSheetFooterProps = {
  // for mobile use `Vertical` to see buttons on the screen
  buttonsAlignment: ButtonsAlignment.Vertical,
  buttonPropsArray: [
    {
      variant: ButtonVariant.Secondary,
      children: 'Cancel',
      onPress: () => {
        console.log('Cancel button clicked');
      },
    },
    {
      variant: ButtonVariant.Primary,
      children: 'Submit',
      onPress: () => {
        console.log('Submit button clicked');
      },
    },
  ],
};
