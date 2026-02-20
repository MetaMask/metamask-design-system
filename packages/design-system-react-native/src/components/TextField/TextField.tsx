import { useTailwind } from '@metamask/design-system-twrnc-preset';
import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Pressable, TextInput, View } from 'react-native';

import { TextVariant } from '../../types';
import { Input } from '../Input';

import { TWCLASSMAP_TEXTFIELD_SIZE } from './TextField.constants';
import { TextFieldSize } from './TextField.types';
import type { TextFieldProps } from './TextField.types';

export const TextField = forwardRef<TextInput, TextFieldProps>(
  (
    {
      style,
      size = TextFieldSize.Md,
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

    const containerStyle = useMemo(
      () =>
        tw.style(
          'flex-row',
          'items-center',
          'rounded-lg',
          TWCLASSMAP_TEXTFIELD_SIZE[size],
          'border',
          'px-4',
          'bg-default',
          'border-default',
          isError && 'border-error-default',
          isFocused && 'border-primary-default',
          isDisabled && 'opacity-50',
          twClassName,
        ),
      [size, isError, isFocused, isDisabled, twClassName, tw],
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
        testID={testID}
        style={[containerStyle, style]}
        onPress={onPressHandler}
        accessible={false}
      >
        {startAccessory && (
          <View style={tw.style('mr-2')}>{startAccessory}</View>
        )}
        <View style={tw.style('flex-1')}>
          {inputElement ?? (
            <Input
              ref={inputRef}
              textVariant={TextVariant.BodyMd}
              isDisabled={isDisabled}
              autoFocus={autoFocus}
              onBlur={onBlurHandler}
              onFocus={onFocusHandler}
              isStateStylesDisabled
              twClassName="bg-transparent border-0"
              {...props}
            />
          )}
        </View>
        {endAccessory && <View style={tw.style('ml-2')}>{endAccessory}</View>}
      </Pressable>
    );
  },
);
