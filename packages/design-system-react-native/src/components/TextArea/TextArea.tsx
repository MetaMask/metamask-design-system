import { TextVariant } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { forwardRef, useCallback, useState } from 'react';
import { View } from 'react-native';

import { Box } from '../Box';
import { Input } from '../Input';
import type { InputProps } from '../Input/Input.types';

import type { TextAreaProps } from './TextArea.types';

export const TextArea = forwardRef<View, TextAreaProps>(
  (
    {
      value,
      onChangeText,
      placeholder,
      isReadOnly,
      onBlur,
      onFocus,
      autoFocus = false,
      inputProps,
      inputRef,
      isDisabled = false,
      isError = false,
      inputElement,
      style,
      twClassName,
      testID,
      ...props
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(autoFocus);
    const tw = useTailwind();

    const {
      twClassName: inputTwClassNameFromProps,
      ...inputRestWithoutTwClassName
    } = inputProps ?? {};

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
      <Box
        ref={ref}
        {...props}
        testID={testID}
        accessible={false}
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
      >
        {inputElement || (
          <Input
            {...inputRestWithoutTwClassName}
            ref={inputRef}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            isReadOnly={isReadOnly}
            textVariant={TextVariant.BodyMd}
            isDisabled={isDisabled}
            autoFocus={autoFocus}
            onBlur={onBlurHandler}
            onFocus={onFocusHandler}
            isStateStylesDisabled
            multiline
            textAlignVertical="top"
            twClassName={`min-h-[88px] w-full flex-1 self-stretch bg-transparent border-0 py-1${
              inputTwClassNameFromProps ? ` ${inputTwClassNameFromProps}` : ''
            }`}
          />
        )}
      </Box>
    );
  },
);

TextArea.displayName = 'TextArea';
