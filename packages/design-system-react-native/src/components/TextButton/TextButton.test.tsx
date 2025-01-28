import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';

import { IconName } from '../Icon';
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
      expect(classNames).toContain('bg-background-pressed rounded-lg px-2');
    });

    it('appends additional Tailwind class names for default state', () => {
      const classNames = generateTextButtonContainerClassNames({
        twClassName: 'border border-solid',
      });
      expect(classNames).toContain('bg-transparent border border-solid');
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
  describe('TextButton component', () => {
    it('renders correctly with default props', () => {
      const { getByTestId } = render(<TextButton>Default Button</TextButton>);
      expect(getByTestId('button-primary')).not.toBeNull();
    });

    it('shows a spinner when `isLoading` is true', () => {
      const { getByTestId } = render(
        <TextButton isLoading loadingText="Loading...">
          Default Button
        </TextButton>,
      );

      expect(getByTestId('spinner-container')).toBeDefined();
    });

    it('renders start and end icons correctly', () => {
      const { getByTestId } = render(
        <TextButton
          startIconName={IconName.Add}
          endIconName={IconName.ArrowRight}
        >
          Button with Icons
        </TextButton>,
      );

      expect(getByTestId('content-container')).toBeDefined();
    });

    it('triggers onPress when clicked', () => {
      const onPressMock = jest.fn();
      const { getByText } = render(
        <TextButton onPress={onPressMock}>Press Me</TextButton>,
      );

      const button = getByText('Press Me');
      fireEvent.press(button);
      expect(onPressMock).toHaveBeenCalledTimes(1);
    });

    it('handles press in and out states', () => {
      const onPressInMock = jest.fn();
      const onPressOutMock = jest.fn();
      const { getByText } = render(
        <TextButton onPressIn={onPressInMock} onPressOut={onPressOutMock}>
          Press Me
        </TextButton>,
      );

      const button = getByText('Press Me');

      // Simulate press in
      fireEvent(button, 'pressIn');
      expect(onPressInMock).toHaveBeenCalledTimes(1);

      // Simulate press out
      fireEvent(button, 'pressOut');
      expect(onPressOutMock).toHaveBeenCalledTimes(1);
    });
  });
});
