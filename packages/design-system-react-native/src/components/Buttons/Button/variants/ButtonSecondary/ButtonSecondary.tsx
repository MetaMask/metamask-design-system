import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useMemo, useState } from 'react';
import type { GestureResponderEvent } from 'react-native';

import ButtonBase from '../../../../../primitives/ButtonBase';
import type { SpinnerProps } from '../../../../../temp-components/Spinner';
import type { IconProps } from '../../../../Icons/Icon';
import { IconColor } from '../../../../Icons/Icon';
import type { TextProps } from '../../../../Text/Text.types';
import { TextColor } from '../../../../Text/Text.types';
import { DEFAULT_BUTTONSECONDARY_PROPS } from './ButtonSecondary.constants';
import type { ButtonSecondaryProps } from './ButtonSecondary.types';
import { generateButtonSecondaryClassNames } from './ButtonSecondary.utilities';

const ButtonSecondary = ({
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
}: ButtonSecondaryProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const tw = useTailwind();
  const twStyle = useMemo(() => {
    const mergedClassnames = generateButtonSecondaryClassNames({
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
  if (isInverse && isDanger) {
    finalTextColor = isPressedOrLoading
      ? TextColor.ErrorDefaultPressed
      : TextColor.ErrorDefault;
    finalIconColor = isPressedOrLoading
      ? IconColor.ErrorDefaultPressed
      : IconColor.ErrorDefault;
  } else if (isDanger) {
    finalTextColor = isPressedOrLoading
      ? TextColor.ErrorDefaultPressed
      : TextColor.ErrorDefault;
    finalIconColor = isPressedOrLoading
      ? IconColor.ErrorDefaultPressed
      : IconColor.ErrorDefault;
  } else if (isInverse) {
    finalTextColor = TextColor.PrimaryInverse;
    finalIconColor = IconColor.PrimaryInverse;
  } else {
    finalTextColor = TextColor.TextDefault;
    finalIconColor = IconColor.IconDefault;
  }

  const finalTextProps: Omit<Partial<TextProps>, 'children'> = {
    ...DEFAULT_BUTTONSECONDARY_PROPS.textProps,
    color: finalTextColor,
    ...textProps,
  };
  const finalStartIconProps: Partial<IconProps> = {
    ...DEFAULT_BUTTONSECONDARY_PROPS.startIconProps,
    color: finalIconColor,
    ...startIconProps,
  };

  const finalEndIconProps: Partial<IconProps> = {
    ...DEFAULT_BUTTONSECONDARY_PROPS.endIconProps,
    color: finalIconColor,
    ...endIconProps,
  };

  const finalSpinnerProps: SpinnerProps = {
    ...DEFAULT_BUTTONSECONDARY_PROPS.spinnerProps,
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
      style={[twStyle, style]}
      onPressIn={onPressInHandler}
      onPressOut={onPressOutHandler}
      {...props}
    >
      {children}
    </ButtonBase>
  );
};

export default ButtonSecondary;
