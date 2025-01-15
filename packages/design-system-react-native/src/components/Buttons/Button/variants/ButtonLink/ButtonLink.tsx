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
import { DEFAULT_BUTTONLINK_PROPS } from './ButtonLink.constants';
import type { ButtonLinkProps } from './ButtonLink.types';
import { generateButtonLinkClassNames } from './ButtonLink.utilities';

const ButtonLink = ({
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
}: ButtonLinkProps) => {
  const tw = useTailwind();
  const twStyle = useMemo(() => {
    const mergedClassnames = generateButtonLinkClassNames({
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
    finalTextColor = TextColor.PrimaryDefault;
    finalIconColor = IconColor.PrimaryDefault;
  }

  const finalTextProps: Omit<Partial<TextProps>, 'children'> = {
    ...DEFAULT_BUTTONLINK_PROPS.textProps,
    color: finalTextColor,
    ...textProps,
  };
  const finalStartIconProps: Partial<IconProps> = {
    ...DEFAULT_BUTTONLINK_PROPS.startIconProps,
    color: finalIconColor,
    ...startIconProps,
  };

  const finalEndIconProps: Partial<IconProps> = {
    ...DEFAULT_BUTTONLINK_PROPS.endIconProps,
    color: finalIconColor,
    ...endIconProps,
  };

  const finalSpinnerProps: SpinnerTempProps = {
    ...DEFAULT_BUTTONLINK_PROPS.spinnerProps,
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

export default withThemeProvider(ButtonLink);
