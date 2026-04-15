import { TextVariant } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Pressable, TextInput } from 'react-native';

import { Box } from '../Box';
import { Input } from '../Input';

import type { TextFieldProps } from './TextField.types';

export const TextField = forwardRef<TextInput, TextFieldProps>(
  (
    {
      style,
      startAccessory,
      endAccessory,
      isError = false,
      inputElement,
      isDisabled = false,
      autoFocus = false,
      twClassName,
      onBlur,
      onFocus,
      testID,
      pressableProps,
      ...props
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(autoFocus);
    const inputRef = useRef<TextInput>(null);
    const tw = useTailwind();

    useImperativeHandle<TextInput | null, TextInput | null>(
      ref,
      () => inputRef.current,
      [],
    );

    const onBlurHandler = useCallback(
      (e: Parameters<NonNullable<TextFieldProps['onBlur']>>[0]) => {
        if (!isDisabled) {
          setIsFocused(false);
          onBlur?.(e);
        }
      },
      [isDisabled, onBlur],
    );

    const onFocusHandler = useCallback(
      (e: Parameters<NonNullable<TextFieldProps['onFocus']>>[0]) => {
        if (!isDisabled) {
          setIsFocused(true);
          onFocus?.(e);
        }
      },
      [isDisabled, onFocus],
    );

    const onPressHandler = useCallback(() => {
      if (!isDisabled && inputRef.current) {
        inputRef.current.focus();
      }
    }, [isDisabled]);

    return (
      <Pressable
        {...pressableProps}
        disabled={isDisabled}
        testID={testID}
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
        onPress={onPressHandler}
        accessible={false}
      >
        {startAccessory}
        <Box twClassName="min-h-0 flex-1 justify-center">
          {inputElement ?? (
            <Input
              {...props}
              ref={inputRef}
              textVariant={TextVariant.BodyMd}
              isDisabled={isDisabled}
              autoFocus={autoFocus}
              onBlur={onBlurHandler}
              onFocus={onFocusHandler}
              isStateStylesDisabled
              // Row is `h-12` (48px) with `border` on the Pressable (1px top + bottom). Inner TextInput
              // uses 46px height so the field matches a 48px-tall control without vertical overflow.
              twClassName="h-[46px] bg-transparent border-0"
              numberOfLines={1}
              multiline={false}
            />
          )}
        </Box>
        {endAccessory}
      </Pressable>
    );
  },
);
