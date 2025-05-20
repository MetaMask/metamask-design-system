import React, { forwardRef, useImperativeHandle, useState } from 'react';

import { twMerge } from '../../utils/tw-merge';
import { Icon, IconName, IconColor, IconSize } from '../Icon';
import { Text } from '../Text';
import type { CheckboxProps } from './Checkbox.types';

export const Checkbox = forwardRef<{ toggle: () => void }, CheckboxProps>(
  (
    {
      isSelected,
      defaultIsSelected = false,
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
    const [internalSelected, setInternalSelected] = useState(defaultIsSelected);
    const isControlled = isSelected !== undefined;
    const currentSelected = isControlled ? isSelected! : internalSelected;

    const toggle = () => {
      if (isDisabled) {
        return;
      }
      const next = !currentSelected;
      if (!isControlled) {
        setInternalSelected(next);
      }
      onChange?.(next);
    };

    useImperativeHandle(ref, () => ({ toggle }), [toggle]);

    const outerClassName = twMerge(
      'inline-flex items-center',
      isDisabled && 'cursor-not-allowed opacity-50',
      className,
    );

    const baseBg = currentSelected
      ? 'bg-primary-default hover:bg-primary-default-hover active:bg-primary-default-pressed'
      : 'bg-background-default hover:bg-background-default-hover active:bg-background-default-pressed';
    const baseBorder = currentSelected
      ? 'border-primary-default'
      : isInvalid
        ? 'border-error-default'
        : 'border-border-default';

    const checkboxClasses = twMerge(
      'flex h-[22px] w-[22px] items-center justify-center rounded border-2 transition-transform active:scale-95',
      baseBg,
      baseBorder,
      checkboxContainerProps?.className,
    );

    const ariaLabel = typeof label === 'string' ? label : props['aria-label'];

    return (
      <button
        type="button"
        role="checkbox"
        aria-checked={currentSelected}
        aria-disabled={isDisabled}
        aria-label={ariaLabel}
        onClick={toggle}
        disabled={isDisabled}
        className={outerClassName}
        style={style}
        {...props}
      >
        <div className={checkboxClasses} {...checkboxContainerProps}>
          {currentSelected && (
            <Icon
              name={IconName.Check}
              color={IconColor.PrimaryInverse}
              size={IconSize.Sm}
              {...checkedIconProps}
            />
          )}
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
