import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useMemo } from 'react';
import { View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

import { ButtonBaseSize } from '../../types';
import { Icon, IconColor, IconSize } from '../Icon';
import { ButtonAnimated } from '../temp-components/ButtonAnimated';
import { Spinner } from '../temp-components/Spinner';
import { TextOrChildren } from '../temp-components/TextOrChildren/TextOrChildren';
import { TextVariant, FontWeight, TextColor } from '../Text';

import { TWCLASSMAP_BUTTONBASE_SIZE_DIMENSION } from './ButtonBase.constants';
import type { ButtonBaseProps } from './ButtonBase.types';

export const ButtonBase = ({
  children,
  textProps,
  size = ButtonBaseSize.Lg,
  isLoading,
  loadingText,
  spinnerProps,
  startIconName,
  startIconProps,
  startAccessory,
  endIconName,
  endIconProps,
  endAccessory,
  isDisabled,
  isFullWidth,
  twClassName = '',
  textClassName,
  iconClassName,
  style,
  accessibilityLabel,
  accessibilityHint,
  accessibilityRole = 'button',
  accessibilityActions,
  onAccessibilityAction,
  ...props
}: ButtonBaseProps) => {
  const tw = useTailwind();

  const finalStartIconName = startIconName ?? startIconProps?.name;
  const finalEndIconName = endIconName ?? endIconProps?.name;

  // Generate accessibility label if not provided
  const finalAccessibilityLabel = useMemo(() => {
    if (accessibilityLabel) {
      return accessibilityLabel;
    }

    // For loading state with loadingText, prioritize loadingText
    if (isLoading && loadingText) {
      return loadingText;
    }

    // If children is a string, use it as the label
    if (typeof children === 'string') {
      return children;
    }

    return undefined;
  }, [accessibilityLabel, children, isLoading, loadingText]);

  // Generate accessibility hint for loading state if not provided
  const finalAccessibilityHint = useMemo(() => {
    if (accessibilityHint) {
      return accessibilityHint;
    }

    if (isLoading) {
      return 'Button is currently loading, please wait';
    }

    return undefined;
  }, [accessibilityHint, isLoading]);

  // Create accessibilityState object with only truthy values
  const accessibilityState = useMemo(() => {
    const state: { disabled?: boolean; busy?: boolean } = {};

    if (isDisabled || isLoading) {
      state.disabled = true;
    }

    if (isLoading) {
      state.busy = true;
    }

    return state;
  }, [isDisabled, isLoading]);

  return (
    <ButtonAnimated
      disabled={isDisabled || isLoading}
      accessibilityRole={accessibilityRole}
      accessibilityLabel={finalAccessibilityLabel}
      accessibilityHint={finalAccessibilityHint}
      accessibilityActions={accessibilityActions}
      onAccessibilityAction={onAccessibilityAction}
      accessibilityState={accessibilityState}
      accessible
      style={({ pressed }) => {
        const containerClassName =
          typeof twClassName === 'function'
            ? twClassName(pressed)
            : twClassName;

        const baseContainerClassNames = `
          flex-row items-center justify-center rounded-xl bg-muted px-4 min-w-[80px] overflow-hidden
          ${TWCLASSMAP_BUTTONBASE_SIZE_DIMENSION[size]}
          ${isDisabled ? 'opacity-50' : 'opacity-100'}
          ${isFullWidth ? 'w-full' : 'w-auto'}
          ${containerClassName}
        `;

        const computedStyle: StyleProp<ViewStyle>[] = [
          tw`${baseContainerClassNames}`,
        ];
        if (typeof style === 'function') {
          const additionalStyle = style({ pressed });
          if (additionalStyle) {
            computedStyle.push(additionalStyle);
          }
        } else if (style) {
          computedStyle.push(style);
        }

        return computedStyle;
      }}
      {...props}
    >
      {({ pressed }) => (
        <>
          <View
            style={tw`absolute inset-0 flex items-center justify-center ${
              isLoading ? 'opacity-100' : 'opacity-0'
            }`}
            testID="spinner-container"
          >
            <Spinner
              color={
                textClassName
                  ? (textClassName(pressed) as IconColor)
                  : IconColor.IconDefault
              }
              loadingText={loadingText}
              loadingTextProps={{
                numberOfLines: 1,
                twClassName: textClassName ? textClassName(pressed) : '',
                ...spinnerProps?.loadingTextProps,
              }}
              {...spinnerProps}
            />
          </View>
          <View
            style={tw`flex-row items-center justify-center gap-x-2 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            testID="content-container"
          >
            {finalStartIconName ? (
              <Icon
                name={finalStartIconName}
                size={IconSize.Sm}
                twClassName={`shrink-0 ${iconClassName ? iconClassName(pressed) : ''}`}
                {...startIconProps}
              />
            ) : (
              startAccessory
            )}
            <TextOrChildren
              textProps={{
                variant: TextVariant.BodyMd,
                fontWeight: FontWeight.Medium,
                color: TextColor.TextDefault,
                twClassName: `shrink grow-0 flex-wrap text-center ${textClassName ? textClassName(pressed) : ''}`,
                ...textProps,
              }}
            >
              {children}
            </TextOrChildren>
            {finalEndIconName ? (
              <Icon
                name={finalEndIconName}
                size={IconSize.Sm}
                twClassName={`shrink-0 ${iconClassName ? iconClassName(pressed) : ''}`}
                {...endIconProps}
              />
            ) : (
              endAccessory
            )}
          </View>
        </>
      )}
    </ButtonAnimated>
  );
};
