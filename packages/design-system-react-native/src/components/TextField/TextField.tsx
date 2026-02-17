import { useTailwind } from '@metamask/design-system-twrnc-preset';
import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Pressable, TextInput, View } from 'react-native';
import type {
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';

import {
  DEFAULT_TEXTFIELD_SIZE,
  TEXTFIELD_SIZE_TO_TW,
} from './TextField.constants';
import type { TextFieldProps } from './TextField.types';

export const TextField = forwardRef<TextInput, TextFieldProps>(
  (
    {
      style,
      twClassName,
      size = DEFAULT_TEXTFIELD_SIZE,
      startAccessory,
      endAccessory,
      isError = false,
      isDisabled = false,
      isReadonly = false,
      autoFocus = false,
      placeholder,
      value,
      onChangeText,
      onBlur,
      onFocus,
      inputElement,
      textInputProps,
      ...props
    },
    ref,
  ) => {
    const tw = useTailwind();
    const [isFocused, setIsFocused] = useState(autoFocus);
    const inputRef = useRef<TextInput>(null);

    useImperativeHandle(ref, () => inputRef.current as TextInput, []);

    const onBlurHandler = useCallback(
      (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        if (!isDisabled) {
          setIsFocused(false);
          onBlur?.(e);
        }
      },
      [isDisabled, onBlur],
    );

    const onFocusHandler = useCallback(
      (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
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

    const getBorderColorClass = () => {
      if (isError) {
        return 'border-error-default';
      }
      if (isFocused) {
        return 'border-primary-default';
      }
      return 'border-default';
    };

    return (
      <Pressable
        style={[
          tw.style(
            'flex-row items-center rounded-lg border px-4 bg-default',
            TEXTFIELD_SIZE_TO_TW[size],
            getBorderColorClass(),
            isDisabled && 'opacity-50',
            twClassName,
          ),
          style,
        ]}
        onPress={onPressHandler}
        {...props}
      >
        {startAccessory && (
          <View style={tw.style('mr-2')}>{startAccessory}</View>
        )}
        <View style={tw.style('flex-1')}>
          {inputElement ?? (
            <TextInput
              ref={inputRef}
              editable={!isDisabled && !isReadonly}
              autoFocus={autoFocus}
              placeholder={placeholder}
              value={value}
              onChangeText={onChangeText}
              onBlur={onBlurHandler}
              onFocus={onFocusHandler}
              style={tw.style(
                'text-body-md font-default-regular text-default p-0',
              )}
              {...textInputProps}
            />
          )}
        </View>
        {endAccessory && <View style={tw.style('ml-2')}>{endAccessory}</View>}
      </Pressable>
    );
  },
);
