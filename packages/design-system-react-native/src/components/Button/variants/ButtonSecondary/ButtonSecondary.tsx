import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useMemo, useState } from 'react';
import type { GestureResponderEvent } from 'react-native';

import ButtonBase from '../../../../primitives/ButtonBase';
import type { SpinnerProps } from '../../../../temp-components/Spinner';
import type { IconProps, IconColor } from '../../../Icon';
import type { TextProps } from '../../../Text/Text.types';
import { DEFAULT_BUTTONSECONDARY_PROPS } from './ButtonSecondary.constants';
import type { ButtonSecondaryProps } from './ButtonSecondary.types';
import {
  generateButtonSecondaryContainerClassNames,
  generateButtonSecondaryTextClassNames,
} from './ButtonSecondary.utilities';

const ButtonSecondary = ({
  children,
  textProps,
  spinnerProps,
  startIconProps,
  endIconProps,
  isDanger = DEFAULT_BUTTONSECONDARY_PROPS.isDanger,
  isInverse = DEFAULT_BUTTONSECONDARY_PROPS.isInverse,
  isLoading = DEFAULT_BUTTONSECONDARY_PROPS.isLoading,
  onPressIn,
  onPressOut,
  twClassName,
  style,
  ...props
}: ButtonSecondaryProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const tw = useTailwind();
  const twContainerClassNames = useMemo(() => {
    return generateButtonSecondaryContainerClassNames({
      isPressed,
      isDanger,
      isInverse,
      isLoading,
      twClassName,
    });
  }, [isPressed, isDanger, isInverse, isLoading, twClassName]);

  const twTextClassNames = useMemo(() => {
    return generateButtonSecondaryTextClassNames({
      isPressed,
      isDanger,
      isInverse,
      isLoading,
    });
  }, [isPressed, isDanger, isInverse, isLoading]);

  const finalTextProps: Omit<Partial<TextProps>, 'children'> = {
    ...DEFAULT_BUTTONSECONDARY_PROPS.textProps,
    ...textProps,
    twClassName: `${twTextClassNames} ${textProps?.twClassName ?? ''}`,
  };
  const finalStartIconProps: Partial<IconProps> = {
    ...DEFAULT_BUTTONSECONDARY_PROPS.startIconProps,
    ...startIconProps,
    twClassName: `${twTextClassNames} ${startIconProps?.twClassName ?? ''}`,
  };

  const finalEndIconProps: Partial<IconProps> = {
    ...DEFAULT_BUTTONSECONDARY_PROPS.endIconProps,
    ...endIconProps,
    twClassName: `${twTextClassNames} ${endIconProps?.twClassName ?? ''}`,
  };

  const finalSpinnerProps: SpinnerProps = {
    ...DEFAULT_BUTTONSECONDARY_PROPS.spinnerProps,
    color: twTextClassNames as IconColor,
    loadingTextProps: {
      twClassName: twTextClassNames,
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
      style={[tw`${twContainerClassNames}`, style]}
      testID="button-secondary"
      {...props}
    >
      {children}
    </ButtonBase>
  );
};

export default ButtonSecondary;
