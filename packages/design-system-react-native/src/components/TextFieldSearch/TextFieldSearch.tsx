import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { forwardRef, useCallback } from 'react';
import type { TextInput } from 'react-native';

import { ButtonIcon, ButtonIconSize } from '../ButtonIcon';
import { Icon, IconColor, IconName, IconSize } from '../Icon';
import { TextField } from '../TextField';

import type { TextFieldSearchProps } from './TextFieldSearch.types';

export const TextFieldSearch = forwardRef<TextInput, TextFieldSearchProps>(
  ({ onPressClearButton, clearButtonProps, value, style, ...props }, ref) => {
    const tw = useTailwind();
    const containerStyle = tw.style('rounded-full');

    const searchIcon = (
      <Icon
        name={IconName.Search}
        size={IconSize.Md}
        color={IconColor.IconAlternative}
      />
    );

    const clearButtonHandler = useCallback(() => {
      onPressClearButton();
    }, [onPressClearButton]);

    const clearButton = (
      <ButtonIcon
        size={ButtonIconSize.Md}
        iconName={IconName.CircleX}
        iconProps={{ color: IconColor.IconAlternative }}
        onPress={clearButtonHandler}
        {...clearButtonProps}
      />
    );

    return (
      <TextField
        ref={ref}
        {...props}
        value={value}
        startAccessory={searchIcon}
        endAccessory={Boolean(value) && clearButton}
        testID="textfieldsearch"
        style={[containerStyle, style]}
      />
    );
  },
);

TextFieldSearch.displayName = 'TextFieldSearch';
