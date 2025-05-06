/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useCallback } from 'react';
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
  twClassName = '',
  accessibilityRole,
  accessibilityLabel,
  style,
  ...props
}) => {
  const tw = useTailwind();
  /**
   * Calculating the baselineOffset. This baselineOffset is needed to make sure
   * the TextButton aligns perfectly when placed within Text elements
   */
  const { fontSize, lineHeight } = tw`text-${
    MAP_TEXTBUTTON_SIZE_TEXTVARIANT[size] as string
  }` as {
    fontSize: number;
    lineHeight: number;
  };
  const baselineOffset = (lineHeight - fontSize) / 2;

  const getTextColor = useCallback(
    (pressed: boolean): string => {
      if (isInverse) {
        return 'text-primary-inverse';
      }
      return pressed ? 'text-primary-defaultPressed' : 'text-primary-default';
    },
    [isInverse],
  );

  const getTextDecoration = useCallback(
    (pressed: boolean): string =>
      isInverse || pressed ? 'underline' : 'no-underline',
    [isInverse],
  );

  return (
    <Text>
      <Pressable
        accessibilityRole={accessibilityRole ?? 'button'}
        accessibilityLabel={accessibilityLabel}
        disabled={isDisabled}
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
