// Third party dependencies.
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { View } from 'react-native';

// External dependencies.
import { Button, ButtonVariant } from '../../Button';

// Internal dependencies.
import { DEFAULT_BOTTOMSHEETFOOTER_BUTTONSALIGNMENT } from './BottomSheetFooter.constants';
import type { BottomSheetFooterProps } from './BottomSheetFooter.types';
import { ButtonsAlignment } from './BottomSheetFooter.types';

export const BottomSheetFooter: React.FC<BottomSheetFooterProps> = ({
  style,
  twClassName,
  buttonsAlignment = DEFAULT_BOTTOMSHEETFOOTER_BUTTONSALIGNMENT,
  primaryButtonProps,
  secondaryButtonProps,
  ...props
}) => {
  const tw = useTailwind();
  const isHorizontal = buttonsAlignment === ButtonsAlignment.Horizontal;
  const buttonBaseClass = isHorizontal ? 'flex-1' : 'self-stretch';
  const gapClass = isHorizontal ? 'ml-4' : 'mt-4';
  const hasBothButtons =
    Boolean(primaryButtonProps) && Boolean(secondaryButtonProps);

  if (!primaryButtonProps && !secondaryButtonProps) {
    return null;
  }

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
      {secondaryButtonProps && (
        <Button
          {...secondaryButtonProps}
          variant={ButtonVariant.Secondary}
          style={[tw.style(buttonBaseClass), secondaryButtonProps.style]}
        />
      )}
      {primaryButtonProps && (
        <Button
          {...primaryButtonProps}
          variant={ButtonVariant.Primary}
          style={[
            tw.style(buttonBaseClass, hasBothButtons && gapClass),
            primaryButtonProps.style,
          ]}
        />
      )}
    </View>
  );
};
