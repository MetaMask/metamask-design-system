import React, { forwardRef } from 'react';

import { twMerge } from '../../utils/tw-merge.js';
import { Box, BoxFlexDirection } from '../Box/index.js';
import { HelpText, HelpTextSeverity } from '../HelpText/index.js';
import { Label } from '../Label/index.js';
import { TextField } from '../TextField/index.js';

import type { FormTextFieldProps } from './FormTextField.types.js';

export const FormTextField = forwardRef<HTMLDivElement, FormTextFieldProps>(
  (
    {
      className,
      endAccessory,
      helpText,
      helpTextProps,
      id,
      inputElement,
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
    <Box
      ref={ref}
      flexDirection={BoxFlexDirection.Column}
      className={className}
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
        {...textFieldProps}
        autoFocus={autoFocus}
        endAccessory={endAccessory}
        id={id}
        inputElement={inputElement}
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
    </Box>
  ),
);

FormTextField.displayName = 'FormTextField';
