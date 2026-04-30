import { FontFamily, TextVariant } from '@metamask/design-system-shared';
import {
  Theme,
  useTailwind,
  useTheme,
} from '@metamask/design-system-twrnc-preset';
import { darkTheme, lightTheme } from '@metamask/design-tokens';
import { forwardRef, useCallback, useMemo, useState } from 'react';
import { Platform, TextInput } from 'react-native';

import {
  TWCLASSMAP_TEXT_VARIANT_FONTWEIGHT,
  TWCLASSMAP_TEXT_FONTWEIGHT,
} from '../Text/Text.constants';

import { MAP_TEXT_VARIANT_INPUT_METRICS } from './Input.constants';
import type { InputProps } from './Input.types';

export const Input = forwardRef<TextInput, InputProps>(
  (
    {
      style,
      textVariant = TextVariant.BodyMd,
      isStateStylesDisabled,
      isDisabled = false,
      isReadOnly = false,
      value,
      placeholder,
      twClassName,
      onBlur,
      onFocus,
      autoFocus = false,
      multiline,
      ...props
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(autoFocus);
    const tw = useTailwind();
    const theme = useTheme();
    const isMultiline = multiline === true;

    const placeholderTextColor = useMemo(
      () =>
        theme === Theme.Light
          ? lightTheme.colors.text.alternative
          : darkTheme.colors.text.alternative,
      [theme],
    );

    const finalFontWeight = TWCLASSMAP_TEXT_VARIANT_FONTWEIGHT[textVariant];
    const fontSuffix = TWCLASSMAP_TEXT_FONTWEIGHT[finalFontWeight];
    const fontClass = `font-${FontFamily.Default}${fontSuffix}`;
    const hasPlaceholder =
      placeholder !== undefined && placeholder !== null && placeholder !== '';
    // Only apply placeholder-mode styling when a placeholder is present and
    // the controlled value is empty. This keeps the iOS lineHeight workaround
    // scoped to the placeholder-visible state without affecting typed text.
    const isPlaceholderVisible = hasPlaceholder && value === '';

    const inputStyle = useMemo(
      () =>
        tw.style(
          !isMultiline && fontClass,
          'text-default',
          'bg-default',
          'border',
          'border-transparent',
          !isStateStylesDisabled && isDisabled && 'opacity-50',
          !isStateStylesDisabled &&
            !isDisabled &&
            isFocused &&
            'border-primary-default',
          twClassName,
        ),
      [
        fontClass,
        isMultiline,
        isStateStylesDisabled,
        isDisabled,
        isFocused,
        twClassName,
        tw,
      ],
    );

    const variantTextStyle = useMemo(
      () =>
        isMultiline
          ? tw.style(`text-${textVariant}`, fontClass)
          : MAP_TEXT_VARIANT_INPUT_METRICS[textVariant],
      [isMultiline, textVariant, fontClass, tw],
    );

    /* istanbul ignore next: handler body covered by focus/blur tests */
    const onBlurHandler = useCallback(
      (e: Parameters<NonNullable<InputProps['onBlur']>>[0]) => {
        if (!isDisabled) {
          setIsFocused(false);
          onBlur?.(e);
        }
      },
      [isDisabled, onBlur],
    );

    /* istanbul ignore next: handler body covered by focus/blur tests */
    const onFocusHandler = useCallback(
      (e: Parameters<NonNullable<InputProps['onFocus']>>[0]) => {
        if (!isDisabled) {
          setIsFocused(true);
          onFocus?.(e);
        }
      },
      [isDisabled, onFocus],
    );
    const resolvedStyle = [
      inputStyle,
      variantTextStyle,
      // iOS-only workaround: when a placeholder is visible, native iOS
      // TextInput can render placeholder text vertically offset.
      // Keep this iOS-only because lineHeight: 0 can collapse text on Android.
      // Skip for multiline: lineHeight 0 breaks paragraph layout; single-line only.
      Platform.OS === 'ios' &&
        isPlaceholderVisible &&
        !isMultiline && { lineHeight: 0 as const },
      style,
    ].filter(Boolean);

    return (
      <TextInput
        ref={ref}
        {...props}
        multiline={multiline}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        value={value}
        style={resolvedStyle}
        editable={!isDisabled && !isReadOnly}
        autoFocus={autoFocus}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
      />
    );
  },
);
