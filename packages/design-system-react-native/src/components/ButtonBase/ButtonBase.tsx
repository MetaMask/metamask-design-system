/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { View } from 'react-native';

import { ButtonBaseSize } from '../../types';
import Icon from '../Icon';
import { IconColor, IconSize } from '../Icon';
import ButtonAnimated from '../temp-components/ButtonAnimated';
import Spinner from '../temp-components/Spinner';
import TextOrChildren from '../temp-components/TextOrChildren/TextOrChildren';
import { TextVariant, FontWeight, TextColor } from '../Text';
import type { ButtonBaseProps } from './ButtonBase.types';

const ButtonBase = ({
  children,
  textProps,
  size = ButtonBaseSize.Lg,
  isLoading,
  loadingText,
  spinnerProps,
  startIconName,
  startIconProps,
  startAccessory,
  endIconName,
  endIconProps,
  endAccessory,
  isDisabled,
  isFullWidth,
  twClassName = '',
  style,
  ...props
}: ButtonBaseProps) => {
  const tw = useTailwind();
  const twContainerClassNames = `
    flex-row items-center justify-center rounded-full bg-background-muted px-4 min-w-[80px] overflow-hidden
    h-[${size}px]
    ${isDisabled ? 'opacity-50' : 'opacity-100'}
    ${isFullWidth ? 'self-stretch' : 'self-start'}
    ${twClassName}
  `;

  const finalStartIconName = startIconName ?? startIconProps?.name;
  const finalEndIconName = endIconName ?? endIconProps?.name;

  return (
    <ButtonAnimated
      disabled={isDisabled || isLoading}
      accessibilityRole="button"
      accessible
      style={[tw`${twContainerClassNames}`, style]}
      {...props}
    >
      <View
        style={tw`absolute inset-0 flex items-center justify-center ${
          isLoading ? 'opacity-100' : 'opacity-0'
        }`}
        testID="spinner-container"
      >
        <Spinner
          color={IconColor.IconDefault}
          loadingText={loadingText}
          loadingTextProps={{ numberOfLines: 1 }}
          {...spinnerProps}
        />
      </View>
      <View
        style={tw`flex-row items-center justify-center gap-x-2 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        testID="content-container"
      >
        {finalStartIconName ? (
          <Icon
            name={finalStartIconName}
            size={IconSize.Sm}
            twClassName="shrink-0"
            {...startIconProps}
          />
        ) : (
          startAccessory
        )}
        <TextOrChildren
          textProps={{
            variant: TextVariant.BodyMd,
            fontWeight: FontWeight.Medium,
            color: TextColor.TextDefault,
            twClassName: 'shrink grow-0 flex-wrap text-center',
            ...textProps,
          }}
        >
          {children}
        </TextOrChildren>
        {finalEndIconName ? (
          <Icon
            name={finalEndIconName}
            size={IconSize.Sm}
            twClassName="shrink-0"
            {...endIconProps}
          />
        ) : (
          endAccessory
        )}
      </View>
    </ButtonAnimated>
  );
};

export default ButtonBase;
