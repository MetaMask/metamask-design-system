import {
  FontWeight,
  TextColor,
  TextVariant,
  SliderMarkColor,
} from '@metamask/design-system-shared';
import {
  getThemeColors,
  usePureBlack,
  useTailwind,
  useTheme,
} from '@metamask/design-system-twrnc-preset';
import React, { useCallback, useMemo } from 'react';
import { AccessibilityActionEvent, Pressable } from 'react-native';
import type { ViewStyle } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

import { Box } from '../Box';
import { Text } from '../Text';

import {
  DEFAULT_MARKS,
  RANGE_LABEL_TOP,
  SLIDER_BOTTOM_PADDING,
  SLIDER_TRACK_INSET,
  THUMB_BOTTOM_OFFSET,
  THUMB_LEFT_OFFSET,
  THUMB_SIZE,
  THUMB_TOP_OFFSET,
} from './Slider.constants';
import type { SliderProps } from './Slider.types';
import {
  buildColorStops,
  clampValueToRange,
  getDotLeftPercent,
  getTrackPercentFromValue,
  hasThemedMarkColors,
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
  marks = DEFAULT_MARKS,
  showRangeLabels = false,
  showRangeDots = false,
  onGrip,
  onMark,
  mapValueToTrackPercent,
  mapTrackPercentToValue,
  trackInset = SLIDER_TRACK_INSET,
  twClassName,
  style,
  ...props
}: SliderProps) => {
  const tw = useTailwind();
  const theme = useTheme();
  const isPureBlack = usePureBlack();

  const palette = useMemo(
    () => getThemeColors(theme, isPureBlack),
    [isPureBlack, theme],
  );

  const themedColors = useMemo(() => {
    const hasThemedColors = hasThemedMarkColors(marks);

    return {
      hasThemedColors,
      fillColorStops: buildColorStops(
        marks,
        palette,
        SliderMarkColor.IconAlternative,
      ),
      thumbColorStops: buildColorStops(
        marks,
        palette,
        SliderMarkColor.IconDefault,
      ),
    };
  }, [palette, marks]);

  const labeledMarks = useMemo(
    () => marks.filter((mark) => mark.label !== undefined),
    [marks],
  );

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
      onMark,
      marks,
      fillColorStops: themedColors.fillColorStops,
      thumbColorStops: themedColors.thumbColorStops,
      hasThemedColors: themedColors.hasThemedColors,
      mapValueToTrackPercent,
      mapTrackPercentToValue,
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
          'relative self-stretch',
          isDisabled ? 'py-2 opacity-40' : 'py-2',
        ),
        {
          marginHorizontal: trackInset,
          ...(showRangeLabels && { paddingBottom: SLIDER_BOTTOM_PADDING }),
        },
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
                'absolute left-0 top-0 h-2 rounded-full',
                !themedColors.hasThemedColors && 'bg-icon-alternative',
              ),
              progressStyle,
            ]}
          />
          {showRangeDots &&
            marks.map((mark) => (
              <Box
                key={`dot-${mark.step}`}
                pointerEvents="none"
                twClassName="absolute top-0.5 h-1 w-1 rounded-full bg-text-muted"
                style={{
                  left: getDotLeftPercent(mark.step) as ViewStyle['left'],
                  transform: [{ translateX: -2 }],
                  zIndex: -2,
                }}
              />
            ))}
          <Animated.View
            style={[
              tw.style(
                'absolute rounded-full',
                !themedColors.hasThemedColors && 'bg-icon-default',
              ),
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
        labeledMarks.map((mark) => (
          <Pressable
            key={`label-${mark.step}`}
            style={[
              tw.style('absolute items-center'),
              {
                top: RANGE_LABEL_TOP,
                left: getDotLeftPercent(mark.step) as ViewStyle['left'],
                transform: [{ translateX: '-50%' }],
              },
            ]}
            onPress={() => handlePressStep(mark.step)}
            disabled={isDisabled}
            accessibilityRole="button"
          >
            <Text
              variant={TextVariant.BodyMd}
              fontWeight={FontWeight.Medium}
              color={TextColor.TextAlternative}
            >
              {mark.label}
            </Text>
          </Pressable>
        ))}
    </Box>
  );
};

Slider.displayName = 'Slider';
