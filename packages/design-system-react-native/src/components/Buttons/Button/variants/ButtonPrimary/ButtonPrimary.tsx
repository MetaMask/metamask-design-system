import {
  useTailwind,
  withThemeProvider,
} from '@metamask/design-system-twrnc-preset';
import React, { useMemo } from 'react';

import ButtonBase from '../../../../../base-components/ButtonBase';
import type { SpinnerTempProps } from '../../../../../temp-components/SpinnerTemp';
import type { IconProps } from '../../../../Icons/Icon';
import { IconColor } from '../../../../Icons/Icon';
import type { TextProps } from '../../../../Text/Text.types';
import { TextColor } from '../../../../Text/Text.types';
import { DEFAULT_BUTTONPRIMARY_PROPS } from './ButtonPrimary.constants';
import type { ButtonPrimaryProps } from './ButtonPrimary.types';
import { generateButtonPrimaryClassNames } from './ButtonPrimary.utilities';

const ButtonPrimary = ({
  children,
  textProps,
  spinnerProps,
  startIconProps,
  endIconProps,
  isPressed,
  isDanger,
  isInverse,
  isLoading,
  twClassName,
  style,
  ...props
}: ButtonPrimaryProps) => {
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

  const finalSpinnerProps: SpinnerTempProps = {
    ...DEFAULT_BUTTONPRIMARY_PROPS.spinnerProps,
    color: finalIconColor,
    loadingTextProps: {
      color: finalTextColor,
    },
    ...spinnerProps,
  };

  return (
    <ButtonBase
      textProps={finalTextProps}
      spinnerProps={finalSpinnerProps}
      startIconProps={finalStartIconProps}
      endIconProps={finalEndIconProps}
      isLoading={isLoading}
      style={[twStyle, style]}
      {...props}
    >
      {children}
    </ButtonBase>
  );
};

export default withThemeProvider(ButtonPrimary);
