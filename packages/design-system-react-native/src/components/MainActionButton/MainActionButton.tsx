import { resolveClassName } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

import { Box } from '../Box';
import { Icon, IconColor, IconSize } from '../Icon';
import { ButtonAnimated } from '../temp-components/ButtonAnimated';
import { Text, FontWeight, TextColor, TextVariant } from '../Text';

import type { MainActionButtonProps } from './MainActionButton.types';

export const MainActionButton = ({
  iconName,
  label,
  children,
  iconProps,
  labelProps,
  onPress,
  onPressIn,
  onPressOut,
  style,
  isDisabled = false,
  twClassName = '',
  className,
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
        const baseStyle = tw.style(
          'items-center justify-center rounded-2xl px-1 py-3 min-w-[68px]',
          pressed && !isDisabled ? 'bg-muted-pressed' : 'bg-muted',
          isDisabled ? 'opacity-50' : 'opacity-100',
          twClassName,
          className,
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
        {children ? (
          <Box className="mt-0.5 w-full items-center">{children}</Box>
        ) : null}
        <Text
          {...labelProps}
          variant={TextVariant.BodySm}
          fontWeight={FontWeight.Medium}
          color={TextColor.TextDefault}
          className={resolveClassName(
            'mt-0.5 w-full shrink text-center',
            labelProps?.className,
          )}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {label}
        </Text>
      </>
    </ButtonAnimated>
  );
};
