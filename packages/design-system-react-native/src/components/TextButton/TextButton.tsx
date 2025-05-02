/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { Pressable } from 'react-native';

import { TextButtonSize } from '../../types';
import Icon, { IconSize } from '../Icon';
import Text, { FontWeight } from '../Text';
import { MAP_TEXTBUTTON_SIZE_TEXTVARIANT } from './TextButton.constants';
import type { TextButtonProps } from './TextButton.types';

const TextButton: React.FC<TextButtonProps> = ({
  children,
  size = TextButtonSize.BodyMd,
  textProps,
  startIconName,
  startIconProps,
  startAccessory,
  endIconName,
  endIconProps,
  endAccessory,
  isDisabled = false,
  isInverse = false,
  onPress,
  onLongPress,
  onPressIn,
  onPressOut,
  twClassName = '',
  accessibilityRole,
  accessibilityLabel,
  style,
  ...props
}) => {
  const tw = useTailwind();

  const { fontSize = 0, lineHeight = 0 } =
    tw`text-${MAP_TEXTBUTTON_SIZE_TEXTVARIANT[size] as string}` as {
      fontSize?: number;
      lineHeight?: number;
    };
  const baselineOffset = (lineHeight - fontSize) / 2;

  const getTextColor = (pressed: boolean): string => {
    if (isInverse) {
      return 'text-primary-inverse';
    }
    return pressed ? 'text-primary-defaultPressed' : 'text-primary-default';
  };

  const getTextDecoration = (pressed: boolean): string =>
    isInverse || pressed ? 'underline' : 'no-underline';

  return (
    <Text>
      <Pressable
        accessibilityRole={accessibilityRole ?? 'button'}
        accessibilityLabel={accessibilityLabel}
        disabled={isDisabled}
        onPress={onPress}
        onLongPress={onLongPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={({ pressed }) => [
          { transform: [{ translateY: baselineOffset }] },
          tw`flex-row items-center ${pressed ? 'bg-background-pressed' : 'bg-transparent'} ${isDisabled ? 'opacity-50' : 'opacity-100'} ${twClassName}`,
          style,
        ]}
        {...props}
      >
        {({ pressed }) => (
          <>
            {startIconName ? (
              <Icon
                name={startIconName}
                size={IconSize.Sm}
                testID="start-icon"
                twClassName={`${getTextColor(pressed)} mr-1`}
                {...startIconProps}
              />
            ) : (
              startAccessory
            )}

            <Text
              variant={MAP_TEXTBUTTON_SIZE_TEXTVARIANT[size]}
              fontWeight={FontWeight.Medium}
              {...textProps}
              twClassName={` ${getTextColor(pressed)} ${getTextDecoration(pressed)} ${textProps?.twClassName ?? ''} `}
            >
              {children}
            </Text>

            {endIconName ? (
              <Icon
                name={endIconName}
                size={IconSize.Sm}
                testID="end-icon"
                twClassName={`${getTextColor(pressed)} ml-1`}
                {...endIconProps}
              />
            ) : (
              endAccessory
            )}
          </>
        )}
      </Pressable>
    </Text>
  );
};

export default TextButton;
