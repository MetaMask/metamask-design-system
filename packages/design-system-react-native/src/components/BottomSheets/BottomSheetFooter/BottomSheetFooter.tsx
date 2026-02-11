// Third party dependencies.
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { View } from 'react-native';

// External dependencies.
import { Button } from '../../Button';

// Internal dependencies.
import {
  DEFAULT_BOTTOMSHEETFOOTER_BUTTONSALIGNMENT,
  TESTID_BOTTOMSHEETFOOTER,
  TESTID_BOTTOMSHEETFOOTER_BUTTON,
  TESTID_BOTTOMSHEETFOOTER_BUTTON_SUBSEQUENT,
} from './BottomSheetFooter.constants';
import {
  BottomSheetFooterProps,
  ButtonsAlignment,
} from './BottomSheetFooter.types';

const BottomSheetFooter: React.FC<BottomSheetFooterProps> = ({
  style,
  buttonsAlignment = DEFAULT_BOTTOMSHEETFOOTER_BUTTONSALIGNMENT,
  buttonPropsArray,
}) => {
  const tw = useTailwind();
  const isHorizontal = buttonsAlignment === ButtonsAlignment.Horizontal;
  const buttonBaseClass = isHorizontal ? 'flex-1' : 'self-stretch';
  const gapClass = isHorizontal ? 'ml-4' : 'mt-4';

  return (
    <View
      style={[tw`${isHorizontal ? 'flex-row' : 'flex-col'} px-2 py-1`, style]}
      testID={TESTID_BOTTOMSHEETFOOTER}
    >
      {buttonPropsArray.map((buttonProp, index) => (
        <Button
          key={index}
          style={tw`${buttonBaseClass}${index > 0 ? ` ${gapClass}` : ''}`}
          testID={
            index > 0
              ? TESTID_BOTTOMSHEETFOOTER_BUTTON_SUBSEQUENT
              : TESTID_BOTTOMSHEETFOOTER_BUTTON
          }
          {...buttonProp}
        />
      ))}
    </View>
  );
};

export default BottomSheetFooter;
