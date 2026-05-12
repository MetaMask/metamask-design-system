import React, { forwardRef } from 'react';

import { ButtonIcon } from '../ButtonIcon';
import { ButtonIconSize } from '../ButtonIcon';
import { Icon, IconName, IconSize } from '../Icon';
import { TextField } from '../TextField';
import { TextFieldType } from '../TextField/TextField.types';

import type { TextFieldSearchProps } from './TextFieldSearch.types';

export const TextFieldSearch = forwardRef<HTMLDivElement, TextFieldSearchProps>(
  (
    {
      showClearButton = true,
      clearButtonOnClick,
      clearButtonProps,
      endAccessory,
      value,
      startAccessory,
      ...props
    },
    ref,
  ) => {
    const hasClearButton = Boolean(value) && showClearButton;

    return (
      <TextField
        ref={ref}
        value={value}
        type={TextFieldType.Search}
        startAccessory={
          startAccessory ?? <Icon name={IconName.Search} size={IconSize.Sm} />
        }
        endAccessory={
          <>
            {hasClearButton && (
              <ButtonIcon
                data-testid="text-field-search-clear-button"
                ariaLabel="Clear"
                iconName={IconName.Close}
                size={ButtonIconSize.Sm}
                onClick={clearButtonOnClick}
                {...clearButtonProps}
              />
            )}
            {endAccessory}
          </>
        }
        {...props}
      />
    );
  },
);

TextFieldSearch.displayName = 'TextFieldSearch';
