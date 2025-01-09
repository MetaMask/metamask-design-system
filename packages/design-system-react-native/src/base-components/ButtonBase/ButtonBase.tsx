import {
  useTailwind,
  withThemeProvider,
} from '@metamask/design-system-twrnc-preset';
import React, { useMemo } from 'react';
import { Pressable } from 'react-native';

import type { IconProps } from '../../components/Icons/Icon';
import Icon from '../../components/Icons/Icon';
import type { TextProps } from '../../components/Text/Text.types';
import type { SpinnerTempProps } from '../../temp-components/SpinnerTemp';
import SpinnerTemp from '../../temp-components/SpinnerTemp';
import TextOrChildren from '../TextOrChildren/TextOrChildren';
import { DEFAULT_BUTTONBASE_PROPS } from './ButtonBase.constants';
import type { ButtonBaseProps } from './ButtonBase.types';
import { generateButtonBaseClassNames } from './ButtonBase.utilities';

const ButtonBase = ({
  children,
  textProps,
  size = DEFAULT_BUTTONBASE_PROPS.size,
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
  const twStyle = useMemo(() => {
    const mergedClassnames = generateButtonBaseClassNames({
      size,
      twClassName,
      isLoading,
      isDisabled,
      isFullWidth,
    });
    return tw`${mergedClassnames}`;
  }, [tw, size, twClassName, isLoading, isDisabled, isFullWidth]);

  const finalTextProps: Omit<Partial<TextProps>, 'children'> = {
    ...DEFAULT_BUTTONBASE_PROPS.textProps,
    ...textProps,
  };
  const finalStartIconName = startIconName ?? startIconProps?.name;
  const finalStartIconProps: Partial<IconProps> = {
    ...DEFAULT_BUTTONBASE_PROPS.startIconProps,
    ...startIconProps,
  };

  const finalEndIconName = endIconName ?? endIconProps?.name;
  const finalEndIconProps: Partial<IconProps> = {
    ...DEFAULT_BUTTONBASE_PROPS.endIconProps,
    ...endIconProps,
  };

  const finalSpinnerProps: SpinnerTempProps = {
    ...DEFAULT_BUTTONBASE_PROPS.spinnerProps,
    loadingText,
    ...spinnerProps,
  };

  return (
    <Pressable
      disabled={isDisabled ?? isLoading}
      accessibilityRole="button"
      accessible
      style={[twStyle, style]}
      {...props}
    >
      {isLoading ? (
        <SpinnerTemp {...finalSpinnerProps} />
      ) : (
        <>
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
        </>
      )}
    </Pressable>
  );
};

export default withThemeProvider(ButtonBase);
