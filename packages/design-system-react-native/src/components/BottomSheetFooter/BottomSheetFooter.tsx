// Third party dependencies.
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { View } from 'react-native';

// External dependencies.
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
  const gapClass = isHorizontal ? 'ml-4' : 'mt-4';
  const hasPrimaryAndSecondary =
    Boolean(primaryButtonProps) && Boolean(secondaryButtonProps);
  const hasActionButtons = Boolean(primaryButtonProps || secondaryButtonProps);
  // Tertiary always sits at the bottom. When primary and secondary share a
  // row, that row is stacked above the tertiary button.
  const pinTertiaryToBottom =
    Boolean(tertiaryButtonProps) && isHorizontal && hasActionButtons;

  if (!hasActionButtons && !tertiaryButtonProps) {
    return null;
  }

  const secondaryButton = secondaryButtonProps ? (
    <Button
      {...secondaryButtonProps}
      variant={ButtonVariant.Secondary}
      style={[tw.style(buttonBaseClass), secondaryButtonProps.style]}
    />
  ) : null;

  const primaryButton = primaryButtonProps ? (
    <Button
      {...primaryButtonProps}
      variant={ButtonVariant.Primary}
      style={[
        tw.style(buttonBaseClass, hasPrimaryAndSecondary && gapClass),
        primaryButtonProps.style,
      ]}
    />
  ) : null;

  const tertiaryButton = tertiaryButtonProps ? (
    <Button
      {...tertiaryButtonProps}
      variant={ButtonVariant.Tertiary}
      style={[
        tw.style(
          pinTertiaryToBottom ? 'self-stretch' : buttonBaseClass,
          hasActionButtons && 'mt-4',
        ),
        tertiaryButtonProps.style,
      ]}
    />
  ) : null;

  if (pinTertiaryToBottom) {
    return (
      <View
        style={[tw.style('flex-col px-4 py-0', twClassName), style]}
        {...props}
      >
        <View style={tw.style('flex-row')}>
          {secondaryButton}
          {primaryButton}
        </View>
        {tertiaryButton}
      </View>
    );
  }

  return (
    <View
      style={[
        tw.style(
          isHorizontal ? 'flex-row' : 'flex-col',
          'px-4 py-0',
          twClassName,
        ),
        style,
      ]}
      {...props}
    >
      {secondaryButton}
      {primaryButton}
      {tertiaryButton}
    </View>
  );
};
