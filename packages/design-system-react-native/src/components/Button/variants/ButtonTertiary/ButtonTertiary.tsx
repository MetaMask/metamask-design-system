import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useMemo, useState } from 'react';
import type { GestureResponderEvent } from 'react-native';

import ButtonBase from '../../../../primitives/ButtonBase';
import type { SpinnerProps } from '../../../../temp-components/Spinner';
import type { IconProps, IconColor } from '../../../Icon';
import type { TextProps } from '../../../Text/Text.types';
import { DEFAULT_BUTTONTERTIARY_PROPS } from './ButtonTertiary.constants';
import type { ButtonTertiaryProps } from './ButtonTertiary.types';
import {
  generateButtonTertiaryContainerClassNames,
  generateButtonTertiaryTextClassNames,
} from './ButtonTertiary.utilities';

const ButtonTertiary = ({
  children,
  textProps,
  spinnerProps,
  startIconProps,
  endIconProps,
  isDanger = DEFAULT_BUTTONTERTIARY_PROPS.isDanger,
  isInverse = DEFAULT_BUTTONTERTIARY_PROPS.isInverse,
  isLoading = DEFAULT_BUTTONTERTIARY_PROPS.isLoading,
  onPressIn,
  onPressOut,
  twClassName,
  style,
  ...props
}: ButtonTertiaryProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const tw = useTailwind();
  const twContainerClassNames = useMemo(() => {
    return generateButtonTertiaryContainerClassNames({
      isPressed,
      isDanger,
      isInverse,
      isLoading,
      twClassName,
    });
  }, [isPressed, isDanger, isInverse, isLoading, twClassName]);

  const twTextClassNames = useMemo(() => {
    return generateButtonTertiaryTextClassNames({
      isPressed,
      isDanger,
      isInverse,
      isLoading,
    });
  }, [isPressed, isDanger, isInverse, isLoading]);

  const finalTextProps: Omit<Partial<TextProps>, 'children'> = {
    ...DEFAULT_BUTTONTERTIARY_PROPS.textProps,
    ...textProps,
    twClassName: `${twTextClassNames} ${textProps?.twClassName ?? ''}`,
  };
  const finalStartIconProps: Partial<IconProps> = {
    ...DEFAULT_BUTTONTERTIARY_PROPS.startIconProps,
    ...startIconProps,
    twClassName: `${twTextClassNames} ${startIconProps?.twClassName ?? ''}`,
  };

  const finalEndIconProps: Partial<IconProps> = {
    ...DEFAULT_BUTTONTERTIARY_PROPS.endIconProps,
    ...endIconProps,
    twClassName: `${twTextClassNames} ${endIconProps?.twClassName ?? ''}`,
  };

  const finalSpinnerProps: SpinnerProps = {
    ...DEFAULT_BUTTONTERTIARY_PROPS.spinnerProps,
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
      testID="button-tertiary"
      {...props}
    >
      {children}
    </ButtonBase>
  );
};

export default ButtonTertiary;
