import React from 'react';
import { Pressable } from 'react-native';

import Icon from '../../components/Icons/Icon';
import Text from '../../components/Text';
import {
  DEFAULT_BUTTONBASE_LABEL_COLOR,
  DEFAULT_BUTTONBASE_SIZE,
  DEFAULT_BUTTONBASE_WIDTH,
  DEFAULT_BUTTONBASE_ICON_SIZE,
  DEFAULT_BUTTONBASE_LABEL_TEXTVARIANT,
} from './ButtonBase.constants';
import type { ButtonBaseProps } from './ButtonBase.types';

const ButtonBase = ({
  children,
  size,
  isLoading,
  startIconName,
  startIconProps,
  startAccessory,
  endIconName,
  endIconProps,
  endAccessory,
  isDisabled,
  onPress,
  style,
  width = DEFAULT_BUTTONBASE_WIDTH,
  ...props
}: ButtonBaseProps) => {
  return (
    <Pressable
      disabled={isDisabled}
      onPress={onPress}
      style={styles.base}
      accessibilityRole="button"
      accessible
      {...props}
    >
      {startIconName && (
        <Icon
          color={labelColor.toString()}
          name={startIconName}
          size={DEFAULT_BUTTONBASE_ICON_SIZE}
          style={styles.startIcon}
        />
      )}
      {typeof label === 'string' ? (
        <Text
          variant={labelTextVariant}
          style={styles.label}
          accessibilityRole="none"
        >
          {label}
        </Text>
      ) : (
        label
      )}
      {endIconName && (
        <Icon
          color={labelColor.toString()}
          name={endIconName}
          size={DEFAULT_BUTTONBASE_ICON_SIZE}
          style={styles.endIcon}
        />
      )}
    </Pressable>
  );
};

export default ButtonBase;
