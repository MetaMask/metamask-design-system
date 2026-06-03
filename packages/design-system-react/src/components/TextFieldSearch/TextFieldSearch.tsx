import React, { forwardRef } from 'react';

import { twMerge } from '../../utils/tw-merge';
import { ButtonIcon, ButtonIconSize } from '../ButtonIcon';
import { Icon, IconColor, IconName, IconSize } from '../Icon';
import { TextField, TextFieldType } from '../TextField';

import type { TextFieldSearchProps } from './TextFieldSearch.types';

export const TextFieldSearch = forwardRef<HTMLDivElement, TextFieldSearchProps>(
  (
    {
      clearButtonOnClick,
      clearButtonProps,
      endAccessory,
      value,
      startAccessory,
      isDisabled = false,
      className,
      ...props
    },
    ref,
  ) => {
    const clearButton = value ? (
      <ButtonIcon
        data-testid="text-field-search-clear-button"
        ariaLabel="Clear"
        iconName={IconName.CircleX}
        size={ButtonIconSize.Md}
        iconProps={{ color: IconColor.IconAlternative }}
        {...clearButtonProps}
        isDisabled={isDisabled || clearButtonProps?.isDisabled}
        onClick={clearButtonOnClick}
      />
    ) : null;

    const resolvedEndAccessory =
      clearButton || endAccessory ? (
        <>
          {clearButton}
          {endAccessory}
        </>
      ) : undefined;

    return (
      <TextField
        ref={ref}
        value={value}
        isDisabled={isDisabled}
        type={TextFieldType.Search}
        className={twMerge('rounded-full', className)}
        startAccessory={
          startAccessory ?? (
            <Icon
              name={IconName.Search}
              size={IconSize.Md}
              color={IconColor.IconAlternative}
            />
          )
        }
        endAccessory={resolvedEndAccessory}
        {...props}
      />
    );
  },
);

TextFieldSearch.displayName = 'TextFieldSearch';
