import {
  Theme,
  useTailwind,
  useTheme,
} from '@metamask/design-system-twrnc-preset';
import { darkTheme, lightTheme } from '@metamask/design-tokens';
import React, { useCallback, useMemo, useState } from 'react';
import { Platform, TextInput } from 'react-native';

import { FontFamily, TextVariant } from '../../types';

import { INPUT_TEST_ID } from './Input.constants';
import type { InputProps } from './Input.types';
import {
  MAP_TEXT_VARIANT_FONTWEIGHT,
  TWCLASSMAP_TEXT_FONTWEIGHT,
} from '../Text/Text.constants';

export const Input = React.forwardRef<TextInput, InputProps>(
  (
    {
      style,
      textVariant = TextVariant.BodyMd,
      isStateStylesDisabled,
      isDisabled = false,
      isReadonly = false,
      twClassName,
      onBlur,
      onFocus,
      autoFocus = true,
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

    const inputStyle = useMemo(
      () =>
        tw.style(
          `text-${textVariant}`,
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
        textVariant,
        fontClass,
        isStateStylesDisabled,
        isDisabled,
        isFocused,
        twClassName,
        tw,
      ],
    );

    const onBlurHandler = useCallback(
      (e: Parameters<NonNullable<InputProps['onBlur']>>[0]) => {
        if (!isDisabled) {
          setIsFocused(false);
          onBlur?.(e);
        }
      },
      [isDisabled, onBlur],
    );

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
      Platform.OS === 'ios' && { textAlignVertical: 'center' as const },
      style,
    ].filter(Boolean);

    return (
      <TextInput
        ref={ref}
        testID={INPUT_TEST_ID}
        placeholderTextColor={placeholderTextColor}
        {...props}
        style={resolvedStyle}
        editable={!isDisabled && !isReadonly}
        autoFocus={autoFocus}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
      />
    );
  },
);
