// External dependencies.
import { ButtonVariant } from '../../Button';

// Internal dependencies.
import {
  ButtonsAlignment,
  BottomSheetFooterProps,
} from './BottomSheetFooter.types';

// Test IDs
export const TESTID_BOTTOMSHEETFOOTER = 'bottomsheetfooter';
export const TESTID_BOTTOMSHEETFOOTER_BUTTON = 'bottomsheetfooter-button';
export const TESTID_BOTTOMSHEETFOOTER_BUTTON_SUBSEQUENT =
  'bottomsheetfooter-button-subsequent';

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
