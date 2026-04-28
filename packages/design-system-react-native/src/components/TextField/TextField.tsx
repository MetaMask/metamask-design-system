import { TextVariant } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { forwardRef, useCallback, useState } from 'react';
import { View } from 'react-native';

import { Box } from '../Box';
import { Input } from '../Input';
import type { InputProps } from '../Input/Input.types';

import type { TextFieldProps } from './TextField.types';

export const TextField = forwardRef<View, TextFieldProps>(
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
      startAccessory,
      endAccessory,
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
            'flex-row',
            'items-center',
            'gap-3',
            'rounded-lg',
            'h-12',
            'border',
            'px-4',
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
        {startAccessory}
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
            twClassName={`min-h-0 flex-1 justify-center h-[46px] bg-transparent border-0${
              inputTwClassNameFromProps ? ` ${inputTwClassNameFromProps}` : ''
            }`}
            numberOfLines={1}
            multiline={false}
          />
        )}
        {endAccessory}
      </Box>
    );
  },
);

TextField.displayName = 'TextField';
