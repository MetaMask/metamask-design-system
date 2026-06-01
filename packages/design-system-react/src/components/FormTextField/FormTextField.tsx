import React, { forwardRef } from 'react';

import { twMerge } from '../../utils/tw-merge';
import { HelpText, HelpTextSeverity } from '../HelpText';
import { Label } from '../Label';
import { TextField } from '../TextField';

import type { FormTextFieldProps } from './FormTextField.types';

export const FormTextField = forwardRef<HTMLDivElement, FormTextFieldProps>(
  (
    {
      className,
      endAccessory,
      helpText,
      helpTextProps,
      id,
      inputProps,
      inputRef,
      isDisabled,
      isError,
      isReadOnly,
      label,
      labelProps,
      maxLength,
      name,
      onBlur,
      onChange,
      onFocus,
      placeholder,
      required,
      size,
      startAccessory,
      style,
      textFieldProps,
      truncate,
      type,
      value,
      autoFocus,
      ...rest
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={twMerge('flex flex-col', className)}
      style={style}
      {...rest}
    >
      {label && (
        <Label
          htmlFor={id}
          {...labelProps}
          className={twMerge('mb-1', labelProps?.className)}
        >
          {label}
        </Label>
      )}
      <TextField
        autoFocus={autoFocus}
        endAccessory={endAccessory}
        id={id}
        inputProps={inputProps}
        inputRef={inputRef}
        isDisabled={isDisabled}
        isError={isError}
        isReadOnly={isReadOnly}
        maxLength={maxLength}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
        required={required}
        size={size}
        startAccessory={startAccessory}
        truncate={truncate}
        type={type}
        value={value}
        {...textFieldProps}
      />
      {helpText && (
        <HelpText
          severity={isError ? HelpTextSeverity.Danger : undefined}
          {...helpTextProps}
          className={twMerge('mt-1', helpTextProps?.className)}
        >
          {helpText}
        </HelpText>
      )}
    </div>
  ),
);

FormTextField.displayName = 'FormTextField';
