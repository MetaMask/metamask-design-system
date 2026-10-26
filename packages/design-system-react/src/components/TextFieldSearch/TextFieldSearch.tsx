import React, { forwardRef } from 'react';

import { twMerge } from '../../utils/tw-merge';
import { ButtonIcon, ButtonIconSize } from '../ButtonIcon';
import { Icon, IconColor, IconName, IconSize } from '../Icon';
import { TextField, TextFieldSize, TextFieldType } from '../TextField';

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
      inputProps,
      inputAriaLabel,
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
        iconProps={{ color: IconColor.IconDefault }}
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
      <search
        // Older engines and jsdom treat <search> as an unknown element and
        // drop its implicit landmark role. The explicit role keeps it.
        role="search"
        aria-label={inputAriaLabel}
        className={twMerge('inline-flex', className)}
      >
        <TextField
          ref={ref}
          value={value}
          isDisabled={isDisabled}
          type={TextFieldType.Search}
          size={TextFieldSize.Lg}
          className={twMerge(
            'w-full rounded-full bg-muted',
            !isDisabled && !props.isError && 'hover:bg-muted-hover',
            className,
          )}
          inputProps={{
            ...inputProps,
            'aria-label': inputAriaLabel,
            className: twMerge(
              '[&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden [&::-webkit-search-results-button]:hidden [&::-webkit-search-results-decoration]:hidden',
              inputProps?.className,
            ),
          }}
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
      </search>
    );
  },
);

TextFieldSearch.displayName = 'TextFieldSearch';
