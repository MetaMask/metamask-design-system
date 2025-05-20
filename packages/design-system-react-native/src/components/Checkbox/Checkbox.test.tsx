import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

import { Checkbox } from './Checkbox';

// Helper to compute expected container styles
function getExpectedContainerStyle(
  tw: ReturnType<typeof useTailwind>,
  options: { selected?: boolean; invalid?: boolean; pressed?: boolean },
): any {
  const { selected = false, invalid = false, pressed = false } = options;
  const baseBg = selected ? 'bg-primary-default' : 'bg-background-default';
  const baseBorder = selected
    ? 'border-primary-default'
    : invalid
      ? 'border-error-default'
      : 'border-border-default';
  const pressedBg = selected
    ? 'bg-primary-defaultPressed'
    : 'bg-background-defaultPressed';
  const pressedBorder = selected
    ? 'border-primary-defaultPressed'
    : invalid
      ? 'border-error-default'
      : 'border-border-default';
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

  function flattenStyles(styleProp: any): Record<string, any>[] {
    if (styleProp == null) {
      return [];
    }
    if (Array.isArray(styleProp)) {
      return styleProp.flatMap((item) => flattenStyles(item));
    }
    if (typeof styleProp === 'object') {
      return [styleProp];
    }
    return [];
  }

  it('renders label when provided', () => {
    const { getByText } = render(<Checkbox label="Accept" />);
    expect(getByText('Accept')).toBeTruthy();
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
    expect(styles).toEqual(
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
    expect(styles).toEqual(
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
    expect(pressable.props.accessibilityState).toEqual({
      checked: true,
      disabled: false,
    });
    expect(pressable.props.accessibilityLabel).toBe('Accept');
    const styles = flattenStyles(pressable.props.style);
    expect(styles).toEqual(
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
    expect(styles).toEqual(
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
    expect(ref.current).toBeTruthy();
    ref.current!.toggle();
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it('does not toggle when disabled via ref', () => {
    const ref = React.createRef<{ toggle: () => void }>();
    const onChange = jest.fn();
    render(<Checkbox ref={ref} onChange={onChange} isDisabled />);
    ref.current!.toggle();
    expect(onChange).not.toHaveBeenCalled();
  });
});
