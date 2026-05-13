import { TextFieldSize, TextFieldType } from '@metamask/design-system-shared';
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { twMerge } from '../../utils/tw-merge';
import { Input } from '../Input';

import type { TextFieldProps } from './TextField.types';

const SIZE_CLASS: Record<TextFieldSize, string> = {
  [TextFieldSize.Sm]: 'h-8',
  [TextFieldSize.Md]: 'h-10',
  [TextFieldSize.Lg]: 'h-12',
};

export const TextField = forwardRef<HTMLDivElement, TextFieldProps>(
  (
    {
      autoFocus = false,
      className,
      id,
      inputElement,
      inputProps,
      inputRef,
      isDisabled = false,
      isError = false,
      isReadOnly = false,
      maxLength,
      name,
      onBlur,
      onChange,
      onClick,
      onFocus,
      placeholder,
      required,
      size = TextFieldSize.Md,
      startAccessory,
      endAccessory,
      style,
      truncate = true,
      type = TextFieldType.Text,
      value,
      ...rest
    },
    ref,
  ) => {
    const internalInputRef = useRef<HTMLInputElement | null>(null);
    const [isFocused, setIsFocused] = useState(autoFocus);

    useEffect(() => {
      if (isDisabled) {
        setIsFocused(false);
      }
    }, [isDisabled]);

    const handleClick = useCallback(
      (event: React.MouseEvent<HTMLDivElement>) => {
        if (isDisabled) {
          return;
        }
        internalInputRef.current?.focus();
        onClick?.(event);
      },
      [isDisabled, onClick],
    );

    const handleFocus = useCallback(
      (event: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
        onFocus?.(event);
      },
      [onFocus],
    );

    const handleBlur = useCallback(
      (event: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(false);
        onBlur?.(event);
      },
      [onBlur],
    );

    const handleInputRef = useCallback(
      (node: HTMLInputElement | null) => {
        internalInputRef.current = node;
        if (typeof inputRef === 'function') {
          inputRef(node);
        } else if (inputRef && 'current' in inputRef) {
          (
            inputRef as React.MutableRefObject<HTMLInputElement | null>
          ).current = node;
        }
      },
      [inputRef],
    );

    const { className: inputClassNameFromProps, ...inputRest } =
      inputProps ?? {};

    const containerClassName = twMerge(
      'inline-flex items-center rounded-lg border bg-default transition-colors',
      SIZE_CLASS[size],
      startAccessory ? 'pl-4' : 'pl-0',
      endAccessory ? 'pr-4' : 'pr-0',
      isDisabled && 'cursor-not-allowed border-muted opacity-50',
      !isDisabled && isError && 'border-error-default',
      !isDisabled && !isError && isFocused && 'border-primary-default',
      !isDisabled && !isError && !isFocused && 'border-muted',
      className,
    );

    const innerInputClassName = twMerge(
      'm-0 h-full min-w-0 flex-1 border-0 bg-transparent p-0',
      startAccessory ? 'pl-2' : 'pl-4',
      endAccessory ? 'pr-2' : 'pr-4',
      truncate && 'truncate',
      inputClassNameFromProps,
    );

    return (
      <div
        ref={ref}
        className={containerClassName}
        style={style}
        onClick={handleClick}
        {...rest}
      >
        {startAccessory}
        {inputElement ?? (
          <Input
            {...inputRest}
            ref={handleInputRef}
            id={id}
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            autoFocus={autoFocus}
            isDisabled={isDisabled}
            isReadOnly={isReadOnly}
            isStateStylesDisabled
            maxLength={maxLength}
            required={required}
            aria-invalid={isError || undefined}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={innerInputClassName}
          />
        )}
        {endAccessory}
      </div>
    );
  },
);

TextField.displayName = 'TextField';
