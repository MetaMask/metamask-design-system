import { act, renderHook } from '@testing-library/react-native';
import React from 'react';

import type { UseSliderGestureParams } from './Slider.types';
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

const createParams = (
  overrides: Partial<UseSliderGestureParams> = {},
): UseSliderGestureParams => ({
  value: 50,
  onValueChange: jest.fn(),
  ...overrides,
});

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

  it('handlePressStep updates value from stepToValue', () => {
    const onValueChange = jest.fn();
    const onDragEnd = jest.fn();
    const { result } = renderHook(() =>
      useSliderGesture(
        createParams({
          onValueChange,
          onDragEnd,
          stepToValue: (step) => step * 2,
        }),
      ),
    );

    act(() => {
      result.current.handlePressStep(25);
    });

    expect(onValueChange).toHaveBeenCalledWith(50);
    expect(onDragEnd).toHaveBeenCalledWith(50);
  });

  it('handlePressStep uses default stepToValue when omitted', () => {
    const onValueChange = jest.fn();
    const { result } = renderHook(() =>
      useSliderGesture(
        createParams({
          onValueChange,
          minimumValue: 0,
          maximumValue: 200,
        }),
      ),
    );

    act(() => {
      result.current.handlePressStep(50);
    });

    expect(onValueChange).toHaveBeenCalledWith(100);
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

  it('fires onTick when handlePressStep crosses a threshold', () => {
    const onTick = jest.fn();
    const { result } = renderHook(() =>
      useSliderGesture(
        createParams({
          value: 10,
          onTick,
          tickThresholds: [50],
        }),
      ),
    );

    act(() => {
      result.current.handlePressStep(50);
    });

    expect(onTick).toHaveBeenCalled();
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
});
