import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

import { Box } from '../Box';
import { Icon, IconColor, IconSize } from '../Icon';
import { ButtonAnimated } from '../temp-components/ButtonAnimated';
import { Text, FontWeight, TextColor, TextVariant } from '../Text';

import {
  MAINACTIONBUTTON_ICON_TEST_ID,
  MAINACTIONBUTTON_LABEL_TEST_ID,
  MAINACTIONBUTTON_TEST_ID,
} from './MainActionButton.constants';
import {
  TWCLASS_MAINACTIONBUTTON_BASE,
  TWCLASS_MAINACTIONBUTTON_CONTAINER,
  TWCLASS_MAINACTIONBUTTON_LABEL,
} from './MainActionButton.styles';
import type { MainActionButtonProps } from './MainActionButton.types';

export const MainActionButton = ({
  iconName,
  label,
  onPress,
  onPressIn,
  onPressOut,
  style,
  isDisabled = false,
  twClassName = '',
  testID = MAINACTIONBUTTON_TEST_ID,
  ...props
}: MainActionButtonProps) => {
  const tw = useTailwind();

  return (
    <ButtonAnimated
      testID={testID}
      disabled={isDisabled}
      accessible
      onPress={!isDisabled ? onPress : undefined}
      onPressIn={!isDisabled ? onPressIn : undefined}
      onPressOut={!isDisabled ? onPressOut : undefined}
      style={({ pressed }) => {
        const classNameStr =
          typeof twClassName === 'function'
            ? twClassName(pressed)
            : twClassName;

        const baseStyle = tw.style(
          TWCLASS_MAINACTIONBUTTON_BASE,
          pressed && !isDisabled ? 'bg-muted-pressed' : 'bg-muted',
          isDisabled ? 'opacity-50' : 'opacity-100',
          classNameStr,
        ) as StyleProp<ViewStyle>;

        const additionalStyle =
          typeof style === 'function' ? style({ pressed }) : style;

        return additionalStyle ? [baseStyle, additionalStyle] : [baseStyle];
      }}
      {...props}
    >
      <Box twClassName={TWCLASS_MAINACTIONBUTTON_CONTAINER}>
        <Icon
          testID={MAINACTIONBUTTON_ICON_TEST_ID}
          name={iconName}
          size={IconSize.Lg}
          color={IconColor.IconAlternative}
        />
        <Text
          testID={MAINACTIONBUTTON_LABEL_TEST_ID}
          variant={TextVariant.BodySm}
          fontWeight={FontWeight.Medium}
          color={TextColor.TextDefault}
          twClassName={TWCLASS_MAINACTIONBUTTON_LABEL}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {label}
        </Text>
      </Box>
    </ButtonAnimated>
  );
};
