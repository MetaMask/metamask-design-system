import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';

import { IconName } from '../../../Icon';
import ButtonTertiary from './ButtonTertiary';
import {
  generateButtonTertiaryContainerClassNames,
  generateButtonTertiaryTextClassNames,
} from './ButtonTertiary.utilities';

describe('ButtonTertiary', () => {
  describe('generateButtonTertiaryContainerClassNames', () => {
    it('returns correct class names for default state', () => {
      const classNames = generateButtonTertiaryContainerClassNames({});
      expect(classNames).toContain(
        'bg-transparent border-0 border-transparent',
      );
    });

    it('returns correct class names for inverse mode', () => {
      const classNames = generateButtonTertiaryContainerClassNames({
        isInverse: true,
      });
      expect(classNames).toContain(
        'bg-transparent border-[1.5px] border-primary-inverse',
      );
    });

    it('returns correct class names for danger mode', () => {
      const classNames = generateButtonTertiaryContainerClassNames({
        isDanger: true,
      });
      expect(classNames).toContain(
        'bg-transparent border-0 border-transparent',
      );
    });

    it('returns correct class names for pressed danger mode', () => {
      const classNames = generateButtonTertiaryContainerClassNames({
        isDanger: true,
        isPressed: true,
      });
      expect(classNames).toContain(
        'bg-error-mutedPressed border-0 border-error-mutedPressed',
      );
    });

    it('returns correct class names for loading danger mode', () => {
      const classNames = generateButtonTertiaryContainerClassNames({
        isDanger: true,
        isLoading: true,
      });
      expect(classNames).toContain(
        'bg-error-mutedPressed border-0 border-error-mutedPressed',
      );
    });

    it('returns correct class names for inverse and danger mode', () => {
      const classNames = generateButtonTertiaryContainerClassNames({
        isInverse: true,
        isDanger: true,
      });
      expect(classNames).toContain(
        'bg-background-default border-0 border-background-default',
      );
    });

    it('returns correct class names for inverse and danger mode when pressed', () => {
      const classNames = generateButtonTertiaryContainerClassNames({
        isInverse: true,
        isDanger: true,
        isPressed: true,
      });
      expect(classNames).toContain(
        'bg-background-defaultPressed border-0 border-background-defaultPressed',
      );
    });

    it('returns correct class names for inverse and danger mode when loading', () => {
      const classNames = generateButtonTertiaryContainerClassNames({
        isInverse: true,
        isDanger: true,
        isLoading: true,
      });
      expect(classNames).toContain(
        'bg-background-defaultPressed border-0 border-background-defaultPressed',
      );
    });

    it('returns correct class names for pressed inverse mode', () => {
      const classNames = generateButtonTertiaryContainerClassNames({
        isInverse: true,
        isPressed: true,
      });
      expect(classNames).toContain(
        'bg-background-pressed border-[1.5px] border-primary-inverse',
      );
    });

    it('appends additional Tailwind classes', () => {
      const classNames = generateButtonTertiaryContainerClassNames({
        isInverse: true,
        twClassName: 'rounded-lg',
      });
      expect(classNames).toContain(
        'bg-transparent border-[1.5px] border-primary-inverse rounded-lg',
      );
    });
  });
  describe('generateButtonTertiaryTextClassNames', () => {
    it('returns correct class name for default state', () => {
      const classNames = generateButtonTertiaryTextClassNames({});
      expect(classNames).toContain('text-primary-default');
    });

    it('returns correct class name for danger mode', () => {
      const classNames = generateButtonTertiaryTextClassNames({
        isDanger: true,
      });
      expect(classNames).toContain('text-error-default');
    });

    it('returns correct class name for danger mode when pressed', () => {
      const classNames = generateButtonTertiaryTextClassNames({
        isDanger: true,
        isPressed: true,
      });
      expect(classNames).toContain('text-error-defaultPressed');
    });

    it('returns correct class name for danger mode when loading', () => {
      const classNames = generateButtonTertiaryTextClassNames({
        isDanger: true,
        isLoading: true,
      });
      expect(classNames).toContain('text-error-defaultPressed');
    });

    it('returns correct class name for inverse mode', () => {
      const classNames = generateButtonTertiaryTextClassNames({
        isInverse: true,
      });
      expect(classNames).toContain('text-primary-inverse');
    });

    it('returns correct class name for inverse and danger mode', () => {
      const classNames = generateButtonTertiaryTextClassNames({
        isInverse: true,
        isDanger: true,
      });
      expect(classNames).toContain('text-error-default');
    });

    it('returns correct class name for inverse and danger mode when pressed', () => {
      const classNames = generateButtonTertiaryTextClassNames({
        isInverse: true,
        isDanger: true,
        isPressed: true,
      });
      expect(classNames).toContain('text-error-defaultPressed');
    });

    it('returns correct class name for inverse and danger mode when loading', () => {
      const classNames = generateButtonTertiaryTextClassNames({
        isInverse: true,
        isDanger: true,
        isLoading: true,
      });
      expect(classNames).toContain('text-error-defaultPressed');
    });

    it('returns correct class name for pressed state', () => {
      const classNames = generateButtonTertiaryTextClassNames({
        isPressed: true,
      });
      expect(classNames).toContain('text-primary-defaultPressed');
    });

    it('returns correct class name for loading state', () => {
      const classNames = generateButtonTertiaryTextClassNames({
        isLoading: true,
      });
      expect(classNames).toContain('text-primary-defaultPressed');
    });
  });

  describe('ButtonTertiary component', () => {
    it('renders correctly with default props', () => {
      const { getByTestId } = render(
        <ButtonTertiary>Default Button</ButtonTertiary>,
      );
      expect(getByTestId('button-tertiary')).not.toBeNull();
    });

    it('shows a spinner when `isLoading` is true', () => {
      const { getByTestId } = render(
        <ButtonTertiary isLoading loadingText="Loading...">
          Default Button
        </ButtonTertiary>,
      );

      expect(getByTestId('spinner-container')).toBeDefined();
    });

    it('renders start and end icons correctly', () => {
      const { getByTestId } = render(
        <ButtonTertiary
          startIconName={IconName.Add}
          endIconName={IconName.ArrowRight}
        >
          Button with Icons
        </ButtonTertiary>,
      );

      expect(getByTestId('content-container')).toBeDefined();
    });

    it('triggers onPress when clicked', () => {
      const onPressMock = jest.fn();
      const { getByText } = render(
        <ButtonTertiary onPress={onPressMock}>Press Me</ButtonTertiary>,
      );

      const button = getByText('Press Me');
      fireEvent.press(button);
      expect(onPressMock).toHaveBeenCalledTimes(1);
    });

    it('handles press in and out states', () => {
      const onPressInMock = jest.fn();
      const onPressOutMock = jest.fn();
      const { getByText } = render(
        <ButtonTertiary onPressIn={onPressInMock} onPressOut={onPressOutMock}>
          Press Me
        </ButtonTertiary>,
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
