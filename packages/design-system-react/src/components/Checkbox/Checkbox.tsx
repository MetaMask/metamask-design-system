import type { ChangeEvent, KeyboardEvent } from 'react';
import React, { forwardRef, useImperativeHandle } from 'react';

import { twMerge } from '../../utils/tw-merge';
import { Icon, IconName, IconColor, IconSize } from '../Icon';
import { Text } from '../Text';

import type { CheckboxProps } from './Checkbox.types';

export const Checkbox = forwardRef<{ toggle: () => void }, CheckboxProps>(
  (
    {
      id,
      isSelected,
      isDisabled = false,
      isInvalid = false,
      label,
      labelProps,
      onChange,
      inputProps,
      checkboxContainerProps,
      checkedIconProps,
      className,
      style,
      ...props
    },
    ref,
  ) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (isDisabled) {
        return;
      }
      onChange?.(event.target.checked);
    };

    const handleClick = () => {
      if (isDisabled) {
        return;
      }
      onChange?.(!isSelected);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        handleClick();
      }
    };

    useImperativeHandle(ref, () => ({ toggle: handleClick }), [handleClick]);

    const outerClassName = twMerge(
      'inline-flex items-center',
      isDisabled && 'cursor-not-allowed opacity-50',
      className,
    );

    const baseBg = isSelected
      ? 'bg-primary-default hover:bg-primary-default-hover active:bg-primary-default-pressed'
      : 'bg-default hover:bg-default-hover active:bg-default-pressed';
    let baseBorder = 'border-default';
    if (isSelected) {
      baseBorder = 'border-primary-default';
    } else if (isInvalid) {
      baseBorder = 'border-error-default';
    }

    const checkboxClasses = twMerge(
      'relative flex h-6 w-6 items-center justify-center rounded border-2 p-0 transition-transform active:scale-95',
      baseBg,
      baseBorder,
      checkboxContainerProps?.className,
    );

    const iconClasses = twMerge(
      'pointer-events-none transition-opacity',
      isSelected ? 'opacity-100' : 'opacity-0',
      checkedIconProps?.className,
    );

    return (
      <label htmlFor={id} className={outerClassName} style={style} {...props}>
        <div className="relative">
          <input
            type="checkbox"
            id={id}
            checked={isSelected}
            disabled={isDisabled}
            aria-invalid={isInvalid}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0 disabled:cursor-not-allowed"
            {...inputProps}
          />
          <div className={checkboxClasses} {...checkboxContainerProps}>
            <Icon
              name={IconName.Check}
              color={IconColor.PrimaryInverse}
              size={IconSize.Sm}
              {...checkedIconProps}
              className={iconClasses}
            />
          </div>
        </div>
        {label ? (
          <Text
            asChild
            {...labelProps}
            className={twMerge('ml-3', labelProps?.className)}
          >
            <span>{label}</span>
          </Text>
        ) : null}
      </label>
    );
  },
);

Checkbox.displayName = 'Checkbox';
