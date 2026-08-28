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

    const { className: inputClassName, ...restInputProps } = inputProps ?? {};
    const {
      className: checkboxContainerClassName,
      ...restCheckboxContainerProps
    } = checkboxContainerProps ?? {};
    const { className: checkedIconClassName, ...restCheckedIconProps } =
      checkedIconProps ?? {};

    const outerClassName = twMerge(
      'inline-flex items-center self-start',
      isDisabled && 'cursor-not-allowed opacity-50',
      className,
    );

    const baseBg = isSelected
      ? 'bg-icon-default enabled:hover:bg-icon-default-hover enabled:active:bg-icon-default-pressed'
      : 'bg-transparent enabled:hover:bg-hover enabled:active:bg-pressed';
    let baseBorder = 'border-default';
    if (isSelected) {
      baseBorder = 'border-icon-default';
    } else if (isInvalid) {
      baseBorder = 'border-error-default';
    }

    // Native input is the visible control (no opacity-0) for Selenium isDisplayed().
    const inputClasses = twMerge(
      'peer size-6 shrink-0 cursor-pointer appearance-none rounded-4 border-2 p-0 transition-transform enabled:active:scale-95',
      'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-default',
      'disabled:cursor-not-allowed',
      baseBg,
      baseBorder,
      inputClassName,
    );

    const wrapperClasses = twMerge(
      'relative inline-flex size-6 items-center justify-center',
      checkboxContainerClassName,
    );

    const iconClasses = twMerge(
      'pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition peer-enabled:peer-active:scale-95',
      isSelected ? 'opacity-100' : 'opacity-0',
      checkedIconClassName,
    );

    return (
      <label htmlFor={id} className={outerClassName} style={style} {...props}>
        <div className={wrapperClasses} {...restCheckboxContainerProps}>
          <input
            type="checkbox"
            id={id}
            checked={isSelected}
            disabled={isDisabled}
            aria-invalid={isInvalid}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className={inputClasses}
            {...restInputProps}
          />
          <Icon
            name={IconName.Check}
            color={IconColor.IconInverse}
            size={IconSize.Sm}
            {...restCheckedIconProps}
            className={iconClasses}
          />
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
