import { TickColor } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import {
  fireEvent,
  render,
  renderHook,
  screen,
} from '@testing-library/react-native';
import React from 'react';

import { Slider } from './Slider';
import {
  DOT_EDGE_INSET_PERCENT,
  DOT_EDGE_MAX_PERCENT,
  SLIDER_BOTTOM_PADDING,
  SLIDER_TRACK_INSET,
} from './Slider.constants';
import {
  buildColorStops,
  clampGesturePosition,
  clampTrackPercent,
  clampValueToRange,
  defaultMapTrackPercentToValue,
  defaultMapValueToTrackPercent,
  defaultStepToValue,
  getDotLeftPercent,
  getTickHapticThresholds,
  getTickValue,
  getTrackPercentFromValue,
  hasThemedTickColors,
  interpolateTickColor,
  positionToTrackPercent,
  resolveTickColor,
  resolveTrackPercentToValue,
  resolveValueToTrackPercent,
  trackPercentToPosition,
} from './Slider.utilities';

jest.mock('react-native-gesture-handler', () => {
  const createGestureMock = () => {
    const gesture: Record<string, unknown> = {};
    const chain = () => gesture;
    gesture.enabled = chain;
    gesture.onStart = chain;
    gesture.onUpdate = chain;
    gesture.onEnd = chain;
    gesture.onFinalize = chain;
    return gesture;
  };

  return {
    GestureDetector: ({ children }: { children: React.ReactNode }) => children,
    Gesture: {
      Pan: () => createGestureMock(),
      Tap: () => createGestureMock(),
      Simultaneous: jest.fn((tap, pan) => ({ tap, pan })),
    },
  };
});

const mockMusdAmountToPercent = (amount: number): number => {
  if (amount <= 100) {
    return 0;
  }
  if (amount <= 1000) {
    return ((amount - 100) / 900) * 50;
  }

  return 50 + ((amount - 1000) / 9000) * 50;
};

const mockMusdTicks = [
  { step: 0, label: '$100', value: 100 },
  { step: 50, label: '$1,000', value: 1000 },
  { step: 100, label: '$10,000', value: 10000 },
];

describe('Slider.utilities', () => {
  describe('value mapping', () => {
    it('maps value to track percent linearly', () => {
      expect(defaultMapValueToTrackPercent(50, 0, 100)).toBe(50);
      expect(defaultMapValueToTrackPercent(0, 0, 100)).toBe(0);
      expect(defaultMapValueToTrackPercent(100, 0, 100)).toBe(100);
      expect(defaultMapValueToTrackPercent(150, 0, 100)).toBe(100);
    });

    it('returns zero track percent when range is zero', () => {
      expect(defaultMapValueToTrackPercent(50, 10, 10)).toBe(0);
    });

    it('maps track percent to domain value with step rounding', () => {
      expect(defaultMapTrackPercentToValue(50, 0, 100, 1)).toBe(50);
      expect(defaultMapTrackPercentToValue(33, 0, 100, 5)).toBe(35);
      expect(defaultMapTrackPercentToValue(150, 0, 100, 1)).toBe(100);
    });

    it('returns minimum when mapping track percent with zero range', () => {
      expect(defaultMapTrackPercentToValue(50, 10, 10, 1)).toBe(10);
    });

    it('converts track percent to position and back', () => {
      expect(trackPercentToPosition(50, 100)).toBe(50);
      expect(trackPercentToPosition(0, 0)).toBe(0);
      expect(positionToTrackPercent(50, 100)).toBe(50);
      expect(positionToTrackPercent(50, 0)).toBe(0);
    });

    it('maps default step to domain value', () => {
      expect(defaultStepToValue(25, 0, 100)).toBe(25);
      expect(defaultStepToValue(50, 0, 200)).toBe(100);
    });

    it('clamps value to range with step', () => {
      expect(clampValueToRange(105, 0, 100, 1)).toBe(100);
      expect(clampValueToRange(33, 0, 100, 5)).toBe(35);
    });

    it('returns minimum when clamping with zero range', () => {
      expect(clampValueToRange(50, 10, 10, 1)).toBe(10);
    });

    it('resolves track percent from custom mapper', () => {
      expect(
        getTrackPercentFromValue(1000, 0, 10000, mockMusdAmountToPercent),
      ).toBe(50);
    });

    it('resolveTrackPercentToValue uses a custom mapper', () => {
      const customMapper = jest.fn((trackPercent: number) => trackPercent * 10);

      expect(resolveTrackPercentToValue(25, 0, 100, 1, customMapper)).toBe(250);
      expect(customMapper).toHaveBeenCalledWith(25);
    });

    it('resolveTrackPercentToValue falls back to the default mapper', () => {
      expect(resolveTrackPercentToValue(50, 0, 100, 5)).toBe(50);
    });

    it('resolveValueToTrackPercent uses a custom mapper', () => {
      const customMapper = jest.fn((domainValue: number) => domainValue / 2);

      expect(resolveValueToTrackPercent(80, 0, 100, customMapper)).toBe(40);
      expect(customMapper).toHaveBeenCalledWith(80);
    });

    it('resolveValueToTrackPercent falls back to the default mapper', () => {
      expect(resolveValueToTrackPercent(50, 0, 100)).toBe(50);
    });

    it('clampTrackPercent clamps values to 0–100', () => {
      expect(clampTrackPercent(-10)).toBe(0);
      expect(clampTrackPercent(110)).toBe(100);
    });

    it('clampGesturePosition clamps touch coordinates to track width', () => {
      expect(clampGesturePosition(-5, 100)).toBe(0);
      expect(clampGesturePosition(150, 100)).toBe(100);
      expect(clampGesturePosition(50, 100)).toBe(50);
    });
  });

  describe('tick helpers', () => {
    const mockPalette = {
      'success-default': '#00FF00',
      'error-default': '#FF0000',
      'icon-default': '#111111',
      'icon-alternative': '#222222',
    };

    it('getTickValue uses explicit value when provided', () => {
      expect(getTickValue({ step: 50, value: 20 }, 0, 100)).toBe(20);
    });

    it('getTickValue falls back to linear default', () => {
      expect(getTickValue({ step: 50 }, 0, 100)).toBe(50);
    });

    it('getTickHapticThresholds includes labeled ticks by default', () => {
      expect(
        getTickHapticThresholds([
          { step: 0, label: '0%' },
          { step: 25 },
          { step: 50, label: '50%' },
        ]),
      ).toStrictEqual([0, 50]);
    });

    it('getTickHapticThresholds respects explicit haptic flag', () => {
      expect(
        getTickHapticThresholds([
          { step: 0, haptic: true },
          { step: 50, label: '50%', haptic: false },
        ]),
      ).toStrictEqual([0]);
    });

    it('resolveTickColor resolves token keys from palette', () => {
      expect(
        resolveTickColor(TickColor.SuccessDefault, mockPalette, '#000000'),
      ).toBe('#00FF00');
    });

    it('resolveTickColor passes through hex values', () => {
      expect(resolveTickColor('#ABCDEF', mockPalette, '#000000')).toBe(
        '#ABCDEF',
      );
    });

    it('resolveTickColor falls back when token is missing', () => {
      expect(resolveTickColor('missing-token', mockPalette, '#FALLBACK')).toBe(
        '#FALLBACK',
      );
    });

    it('buildColorStops applies fallback for ticks without color', () => {
      expect(
        buildColorStops(
          [{ step: 0, color: TickColor.SuccessDefault }, { step: 100 }],
          mockPalette,
          TickColor.IconAlternative,
        ),
      ).toStrictEqual([
        { step: 0, color: '#00FF00' },
        { step: 100, color: '#222222' },
      ]);
    });

    it('hasThemedTickColors returns false when no tick has color', () => {
      expect(hasThemedTickColors([{ step: 0, label: '0%' }])).toBe(false);
    });

    it('hasThemedTickColors returns true when a tick has color', () => {
      expect(
        hasThemedTickColors([{ step: 0, color: TickColor.SuccessDefault }]),
      ).toBe(true);
    });

    it('interpolateTickColor returns black when stops are empty', () => {
      expect(interpolateTickColor(50, [])).toBe('#000000');
    });

    it('interpolateTickColor returns the sole stop color', () => {
      expect(interpolateTickColor(50, [{ step: 0, color: '#00FF00' }])).toBe(
        '#00FF00',
      );
    });

    it('buildColorStops uses hard-coded fallback when palette token is missing', () => {
      expect(
        buildColorStops(
          [{ step: 0 }, { step: 100 }],
          {},
          TickColor.IconDefault,
        ),
      ).toStrictEqual([
        { step: 0, color: '#000000' },
        { step: 100, color: '#000000' },
      ]);
    });
  });

  describe('layout positioning', () => {
    it('positions dots at track-percent offsets', () => {
      expect(getDotLeftPercent(0)).toBe(DOT_EDGE_INSET_PERCENT);
      expect(getDotLeftPercent(50)).toBe('50%');
      expect(getDotLeftPercent(100)).toBe(DOT_EDGE_MAX_PERCENT);
    });
  });
});

describe('Slider', () => {
  let tw: ReturnType<typeof useTailwind>;

  const ROOT_TEST_ID = 'slider';

  const defaultProps = {
    value: 50,
    onValueChange: jest.fn(),
    minimumValue: 0,
    maximumValue: 100,
    showRangeLabels: true,
    showRangeDots: true,
  };

  beforeAll(() => {
    tw = renderHook(() => useTailwind()).result.current;
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('forwards testID to the root element', () => {
    const { getByTestId } = render(
      <Slider {...defaultProps} testID={ROOT_TEST_ID} />,
    );

    expect(getByTestId(ROOT_TEST_ID)).toBeOnTheScreen();
  });

  it('renders range labels when showRangeLabels is true', () => {
    render(<Slider {...defaultProps} />);

    expect(screen.getByText('0%')).toBeOnTheScreen();
    expect(screen.getByText('25%')).toBeOnTheScreen();
    expect(screen.getByText('50%')).toBeOnTheScreen();
    expect(screen.getByText('75%')).toBeOnTheScreen();
    expect(screen.getByText('100%')).toBeOnTheScreen();
  });

  it('hides range labels when showRangeLabels is false', () => {
    render(<Slider {...defaultProps} showRangeLabels={false} />);

    expect(screen.queryByText('25%')).toBeNull();
  });

  it('does not reserve bottom padding for range labels when showRangeLabels is false', () => {
    const { getByTestId } = render(
      <Slider
        value={50}
        onValueChange={jest.fn()}
        showRangeLabels={false}
        testID={ROOT_TEST_ID}
      />,
    );

    expect(getByTestId(ROOT_TEST_ID)).toHaveStyle({
      ...tw.style('py-2'),
      marginHorizontal: SLIDER_TRACK_INSET,
    });
    expect(getByTestId(ROOT_TEST_ID)).not.toHaveStyle({
      paddingBottom: SLIDER_BOTTOM_PADDING,
    });
  });

  it('reserves bottom padding for range labels when showRangeLabels is true', () => {
    const { getByTestId } = render(
      <Slider
        value={50}
        onValueChange={jest.fn()}
        showRangeLabels
        testID={ROOT_TEST_ID}
      />,
    );

    expect(getByTestId(ROOT_TEST_ID)).toHaveStyle({
      paddingBottom: SLIDER_BOTTOM_PADDING,
    });
  });

  it('calls onValueChange when a range label is pressed', () => {
    const onValueChange = jest.fn();
    render(<Slider {...defaultProps} onValueChange={onValueChange} />);

    fireEvent.press(screen.getByText('75%'));

    expect(onValueChange).toHaveBeenCalledWith(75);
  });

  it('calls onDragEnd when a range label is pressed', () => {
    const onDragEnd = jest.fn();
    render(<Slider {...defaultProps} onDragEnd={onDragEnd} />);

    fireEvent.press(screen.getByText('50%'));

    expect(onDragEnd).toHaveBeenCalledWith(50);
  });

  it('does not call onValueChange when isDisabled and label is pressed', () => {
    const onValueChange = jest.fn();
    render(
      <Slider {...defaultProps} isDisabled onValueChange={onValueChange} />,
    );

    fireEvent.press(screen.getByText('50%'));

    expect(onValueChange).not.toHaveBeenCalled();
  });

  it('fires onTick when crossing a threshold via label press', () => {
    const onTick = jest.fn();
    const { rerender } = render(
      <Slider {...defaultProps} value={10} onTick={onTick} />,
    );

    fireEvent.press(screen.getByText('50%'));

    expect(onTick).toHaveBeenCalled();

    onTick.mockClear();
    rerender(<Slider {...defaultProps} value={60} onTick={onTick} />);
    fireEvent.press(screen.getByText('25%'));

    expect(onTick).toHaveBeenCalled();
  });

  it('supports custom ticks', () => {
    render(
      <Slider
        {...defaultProps}
        ticks={[
          { step: 0, label: '0%' },
          { step: 50, label: '50%' },
          { step: 100, label: '100%' },
        ]}
        showRangeLabels
        showRangeDots
      />,
    );

    expect(screen.getByText('0%')).toBeOnTheScreen();
    expect(screen.getByText('50%')).toBeOnTheScreen();
    expect(screen.getByText('100%')).toBeOnTheScreen();
    expect(screen.queryByText('25%')).toBeNull();
  });

  it('renders custom tick labels', () => {
    render(
      <Slider
        {...defaultProps}
        value={1000}
        minimumValue={100}
        maximumValue={10000}
        ticks={mockMusdTicks}
        mapValueToTrackPercent={mockMusdAmountToPercent}
      />,
    );

    expect(screen.getByText('$100')).toBeOnTheScreen();
    expect(screen.getByText('$1,000')).toBeOnTheScreen();
    expect(screen.getByText('$10,000')).toBeOnTheScreen();
  });

  it('calls onValueChange with tick value when a custom label is pressed', () => {
    const onValueChange = jest.fn();
    render(
      <Slider
        {...defaultProps}
        value={200}
        minimumValue={100}
        maximumValue={10000}
        ticks={mockMusdTicks}
        onValueChange={onValueChange}
        mapValueToTrackPercent={mockMusdAmountToPercent}
      />,
    );

    fireEvent.press(screen.getByText('$1,000'));

    expect(onValueChange).toHaveBeenCalledWith(1000);
  });

  it('fires onTick using haptic tick thresholds for non-linear scales', () => {
    const onTick = jest.fn();
    render(
      <Slider
        {...defaultProps}
        value={200}
        minimumValue={100}
        maximumValue={10000}
        ticks={[
          { step: 0, label: '$100', value: 100 },
          { step: 50, label: '$1,000', value: 1000, haptic: true },
          { step: 100, label: '$10,000', value: 10000 },
        ]}
        onTick={onTick}
        mapValueToTrackPercent={mockMusdAmountToPercent}
      />,
    );

    fireEvent.press(screen.getByText('$1,000'));

    expect(onTick).toHaveBeenCalled();
  });

  it('renders dot-only ticks without labels', () => {
    render(
      <Slider
        {...defaultProps}
        ticks={[
          { step: 0, label: '1x' },
          { step: 25 },
          { step: 50, label: '20x' },
        ]}
        showRangeLabels
        showRangeDots
      />,
    );

    expect(screen.getByText('1x')).toBeOnTheScreen();
    expect(screen.getByText('20x')).toBeOnTheScreen();
    expect(screen.queryByText('25')).toBeNull();
  });

  it('handles accessibility increment and decrement', () => {
    const onValueChange = jest.fn();
    const onDragEnd = jest.fn();
    const { getByTestId } = render(
      <Slider
        {...defaultProps}
        value={50}
        onValueChange={onValueChange}
        onDragEnd={onDragEnd}
        testID="slider-a11y"
      />,
    );

    fireEvent(getByTestId('slider-a11y'), 'accessibilityAction', {
      nativeEvent: { actionName: 'increment' },
    });
    expect(onValueChange).toHaveBeenCalledWith(51);
    expect(onDragEnd).toHaveBeenCalledWith(51);

    onValueChange.mockClear();
    onDragEnd.mockClear();

    fireEvent(getByTestId('slider-a11y'), 'accessibilityAction', {
      nativeEvent: { actionName: 'decrement' },
    });
    expect(onValueChange).toHaveBeenCalledWith(49);
    expect(onDragEnd).toHaveBeenCalledWith(49);
  });

  it('respects step on accessibility increment', () => {
    const onValueChange = jest.fn();
    const { getByTestId } = render(
      <Slider
        {...defaultProps}
        value={50}
        step={5}
        onValueChange={onValueChange}
        testID="slider-step"
      />,
    );

    fireEvent(getByTestId('slider-step'), 'accessibilityAction', {
      nativeEvent: { actionName: 'increment' },
    });

    expect(onValueChange).toHaveBeenCalledWith(55);
  });

  it('does not fire accessibility actions when isDisabled', () => {
    const onValueChange = jest.fn();
    const { getByTestId } = render(
      <Slider
        {...defaultProps}
        isDisabled
        onValueChange={onValueChange}
        testID="slider-disabled"
      />,
    );

    fireEvent(getByTestId('slider-disabled'), 'accessibilityAction', {
      nativeEvent: { actionName: 'increment' },
    });

    expect(onValueChange).not.toHaveBeenCalled();
  });

  it('maps label press to custom min/max range with default tick value', () => {
    const onValueChange = jest.fn();
    render(
      <Slider
        {...defaultProps}
        minimumValue={0}
        maximumValue={200}
        onValueChange={onValueChange}
      />,
    );

    fireEvent.press(screen.getByText('50%'));

    expect(onValueChange).toHaveBeenCalledWith(100);
  });

  it('does not call onValueChange when incrementing at maximum value', () => {
    const onValueChange = jest.fn();
    const { getByTestId } = render(
      <Slider
        {...defaultProps}
        value={100}
        maximumValue={100}
        onValueChange={onValueChange}
        testID="slider-max"
      />,
    );

    fireEvent(getByTestId('slider-max'), 'accessibilityAction', {
      nativeEvent: { actionName: 'increment' },
    });

    expect(onValueChange).not.toHaveBeenCalled();
  });

  it('uses default range props when optional values are omitted', () => {
    render(
      <Slider
        value={50}
        onValueChange={jest.fn()}
        showRangeLabels
        showRangeDots
      />,
    );

    expect(screen.getByText('0%')).toBeOnTheScreen();
    expect(screen.getByText('100%')).toBeOnTheScreen();
  });

  it('hides range labels and dots by default', () => {
    render(<Slider value={50} onValueChange={jest.fn()} />);

    expect(screen.queryByText('0%')).toBeNull();
    expect(screen.queryByText('100%')).toBeNull();
  });

  describe('when twClassName is provided', () => {
    it('merges twClassName on root container', () => {
      const { getByTestId } = render(
        <Slider {...defaultProps} twClassName="mt-4" testID="slider-tw" />,
      );

      expect(getByTestId('slider-tw')).toHaveStyle({
        ...tw.style('py-2 mt-4'),
        paddingBottom: SLIDER_BOTTOM_PADDING,
        marginHorizontal: SLIDER_TRACK_INSET,
      });
    });
  });

  describe('when trackInset is provided', () => {
    it('applies custom horizontal inset on root container', () => {
      const { getByTestId } = render(
        <Slider {...defaultProps} trackInset={0} testID="slider-inset" />,
      );

      expect(getByTestId('slider-inset')).toHaveStyle({ marginHorizontal: 0 });
    });
  });

  describe('when isDisabled is true', () => {
    it('applies disabled opacity styles on root container', () => {
      const { getByTestId } = render(
        <Slider {...defaultProps} isDisabled testID="slider-opacity" />,
      );

      expect(getByTestId('slider-opacity')).toHaveStyle({
        ...tw.style('py-2 opacity-40'),
        paddingBottom: SLIDER_BOTTOM_PADDING,
        marginHorizontal: SLIDER_TRACK_INSET,
      });
    });
  });
});
