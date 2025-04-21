import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useMemo, useState } from 'react';
import type { GestureResponderEvent } from 'react-native';

import ButtonBase from '../../../ButtonBase';
import type { IconProps } from '../../../Icon';
import { IconColor, IconSize } from '../../../Icon';
import type { SpinnerProps } from '../../../temp-components/Spinner';
import type { TextProps } from '../../../Text/Text.types';
import { TextVariant, FontWeight } from '../../../Text';
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
  isDanger = false,
  isInverse = false,
  isLoading = false,
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
    variant: TextVariant.BodyMd,
    fontWeight: FontWeight.Medium,
    numberOfLines: 1,
    ellipsizeMode: 'clip',
    ...textProps,
    twClassName: `${twTextClassNames} ${textProps?.twClassName ?? ''}`,
  };
  const finalStartIconProps: Partial<IconProps> = {
    size: IconSize.Sm,
    testID: 'start-icon',
    ...startIconProps,
    twClassName: `${twTextClassNames} ${startIconProps?.twClassName ?? ''}`,
  };

  const finalEndIconProps: Partial<IconProps> = {
    size: IconSize.Sm,
    testID: 'end-icon',
    ...endIconProps,
    twClassName: `${twTextClassNames} ${endIconProps?.twClassName ?? ''}`,
  };

  const finalSpinnerProps: SpinnerProps = {
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
