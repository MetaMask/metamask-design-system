/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useMemo, useState } from 'react';
import type { GestureResponderEvent } from 'react-native';
import { View } from 'react-native';

import TextOrChildren from '../../primitives/TextOrChildren/TextOrChildren';
import type { SpinnerProps } from '../../temp-components/Spinner';
import Spinner from '../../temp-components/Spinner';
import type { IconProps, IconColor } from '../Icon';
import Icon from '../Icon';
import Text from '../Text/Text';
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
  onPress,
  onPressIn,
  onPressOut,
  onLongPress,
  twClassName,
  accessibilityRole,
  accessibilityLabel,
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
    return `${generateTextButtonTextClassNames({
      isPressed,
      isDanger,
      isInverse,
      isLoading,
    })}`;
  }, [isPressed, isDanger, isInverse, isLoading, textProps]);

  const finalTextProps: Omit<Partial<TextProps>, 'children'> = {
    ...DEFAULT_TEXTBUTTON_PROPS.textProps,
    ...textProps,
    twClassName: `${twTextClassNames} ${textProps?.twClassName ?? ''}`,
  };

  const { lineHeight } = tw`text-${finalTextProps.variant as string}`;

  const finalStartIconName = startIconName ?? startIconProps?.name;
  const finalStartIconProps: Partial<IconProps> = {
    ...DEFAULT_TEXTBUTTON_PROPS.startIconProps,
    ...startIconProps,
    twClassName: `${twTextClassNames} ${startIconProps?.twClassName ?? ''}`,
  };
  const finalStartIconOffset =
    (Number(lineHeight) - Number(finalStartIconProps.size)) / 2 + 2;

  const finalEndIconName = endIconName ?? endIconProps?.name;
  const finalEndIconProps: Partial<IconProps> = {
    ...DEFAULT_TEXTBUTTON_PROPS.endIconProps,
    ...endIconProps,
    twClassName: `${twTextClassNames} ${endIconProps?.twClassName ?? ''}`,
  };
  const finalEndIconOffset =
    (Number(lineHeight) - Number(finalEndIconProps.size)) / 2 + 2;

  const finalSpinnerProps: SpinnerProps = {
    ...DEFAULT_TEXTBUTTON_PROPS.spinnerProps,
    loadingText,
    color: twTextClassNames as IconColor,
    loadingTextProps: {
      twClassName: twTextClassNames,
    },
    ...spinnerProps,
  };
  const onPressHandler = (event: GestureResponderEvent) => {
    if (!isDisabled && !isLoading) {
      onPress?.(event);
    }
  };

  const onPressInHandler = (event: GestureResponderEvent) => {
    if (!isDisabled && !isLoading) {
      setIsPressed(true);
      onPressIn?.(event);
    }
  };

  const onPressOutHandler = (event: GestureResponderEvent) => {
    if (!isDisabled && !isLoading) {
      setIsPressed(false);
      onPressOut?.(event);
    }
  };

  const onLongPressHandler = (event: GestureResponderEvent) => {
    if (!isDisabled && !isLoading) {
      onLongPress?.(event);
    }
  };

  return (
    <Text
      onPress={onPressHandler}
      onPressIn={onPressInHandler}
      onPressOut={onPressOutHandler}
      onLongPress={onLongPressHandler}
      accessible
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      style={[tw`${twContainerClassNames}`, style]}
      testID="text-button"
      suppressHighlighting
      {...props}
    >
      {isLoading ? (
        <Spinner {...finalSpinnerProps} />
      ) : (
        <>
          {finalStartIconName ? (
            <View
              style={{
                height: Number(lineHeight),
              }}
            >
              <Icon
                name={finalStartIconName}
                style={{ marginTop: finalStartIconOffset, marginRight: 4 }}
                {...finalStartIconProps}
              />
            </View>
          ) : (
            startAccessory
          )}
          <TextOrChildren textProps={finalTextProps}>{children}</TextOrChildren>
          {finalEndIconName ? (
            <View
              style={{
                height: Number(lineHeight),
              }}
            >
              <Icon
                name={finalEndIconName}
                style={{ marginTop: finalEndIconOffset, marginLeft: 4 }}
                {...finalEndIconProps}
              />
            </View>
          ) : (
            endAccessory
          )}
        </>
      )}
    </Text>
  );
};

export default TextButton;
