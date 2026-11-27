import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { fireEvent, render, renderHook } from '@testing-library/react-native';
import React from 'react';

import { createRenderer } from '../../test-utils/createRenderer';
import { Box } from '../Box';
import { IconName } from '../Icon';
import { Text } from '../Text';

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

  it('calls press handlers when enabled', () => {
    const onPress = jest.fn();
    const onPressIn = jest.fn();
    const onPressOut = jest.fn();
    const { getByTestId } = render(
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
    fireEvent(button, 'pressIn');
    fireEvent.press(button);
    fireEvent(button, 'pressOut');

    expect(onPress).toHaveBeenCalledTimes(1);
    expect(onPressIn).toHaveBeenCalledTimes(1);
    expect(onPressOut).toHaveBeenCalledTimes(1);
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

  it('keeps controlled icon and label values while forwarding child prop objects', () => {
    const { getByTestId, getByText } = render(
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

  it('evaluates function style with pressed state', () => {
    const style = jest.fn(({ pressed }: { pressed: boolean }) =>
      pressed ? { marginTop: 8 } : undefined,
    );

    const { getByTestId } = render(
      <MainActionButton
        iconName={IconName.Add}
        label="Pressed state"
        style={style}
        testID={TEST_ID}
      />,
    );

    const button = getByTestId(TEST_ID);

    expect(style).toHaveBeenCalledWith({ pressed: false });

    fireEvent(button, 'pressIn');

    expect(style).toHaveBeenCalledWith({ pressed: true });
    expect(Array.isArray(button.props.style)).toBe(true);
    expect(button.props.style[1]).toStrictEqual({ marginTop: 8 });
  });

  describe('when className is provided', () => {
    let twClassNames: ReturnType<typeof useTailwind>;

    beforeAll(() => {
      twClassNames = renderHook(() => useTailwind()).result.current;
    });

    it('applies className after twClassName and component classes', () => {
      const { getByTestId } = render(
        <MainActionButton
          iconName={IconName.Add}
          label="Label"
          testID="main-action-button-classes"
          twClassName="mt-8"
          className="mt-2"
        />,
      );

      expect(getByTestId('main-action-button-classes')).toHaveStyle(
        twClassNames`mt-2`,
      );
    });

    it('applies deprecated twClassName on its own', () => {
      const { getByTestId } = render(
        <MainActionButton
          iconName={IconName.Add}
          label="Label"
          testID="main-action-button-classes"
          twClassName="mt-8"
        />,
      );

      expect(getByTestId('main-action-button-classes')).toHaveStyle(
        twClassNames`mt-8`,
      );
    });

    it('merges labelProps className after component label classes', () => {
      const { getByTestId } = render(
        <MainActionButton
          iconName={IconName.Add}
          label="Label"
          labelProps={{
            testID: 'main-action-button-label',
            className: 'mt-4',
          }}
        />,
      );

      expect(getByTestId('main-action-button-label')).toHaveStyle(
        twClassNames`mt-4`,
      );
    });
  });
});

describe('children', () => {
  it('renders children between the icon and the label', () => {
    // Arrange
    const tree = createRenderer(
      <MainActionButton
        iconName={IconName.Add}
        label="Send"
        iconProps={{ testID: 'main-action-button-icon' }}
        labelProps={{ testID: 'main-action-button-label' }}
      >
        <Text testID="main-action-button-children">1.5 ETH</Text>
      </MainActionButton>,
    );

    // Act
    const orderedTestIds = tree.root
      .findAll((node) => typeof node.props.testID === 'string')
      .map((node) => node.props.testID as string);

    // Assert
    const iconIndex = orderedTestIds.indexOf('main-action-button-icon');
    const childrenIndex = orderedTestIds.indexOf('main-action-button-children');
    const labelIndex = orderedTestIds.indexOf('main-action-button-label');
    expect(iconIndex).toBeGreaterThanOrEqual(0);
    expect(childrenIndex).toBeGreaterThan(iconIndex);
    expect(labelIndex).toBeGreaterThan(childrenIndex);
  });

  it('renders children content', () => {
    // Arrange
    const { getByTestId } = render(
      <MainActionButton iconName={IconName.Add} label="Send">
        <Text testID="main-action-button-children">1.5 ETH</Text>
      </MainActionButton>,
    );

    // Act
    const childrenText = getByTestId('main-action-button-children');

    // Assert
    expect(childrenText).toBeOnTheScreen();
  });

  it('applies design token spacing above the children content', () => {
    // Arrange
    const tw = renderHook(() => useTailwind()).result.current;
    const { getByTestId } = render(
      <MainActionButton iconName={IconName.Add} label="Send">
        <Text testID="main-action-button-children">1.5 ETH</Text>
      </MainActionButton>,
    );

    // Act
    const childrenText = getByTestId('main-action-button-children');
    let hostWrapper = childrenText.parent;
    while (hostWrapper && typeof hostWrapper.type !== 'string') {
      hostWrapper = hostWrapper.parent;
    }

    // Assert
    expect(hostWrapper).toHaveStyle(tw`mt-0.5`);
  });

  it('does not render a children container when children is omitted', () => {
    // Arrange
    const { UNSAFE_queryAllByType } = render(
      <MainActionButton iconName={IconName.Add} label="Send" />,
    );

    // Act
    const childrenWrappers = UNSAFE_queryAllByType(Box);

    // Assert
    expect(childrenWrappers).toHaveLength(0);
  });

  it('does not render a children container when children is false', () => {
    // Arrange
    const { UNSAFE_queryAllByType } = render(
      <MainActionButton iconName={IconName.Add} label="Send">
        {false}
      </MainActionButton>,
    );

    // Act
    const childrenWrappers = UNSAFE_queryAllByType(Box);

    // Assert
    expect(childrenWrappers).toHaveLength(0);
  });
});
