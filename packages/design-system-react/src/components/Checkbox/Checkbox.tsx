import React, { forwardRef, useImperativeHandle } from 'react';

import { twMerge } from '../../utils/tw-merge';
import { Icon, IconName, IconColor, IconSize } from '../Icon';
import { Text } from '../Text';

import type { CheckboxProps } from './Checkbox.types';

export const Checkbox = forwardRef<{ toggle: () => void }, CheckboxProps>(
  (
    {
      isSelected,
      isDisabled = false,
      isInvalid = false,
      label,
      labelProps,
      onChange,
      checkboxContainerProps,
      checkedIconProps,
      className,
      style,
      ...props
    },
    ref,
  ) => {
    const handleClick = () => {
      if (isDisabled) {
        return;
      }
      onChange?.(!isSelected);
    };

    useImperativeHandle(ref, () => ({ toggle: handleClick }), [handleClick]);

    const outerClassName = twMerge(
      'inline-flex items-center',
      isDisabled && 'cursor-not-allowed opacity-50',
      className,
    );

    const baseBg = isSelected
      ? 'bg-primary-default hover:bg-primary-default-hover active:bg-primary-default-pressed'
      : 'bg-background-default hover:bg-background-default-hover active:bg-background-default-pressed';
    let baseBorder = 'border-border-default';
    if (isSelected) {
      baseBorder = 'border-primary-default';
    } else if (isInvalid) {
      baseBorder = 'border-error-default';
    }

    const checkboxClasses = twMerge(
      'flex h-6 w-6 items-center justify-center rounded border-2 p-0 transition-transform active:scale-95',
      baseBg,
      baseBorder,
      checkboxContainerProps?.className,
    );

    const iconClasses = twMerge(
      'transition-opacity',
      isSelected ? 'opacity-100' : 'opacity-0',
      checkedIconProps?.className,
    );

    const ariaLabel = typeof label === 'string' ? label : props['aria-label'];

    return (
      <button
        type="button"
        role="checkbox"
        aria-checked={isSelected}
        aria-disabled={isDisabled}
        aria-label={ariaLabel}
        onClick={handleClick}
        disabled={isDisabled}
        className={outerClassName}
        style={style}
        {...props}
      >
        <div className={checkboxClasses} {...checkboxContainerProps}>
          <Icon
            name={IconName.Check}
            color={IconColor.PrimaryInverse}
            size={IconSize.Sm}
            {...checkedIconProps}
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
      </button>
    );
  },
);

Checkbox.displayName = 'Checkbox';
