import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { TextOrChildren } from '../temp-components/TextOrChildren';

import type { RadioButtonProps } from './RadioButton.types';

const getRadioButtonBorderClass = (
  isReadOnly: boolean,
  isDanger: boolean,
  isChecked: boolean,
): string => {
  if (isReadOnly) {
    return 'border-background-default';
  }
  if (isDanger) {
    return 'border-error-default';
  }
  if (isChecked) {
    return 'border-primary-default';
  }
  return 'border-default';
};

const getRadioButtonDotClass = (
  isReadOnly: boolean,
  isDanger: boolean,
): string => {
  if (isReadOnly) {
    return 'bg-icon-alternative';
  }
  if (isDanger) {
    return 'bg-error-default';
  }
  return 'bg-primary-default';
};

export const RadioButton = ({
  onPress,
  label,
  labelProps,
  isChecked = false,
  isDisabled = false,
  isReadOnly = false,
  isDanger = false,
  touchableOpacityProps,
  radioButtonContainerProps,
  twClassName,
  style,
  ...props
}: RadioButtonProps) => {
  const tw = useTailwind();

  return (
    <View
      {...props}
      style={[
        tw.style(
          'flex-row items-center',
          isDisabled ? 'opacity-50' : 'opacity-100',
          twClassName,
        ),
        style,
      ]}
    >
      <TouchableOpacity
        onPress={onPress}
        disabled={isDisabled || isReadOnly}
        accessible
        accessibilityRole="radio"
        accessibilityState={{
          checked: isChecked,
          disabled: isDisabled,
        }}
        accessibilityLabel={typeof label === 'string' ? label : undefined}
        {...touchableOpacityProps}
        style={[
          tw.style('flex-row items-center'),
          touchableOpacityProps?.style,
        ]}
      >
        <View
          {...radioButtonContainerProps}
          style={[
            tw.style(
              'size-5 items-center justify-center rounded-full border-2 bg-default',
              getRadioButtonBorderClass(isReadOnly, isDanger, isChecked),
            ),
            radioButtonContainerProps?.style,
          ]}
        >
          {isChecked && (
            <View
              style={tw.style(
                'size-3 rounded-full',
                getRadioButtonDotClass(isReadOnly, isDanger),
              )}
            />
          )}
        </View>
        {label ? (
          <TextOrChildren textProps={{ ...labelProps, twClassName: 'ml-3' }}>
            {label}
          </TextOrChildren>
        ) : null}
      </TouchableOpacity>
    </View>
  );
};
