import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';

import { IconName } from '../../../Icon';
import ButtonPrimary from './ButtonPrimary';
import {
  generateButtonPrimaryContainerClassNames,
  generateButtonPrimaryTextClassNames,
} from './ButtonPrimary.utilities';

describe('ButtonPrimary', () => {
  describe('generateButtonPrimaryContainerClassNames', () => {
    it('returns correct class names for default state', () => {
      const classNames = generateButtonPrimaryContainerClassNames({});
      expect(classNames).toContain('bg-primary-default');
    });

    it('returns correct class names when pressed', () => {
      const classNames = generateButtonPrimaryContainerClassNames({
        isPressed: true,
      });
      expect(classNames).toContain('bg-primary-defaultPressed');
    });

    it('returns correct class names when loading', () => {
      const classNames = generateButtonPrimaryContainerClassNames({
        isLoading: true,
      });
      expect(classNames).toContain('bg-primary-defaultPressed');
    });

    it('returns correct class names for inverse mode', () => {
      const classNames = generateButtonPrimaryContainerClassNames({
        isInverse: true,
      });
      expect(classNames).toContain('bg-background-default');
    });

    it('returns correct class names for inverse mode when pressed', () => {
      const classNames = generateButtonPrimaryContainerClassNames({
        isInverse: true,
        isPressed: true,
      });
      expect(classNames).toContain('bg-background-defaultPressed');
    });

    it('returns correct class names for inverse mode when loading', () => {
      const classNames = generateButtonPrimaryContainerClassNames({
        isInverse: true,
        isLoading: true,
      });
      expect(classNames).toContain('bg-background-defaultPressed');
    });

    it('returns correct class names for danger mode', () => {
      const classNames = generateButtonPrimaryContainerClassNames({
        isDanger: true,
      });
      expect(classNames).toContain('bg-error-default');
    });

    it('returns correct class names for danger mode when pressed', () => {
      const classNames = generateButtonPrimaryContainerClassNames({
        isDanger: true,
        isPressed: true,
      });
      expect(classNames).toContain('bg-error-defaultPressed');
    });

    it('returns correct class names for danger mode when loading', () => {
      const classNames = generateButtonPrimaryContainerClassNames({
        isDanger: true,
        isLoading: true,
      });
      expect(classNames).toContain('bg-error-defaultPressed');
    });

    it('returns correct class names for inverse and danger mode', () => {
      const classNames = generateButtonPrimaryContainerClassNames({
        isInverse: true,
        isDanger: true,
      });
      expect(classNames).toContain('bg-background-default');
    });

    it('returns correct class names for inverse and danger mode when pressed', () => {
      const classNames = generateButtonPrimaryContainerClassNames({
        isInverse: true,
        isDanger: true,
        isPressed: true,
      });
      expect(classNames).toContain('bg-background-defaultPressed');
    });

    it('returns correct class names for inverse and danger mode when loading', () => {
      const classNames = generateButtonPrimaryContainerClassNames({
        isInverse: true,
        isDanger: true,
        isLoading: true,
      });
      expect(classNames).toContain('bg-background-defaultPressed');
    });

    it('appends additional Tailwind class names', () => {
      const classNames = generateButtonPrimaryContainerClassNames({
        isPressed: true,
        twClassName: 'px-4',
      });
      expect(classNames).toContain('bg-primary-defaultPressed px-4');
    });
  });
  describe('generateButtonPrimaryTextClassNames', () => {
    it('returns correct class name for default state', () => {
      const classNames = generateButtonPrimaryTextClassNames({});
      expect(classNames).toBe('text-primary-inverse');
    });

    it('returns correct class name for inverse mode', () => {
      const classNames = generateButtonPrimaryTextClassNames({
        isInverse: true,
      });
      expect(classNames).toBe('text-text-default');
    });

    it('returns correct class name for danger mode', () => {
      const classNames = generateButtonPrimaryTextClassNames({
        isDanger: true,
      });
      expect(classNames).toBe('text-primary-inverse');
    });

    it('returns correct class name for inverse and danger mode', () => {
      const classNames = generateButtonPrimaryTextClassNames({
        isInverse: true,
        isDanger: true,
      });
      expect(classNames).toBe('text-error-default');
    });

    it('returns correct class name for inverse and danger mode when pressed', () => {
      const classNames = generateButtonPrimaryTextClassNames({
        isInverse: true,
        isDanger: true,
        isPressed: true,
      });
      expect(classNames).toBe('text-error-defaultPressed');
    });

    it('returns correct class name for inverse and danger mode when loading', () => {
      const classNames = generateButtonPrimaryTextClassNames({
        isInverse: true,
        isDanger: true,
        isLoading: true,
      });
      expect(classNames).toBe('text-error-defaultPressed');
    });

    it('returns correct class name for pressed state', () => {
      const classNames = generateButtonPrimaryTextClassNames({
        isPressed: true,
      });
      expect(classNames).toBe('text-primary-inverse');
    });

    it('returns correct class name for loading state', () => {
      const classNames = generateButtonPrimaryTextClassNames({
        isLoading: true,
      });
      expect(classNames).toBe('text-primary-inverse');
    });
  });
  describe('ButtonPrimary component', () => {
    it('renders correctly with default props', () => {
      const { getByTestId } = render(
        <ButtonPrimary>Default Button</ButtonPrimary>,
      );
      expect(getByTestId('button-primary')).not.toBeNull();
    });

    it('shows a spinner when `isLoading` is true', () => {
      const { getByTestId } = render(
        <ButtonPrimary isLoading loadingText="Loading...">
          Default Button
        </ButtonPrimary>,
      );

      expect(getByTestId('spinner-container')).toBeDefined();
    });

    it('renders start and end icons correctly', () => {
      const { getByTestId } = render(
        <ButtonPrimary
          startIconName={IconName.Add}
          endIconName={IconName.ArrowRight}
        >
          Button with Icons
        </ButtonPrimary>,
      );

      expect(getByTestId('content-container')).toBeDefined();
    });

    it('triggers onPress when clicked', () => {
      const onPressMock = jest.fn();
      const { getByText } = render(
        <ButtonPrimary onPress={onPressMock}>Press Me</ButtonPrimary>,
      );

      const button = getByText('Press Me');
      fireEvent.press(button);
      expect(onPressMock).toHaveBeenCalledTimes(1);
    });

    it('handles press in and out states', () => {
      const onPressInMock = jest.fn();
      const onPressOutMock = jest.fn();
      const { getByText } = render(
        <ButtonPrimary onPressIn={onPressInMock} onPressOut={onPressOutMock}>
          Press Me
        </ButtonPrimary>,
      );

      const button = getByText('Press Me');

      // Simulate press in
      fireEvent(button, 'pressIn');
      expect(onPressInMock).toHaveBeenCalledTimes(1);

      // Simulate press out
      fireEvent(button, 'pressOut');
      expect(onPressOutMock).toHaveBeenCalledTimes(1);
    });

    it('renders ButtonPrimaryBase directly when isInverse is true', () => {
      const { getByTestId, getByText } = render(
        <ButtonPrimary isInverse>Inverse Button</ButtonPrimary>,
      );

      // Verify the component is rendered (ButtonBase has testID "button-primary")
      expect(getByTestId('button-primary')).toBeTruthy();

      // Optionally, check that the displayed text is correct
      expect(getByText('Inverse Button')).toBeTruthy();
    });
  });
});
