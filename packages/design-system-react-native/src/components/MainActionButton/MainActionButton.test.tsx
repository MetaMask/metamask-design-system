import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import { IconName } from '../Icon';

import { MainActionButton } from './MainActionButton';

const TEST_ID = 'main-action-button-test';

describe('MainActionButton', () => {
  it('renders label and icon', async () => {
    const { getByText, getByTestId } = await render(
      <MainActionButton
        iconName={IconName.Add}
        label="Test Button"
        testID={TEST_ID}
      />,
    );

    expect(getByText('Test Button')).toBeDefined();
    expect(getByTestId(TEST_ID)).toBeDefined();
  });

  it('is disabled when isDisabled is true', async () => {
    const { getByTestId } = await render(
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

  it('calls onPress when pressed', async () => {
    const onPress = jest.fn();
    const { getByTestId } = await render(
      <MainActionButton
        iconName={IconName.Add}
        label="Press"
        onPress={onPress}
        testID={TEST_ID}
      />,
    );

    await fireEvent.press(getByTestId(TEST_ID));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('calls press handlers when enabled', async () => {
    const onPress = jest.fn();
    const onPressIn = jest.fn();
    const onPressOut = jest.fn();
    const { getByTestId } = await render(
      <MainActionButton
        iconName={IconName.Add}
        label="Enabled"
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        testID={TEST_ID}
      />,
    );

    const button = getByTestId(TEST_ID);
    await fireEvent(button, 'pressIn');
    await fireEvent.press(button);
    await fireEvent(button, 'pressOut');

    expect(onPress).toHaveBeenCalledTimes(1);
    expect(onPressIn).toHaveBeenCalledTimes(1);
    expect(onPressOut).toHaveBeenCalledTimes(1);
  });

  it('does not call press handlers when disabled', async () => {
    const onPress = jest.fn();
    const onPressIn = jest.fn();
    const onPressOut = jest.fn();

    const { getByTestId } = await render(
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
    await fireEvent.press(button);
    await fireEvent(button, 'pressIn');
    await fireEvent(button, 'pressOut');

    expect(onPress).not.toHaveBeenCalled();
    expect(onPressIn).not.toHaveBeenCalled();
    expect(onPressOut).not.toHaveBeenCalled();
  });

  it('renders custom label text', async () => {
    const customLabel = 'Custom Label';
    const { getByText } = await render(
      <MainActionButton iconName={IconName.Add} label={customLabel} />,
    );

    expect(getByText(customLabel)).toBeDefined();
  });

  it('forwards iconProps and labelProps to child components', async () => {
    const { getByTestId } = await render(
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

  it('keeps controlled icon and label values while forwarding child prop objects', async () => {
    const { getByTestId, getByText } = await render(
      <MainActionButton
        iconName={IconName.Add}
        label="Controlled Label"
        iconProps={{
          testID: 'main-action-button-icon',
        }}
        labelProps={{
          testID: 'main-action-button-label',
        }}
      />,
    );

    const icon = getByTestId('main-action-button-icon');
    expect(getByTestId('main-action-button-label')).toBeDefined();

    expect(icon.props.name).toBe(IconName.Add);
    expect(getByText('Controlled Label')).toBeDefined();
  });

  it('merges custom style', async () => {
    const customStyle = { marginTop: 8 };
    const { getByTestId } = await render(
      <MainActionButton
        iconName={IconName.Add}
        label="Custom Style"
        style={customStyle}
        testID={TEST_ID}
      />,
    );

    expect(getByTestId(TEST_ID).props.style[1]).toStrictEqual(customStyle);
  });

  it('evaluates function style with pressed state', async () => {
    const style = jest.fn(({ pressed }: { pressed: boolean }) =>
      pressed ? { marginTop: 8 } : undefined,
    );

    const { getByTestId } = await render(
      <MainActionButton
        iconName={IconName.Add}
        label="Pressed state"
        style={style}
        testID={TEST_ID}
      />,
    );

    const button = getByTestId(TEST_ID);

    expect(style).toHaveBeenCalledWith({ pressed: false });

    await fireEvent(button, 'pressIn');

    expect(style).toHaveBeenCalledWith({ pressed: true });
    expect(Array.isArray(button.props.style)).toBe(true);
    expect(button.props.style[1]).toStrictEqual({ marginTop: 8 });
  });
});
