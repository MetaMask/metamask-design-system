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
      isLoading,
      twClassName,
    });
  }, [isPressed, isLoading, twClassName]);

  const twTextClassNames = useMemo(() => {
    return `${generateTextButtonTextClassNames({
      isPressed,
      isInverse,
      isLoading,
    })}`;
  }, [isPressed, isInverse, isLoading, textProps]);

  const finalVariant =
    textProps?.variant || DEFAULT_TEXTBUTTON_PROPS.textProps.variant;

  const { lineHeight } = tw`text-${finalVariant as string}`;

  const finalStartIconName = startIconName ?? startIconProps?.name;
  const startIconSize =
    startIconProps?.size || DEFAULT_TEXTBUTTON_PROPS.startIconProps.size;
  const containsStartIcon = startIconName || startIconProps;
  const finalStartIconProps: Partial<IconProps> = {
    ...DEFAULT_TEXTBUTTON_PROPS.startIconProps,
    ...startIconProps,
    twClassName: `${twTextClassNames} ${startIconProps?.twClassName ?? ''}`,
  };

  const finalEndIconName = endIconName ?? endIconProps?.name;
  const endIconSize =
    endIconProps?.size || DEFAULT_TEXTBUTTON_PROPS.endIconProps.size;
  const containsEndIcon = endIconName || endIconProps;
  const finalEndIconProps: Partial<IconProps> = {
    ...DEFAULT_TEXTBUTTON_PROPS.endIconProps,
    ...endIconProps,
    twClassName: `${twTextClassNames} ${endIconProps?.twClassName ?? ''}`,
  };

  const finalTextProps: Omit<Partial<TextProps>, 'children'> = {
    ...DEFAULT_TEXTBUTTON_PROPS.textProps,
    ...textProps,
    twClassName: `ml-[${containsStartIcon ? Number(startIconSize) : 0}px] mr-[${
      containsEndIcon ? Number(endIconSize) : 0
    }px] ${twTextClassNames} ${textProps?.twClassName ?? ''}`,
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
    <Text>
      {containsStartIcon && (
        <Text style={{ display: 'none', marginLeft: 0 }}> </Text>
      )}
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
              <View style={tw`h-[${Number(lineHeight)}px]`}>
                <View
                  style={tw`items-start mt-[2.5px] pt-[${
                    (Number(lineHeight) - Number(startIconSize)) / 2
                  }px] ${twContainerClassNames} h-[${Number(
                    lineHeight,
                  )}px] w-[${Number(startIconSize) + 4}px]`}
                >
                  <Icon name={finalStartIconName} {...finalStartIconProps} />
                </View>
              </View>
            ) : (
              startAccessory
            )}
            <TextOrChildren textProps={finalTextProps}>
              {children}
            </TextOrChildren>
            {finalEndIconName ? (
              <View style={tw`h-[${Number(lineHeight)}px]`}>
                <View
                  style={tw`items-end mt-[2.5px] pt-[${
                    (Number(lineHeight) - Number(endIconSize)) / 2
                  }px] ${twContainerClassNames} h-[${Number(
                    lineHeight,
                  )}px] w-[${Number(endIconSize) + 4}px]`}
                >
                  <Icon name={finalEndIconName} {...finalEndIconProps} />
                </View>
              </View>
            ) : (
              startAccessory
            )}
          </>
        )}
      </Text>
      {containsEndIcon && (
        <Text style={{ display: 'none', marginLeft: 0 }}> </Text>
      )}{' '}
    </Text>
  );
};

export default TextButton;
