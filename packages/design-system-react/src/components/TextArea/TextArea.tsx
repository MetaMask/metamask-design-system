import React, { forwardRef, useCallback, useEffect, useState } from 'react';

import { twMerge } from '../../utils/tw-merge';

import { CLASSMAP_TEXTAREA_RESIZE, TextAreaResize } from './TextArea.constants';
import type { TextAreaProps } from './TextArea.types';

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      value,
      placeholder,
      autoFocus = false,
      isDisabled = false,
      isReadOnly = false,
      isError = false,
      onBlur,
      onChange,
      onFocus,
      resize = TextAreaResize.None,
      className,
      ...props
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(autoFocus);

    useEffect(() => {
      if (isDisabled || isReadOnly) {
        setIsFocused(false);
      }
    }, [isDisabled, isReadOnly]);

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

    const resolvedResize = resize as TextAreaResize;

    const textAreaClassName = twMerge(
      'm-0 block min-h-24 w-full rounded-lg border bg-muted px-4 py-3 text-default outline-none transition-colors',
      'text-s-body-md font-regular leading-s-body-md tracking-s-body-md md:text-l-body-md md:leading-l-body-md md:tracking-l-body-md',
      'placeholder:text-alternative',
      CLASSMAP_TEXTAREA_RESIZE[resolvedResize],
      isDisabled && 'cursor-not-allowed border-muted opacity-50',
      !isDisabled && isError && 'border-error-default',
      !isDisabled && !isError && isFocused && 'border-default',
      !isDisabled && !isError && !isFocused && 'border-muted',
      className,
    );

    return (
      <textarea
        {...props}
        ref={ref}
        value={value}
        placeholder={placeholder}
        className={textAreaClassName}
        disabled={isDisabled}
        readOnly={isReadOnly}
        autoFocus={autoFocus}
        aria-invalid={isError || undefined}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    );
  },
);

TextArea.displayName = 'TextArea';
