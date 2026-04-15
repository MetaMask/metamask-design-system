import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { forwardRef, useCallback } from 'react';
import type { GestureResponderEvent } from 'react-native';
import { Pressable } from 'react-native';

import { Icon, IconSize } from '../Icon';
import { TextOrChildren } from '../temp-components/TextOrChildren';

import { MAP_PICKERBASE_END_ARROW_TO_ICON_NAME } from './PickerBase.constants';
import type { PickerBaseProps } from './PickerBase.types';

export const PickerBase = forwardRef<
  React.ComponentRef<typeof Pressable>,
  PickerBaseProps
>(
  (
    {
      children,
      textProps,
      startAccessory,
      endArrow,
      endAccessory,
      isDisabled = false,
      endArrowIconProps,
      twClassName,
      style,
      testID,
      onPress,
      ...pressableRest
    },
    ref,
  ) => {
    const tw = useTailwind();

    const handlePress = useCallback(
      (event: GestureResponderEvent) => {
        if (!isDisabled && onPress) {
          onPress(event);
        }
      },
      [isDisabled, onPress],
    );

    return (
      <Pressable
        ref={ref}
        {...pressableRest}
        accessibilityRole="button"
        accessibilityState={{ disabled: isDisabled }}
        disabled={isDisabled}
        testID={testID}
        style={[
          tw.style(
            'flex-row items-center gap-1',
            isDisabled && 'opacity-50',
            twClassName,
          ),
          style,
        ]}
        onPress={handlePress}
      >
        {startAccessory}
        <TextOrChildren textProps={textProps}>{children}</TextOrChildren>
        {endArrow && (
          <Icon
            size={IconSize.Sm}
            {...endArrowIconProps}
            name={MAP_PICKERBASE_END_ARROW_TO_ICON_NAME[endArrow]}
          />
        )}
        {!endArrow && endAccessory}
      </Pressable>
    );
  },
);

PickerBase.displayName = 'PickerBase';
