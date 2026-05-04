import {
  ButtonBaseShape,
  ButtonBaseSize,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useMemo } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

import { Box } from '../Box';
import { BoxRow } from '../BoxRow';
import { Icon, IconColor, IconSize } from '../Icon';
import { ButtonAnimated } from '../temp-components/ButtonAnimated';
import { Spinner } from '../temp-components/Spinner';
import { TextVariant, FontWeight, TextColor } from '../Text';

import {
  getButtonBaseBorderRadiusTwClass,
  getButtonBaseHorizontalPaddingTwClasses,
  TWCLASSMAP_BUTTONBASE_SIZE_DIMENSION,
} from './ButtonBase.constants';
import type { ButtonBaseProps } from './ButtonBase.types';

export const ButtonBase = ({
  children,
  textProps,
  size = ButtonBaseSize.Lg,
  shape = ButtonBaseShape.Rounded,
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

  const hasStart = Boolean(finalStartIconName || startAccessory);
  const hasEnd = Boolean(finalEndIconName || endAccessory);
  const hasSideContent = hasStart || hasEnd;

  const iconSize = size === ButtonBaseSize.Lg ? IconSize.Md : IconSize.Sm;
  const labelTextVariant =
    size === ButtonBaseSize.Sm ? TextVariant.BodySm : TextVariant.BodyMd;

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

        // Build button container styles
        const buttonStyles = tw.style(
          // Base layout - flex container for button content
          'flex-row items-center justify-center',
          // Visual styling
          'bg-muted overflow-hidden',
          // Conditional Border Radius and Horizontal Spacing based on requirements
          getButtonBaseBorderRadiusTwClass(size, shape),
          getButtonBaseHorizontalPaddingTwClasses(size, hasStart, hasEnd),
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
        }

        return computedStyle;
      }}
      {...props}
    >
      {({ pressed }) => (
        <>
          {/* Loading spinner overlay */}
          {isLoading && (
            <Box
              twClassName="absolute inset-0 flex items-center justify-center"
              testID="spinner-container"
            >
              <Spinner
                color={
                  textClassName
                    ? (textClassName(pressed) as IconColor)
                    : IconColor.IconDefault
                }
                loadingText={loadingText}
                {...spinnerProps}
                loadingTextProps={{
                  numberOfLines: 1,
                  variant: labelTextVariant,
                  twClassName: textClassName ? textClassName(pressed) : '',
                  ...spinnerProps?.loadingTextProps,
                }}
              />
            </Box>
          )}

          <BoxRow
            gap={hasSideContent ? 1 : 0}
            startAccessory={
              finalStartIconName ? (
                <Icon
                  name={finalStartIconName}
                  size={iconSize}
                  twClassName={`shrink-0 ${iconClassName ? iconClassName(pressed) : ''}`}
                  {...startIconProps}
                />
              ) : (
                startAccessory
              )
            }
            endAccessory={
              finalEndIconName ? (
                <Icon
                  name={finalEndIconName}
                  size={iconSize}
                  twClassName={`shrink-0 ${iconClassName ? iconClassName(pressed) : ''}`}
                  {...endIconProps}
                />
              ) : (
                endAccessory
              )
            }
            textProps={{
              variant: labelTextVariant,
              fontWeight: FontWeight.Medium,
              color: TextColor.TextDefault,
              ...textProps,
              twClassName:
                `shrink grow-0 flex-wrap text-center ${textClassName ? textClassName(pressed) : ''} ${textProps?.twClassName ?? ''}`.trim(),
            }}
            twClassName={isLoading ? 'opacity-0' : undefined}
          >
            {children}
          </BoxRow>
        </>
      )}
    </ButtonAnimated>
  );
};
