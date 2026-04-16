import { TextVariant } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { TextInput } from 'react-native';

import { Box } from '../Box';
import { Input } from '../Input';

import type { InputProps } from '../Input/Input.types';
import type { TextFieldProps } from './TextField.types';

export const TextField = forwardRef<TextInput, TextFieldProps>(
  (
    {
      value,
      onChangeText,
      placeholder,
      isReadonly,
      onBlur,
      onFocus,
      autoFocus = false,
      inputProps,
      isDisabled = false,
      isError = false,
      inputElement,
      startAccessory,
      endAccessory,
      style,
      twClassName,
      testID,
      ...restProps
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(autoFocus);
    const inputRef = useRef<TextInput>(null);
    const tw = useTailwind();

    const inputRest = inputProps ?? {};

    useImperativeHandle<TextInput | null, TextInput | null>(
      ref,
      () => inputRef.current,
      [],
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

    return (
      <Box
        {...restProps}
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
        <Box twClassName="min-h-0 flex-1 justify-center">
          {inputElement ?? (
            <Input
              {...inputRest}
              ref={inputRef}
              value={value}
              onChangeText={onChangeText}
              placeholder={placeholder}
              isReadonly={isReadonly}
              textVariant={TextVariant.BodyMd}
              isDisabled={isDisabled}
              autoFocus={autoFocus}
              onBlur={onBlurHandler}
              onFocus={onFocusHandler}
              isStateStylesDisabled
              // Row is `h-12` (48px) with `border` on the root Box (1px top + bottom). Inner TextInput
              // uses 46px height so the field matches a 48px-tall control without vertical overflow.
              twClassName="h-[46px] bg-transparent border-0"
              numberOfLines={1}
              multiline={false}
            />
          )}
        </Box>
        {endAccessory}
      </Box>
    );
  },
);

TextField.displayName = 'TextField';
