import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { Switch as RNSwitch, Platform, View } from 'react-native';

import { Text, TextVariant, TextColor } from '../Text';

import type { SwitchProps } from './Switch.types';

const IOS_SWITCH_MARGIN_FIX = 4;

export const Switch = ({
  isOn,
  isDisabled = false,
  onValueChange,
  label,
  style,
  accessibilityLabel,
  ...props
}: SwitchProps) => {
  const tw = useTailwind();
  const resolvedLabel =
    accessibilityLabel ?? (typeof label === 'string' ? label : undefined);
  // Hide the visible label from assistive tech only when the switch itself
  // carries the accessible name, so the label is not announced twice.
  const visibleLabelAccessibilityProps = resolvedLabel
    ? ({
        accessibilityElementsHidden: true,
        importantForAccessibility: 'no-hide-descendants',
      } as const)
    : undefined;

  return (
    <View style={tw.style('flex-row items-center', isDisabled && 'opacity-50')}>
      {label ? (
        <Text
          variant={TextVariant.BodyMd}
          color={TextColor.TextDefault}
          style={tw`mr-2 flex-1`}
          {...visibleLabelAccessibilityProps}
        >
          {label}
        </Text>
      ) : null}
      <RNSwitch
        {...props}
        value={isOn}
        disabled={isDisabled}
        onValueChange={onValueChange}
        accessibilityRole="switch"
        accessibilityState={{
          checked: isOn,
          disabled: isDisabled,
        }}
        accessibilityLabel={resolvedLabel}
        style={[
          Platform.OS === 'ios' && { marginRight: IOS_SWITCH_MARGIN_FIX },
          style,
        ]}
      />
    </View>
  );
};
