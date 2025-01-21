import {
  useTailwind,
  withThemeProvider,
  Theme,
} from '@metamask/design-system-twrnc-preset';
import React, { useMemo, useState } from 'react';
import type { GestureResponderEvent } from 'react-native';

import ButtonBase from '../../../../../primitives/ButtonBase';
import type { SpinnerProps } from '../../../../../temp-components/Spinner';
import type { IconProps } from '../../../../Icons/Icon';
import { IconColor } from '../../../../Icons/Icon';
import type { TextProps } from '../../../../Text/Text.types';
import { TextColor } from '../../../../Text/Text.types';
import { DEFAULT_BUTTONPRIMARY_PROPS } from './ButtonPrimary.constants';
import type { ButtonPrimaryProps } from './ButtonPrimary.types';
import { generateButtonPrimaryClassNames } from './ButtonPrimary.utilities';

const ButtonPrimaryBase = ({
  children,
  textProps,
  spinnerProps,
  startIconProps,
  endIconProps,
  isDanger,
  isInverse,
  isLoading,
  onPressIn,
  onPressOut,
  twClassName,
  style,
  ...props
}: ButtonPrimaryProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const tw = useTailwind();
  const twStyle = useMemo(() => {
    const mergedClassnames = generateButtonPrimaryClassNames({
      isPressed,
      isDanger,
      isInverse,
      isLoading,
      twClassName,
    });
    return tw`${mergedClassnames}`;
  }, [tw, isPressed, isDanger, isInverse, isLoading, twClassName]);

  let finalTextColor, finalIconColor;
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  const isPressedOrLoading = isPressed || isLoading;

  if (isDanger) {
    finalTextColor = TextColor.PrimaryInverse;
    finalIconColor = IconColor.PrimaryInverse;
  } else if (isInverse) {
    finalTextColor = TextColor.TextDefault;
    finalIconColor = IconColor.IconDefault;
  } else {
    finalTextColor = TextColor.PrimaryInverse;
    finalIconColor = IconColor.PrimaryInverse;
  }
  if (isInverse && isDanger) {
    const pressedOrLoading = isPressedOrLoading;
    finalTextColor = pressedOrLoading
      ? TextColor.ErrorDefaultPressed
      : TextColor.ErrorDefault;
    finalIconColor = pressedOrLoading
      ? IconColor.ErrorDefaultPressed
      : IconColor.ErrorDefault;
  }

  const finalTextProps: Omit<Partial<TextProps>, 'children'> = {
    ...DEFAULT_BUTTONPRIMARY_PROPS.textProps,
    color: finalTextColor,
    ...textProps,
  };
  const finalStartIconProps: Partial<IconProps> = {
    ...DEFAULT_BUTTONPRIMARY_PROPS.startIconProps,
    color: finalIconColor,
    ...startIconProps,
  };

  const finalEndIconProps: Partial<IconProps> = {
    ...DEFAULT_BUTTONPRIMARY_PROPS.endIconProps,
    color: finalIconColor,
    ...endIconProps,
  };

  const finalSpinnerProps: SpinnerProps = {
    ...DEFAULT_BUTTONPRIMARY_PROPS.spinnerProps,
    color: finalIconColor,
    loadingTextProps: {
      color: finalTextColor,
    },
    ...spinnerProps,
  };

  const onPressInHandler = (event: GestureResponderEvent) => {
    setIsPressed(true);
    onPressIn?.(event);
  };

  const onPressOutHandler = (event: GestureResponderEvent) => {
    setIsPressed(false);
    onPressOut?.(event);
  };

  return (
    <ButtonBase
      textProps={finalTextProps}
      spinnerProps={finalSpinnerProps}
      startIconProps={finalStartIconProps}
      endIconProps={finalEndIconProps}
      isLoading={isLoading}
      onPressIn={onPressInHandler}
      onPressOut={onPressOutHandler}
      style={[twStyle, style]}
      {...props}
    >
      {children}
    </ButtonBase>
  );
};

const ButtonPrimaryLightOnly = withThemeProvider(
  ButtonPrimaryBase,
  Theme.Light,
);

const ButtonPrimary = ({ isInverse, ...props }: ButtonPrimaryProps) => {
  if (isInverse) {
    return <ButtonPrimaryBase isInverse={isInverse} {...props} />;
  }
  return <ButtonPrimaryLightOnly isInverse={isInverse} {...props} />;
};
export default ButtonPrimary;
