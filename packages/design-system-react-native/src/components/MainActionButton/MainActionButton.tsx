import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

import { Icon, IconColor, IconSize } from '../Icon';
import { ButtonAnimated } from '../temp-components/ButtonAnimated';
import { Text, FontWeight, TextColor, TextVariant } from '../Text';

import type { MainActionButtonProps } from './MainActionButton.types';

export const MainActionButton = ({
  iconName,
  label,
  iconProps,
  labelProps,
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
          'items-center justify-center rounded-xl px-1 py-4 min-w-[68px]',
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
      <>
        <Icon
          {...iconProps}
          name={iconName}
          size={IconSize.Lg}
          color={IconColor.IconAlternative}
        />
        <Text
          {...labelProps}
          variant={TextVariant.BodySm}
          fontWeight={FontWeight.Medium}
          color={TextColor.TextDefault}
          twClassName="mt-0.5 w-full text-center shrink"
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {label}
        </Text>
      </>
    </ButtonAnimated>
  );
};
