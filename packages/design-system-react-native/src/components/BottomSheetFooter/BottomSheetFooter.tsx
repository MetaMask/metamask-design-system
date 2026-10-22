// Third party dependencies.
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';

// External dependencies.
import { Box, BoxFlexDirection } from '../Box';
import { Button, ButtonVariant } from '../Button';

// Internal dependencies.
import type { BottomSheetFooterProps } from './BottomSheetFooter.types';
import { ButtonsAlignment } from './BottomSheetFooter.types';

export const BottomSheetFooter: React.FC<BottomSheetFooterProps> = ({
  style,
  twClassName,
  buttonsAlignment = ButtonsAlignment.Horizontal,
  primaryButtonProps,
  secondaryButtonProps,
  tertiaryButtonProps,
  ...props
}) => {
  const tw = useTailwind();
  const isHorizontal = buttonsAlignment === ButtonsAlignment.Horizontal;
  const buttonBaseClass = isHorizontal ? 'flex-1' : 'self-stretch';

  if (!primaryButtonProps && !secondaryButtonProps && !tertiaryButtonProps) {
    return null;
  }

  return (
    <Box
      flexDirection={
        isHorizontal ? BoxFlexDirection.Row : BoxFlexDirection.Column
      }
      gap={4}
      paddingHorizontal={4}
      paddingVertical={0}
      twClassName={twClassName}
      style={style}
      {...props}
    >
      {secondaryButtonProps ? (
        <Button
          {...secondaryButtonProps}
          variant={ButtonVariant.Secondary}
          style={[tw.style(buttonBaseClass), secondaryButtonProps.style]}
        />
      ) : null}
      {primaryButtonProps ? (
        <Button
          {...primaryButtonProps}
          variant={ButtonVariant.Primary}
          style={[tw.style(buttonBaseClass), primaryButtonProps.style]}
        />
      ) : null}
      {tertiaryButtonProps ? (
        <Button
          {...tertiaryButtonProps}
          variant={ButtonVariant.Tertiary}
          style={[tw.style(buttonBaseClass), tertiaryButtonProps.style]}
        />
      ) : null}
    </Box>
  );
};
