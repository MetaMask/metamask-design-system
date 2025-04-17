/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useMemo } from 'react';
import { View } from 'react-native';

import { ButtonBaseSize } from '../../types';
import Icon from '../Icon';
import type { IconProps } from '../Icon';
import { IconColor, IconSize } from '../Icon';
import ButtonAnimated from '../temp-components/ButtonAnimated';
import type { SpinnerProps } from '../temp-components/Spinner';
import Spinner from '../temp-components/Spinner';
import TextOrChildren from '../temp-components/TextOrChildren/TextOrChildren';
import type { TextProps } from '../Text';
import { TextVariant, FontWeight, TextColor } from '../Text';
import type { ButtonBaseProps } from './ButtonBase.types';
import { generateButtonBaseContainerClassNames } from './ButtonBase.utilities';

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
  twClassName,
  style,
  ...props
}: ButtonBaseProps) => {
  const tw = useTailwind();
  const twContainerClassNames = useMemo(() => {
    return generateButtonBaseContainerClassNames({
      size,
      twClassName,
      isLoading,
      isDisabled,
      isFullWidth,
    });
  }, [size, twClassName, isLoading, isDisabled, isFullWidth]);

  const finalTextProps: Omit<Partial<TextProps>, 'children'> = {
    variant: TextVariant.BodyMd,
    fontWeight: FontWeight.Medium,
    color: TextColor.TextDefault,
    numberOfLines: 1,
    ellipsizeMode: 'clip',
    ...textProps,
  };
  const finalStartIconName = startIconName ?? startIconProps?.name;
  const finalStartIconProps: Partial<IconProps> = {
    size: IconSize.Sm,
    testID: 'start-icon',
    ...startIconProps,
  };

  const finalEndIconName = endIconName ?? endIconProps?.name;
  const finalEndIconProps: Partial<IconProps> = {
    size: IconSize.Sm,
    testID: 'end-icon',
    ...endIconProps,
  };

  const finalSpinnerProps: SpinnerProps = {
    color: IconColor.IconDefault,
    loadingText,
    loadingTextProps: {
      numberOfLines: 1,
    },
    ...spinnerProps,
  };

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
        <Spinner {...finalSpinnerProps} />
      </View>
      <View
        style={tw`flex-row items-center justify-center gap-x-2 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        testID="content-container"
      >
        {finalStartIconName ? (
          <Icon name={finalStartIconName} {...finalStartIconProps} />
        ) : (
          startAccessory
        )}
        <TextOrChildren textProps={finalTextProps}>{children}</TextOrChildren>
        {finalEndIconName ? (
          <Icon name={finalEndIconName} {...finalEndIconProps} />
        ) : (
          endAccessory
        )}
      </View>
    </ButtonAnimated>
  );
};

export default ButtonBase;
