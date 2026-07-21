import { SliderMarkColor } from '@metamask/design-system-shared';
import { act, renderHook } from '@testing-library/react-native';
import React from 'react';

import { DEFAULT_MARKS } from './Slider.constants';
import type { UseSliderGestureParams } from './Slider.types';
import { buildColorStops } from './Slider.utilities';
import { useSliderGesture } from './useSliderGesture';

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
      Simultaneous: (tap: unknown, pan: unknown) => ({ tap, pan }),
    },
  };
});

const mockPalette = {
  'icon-default': '#111111',
  'icon-alternative': '#222222',
  'success-default': '#00FF00',
  'error-default': '#FF0000',
};

const createParams = (
  overrides: Partial<UseSliderGestureParams> = {},
): UseSliderGestureParams => {
  const marks = overrides.marks ?? DEFAULT_MARKS;

  return {
    value: 50,
    onValueChange: jest.fn(),
    marks,
    fillColorStops: buildColorStops(
      marks,
      mockPalette,
      SliderMarkColor.IconAlternative,
    ),
    thumbColorStops: buildColorStops(
      marks,
      mockPalette,
      SliderMarkColor.IconDefault,
    ),
    hasThemedColors: marks.some((mark) => Boolean(mark.color)),
    ...overrides,
  };
};

describe('useSliderGesture', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns gesture handlers and animated styles', () => {
    const { result } = renderHook(() => useSliderGesture(createParams()));

    expect(result.current.handleLayout).toStrictEqual(expect.any(Function));
    expect(result.current.handlePressStep).toStrictEqual(expect.any(Function));
    expect(result.current.gesture).toStrictEqual(
      expect.objectContaining({
        tap: expect.anything(),
        pan: expect.anything(),
      }),
    );
    expect(result.current.progressStyle).toBeDefined();
    expect(result.current.thumbStyle).toBeDefined();
  });

  it('handleLayout stores track width and syncs thumb position', () => {
    const { result } = renderHook(() =>
      useSliderGesture(createParams({ value: 25 })),
    );

    act(() => {
      result.current.handleLayout({
        nativeEvent: { layout: { width: 200 } },
      });
    });

    expect(result.current.progressStyle).toBeDefined();
  });

  it('handlePressStep updates value from mark value', () => {
    const onValueChange = jest.fn();
    const onDragEnd = jest.fn();
    const { result } = renderHook(() =>
      useSliderGesture(
        createParams({
          onValueChange,
          onDragEnd,
          marks: [{ step: 25, label: '25', value: 50 }],
        }),
      ),
    );

    act(() => {
      result.current.handlePressStep(25);
    });

    expect(onValueChange).toHaveBeenCalledWith(50);
    expect(onDragEnd).toHaveBeenCalledWith(50);
  });

  it('handlePressStep uses linear default when mark value is omitted', () => {
    const onValueChange = jest.fn();
    const { result } = renderHook(() =>
      useSliderGesture(
        createParams({
          onValueChange,
          minimumValue: 0,
          maximumValue: 200,
          marks: [{ step: 50, label: '50%' }],
        }),
      ),
    );

    act(() => {
      result.current.handlePressStep(50);
    });

    expect(onValueChange).toHaveBeenCalledWith(100);
  });

  it('handlePressStep is a no-op when the mark step is not found', () => {
    const onValueChange = jest.fn();
    const { result } = renderHook(() =>
      useSliderGesture(
        createParams({
          onValueChange,
          marks: [{ step: 50, label: '50%' }],
        }),
      ),
    );

    act(() => {
      result.current.handlePressStep(25);
    });

    expect(onValueChange).not.toHaveBeenCalled();
  });

  it('handlePressStep is a no-op when disabled', () => {
    const onValueChange = jest.fn();
    const { result } = renderHook(() =>
      useSliderGesture(
        createParams({
          isDisabled: true,
          onValueChange,
        }),
      ),
    );

    act(() => {
      result.current.handlePressStep(50);
    });

    expect(onValueChange).not.toHaveBeenCalled();
  });

  it('fires onMark when handlePressStep crosses a haptic threshold', () => {
    const onMark = jest.fn();
    const { result } = renderHook(() =>
      useSliderGesture(
        createParams({
          value: 10,
          onMark,
          marks: [
            { step: 0, label: '0%' },
            { step: 50, label: '50%', haptic: true },
            { step: 100, label: '100%' },
          ],
        }),
      ),
    );

    act(() => {
      result.current.handlePressStep(50);
    });

    expect(onMark).toHaveBeenCalled();
  });

  it('does not rewind haptic baseline from a stale in-flight value-prop echo', () => {
    const onMark = jest.fn();
    const marks = [
      { step: 0, label: '0%', haptic: false },
      { step: 40, label: '40%', value: 40, haptic: false },
      { step: 50, label: '50%', value: 50, haptic: true },
      { step: 60, label: '60%', value: 60, haptic: false },
      { step: 75, label: '75%', value: 75, haptic: false },
      { step: 100, label: '100%', haptic: false },
    ];
    const { result, rerender } = renderHook(
      ({ value }: { value: number }) =>
        useSliderGesture(createParams({ value, onMark, marks })),
      { initialProps: { value: 10 } },
    );

    // First commit below the haptic mark.
    act(() => {
      result.current.handlePressStep(40);
    });
    expect(onMark).not.toHaveBeenCalled();

    // Newer commit above the mark — baseline becomes 75%.
    act(() => {
      result.current.handlePressStep(75);
    });
    expect(onMark).toHaveBeenCalled();
    onMark.mockClear();

    // Lagged echo of the older commit. Must not rewind the haptic baseline,
    // or the next press above the mark would false-fire onMark.
    rerender({ value: 40 });

    act(() => {
      result.current.handlePressStep(60);
    });

    expect(onMark).not.toHaveBeenCalled();
  });

  it('applies external value updates while local commits are still in flight', () => {
    const onMark = jest.fn();
    const marks = [
      { step: 0, label: '0%', haptic: false },
      { step: 10, label: '10%', value: 10, haptic: false },
      { step: 50, label: '50%', value: 50, haptic: true },
      { step: 60, label: '60%', value: 60, haptic: false },
      { step: 75, label: '75%', value: 75, haptic: false },
      { step: 100, label: '100%', haptic: false },
    ];
    const { result, rerender } = renderHook(
      ({ value }: { value: number }) =>
        useSliderGesture(createParams({ value, onMark, marks })),
      { initialProps: { value: 60 } },
    );

    act(() => {
      result.current.handlePressStep(75);
    });
    expect(onMark).not.toHaveBeenCalled();
    onMark.mockClear();

    // Programmatic update to a value we never emitted — must apply immediately
    // (not be dropped the way a time-based grace window would).
    rerender({ value: 10 });

    act(() => {
      result.current.handlePressStep(60);
    });

    expect(onMark).toHaveBeenCalled();
  });

  it('acknowledges a matching value-prop echo without changing onMark behavior', () => {
    const onMark = jest.fn();
    const marks = [
      { step: 0, label: '0%', haptic: false },
      { step: 50, label: '50%', value: 50, haptic: true },
      { step: 75, label: '75%', value: 75, haptic: false },
      { step: 60, label: '60%', value: 60, haptic: false },
      { step: 100, label: '100%', haptic: false },
    ];
    const { result, rerender } = renderHook(
      ({ value }: { value: number }) =>
        useSliderGesture(createParams({ value, onMark, marks })),
      { initialProps: { value: 60 } },
    );

    act(() => {
      result.current.handlePressStep(75);
    });
    expect(onMark).not.toHaveBeenCalled();
    onMark.mockClear();

    // Echo of the latest commit — clears inflight, must not rewind baseline.
    rerender({ value: 75 });

    act(() => {
      result.current.handlePressStep(60);
    });

    expect(onMark).not.toHaveBeenCalled();
  });

  it('ignores a late stale echo after the latest commit was already acknowledged', () => {
    const onMark = jest.fn();
    const marks = [
      { step: 0, label: '0%', haptic: false },
      { step: 40, label: '40%', value: 40, haptic: false },
      { step: 50, label: '50%', value: 50, haptic: true },
      { step: 60, label: '60%', value: 60, haptic: false },
      { step: 75, label: '75%', value: 75, haptic: false },
      { step: 100, label: '100%', haptic: false },
    ];
    const { result, rerender } = renderHook(
      ({ value }: { value: number }) =>
        useSliderGesture(createParams({ value, onMark, marks })),
      { initialProps: { value: 10 } },
    );

    act(() => {
      result.current.handlePressStep(40);
    });
    act(() => {
      result.current.handlePressStep(75);
    });
    expect(onMark).toHaveBeenCalled();
    onMark.mockClear();

    // Parent caught up to the latest commit first...
    rerender({ value: 75 });
    // ...then a lagged intermediate echo arrives (common after fast pans).
    rerender({ value: 40 });

    act(() => {
      result.current.handlePressStep(60);
    });

    expect(onMark).not.toHaveBeenCalled();
  });

  it('syncs thumb position when value prop changes', () => {
    const { result, rerender } = renderHook(
      ({ value }: { value: number }) =>
        useSliderGesture(createParams({ value })),
      { initialProps: { value: 10 } },
    );

    act(() => {
      result.current.handleLayout({
        nativeEvent: { layout: { width: 100 } },
      });
    });

    rerender({ value: 90 });

    expect(result.current.thumbStyle).toBeDefined();
  });

  it('omits onDragEnd when the callback is not provided', () => {
    const onValueChange = jest.fn();
    const { result } = renderHook(() =>
      useSliderGesture(
        createParams({
          onValueChange,
          onDragEnd: undefined,
        }),
      ),
    );

    act(() => {
      result.current.handlePressStep(50);
    });

    expect(onValueChange).toHaveBeenCalledWith(50);
  });

  it('includes backgroundColor in animated styles when themed', () => {
    const { result } = renderHook(() =>
      useSliderGesture(
        createParams({
          hasThemedColors: true,
          marks: [
            { step: 0, color: SliderMarkColor.SuccessDefault },
            { step: 100, color: SliderMarkColor.ErrorDefault },
          ],
          fillColorStops: buildColorStops(
            [
              { step: 0, color: SliderMarkColor.SuccessDefault },
              { step: 100, color: SliderMarkColor.ErrorDefault },
            ],
            mockPalette,
            SliderMarkColor.IconAlternative,
          ),
          thumbColorStops: buildColorStops(
            [
              { step: 0, color: SliderMarkColor.SuccessDefault },
              { step: 100, color: SliderMarkColor.ErrorDefault },
            ],
            mockPalette,
            SliderMarkColor.IconDefault,
          ),
        }),
      ),
    );

    expect(result.current.progressStyle).toBeDefined();
    expect(result.current.thumbStyle).toBeDefined();
  });
});
