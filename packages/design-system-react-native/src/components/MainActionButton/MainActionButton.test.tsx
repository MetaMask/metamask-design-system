import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import { IconColor, IconName, IconSize } from '../Icon';
import { FontWeight, TextColor, TextVariant } from '../Text';

import { MainActionButton } from './MainActionButton';

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

  it('forwards iconProps and labelProps to child components', () => {
    const { getByTestId } = render(
      <MainActionButton
        iconName={IconName.Add}
        label="Child Props"
        iconProps={{ testID: 'main-action-button-icon' }}
        labelProps={{ testID: 'main-action-button-label' }}
      />,
    );

    expect(getByTestId('main-action-button-icon')).toBeDefined();
    expect(getByTestId('main-action-button-label')).toBeDefined();
  });

  it('keeps internal icon and label visual defaults when prop objects are provided', () => {
    const { getByTestId } = render(
      <MainActionButton
        iconName={IconName.Add}
        label="Visual Defaults"
        iconProps={{
          testID: 'main-action-button-icon-override',
          color: IconColor.ErrorDefault,
          size: IconSize.Xl,
        }}
        labelProps={{
          testID: 'main-action-button-label-override',
          color: TextColor.ErrorDefault,
          variant: TextVariant.DisplayMd,
          fontWeight: FontWeight.Bold,
        }}
      />,
    );

    const icon = getByTestId('main-action-button-icon-override');
    const label = getByTestId('main-action-button-label-override');

    expect(icon.props.name).toBe(IconName.Add);
    expect(icon.props.size).toBe(IconSize.Lg);
    expect(icon.props.color).toBe(IconColor.IconAlternative);
    expect(label.props.variant).toBe(TextVariant.BodySm);
    expect(label.props.fontWeight).toBe(FontWeight.Medium);
    expect(label.props.color).toBe(TextColor.TextDefault);
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

    expect(twClassName).toHaveBeenCalledWith(true);
    expect(style).toHaveBeenCalledWith({ pressed: true });
    expect(Array.isArray(button.props.style)).toBe(true);
    expect(button.props.style[1]).toStrictEqual({ marginTop: 8 });
  });
});
