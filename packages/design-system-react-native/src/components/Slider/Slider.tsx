import {
  FontWeight,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useCallback } from 'react';
import { AccessibilityActionEvent, Pressable } from 'react-native';
import type { ViewStyle } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

import { Box } from '../Box';
import { Text } from '../Text';

import {
  DEFAULT_RANGE_LABEL_STEPS,
  DEFAULT_TICK_THRESHOLDS,
  RANGE_LABEL_TOP,
  THUMB_BOTTOM_OFFSET,
  THUMB_LEFT_OFFSET,
  THUMB_SIZE,
  THUMB_TOP_OFFSET,
} from './Slider.constants';
import type { SliderProps } from './Slider.types';
import {
  clampValueToRange,
  defaultFormatStepLabel,
  getDotLeftPercent,
  getTrackPercentFromValue,
} from './Slider.utilities';
import { useSliderGesture } from './useSliderGesture';

export const Slider = ({
  value,
  onValueChange,
  onDragEnd,
  minimumValue = 0,
  maximumValue = 100,
  step = 1,
  isDisabled = false,
  testID,
  rangeLabelSteps = DEFAULT_RANGE_LABEL_STEPS,
  showRangeLabels = false,
  showRangeDots = false,
  onGrip,
  onTick,
  tickThresholds = DEFAULT_TICK_THRESHOLDS,
  mapValueToTrackPercent,
  mapTrackPercentToValue,
  formatStepLabel,
  stepToValue: stepToValueProp,
  twClassName,
  style,
  ...props
}: SliderProps) => {
  const tw = useTailwind();

  const formatLabel = formatStepLabel ?? defaultFormatStepLabel;

  const { handleLayout, progressStyle, thumbStyle, gesture, handlePressStep } =
    useSliderGesture({
      value,
      minimumValue,
      maximumValue,
      step,
      isDisabled,
      onValueChange,
      onDragEnd,
      onGrip,
      onTick,
      tickThresholds,
      mapValueToTrackPercent,
      mapTrackPercentToValue,
      stepToValue: stepToValueProp,
    });

  const getAccessibilityText = useCallback(() => {
    const trackPercent = Math.round(
      getTrackPercentFromValue(
        value,
        minimumValue,
        maximumValue,
        mapValueToTrackPercent,
      ),
    );
    return `${trackPercent}%`;
  }, [mapValueToTrackPercent, maximumValue, minimumValue, value]);

  const handleAccessibilityAction = useCallback(
    (event: AccessibilityActionEvent) => {
      if (isDisabled) {
        return;
      }

      const delta = event.nativeEvent.actionName === 'increment' ? step : -step;
      const nextValue = clampValueToRange(
        value + delta,
        minimumValue,
        maximumValue,
        step,
      );

      if (nextValue !== value) {
        onValueChange(nextValue);
        onDragEnd?.(nextValue);
      }
    },
    [
      isDisabled,
      maximumValue,
      minimumValue,
      onDragEnd,
      onValueChange,
      step,
      value,
    ],
  );

  return (
    <Box
      {...props}
      testID={testID}
      accessibilityRole="adjustable"
      accessibilityState={{ disabled: isDisabled }}
      accessibilityValue={{
        min: minimumValue,
        max: maximumValue,
        now: value,
        text: getAccessibilityText(),
      }}
      accessibilityActions={[{ name: 'increment' }, { name: 'decrement' }]}
      onAccessibilityAction={handleAccessibilityAction}
      onLayout={handleLayout}
      style={[
        tw.style(
          'relative mx-4 self-stretch pb-[30px]',
          isDisabled ? 'py-2 opacity-40' : 'py-2',
        ),
        style,
      ]}
      twClassName={twClassName}
    >
      <GestureDetector gesture={gesture}>
        <Animated.View
          style={[tw.style('relative'), { height: THUMB_BOTTOM_OFFSET }]}
        >
          <Animated.View
            style={tw.style(
              'absolute left-0 top-0 h-2 w-full rounded-full bg-border-muted',
            )}
          />
          <Animated.View
            style={[
              tw.style(
                'absolute left-0 top-0 h-2 rounded-full bg-icon-alternative',
              ),
              progressStyle,
            ]}
          />
          {showRangeDots &&
            rangeLabelSteps.map((rangeStep) => (
              <Box
                key={`dot-${rangeStep}`}
                pointerEvents="none"
                twClassName="absolute top-0.5 h-1 w-1 rounded-full bg-text-muted"
                style={{
                  left: getDotLeftPercent(rangeStep) as ViewStyle['left'],
                  transform: [{ translateX: -2 }],
                  zIndex: -2,
                }}
              />
            ))}
          <Animated.View
            style={[
              tw.style('absolute rounded-full bg-icon-default'),
              {
                width: THUMB_SIZE,
                height: THUMB_SIZE,
                top: THUMB_TOP_OFFSET,
                left: THUMB_LEFT_OFFSET,
                elevation: 4,
              },
              thumbStyle,
            ]}
            hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}
          />
        </Animated.View>
      </GestureDetector>

      {showRangeLabels &&
        rangeLabelSteps.map((rangeStep) => (
          <Pressable
            key={`label-${rangeStep}`}
            style={[
              tw.style('absolute items-center'),
              {
                top: RANGE_LABEL_TOP,
                left: getDotLeftPercent(rangeStep) as ViewStyle['left'],
                transform: [{ translateX: '-50%' }],
              },
            ]}
            onPress={() => handlePressStep(rangeStep)}
            disabled={isDisabled}
            accessibilityRole="button"
          >
            <Text
              variant={TextVariant.BodyMd}
              fontWeight={FontWeight.Medium}
              color={TextColor.TextAlternative}
            >
              {formatLabel(rangeStep)}
            </Text>
          </Pressable>
        ))}
    </Box>
  );
};

Slider.displayName = 'Slider';
