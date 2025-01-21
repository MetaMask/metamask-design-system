/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useMemo, useState } from 'react';
import type { GestureResponderEvent } from 'react-native';
import { Pressable, View } from 'react-native';

import TextOrChildren from '../../primitives/TextOrChildren/TextOrChildren';
import type { SpinnerProps } from '../../temp-components/Spinner';
import Spinner from '../../temp-components/Spinner';
import type { IconProps, IconColor } from '../Icons/Icon';
import Icon from '../Icons/Icon';
import type { TextProps } from '../Text/Text.types';
import { DEFAULT_TEXTBUTTON_PROPS } from './TextButton.constants';
import type { TextButtonProps } from './TextButton.types';
import {
  generateTextButtonContainerClassNames,
  generateTextButtonTextClassNames,
} from './TextButton.utilities';

const TextButton = ({
  children,
  textProps,
  isLoading = DEFAULT_TEXTBUTTON_PROPS.isLoading,
  loadingText,
  spinnerProps,
  startIconName,
  startIconProps,
  startAccessory,
  endIconName,
  endIconProps,
  endAccessory,
  isDisabled = DEFAULT_TEXTBUTTON_PROPS.isDisabled,
  isDanger = DEFAULT_TEXTBUTTON_PROPS.isDanger,
  isInverse = DEFAULT_TEXTBUTTON_PROPS.isInverse,
  onPressIn,
  onPressOut,
  twClassName,
  style,
  ...props
}: TextButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const tw = useTailwind();
  const twContainerClassNames = useMemo(() => {
    return generateTextButtonContainerClassNames({
      isPressed,
      isDanger,
      isInverse,
      isLoading,
      twClassName,
    });
  }, [isPressed, isDanger, isInverse, isLoading, twClassName]);

  const twTextClassNames = useMemo(() => {
    return generateTextButtonTextClassNames({
      isPressed,
      isDanger,
      isInverse,
      isLoading,
    });
  }, [isPressed, isDanger, isInverse, isLoading, textProps]);

  const finalTextProps: Omit<Partial<TextProps>, 'children'> = {
    ...DEFAULT_TEXTBUTTON_PROPS.textProps,
    ...textProps,
    twClassName: `${twTextClassNames} ${textProps?.twClassName ?? ''}`,
  };
  const finalStartIconName = startIconName ?? startIconProps?.name;
  const finalStartIconProps: Partial<IconProps> = {
    ...DEFAULT_TEXTBUTTON_PROPS.startIconProps,
    ...startIconProps,
    twClassName: `${twTextClassNames} ${startIconProps?.twClassName ?? ''}`,
  };

  const finalEndIconName = endIconName ?? endIconProps?.name;
  const finalEndIconProps: Partial<IconProps> = {
    ...DEFAULT_TEXTBUTTON_PROPS.endIconProps,
    ...endIconProps,
    twClassName: `${twTextClassNames} ${endIconProps?.twClassName ?? ''}`,
  };

  const finalSpinnerProps: SpinnerProps = {
    ...DEFAULT_TEXTBUTTON_PROPS.spinnerProps,
    loadingText,
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
    <Pressable
      disabled={isDisabled || isLoading}
      onPressIn={onPressInHandler}
      onPressOut={onPressOutHandler}
      accessible
      style={[
        tw`flex-row items-center justify-center gap-x-2 self-start`,
        style,
      ]}
      testID="text-button"
      {...props}
    >
      {(isPressed || isLoading) && (
        <View
          style={tw`absolute -inset-x-4 -inset-y-3 rounded-full ${twContainerClassNames}`}
        ></View>
      )}
      {isLoading ? (
        <Spinner {...finalSpinnerProps} />
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

export default TextButton;
