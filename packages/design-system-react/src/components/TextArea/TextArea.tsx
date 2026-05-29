import { TextVariant } from '@metamask/design-system-shared';
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { twMerge } from '../../utils/tw-merge';
import {
  TWCLASSMAP_TEXT_VARIANT_FONTSTYLE,
  TWCLASSMAP_TEXT_VARIANT_FONTWEIGHT,
} from '../Text/Text.constants';

import { CLASSMAP_TEXTAREA_RESIZE, TextAreaResize } from './TextArea.constants';
import type { TextAreaProps } from './TextArea.types';

export const TextArea = forwardRef<HTMLDivElement, TextAreaProps>(
  (
    {
      textVariant = TextVariant.BodyMd,
      value,
      placeholder,
      autoFocus = false,
      id,
      name,
      rows,
      cols,
      maxLength,
      required,
      isDisabled = false,
      isReadOnly = false,
      isError = false,
      inputElement,
      inputProps,
      inputRef,
      onBlur,
      onChange,
      onClick,
      onFocus,
      resize = TextAreaResize.Vertical,
      className,
      style,
      ...rest
    },
    ref,
  ) => {
    const internalInputRef = useRef<HTMLTextAreaElement | null>(null);
    const [isFocused, setIsFocused] = useState(autoFocus);

    useEffect(() => {
      if (isDisabled || isReadOnly) {
        setIsFocused(false);
      }
    }, [isDisabled, isReadOnly]);

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
      (event: React.FocusEvent<HTMLTextAreaElement>) => {
        setIsFocused(true);
        onFocus?.(event);
      },
      [onFocus],
    );

    const handleBlur = useCallback(
      (event: React.FocusEvent<HTMLTextAreaElement>) => {
        setIsFocused(false);
        onBlur?.(event);
      },
      [onBlur],
    );

    const handleInputRef = useCallback(
      (node: HTMLTextAreaElement | null) => {
        internalInputRef.current = node;
        if (typeof inputRef === 'function') {
          inputRef(node);
        } else if (inputRef && 'current' in inputRef) {
          (
            inputRef as React.MutableRefObject<HTMLTextAreaElement | null>
          ).current = node;
        }
      },
      [inputRef],
    );

    const { className: inputClassNameFromProps, ...inputRest } =
      inputProps ?? {};

    const containerClassName = twMerge(
      'flex min-h-24 rounded-lg border bg-muted px-4 py-3 transition-colors',
      isDisabled && 'cursor-not-allowed border-muted opacity-50',
      !isDisabled && isError && 'border-error-default',
      !isDisabled && !isError && isFocused && 'border-default',
      !isDisabled && !isError && !isFocused && 'border-muted',
      className,
    );

    const textareaClassName = twMerge(
      'm-0 min-h-[88px] w-full flex-1 self-stretch border-0 bg-transparent p-0 text-default outline-none',
      'placeholder:text-alternative',
      CLASSMAP_TEXTAREA_RESIZE[resize],
      TWCLASSMAP_TEXT_VARIANT_FONTSTYLE[textVariant],
      TWCLASSMAP_TEXT_VARIANT_FONTWEIGHT[textVariant],
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
        {inputElement ?? (
          <textarea
            {...inputRest}
            ref={handleInputRef}
            id={id}
            name={name}
            value={value}
            placeholder={placeholder}
            rows={rows}
            cols={cols}
            maxLength={maxLength}
            required={required}
            className={textareaClassName}
            disabled={isDisabled}
            readOnly={isReadOnly}
            autoFocus={autoFocus}
            aria-invalid={isError || undefined}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        )}
      </div>
    );
  },
);

TextArea.displayName = 'TextArea';
