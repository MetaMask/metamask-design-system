/* eslint-disable @typescript-eslint/no-require-imports */
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render, fireEvent } from '@testing-library/react-native';
import type { ReactElement } from 'react';
import React, { createRef } from 'react';
import { Text } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

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
    const { getByText } = render(<Checkbox label="Accept" />);
    expect(getByText('Accept')).toBeDefined();
  });

  it('toggles selection state when pressed in', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <Checkbox
        onChange={onChange}
        testID="chk"
        checkboxContainerProps={{ testID: 'inner' }}
      />,
    );
    const pressable = getByTestId('chk');
    expect(pressable.props.accessibilityState.checked).toBe(false);

    fireEvent.press(pressable);
    expect(onChange).toHaveBeenCalledWith(true);
    expect(getByTestId('chk').props.accessibilityState.checked).toBe(true);

    fireEvent.press(pressable);
    expect(onChange).toHaveBeenCalledWith(false);
    expect(getByTestId('chk').props.accessibilityState.checked).toBe(false);
  });

  it('ignores presses when disabled', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <Checkbox isDisabled onChange={onChange} testID="chk" />,
    );
    const pressable = getByTestId('chk');
    fireEvent.press(pressable);
    expect(onChange).not.toHaveBeenCalled();
    expect(pressable.props.accessibilityState.disabled).toBe(true);
  });

  it('applies invalid border styles', () => {
    const { getByTestId } = render(
      <Checkbox isInvalid checkboxContainerProps={{ testID: 'inner' }} />,
    );
    const inner = getByTestId('inner');
    const styles = flattenStyles(inner.props.style);
    expect(styles).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining(
          tw`bg-background-default border-error-default flex h-[22px] w-[22px] items-center justify-center rounded border-2`,
        ),
      ]),
    );
  });

  it('applies selected container styles', () => {
    const { getByTestId } = render(
      <Checkbox isSelected checkboxContainerProps={{ testID: 'inner' }} />,
    );
    const inner = getByTestId('inner');
    const styles = flattenStyles(inner.props.style);
    expect(styles).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining(
          tw`bg-primary-default border-primary-default flex h-[22px] w-[22px] items-center justify-center rounded border-2`,
        ),
      ]),
    );
  });

  it('sets accessibility props and merges style', () => {
    const { getByTestId } = render(
      <Checkbox label="Accept" isSelected style={{ margin: 4 }} testID="chk" />,
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

  it('omits accessibilityLabel when label is a React element', () => {
    const { getByTestId } = render(
      <Checkbox label={<Text>Accept</Text>} testID="chk" />,
    );
    expect(getByTestId('chk').props.accessibilityLabel).toBeUndefined();
  });

  it('applies pressed container styles', () => {
    const rtr = require('react-test-renderer');
    const RN = require('react-native');
    const tree = rtr.create(
      <Checkbox checkboxContainerProps={{ testID: 'inner' }} />,
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
          tw`bg-background-defaultPressed border-border-default flex h-[22px] w-[22px] items-center justify-center rounded border-2`,
        ),
      ]),
    );
  });

  it('exposes toggle method via ref', () => {
    const ref = createRef<{ toggle: () => void }>();
    const onChange = jest.fn();
    render(<Checkbox ref={ref} onChange={onChange} />);
    expect(ref.current).not.toBeNull();
    ref.current?.toggle();
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it('does not toggle when disabled via ref', () => {
    const ref = createRef<{ toggle: () => void }>();
    const onChange = jest.fn();
    render(<Checkbox ref={ref} onChange={onChange} isDisabled />);
    ref.current?.toggle();
    expect(onChange).not.toHaveBeenCalled();
  });
});
