import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import { IconName } from '../Icon';

import { MainActionButton } from './MainActionButton';
import { TWCLASS_MAINACTIONBUTTON_BASE } from './MainActionButton.styles';

const TEST_ID = 'main-action-button-test';

describe('MainActionButton', () => {
  it('renders label and icon', () => {
    const { getByText, getByTestId } = render(
      <MainActionButton
        iconName={IconName.Add}
        label="Test Button"
        testID={TEST_ID}
      />,
    );

    expect(getByText('Test Button')).toBeDefined();
    expect(getByTestId(TEST_ID)).toBeDefined();
  });

  it('applies default styles', () => {
    const { result } = renderHook(() => useTailwind());
    const tw = result.current;

    const expected = tw.style(
      TWCLASS_MAINACTIONBUTTON_BASE,
      'bg-muted',
      'opacity-100',
    );

    const { getByTestId } = render(
      <MainActionButton
        iconName={IconName.Add}
        label="Styled"
        testID={TEST_ID}
      />,
    );

    expect(getByTestId(TEST_ID).props.style[0]).toStrictEqual(expected);
  });

  it('is disabled when isDisabled is true', () => {
    const { getByTestId } = render(
      <MainActionButton
        iconName={IconName.Add}
        label="Disabled"
        isDisabled
        testID={TEST_ID}
      />,
    );

    const button = getByTestId(TEST_ID);
    expect(button.props.accessibilityState.disabled).toBe(true);
  });

  it('calls onPress when pressed', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <MainActionButton
        iconName={IconName.Add}
        label="Press"
        onPress={onPress}
        testID={TEST_ID}
      />,
    );

    fireEvent.press(getByTestId(TEST_ID));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('does not call press handlers when disabled', () => {
    const onPress = jest.fn();
    const onPressIn = jest.fn();
    const onPressOut = jest.fn();

    const { getByTestId } = render(
      <MainActionButton
        iconName={IconName.Add}
        label="Disabled"
        isDisabled
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        testID={TEST_ID}
      />,
    );

    const button = getByTestId(TEST_ID);
    fireEvent.press(button);
    fireEvent(button, 'pressIn');
    fireEvent(button, 'pressOut');

    expect(onPress).not.toHaveBeenCalled();
    expect(onPressIn).not.toHaveBeenCalled();
    expect(onPressOut).not.toHaveBeenCalled();
  });

  it('renders custom label text', () => {
    const customLabel = 'Custom Label';
    const { getByText } = render(
      <MainActionButton iconName={IconName.Add} label={customLabel} />,
    );

    expect(getByText(customLabel)).toBeDefined();
  });

  it('merges custom style', () => {
    const customStyle = { marginTop: 8 };
    const { getByTestId } = render(
      <MainActionButton
        iconName={IconName.Add}
        label="Custom Style"
        style={customStyle}
        testID={TEST_ID}
      />,
    );

    expect(getByTestId(TEST_ID).props.style[1]).toStrictEqual(customStyle);
  });

  it('evaluates function style and twClassName with pressed state', () => {
    const { result } = renderHook(() => useTailwind());
    const tw = result.current;
    const twClassName = jest.fn((pressed: boolean) =>
      pressed ? 'mt-2' : 'mt-1',
    );
    const style = jest.fn(({ pressed }: { pressed: boolean }) =>
      pressed ? { marginTop: 8 } : undefined,
    );

    const { getByTestId } = render(
      <MainActionButton
        iconName={IconName.Add}
        label="Pressed state"
        twClassName={twClassName}
        style={style}
        testID={TEST_ID}
      />,
    );

    const button = getByTestId(TEST_ID);

    expect(twClassName).toHaveBeenCalledWith(false);
    expect(style).toHaveBeenCalledWith({ pressed: false });

    fireEvent(button, 'pressIn');

    const expectedPressedStyle = tw.style(
      TWCLASS_MAINACTIONBUTTON_BASE,
      'bg-muted-pressed',
      'opacity-100',
      'mt-2',
    );

    expect(twClassName).toHaveBeenCalledWith(true);
    expect(style).toHaveBeenCalledWith({ pressed: true });
    expect(button.props.style[0]).toStrictEqual(expectedPressedStyle);
    expect(button.props.style[1]).toStrictEqual({ marginTop: 8 });
  });
});
