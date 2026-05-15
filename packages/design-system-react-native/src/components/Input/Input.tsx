import { FontFamily, TextVariant } from '@metamask/design-system-shared';
import {
  Theme,
  useTailwind,
  useTheme,
} from '@metamask/design-system-twrnc-preset';
import { darkTheme, lightTheme } from '@metamask/design-tokens';
import { forwardRef, useCallback, useEffect, useMemo, useState } from 'react';
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

    // Multiline field styles
    const multilineChromeStyle = useMemo(
      () =>
        tw.style(
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
      [isStateStylesDisabled, isDisabled, isFocused, twClassName, tw],
    );
    const multilineTypographyStyle = useMemo(
      () => tw.style(`text-${textVariant}`, fontClass),
      [textVariant, fontClass, tw],
    );

    // Single-line field styles
    const singleLineChromeStyle = useMemo(
      () =>
        tw.style(
          fontClass,
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
        isStateStylesDisabled,
        isDisabled,
        isFocused,
        twClassName,
        tw,
      ],
    );
    const singleLineTypographyStyle = useMemo(
      () => MAP_TEXT_VARIANT_INPUT_METRICS[textVariant],
      [textVariant],
    );
    // iOS-only single-line placeholder fix: native TextInput can render
    // placeholder text vertically offset. Do not use on Android (lineHeight 0
    // collapses text) or on multiline (breaks paragraph layout).
    const iosSingleLinePlaceholderLineHeightFix = Platform.OS === 'ios' &&
      isPlaceholderVisible && { lineHeight: 0 as const };

    const resolvedStyle = (
      isMultiline
        ? [multilineChromeStyle, multilineTypographyStyle, style]
        : [
            singleLineChromeStyle,
            singleLineTypographyStyle,
            iosSingleLinePlaceholderLineHeightFix,
            style,
          ]
    ).filter(Boolean);

    useEffect(() => {
      if (isDisabled || isReadOnly) {
        setIsFocused(false);
      }
    }, [isDisabled, isReadOnly]);

    const onBlurHandler = useCallback(
      (e: Parameters<NonNullable<InputProps['onBlur']>>[0]) => {
        setIsFocused(false);
        onBlur?.(e);
      },
      [onBlur],
    );

    const onFocusHandler = useCallback(
      (e: Parameters<NonNullable<InputProps['onFocus']>>[0]) => {
        setIsFocused(true);
        onFocus?.(e);
      },
      [onFocus],
    );

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
