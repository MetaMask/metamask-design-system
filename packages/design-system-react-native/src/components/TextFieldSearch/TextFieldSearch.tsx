// Third party dependencies.
import React, { useCallback } from 'react';

// External dependencies.
import {
  ButtonIcon,
  ButtonIconSize,
  Icon,
  IconName,
  IconSize,
  IconColor,
  TextField,
} from '@metamask/design-system-react-native';

// Internal dependencies.
import { TEXTFIELDSEARCH_TEST_ID } from './TextFieldSearch.constants';
import styles from './TextFieldSearch.styles';
import type { TextFieldSearchProps } from './TextFieldSearch.types';

const TextFieldSearch: React.FC<TextFieldSearchProps> = ({
  onPressClearButton,
  clearButtonProps,
  value,
  style,
  ...props
}) => {
  const searchIcon = (
    <Icon
      name={IconName.Search}
      size={IconSize.Md}
      color={IconColor.Alternative}
    />
  );

  const clearButtonHandler = useCallback(() => {
    onPressClearButton?.();
  }, [onPressClearButton]);

  const clearButton = (
    <ButtonIcon
      size={ButtonIconSize.Md}
      iconName={IconName.CircleX}
      iconColor={IconColor.Alternative}
      onPress={clearButtonHandler}
      {...clearButtonProps}
    />
  );
  return (
    <TextField
      value={value}
      startAccessory={searchIcon}
      endAccessory={Boolean(value) && clearButton}
      testID={TEXTFIELDSEARCH_TEST_ID}
      style={[style, styles.base]}
      {...props}
    />
  );
};

TextFieldSearch.displayName = 'TextFieldSearch';

export default TextFieldSearch;
