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
  twClassName,
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
        // Evaluate custom className if it's a function
        const customClassName =
          typeof twClassName === 'function'
            ? twClassName(pressed)
            : twClassName;

<<<<<<< HEAD
        const computedStyle: StyleProp<ViewStyle>[] = [
          tw.style(
            'flex-row items-center justify-center rounded-xl bg-muted px-4 min-w-[80px] overflow-hidden',
            TWCLASSMAP_BUTTONBASE_SIZE_DIMENSION[size],
            isDisabled ? 'opacity-50' : 'opacity-100',
            isFullWidth ? 'w-full' : 'w-auto',
            containerClassName,
          ),
        ];
        if (typeof style === 'function') {
          const additionalStyle = style({ pressed });
          if (additionalStyle) {
            computedStyle.push(additionalStyle);
          }
        } else if (style) {
          computedStyle.push(style);
=======
        // Build button container styles
        const buttonStyles = tw.style(
          // Base layout - flex container for button content
          'flex-row items-center justify-center gap-x-2',
          // Visual styling
          'rounded-xl bg-muted px-4 min-w-[80px] overflow-hidden',
          // Size
          TWCLASSMAP_BUTTONBASE_SIZE_DIMENSION[size],
          // State-based opacity
          isDisabled ? 'opacity-50' : 'opacity-100',
          // Width - use self-start to prevent stretching when not full width
          isFullWidth ? 'w-full' : 'self-start',
          // Custom classes
          customClassName,
        );

        // Merge with additional styles if provided
        const computedStyle: StyleProp<ViewStyle>[] = [buttonStyles];

        const additionalStyle =
          typeof style === 'function' ? style({ pressed }) : style;

        if (additionalStyle) {
          computedStyle.push(additionalStyle);
>>>>>>> 1a6e5c28 (fix: button base in flex row layouts and refactoring button animated)
        }

        return computedStyle;
      }}
      {...props}
    >
      {({ pressed }) => (
        <>
          {/* Loading spinner overlay */}
          {isLoading && (
            <View
              style={tw.style('absolute inset-0 flex items-center justify-center')}
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
          )}

          {/* Button content - opacity controlled by wrapper, no extra View needed */}
          {finalStartIconName ? (
            <Icon
              name={finalStartIconName}
              size={IconSize.Sm}
              twClassName={`shrink-0 ${isLoading ? 'opacity-0' : ''} ${iconClassName ? iconClassName(pressed) : ''}`}
              {...startIconProps}
            />
          ) : (
            startAccessory && (
              <View style={tw.style(isLoading && 'opacity-0')}>
                {startAccessory}
              </View>
            )
          )}

          <TextOrChildren
            textProps={{
              variant: TextVariant.BodyMd,
              fontWeight: FontWeight.Medium,
              color: TextColor.TextDefault,
              twClassName: `shrink grow-0 flex-wrap text-center ${isLoading ? 'opacity-0' : ''} ${textClassName ? textClassName(pressed) : ''}`,
              ...textProps,
            }}
          >
            {children}
          </TextOrChildren>

          {finalEndIconName ? (
            <Icon
              name={finalEndIconName}
              size={IconSize.Sm}
              twClassName={`shrink-0 ${isLoading ? 'opacity-0' : ''} ${iconClassName ? iconClassName(pressed) : ''}`}
              {...endIconProps}
            />
          ) : (
            endAccessory && (
              <View style={tw.style(isLoading && 'opacity-0')}>
                {endAccessory}
              </View>
            )
          )}
        </>
      )}
    </ButtonAnimated>
  );
};
