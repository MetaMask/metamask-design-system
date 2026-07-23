import {
  mergeTwClassName,
  SelectButtonSize,
  SelectButtonVariant,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { Pressable } from 'react-native';
import type {
  PressableStateCallbackType,
  StyleProp,
  ViewStyle,
} from 'react-native';

import { KeyValueRow } from '../KeyValueRow';
import { SelectButton } from '../SelectButton';

import type { KeyValueSelectProps } from './KeyValueSelect.types';

const ROOT_TW_CLASS_NAME = 'w-full pl-4 pr-1';

export const KeyValueSelect = ({
  keyLabel,
  keyStartAccessory,
  keyEndAccessory,
  keyTextProps,
  keyEndButtonIconProps,
  variant,
  value,
  valueStartAccessory,
  valueEndAccessory,
  valueTextProps,
  selectButtonProps,
  isDisabled = false,
  twClassName,
  style,
  accessibilityRole,
  ...pressableProps
}: KeyValueSelectProps) => {
  const tw = useTailwind();
  const rootTwClassName = mergeTwClassName(ROOT_TW_CLASS_NAME, twClassName);

  const getPressableStyle = ({
    pressed,
  }: PressableStateCallbackType): StyleProp<ViewStyle> => {
    const baseStyle = tw.style(rootTwClassName, pressed && 'bg-pressed');

    if (!style) {
      return baseStyle;
    }

    const userStyle = typeof style === 'function' ? style({ pressed }) : style;

    return [baseStyle, userStyle];
  };

  const renderSelectValue = () => (
    <SelectButton
      {...selectButtonProps}
      value={value}
      startAccessory={valueStartAccessory}
      endAccessory={valueEndAccessory}
      textProps={valueTextProps}
      variant={SelectButtonVariant.Secondary}
      isDisabled={isDisabled}
      size={SelectButtonSize.Md}
      pointerEvents="none"
      accessible={false}
    />
  );

  return (
    <Pressable
      accessibilityRole={accessibilityRole ?? 'button'}
      disabled={isDisabled}
      style={getPressableStyle}
      {...pressableProps}
    >
      <KeyValueRow
        keyLabel={keyLabel}
        keyStartAccessory={keyStartAccessory}
        keyEndAccessory={keyEndAccessory}
        keyTextProps={keyTextProps}
        keyEndButtonIconProps={keyEndButtonIconProps}
        variant={variant}
        value={renderSelectValue()}
      />
    </Pressable>
  );
};

KeyValueSelect.displayName = 'KeyValueSelect';
