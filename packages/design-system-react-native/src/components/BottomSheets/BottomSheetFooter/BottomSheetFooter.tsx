// Third party dependencies.
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { View } from 'react-native';

// External dependencies.
import { Button } from '../../Button';

// Internal dependencies.
import { DEFAULT_BOTTOMSHEETFOOTER_BUTTONSALIGNMENT } from './BottomSheetFooter.constants';
import type { BottomSheetFooterProps } from './BottomSheetFooter.types';
import { ButtonsAlignment } from './BottomSheetFooter.types';

export const BottomSheetFooter: React.FC<BottomSheetFooterProps> = ({
  style,
  twClassName,
  buttonsAlignment = DEFAULT_BOTTOMSHEETFOOTER_BUTTONSALIGNMENT,
  buttonPropsArray,
  ...props
}) => {
  const tw = useTailwind();
  const isHorizontal = buttonsAlignment === ButtonsAlignment.Horizontal;
  const buttonBaseClass = isHorizontal ? 'flex-1' : 'self-stretch';
  const gapClass = isHorizontal ? 'ml-4' : 'mt-4';

  return (
    <View
      style={[
        tw.style(
          isHorizontal ? 'flex-row' : 'flex-col',
          'px-2 py-1',
          twClassName,
        ),
        style,
      ]}
      {...props}
    >
      {buttonPropsArray.map((buttonProp, index) => (
        <Button
          key={index}
          style={tw.style(buttonBaseClass, index > 0 && gapClass)}
          {...buttonProp}
        />
      ))}
    </View>
  );
};
