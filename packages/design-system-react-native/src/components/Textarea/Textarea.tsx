import {
  Theme,
  useTailwind,
  useTheme,
} from '@metamask/design-system-twrnc-preset';
import { darkTheme, lightTheme } from '@metamask/design-tokens';
import { forwardRef, useCallback, useMemo, useState } from 'react';
import { TextInput } from 'react-native';

import { FontFamily, TextVariant } from '../../types';
import {
  MAP_TEXT_VARIANT_FONTWEIGHT,
  TWCLASSMAP_TEXT_FONTWEIGHT,
} from '../Text/Text.constants';

import {
  MAP_TEXT_VARIANT_TEXTAREA_METRICS,
  TEXTAREA_DEFAULT_NUMBER_OF_LINES,
} from './Textarea.constants';
import type { TextareaProps } from './Textarea.types';

export const Textarea = forwardRef<TextInput, TextareaProps>(
  (
    {
      style,
      textVariant = TextVariant.BodyMd,
      isStateStylesDisabled,
      isDisabled = false,
      isReadOnly = false,
      isError = false,
      numberOfLines = TEXTAREA_DEFAULT_NUMBER_OF_LINES,
      value,
      placeholder,
      twClassName,
      onBlur,
      onFocus,
      autoFocus = false,
      ...props
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(autoFocus);
    const tw = useTailwind();
    const theme = useTheme();

    const placeholderTextColor = useMemo(
      () =>
        theme === Theme.Light
          ? lightTheme.colors.text.alternative
          : darkTheme.colors.text.alternative,
      [theme],
    );

    const finalFontWeight = MAP_TEXT_VARIANT_FONTWEIGHT[textVariant];
    const fontSuffix = TWCLASSMAP_TEXT_FONTWEIGHT[finalFontWeight];
    const fontClass = `font-${FontFamily.Default}${fontSuffix}`;

    const textareaStyle = useMemo(
      () =>
        tw.style(
          fontClass,
          'text-default',
          'bg-default',
          'border',
          !isError && 'border-transparent',
          isError && 'border-error-default',
          !isStateStylesDisabled && isDisabled && 'opacity-50',
          !isStateStylesDisabled &&
            !isDisabled &&
            isFocused &&
            !isError &&
            'border-primary-default',
          !isStateStylesDisabled &&
            !isDisabled &&
            isFocused &&
            isError &&
            'border-error-default',
          twClassName,
        ),
      [
        fontClass,
        isError,
        isStateStylesDisabled,
        isDisabled,
        isFocused,
        twClassName,
        tw,
      ],
    );

    const variantTextStyle = useMemo(
      () => MAP_TEXT_VARIANT_TEXTAREA_METRICS[textVariant],
      [textVariant],
    );

    /* istanbul ignore next: handler body covered by focus/blur tests */
    const onBlurHandler = useCallback(
      (e: Parameters<NonNullable<TextareaProps['onBlur']>>[0]) => {
        if (!isDisabled) {
          setIsFocused(false);
          onBlur?.(e);
        }
      },
      [isDisabled, onBlur],
    );

    /* istanbul ignore next: handler body covered by focus/blur tests */
    const onFocusHandler = useCallback(
      (e: Parameters<NonNullable<TextareaProps['onFocus']>>[0]) => {
        if (!isDisabled) {
          setIsFocused(true);
          onFocus?.(e);
        }
      },
      [isDisabled, onFocus],
    );

    return (
      <TextInput
        ref={ref}
        placeholderTextColor={placeholderTextColor}
        {...props}
        placeholder={placeholder}
        value={value}
        style={[textareaStyle, variantTextStyle, style]}
        editable={!isDisabled && !isReadOnly}
        autoFocus={autoFocus}
        multiline
        numberOfLines={numberOfLines}
        textAlignVertical="top"
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
      />
    );
  },
);

Textarea.displayName = 'Textarea';
