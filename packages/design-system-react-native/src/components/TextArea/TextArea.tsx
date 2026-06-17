import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { forwardRef, useCallback, useEffect, useState } from 'react';
import { TextInput } from 'react-native';

import { Input } from '../Input';
import type { InputProps } from '../Input/Input.types';

import type { TextAreaProps } from './TextArea.types';

export const TextArea = forwardRef<TextInput, TextAreaProps>(
  (
    {
      value,
      onChangeText,
      placeholder,
      isReadOnly,
      onBlur,
      onFocus,
      autoFocus = false,
      isDisabled = false,
      isError = false,
      textVariant,
      style,
      twClassName,
      testID,
      ...props
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(autoFocus);
    const tw = useTailwind();

    useEffect(() => {
      if (isDisabled || isReadOnly) {
        setIsFocused(false);
      }
    }, [isDisabled, isReadOnly]);

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

    return (
      <Input
        ref={ref}
        {...props}
        testID={testID}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        isReadOnly={isReadOnly}
        textVariant={textVariant}
        isDisabled={isDisabled}
        autoFocus={autoFocus}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
        isStateStylesDisabled
        multiline
        textAlignVertical="top"
        style={[
          tw.style(
            'rounded-lg',
            'min-h-24',
            'border',
            'px-4',
            'py-3',
            'bg-muted',
            isDisabled && 'border-muted',
            !isDisabled && isError && 'border-error-default',
            !isDisabled && !isError && isFocused && 'border-default',
            !isDisabled && !isError && !isFocused && 'border-muted',
            isDisabled && 'opacity-50',
            twClassName,
          ),
          style,
        ]}
      />
    );
  },
);

TextArea.displayName = 'TextArea';
