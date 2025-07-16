/* eslint-disable @typescript-eslint/no-require-imports */
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render, fireEvent } from '@testing-library/react-native';
import type { ReactElement } from 'react';
import React, { createRef } from 'react';
import { Text } from 'react-native';
import type {
  StyleProp,
  ViewStyle,
  PressableProps,
  PressableStateCallbackType,
} from 'react-native';

import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    tw = renderHook(() => useTailwind()).result.current;
  });

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  /**
   * Flatten a style prop into an array of style objects.
   *
   * @param styleProp - The style prop to flatten.
   * @returns A list of style objects.
   */
  function flattenStyles(
    styleProp: StyleProp<ViewStyle> | undefined,
  ): ViewStyle[] {
    if (styleProp === null || styleProp === undefined) {
      return [];
    }
    if (Array.isArray(styleProp)) {
      return styleProp.flatMap((item) =>
        flattenStyles(item as StyleProp<ViewStyle>),
      );
    }
    if (typeof styleProp === 'object') {
      return [styleProp as ViewStyle];
    }
    return [];
  }

  it('renders label when provided', () => {
    const fn = jest.fn();
    const { getByText } = render(
      <Checkbox label="Accept" isSelected={false} onChange={fn} />,
    );
    expect(getByText('Accept')).toBeDefined();
  });

  it('ignores presses when disabled', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <Checkbox
        isDisabled
        onChange={onChange}
        testID="chk"
        isSelected={false}
      />,
    );
    const pressable = getByTestId('chk');
    fireEvent.press(pressable);
    expect(onChange).not.toHaveBeenCalled();
    expect(pressable.props.accessibilityState.disabled).toBe(true);
  });

  it('applies invalid border styles', () => {
    const fn = jest.fn();
    const { getByTestId } = render(
      <Checkbox
        isInvalid
        checkboxContainerProps={{ testID: 'inner' }}
        isSelected={false}
        onChange={fn}
      />,
    );
    const inner = getByTestId('inner');
    const styles = flattenStyles(inner.props.style);
    expect(styles).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining(
          tw`flex size-[22px] items-center justify-center rounded border-2 border-error-default bg-default`,
        ),
      ]),
    );
  });

  it('applies selected container styles', () => {
    const fn = jest.fn();
    const { getByTestId } = render(
      <Checkbox
        isSelected
        onChange={fn}
        checkboxContainerProps={{ testID: 'inner' }}
      />,
    );
    const inner = getByTestId('inner');
    const styles = flattenStyles(inner.props.style);
    expect(styles).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining(
          tw`flex size-[22px] items-center justify-center rounded border-2 border-primary-default bg-primary-default`,
        ),
      ]),
    );
  });

  it('sets accessibility props and merges style', () => {
    const fn = jest.fn();
    const { getByTestId } = render(
      <Checkbox
        label="Accept"
        isSelected
        onChange={fn}
        style={{ margin: 4 }}
        testID="chk"
      />,
    );
    const pressable = getByTestId('chk');
    expect(pressable.props.accessible).toBe(true);
    expect(pressable.props.accessibilityRole).toBe('checkbox');
    expect(pressable.props.accessibilityState).toMatchObject({
      checked: true,
      disabled: false,
    });
    expect(pressable.props.accessibilityLabel).toBe('Accept');
    const styles = flattenStyles(pressable.props.style);
    expect(styles).toStrictEqual(
      expect.arrayContaining([expect.objectContaining({ margin: 4 })]),
    );
  });

  it('invokes a user-provided style function correctly', () => {
    const fn = jest.fn();
    const styleFn: PressableProps['style'] = (
      _state: PressableStateCallbackType,
    ): StyleProp<ViewStyle> => ({
      margin: 4,
    });
    const { getByTestId } = render(
      <Checkbox
        label="Accept"
        isSelected
        onChange={fn}
        style={styleFn}
        testID="chk"
      />,
    );
    const pressable = getByTestId('chk');
    const styles = flattenStyles(pressable.props.style);
    expect(styles).toStrictEqual(
      expect.arrayContaining([expect.objectContaining({ margin: 4 })]),
    );
  });

  it('omits accessibilityLabel when label is a React element', () => {
    const fn = jest.fn();
    const { getByTestId } = render(
      <Checkbox
        label={<Text>Accept</Text>}
        testID="chk"
        isSelected={false}
        onChange={fn}
      />,
    );
    expect(getByTestId('chk').props.accessibilityLabel).toBeUndefined();
  });

  it('applies pressed container styles', () => {
    const fn = jest.fn();
    const rtr = require('react-test-renderer');
    const RN = require('react-native');
    const tree = rtr.create(
      <Checkbox
        checkboxContainerProps={{ testID: 'inner' }}
        isSelected={false}
        onChange={fn}
      />,
    );
    const pressable = tree.root.findByType(RN.Pressable);
    const renderChildren = pressable.props.children as (p: {
      pressed: boolean;
    }) => ReactElement;
    const renderedPressed = rtr.create(renderChildren({ pressed: true })).root;
    const pressedContainer = renderedPressed.findByProps({ testID: 'inner' });
    const styles = flattenStyles(pressedContainer.props.style);
    expect(styles).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining(
          tw`flex size-[22px] items-center justify-center rounded border-2 border-default bg-default-pressed`,
        ),
      ]),
    );
  });

  it('exposes toggle method via ref', () => {
    const ref = createRef<{ toggle: () => void }>();
    const onChange = jest.fn();
    render(<Checkbox ref={ref} onChange={onChange} isSelected={false} />);
    expect(ref.current).not.toBeNull();
    ref.current?.toggle();
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it('does not toggle when disabled via ref', () => {
    const ref = createRef<{ toggle: () => void }>();
    const onChange = jest.fn();
    render(
      <Checkbox ref={ref} onChange={onChange} isDisabled isSelected={false} />,
    );
    ref.current?.toggle();
    expect(onChange).not.toHaveBeenCalled();
  });
});
