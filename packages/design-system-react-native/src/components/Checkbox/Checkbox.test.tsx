/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable import-x/no-named-as-default-member */
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

import { Checkbox } from './Checkbox';

/**
 * Helper to compute expected container styles for the checkbox.
 *
 * @param tw - The tailwind instance.
 * @param options - Checkbox state options.
 * @param options.selected - Whether the checkbox is selected.
 * @param options.invalid - Whether the checkbox is invalid.
 * @param options.pressed - Whether the checkbox is pressed.
 * @returns The expected container style.
 */
function getExpectedContainerStyle(
  tw: ReturnType<typeof useTailwind>,
  options: { selected?: boolean; invalid?: boolean; pressed?: boolean },
): StyleProp<ViewStyle> {
  const { selected = false, invalid = false, pressed = false } = options;
  const baseBg = selected ? 'bg-primary-default' : 'bg-background-default';
  let baseBorder = 'border-border-default';
  if (selected) {
    baseBorder = 'border-primary-default';
  } else if (invalid) {
    baseBorder = 'border-error-default';
  }
  const pressedBg = selected
    ? 'bg-primary-defaultPressed'
    : 'bg-background-defaultPressed';
  let pressedBorder = 'border-border-default';
  if (selected) {
    pressedBorder = 'border-primary-defaultPressed';
  } else if (invalid) {
    pressedBorder = 'border-error-default';
  }
  const stateClasses = pressed
    ? `${pressedBg} ${pressedBorder}`
    : `${baseBg} ${baseBorder}`;
  return tw`${stateClasses} flex h-[22px] w-[22px] items-center justify-center rounded border-2`;
}

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

  it('toggles selection state when pressed in uncontrolled mode', () => {
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

  it('calls onChange but does not change state when controlled', () => {
    const onChange = jest.fn();
    const { getByTestId, rerender } = render(
      <Checkbox isSelected={false} onChange={onChange} testID="chk" />,
    );
    const pressable = getByTestId('chk');
    fireEvent.press(pressable);
    expect(onChange).toHaveBeenCalledWith(true);
    expect(getByTestId('chk').props.accessibilityState.checked).toBe(false);

    rerender(<Checkbox isSelected={true} onChange={onChange} testID="chk" />);
    expect(getByTestId('chk').props.accessibilityState.checked).toBe(true);
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
    let expected;
    const TestComp = () => {
      expected = getExpectedContainerStyle(tw, { invalid: true });
      return (
        <Checkbox isInvalid checkboxContainerProps={{ testID: 'inner' }} />
      );
    };
    const { getByTestId } = render(<TestComp />);
    const inner = getByTestId('inner');
    const styles = flattenStyles(inner.props.style);
    expect(styles).toStrictEqual(
      expect.arrayContaining([expect.objectContaining(expected)]),
    );
  });

  it('applies selected container styles', () => {
    let expected;
    const TestComp = () => {
      expected = getExpectedContainerStyle(tw, { selected: true });
      return (
        <Checkbox isSelected checkboxContainerProps={{ testID: 'inner' }} />
      );
    };
    const { getByTestId } = render(<TestComp />);
    const inner = getByTestId('inner');
    const styles = flattenStyles(inner.props.style);
    expect(styles).toStrictEqual(
      expect.arrayContaining([expect.objectContaining(expected)]),
    );
  });

  it('sets accessibility props and merges style', () => {
    const { getByTestId } = render(
      <Checkbox label="Accept" isSelected style={{ margin: 4 }} testID="chk" />,
    );
    const pressable = getByTestId('chk');
    expect(pressable.props.accessible).toBe(true);
    expect(pressable.props.accessibilityRole).toBe('checkbox');
    expect(pressable.props.accessibilityState).toStrictEqual({
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
    }) => React.ReactElement;
    const renderedPressed = rtr.create(renderChildren({ pressed: true })).root;
    const pressedContainer = renderedPressed.findByProps({ testID: 'inner' });
    const styles = flattenStyles(pressedContainer.props.style);
    expect(styles).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining(
          getExpectedContainerStyle(tw, { pressed: true }),
        ),
      ]),
    );
  });

  it('exposes toggle method via ref', () => {
    const ref = React.createRef<{ toggle: () => void }>();
    const onChange = jest.fn();
    render(<Checkbox ref={ref} onChange={onChange} />);
    expect(ref.current).not.toBeNull();
    ref.current?.toggle();
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it('does not toggle when disabled via ref', () => {
    const ref = React.createRef<{ toggle: () => void }>();
    const onChange = jest.fn();
    render(<Checkbox ref={ref} onChange={onChange} isDisabled />);
    ref.current?.toggle();
    expect(onChange).not.toHaveBeenCalled();
  });
});
