import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

import { Box } from '../Box';
import { Icon, IconColor, IconSize } from '../Icon';
import { ButtonAnimated } from '../temp-components/ButtonAnimated';
import { Text, FontWeight, TextColor, TextVariant } from '../Text';

import type { MainActionButtonProps } from './MainActionButton.types';

const MAIN_ACTION_BUTTON_BASE_TW_CLASS =
  'items-center justify-center rounded-xl px-1 py-4 min-w-[68px]';
const MAIN_ACTION_BUTTON_CONTAINER_TW_CLASS =
  'items-center justify-center w-full';
const MAIN_ACTION_BUTTON_LABEL_TW_CLASS = 'mt-0.5 w-full text-center shrink';

export const MainActionButton = ({
  iconName,
  label,
  onPress,
  onPressIn,
  onPressOut,
  style,
  isDisabled = false,
  twClassName = '',
  ...props
}: MainActionButtonProps) => {
  const tw = useTailwind();

  return (
    <ButtonAnimated
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
          MAIN_ACTION_BUTTON_BASE_TW_CLASS,
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
      <Box twClassName={MAIN_ACTION_BUTTON_CONTAINER_TW_CLASS}>
        <Icon
          name={iconName}
          size={IconSize.Lg}
          color={IconColor.IconAlternative}
        />
        <Text
          variant={TextVariant.BodySm}
          fontWeight={FontWeight.Medium}
          color={TextColor.TextDefault}
          twClassName={MAIN_ACTION_BUTTON_LABEL_TW_CLASS}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {label}
        </Text>
      </Box>
    </ButtonAnimated>
  );
};
