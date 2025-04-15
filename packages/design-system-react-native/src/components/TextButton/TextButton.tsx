/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useMemo, useState } from 'react';
import type { GestureResponderEvent } from 'react-native';
import { View } from 'react-native';

import type { IconProps, IconColor } from '../Icon';
import Icon from '../Icon';
import type { SpinnerProps } from '../temp-components/Spinner';
import Spinner from '../temp-components/Spinner';
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

  // Styling calculation for state changes
  const twContainerClassNames = useMemo(() => {
    return generateTextButtonContainerClassNames({
      isPressed,
      isLoading,
      isDisabled,
      twClassName,
    });
  }, [isPressed, isLoading, isDisabled, twClassName]);

  const twTextClassNames = useMemo(() => {
    return generateTextButtonTextClassNames({
      isPressed,
      isInverse,
      isLoading,
    });
  }, [isPressed, isInverse, isLoading]);

  // Merging default settings for Icons with passed in props
  const finalStartIconProps: Partial<IconProps> = {
    ...DEFAULT_TEXTBUTTON_PROPS.startIconProps,
    ...startIconProps,
    twClassName: `${twTextClassNames} ${startIconProps?.twClassName ?? ''}`,
  };
  const finalStartIconName = startIconName ?? startIconProps?.name;

  const finalEndIconProps: Partial<IconProps> = {
    ...DEFAULT_TEXTBUTTON_PROPS.endIconProps,
    ...endIconProps,
    twClassName: `${twTextClassNames} ${endIconProps?.twClassName ?? ''}`,
  };
  const finalEndIconName = endIconName ?? endIconProps?.name;

  const finalTextProps: Omit<Partial<TextProps>, 'children'> = {
    ...DEFAULT_TEXTBUTTON_PROPS.textProps,
    ...textProps,
    twClassName: `${twTextClassNames} ${textProps?.twClassName ?? ''}`,
  };

  // Merging spinner settings for Icons with passed in props
  const finalSpinnerProps: SpinnerProps = {
    ...DEFAULT_TEXTBUTTON_PROPS.spinnerProps,
    loadingText,
    color: twTextClassNames as IconColor,
    loadingTextProps: {
      twClassName: `${twTextClassNames} mt-[2.5px]`,
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

  /**
   * Design Requirements
   * TextButton needs to be able to be placed inline with other Texts along with
   * accompanying icons.
   *
   * Limitations
   * React Native renders Texts and components nested inside Texts very differently.
   * In order to fulfil design requirements
   * - TextButton needs to be built using Text wrapping the component to ensure
   * when placed in line with other Texts, it can be properly displayed inline
   * with other Texts.
   * - Due to React Native Texts calculating the layout of nested components
   * differently, there needs to be a few styling hacks applied below
   */

  // Get the line height of the text, which is also the height of the component
  const finalVariant = finalTextProps.variant;
  const { lineHeight } = tw`text-${finalVariant as string}`;
  const componentHeight = Number(lineHeight);

  // Due to React Native rendering Views slightly above Texts, any non-texts
  // need to be moved down
  const nonTextOffSet = 2.5;

  // Get the final sizes of Icons to help with manual alignments
  const finalStartIconSize = finalStartIconProps.size;
  const finalEndIconSize = finalEndIconProps.size;

  // Offsets to vertically center the Icon
  const finalStartIconOffset =
    (Number(lineHeight) - Number(finalStartIconSize)) / 2;
  const finalEndIconOffset =
    (Number(lineHeight) - Number(finalEndIconSize)) / 2;

  /**
   * Due to Texts restricting nested components to manipulating layout with
   * margins/paddings, we needed to add Nested Views in order to properly add
   * additional margins/paddings. However, this causes the Text component to
   * somehow not include the Icons as part of the calculation for displaying
   * a change in background color onPress. Because of that, we need to mimic
   * the behavior on the Icon wrappers by baking the margins into the Icon
   * wrappers in order to display the background change properly
   */
  const marginsBetweenIconAndText = 4;
  const startIconWrapperWidth =
    Number(finalStartIconSize) + marginsBetweenIconAndText;
  const endIconWrapperWidth =
    Number(finalEndIconSize) + marginsBetweenIconAndText;

  return (
    <Text>
      {finalStartIconName && <Text style={tw`hidden`}> </Text>}
      {isLoading && (
        <View style={tw`${twContainerClassNames}`}>
          <Spinner {...finalSpinnerProps} />
        </View>
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
        {!isLoading && (
          <>
            {finalStartIconName ? (
              // This additional View is needed, otherwise things are rendered
              // VERY funkily
              <View style={tw`h-[${componentHeight}px]`}>
                <View
                  style={tw`
                    ${twContainerClassNames} 
                    items-start mt-[${nonTextOffSet}px] 
                    pt-[${finalStartIconOffset}px] 
                    h-[${componentHeight}px] 
                    w-[${startIconWrapperWidth}px]
                    `}
                >
                  <Icon name={finalStartIconName} {...finalStartIconProps} />
                </View>
              </View>
            ) : (
              startAccessory
            )}
            <Text {...finalTextProps}>{children}</Text>
            {finalEndIconName ? (
              // This additional View is needed, otherwise things are rendered
              // VERY funkily
              <View style={tw`h-[${componentHeight}px]`}>
                <View
                  style={tw`
                    ${twContainerClassNames} 
                    items-end 
                    mt-[${nonTextOffSet}px] 
                    pt-[${finalEndIconOffset}px] 
                    h-[${componentHeight}px] w-[${endIconWrapperWidth}px]`}
                >
                  <Icon name={finalEndIconName} {...finalEndIconProps} />
                </View>
              </View>
            ) : (
              endAccessory
            )}
          </>
        )}
      </Text>
      {finalEndIconName && <Text style={tw`hidden`}> </Text>}
    </Text>
  );
};

export default TextButton;
