import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';

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
});
