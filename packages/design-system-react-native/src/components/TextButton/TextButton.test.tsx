import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';

import { IconName } from '../Icon';
import Text, { TextVariant } from '../Text';
import TextButton from './TextButton';
import {
  generateTextButtonContainerClassNames,
  generateTextButtonTextClassNames,
} from './TextButton.utilities';

describe('TextButton', () => {
  describe('generateTextButtonContainerClassNames', () => {
    it('returns correct class names for default state', () => {
      const classNames = generateTextButtonContainerClassNames({});
      expect(classNames).toContain('bg-transparent');
    });

    it('returns correct class names when pressed', () => {
      const classNames = generateTextButtonContainerClassNames({
        isPressed: true,
      });
      expect(classNames).toContain('bg-background-pressed');
    });

    it('returns correct class names when loading', () => {
      const classNames = generateTextButtonContainerClassNames({
        isLoading: true,
      });
      expect(classNames).toContain('bg-background-pressed');
    });

    it('returns correct class names when disabled', () => {
      const classNames = generateTextButtonContainerClassNames({
        isDisabled: true,
      });
      expect(classNames).toContain('opacity-50');
    });

    it('returns correct class names when pressed and loading', () => {
      const classNames = generateTextButtonContainerClassNames({
        isPressed: true,
        isLoading: true,
      });
      expect(classNames).toContain('bg-background-pressed');
    });

    it('appends additional Tailwind class names', () => {
      const classNames = generateTextButtonContainerClassNames({
        isPressed: true,
        twClassName: 'rounded-lg px-2',
      });
      expect(classNames).toContain(
        'bg-background-pressed opacity-100 rounded-lg px-2',
      );
    });

    it('appends additional Tailwind class names for default state', () => {
      const classNames = generateTextButtonContainerClassNames({
        twClassName: 'border border-solid',
      });
      expect(classNames).toContain(
        'bg-transparent opacity-100 border border-solid',
      );
    });
  });
  describe('generateTextButtonTextClassNames', () => {
    it('returns correct class names for default state', () => {
      const classNames = generateTextButtonTextClassNames({});
      expect(classNames).toContain('text-primary-default no-underline');
    });

    it('returns correct class names when pressed', () => {
      const classNames = generateTextButtonTextClassNames({ isPressed: true });
      expect(classNames).toContain('text-primary-defaultPressed underline');
    });

    it('returns correct class names when loading', () => {
      const classNames = generateTextButtonTextClassNames({ isLoading: true });
      expect(classNames).toContain('text-primary-defaultPressed underline');
    });

    it('returns correct class names for inverse mode', () => {
      const classNames = generateTextButtonTextClassNames({ isInverse: true });
      expect(classNames).toContain('text-primary-inverse underline');
    });

    it('returns correct class names for inverse mode when pressed', () => {
      const classNames = generateTextButtonTextClassNames({
        isInverse: true,
        isPressed: true,
      });
      expect(classNames).toContain('text-primary-inverse underline');
    });

    it('returns correct class names for inverse mode when loading', () => {
      const classNames = generateTextButtonTextClassNames({
        isInverse: true,
        isLoading: true,
      });
      expect(classNames).toContain('text-primary-inverse underline');
    });

    it('returns correct class names when pressed and loading simultaneously', () => {
      const classNames = generateTextButtonTextClassNames({
        isPressed: true,
        isLoading: true,
      });
      expect(classNames).toContain('text-primary-defaultPressed underline');
    });
  });
  describe('TextButton Component', () => {
    it('renders default state', () => {
      const { getByTestId, queryByTestId } = render(
        <TextButton>Default Text</TextButton>,
      );

      // Checks for presence of the main wrapper
      const textButton = getByTestId('text-button');
      expect(textButton).not.toBeNull();

      // Should show children text
      expect(textButton.props.children).not.toBeNull();

      // Spinner should not be present
      expect(queryByTestId('spinner')).toBeNull();

      // No icons
      expect(queryByTestId('icon')).toBeNull();
    });

    it('renders with loading state', () => {
      const { getByTestId, queryByText } = render(
        <TextButton isLoading loadingText="Loading...">
          Default Text
        </TextButton>,
      );
      // Should display spinner
      const spinner = getByTestId('spinner');
      expect(spinner).not.toBeNull();
      expect(queryByText('Loading...')).not.toBeNull();

      // Should not show children text
      expect(queryByText('Default Text')).toBeNull();
    });

    it('renders custom spinner props', () => {
      const { getByTestId, queryByText } = render(
        <TextButton
          isLoading
          spinnerProps={{ loadingText: 'Custom Spinner Text' }}
        >
          Children
        </TextButton>,
      );

      const spinner = getByTestId('spinner');
      expect(spinner).not.toBeNull();
      // Checking that custom spinner text is present
      expect(queryByText('Custom Spinner Text')).not.toBeNull();
    });

    it('calls onPress when not disabled or loading', () => {
      const onPressMock = jest.fn();
      const { getByTestId } = render(
        <TextButton onPress={onPressMock}>Pressable</TextButton>,
      );

      fireEvent.press(getByTestId('text-button'));
      expect(onPressMock).toHaveBeenCalledTimes(1);
    });

    it('does NOT call onPress when disabled', () => {
      const onPressMock = jest.fn();
      const { getByTestId } = render(
        <TextButton isDisabled onPress={onPressMock}>
          Disabled
        </TextButton>,
      );

      fireEvent.press(getByTestId('text-button'));
      expect(onPressMock).not.toHaveBeenCalled();
    });

    it('does NOT call onPress when loading', () => {
      const onPressMock = jest.fn();
      const { getByTestId } = render(
        <TextButton isLoading onPress={onPressMock}>
          Loading
        </TextButton>,
      );

      fireEvent.press(getByTestId('text-button'));
      expect(onPressMock).not.toHaveBeenCalled();
    });

    it('renders start icon when provided', () => {
      const { getAllByTestId, getByText } = render(
        <TextButton startIconName={IconName.Add}>With Start Icon</TextButton>,
      );

      const icons = getAllByTestId('start-icon');
      expect(icons).toHaveLength(1);

      // Children should still render
      expect(getByText('With Start Icon')).not.toBeNull();
    });

    it('renders end icon when provided', () => {
      const { getAllByTestId } = render(
        <TextButton endIconName={IconName.AddSquare}>With End Icon</TextButton>,
      );

      const icons = getAllByTestId('end-icon');
      expect(icons).toHaveLength(1);
    });

    it('renders start and end icons together', () => {
      const { getAllByTestId, getByText } = render(
        <TextButton
          startIconName={IconName.Add}
          endIconName={IconName.AddSquare}
        >
          Start and End Icon
        </TextButton>,
      );

      const startIcons = getAllByTestId('start-icon');
      expect(startIcons).toHaveLength(1);
      const endIcons = getAllByTestId('end-icon');
      expect(endIcons).toHaveLength(1);

      expect(getByText('Start and End Icon')).not.toBeNull();
    });

    it('renders start accessory if provided', () => {
      const StartAccessory = (
        <Text testID="start-accessory">Start Accessory</Text>
      );
      const { getByTestId } = render(
        <TextButton startAccessory={StartAccessory}>
          Has Start Accessory
        </TextButton>,
      );

      expect(getByTestId('start-accessory')).not.toBeNull();
    });

    it('renders end accessory if provided', () => {
      const EndAccessory = <Text testID="end-accessory">End Accessory</Text>;
      const { getByTestId } = render(
        <TextButton endAccessory={EndAccessory}>Has End Accessory</TextButton>,
      );

      expect(getByTestId('end-accessory')).not.toBeNull();
    });

    it('does not call onPress if isPressed is set via internal state while disabled', () => {
      // This tests pressing in and out transitions, but disabled means no call
      const onPressMock = jest.fn();
      const { getByTestId } = render(
        <TextButton isDisabled onPress={onPressMock}>
          Press me
        </TextButton>,
      );
      const textButton = getByTestId('text-button');

      fireEvent(textButton, 'onPressIn');
      fireEvent(textButton, 'onPressOut');
      fireEvent.press(textButton);

      expect(onPressMock).not.toHaveBeenCalled();
    });

    it('calls onPressIn/onPressOut if not disabled or loading', () => {
      const onPressInMock = jest.fn();
      const onPressOutMock = jest.fn();

      const { getByTestId } = render(
        <TextButton onPressIn={onPressInMock} onPressOut={onPressOutMock}>
          Events
        </TextButton>,
      );

      const textButton = getByTestId('text-button');

      fireEvent(textButton, 'onPressIn');
      expect(onPressInMock).toHaveBeenCalledTimes(1);

      fireEvent(textButton, 'onPressOut');
      expect(onPressOutMock).toHaveBeenCalledTimes(1);
    });

    it('calls onLongPress if not disabled or loading', () => {
      const onLongPressMock = jest.fn();
      const { getByTestId } = render(
        <TextButton onLongPress={onLongPressMock}>Long Press</TextButton>,
      );

      const textButton = getByTestId('text-button');

      fireEvent(textButton, 'onLongPress');
      expect(onLongPressMock).toHaveBeenCalledTimes(1);
    });

    it('does not call onLongPress if disabled or loading', () => {
      const onLongPressMock = jest.fn();

      const { getByTestId, rerender } = render(
        <TextButton isDisabled onLongPress={onLongPressMock}>
          Disabled
        </TextButton>,
      );

      const textButton = getByTestId('text-button');
      fireEvent(textButton, 'onLongPress');
      expect(onLongPressMock).not.toHaveBeenCalled();

      rerender(
        <TextButton isLoading onLongPress={onLongPressMock}>
          Loading
        </TextButton>,
      );

      fireEvent(textButton, 'onLongPress');
      expect(onLongPressMock).not.toHaveBeenCalled();
    });

    it('merges custom textProps', () => {
      const { getByText } = render(
        <TextButton
          textProps={{
            twClassName: 'text-error-default',
            variant: TextVariant.DisplayMd,
          }}
        >
          Custom Text Props
        </TextButton>,
      );

      // Just check if text is rendered. The style merging is tested by snapshot or style mocking.
      expect(getByText('Custom Text Props')).not.toBeNull();
    });

    it('merges style prop on container', () => {
      // Provide a style prop to verify it merges with the container
      const { getByTestId } = render(
        <TextButton style={{ marginTop: 10 }}>Styled Container</TextButton>,
      );

      const textButton = getByTestId('text-button');
      const styleJson = JSON.stringify(textButton.props.style);
      expect(styleJson).toContain('"marginTop":10');
    });
  });
});
