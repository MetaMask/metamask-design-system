import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';

import { IconName } from '../../../Icon';
import ButtonSecondary from './ButtonSecondary';
import {
  generateButtonSecondaryContainerClassNames,
  generateButtonSecondaryTextClassNames,
} from './ButtonSecondary.utilities';

describe('ButtonSecondary', () => {
  describe('generateButtonSecondaryContainerClassNames', () => {
    it('returns correct class names for default state', () => {
      const classNames = generateButtonSecondaryContainerClassNames({});
      expect(classNames).toContain(
        'bg-transparent border-[1.5px] border-icon-default',
      );
    });

    it('returns correct class names for inverse mode', () => {
      const classNames = generateButtonSecondaryContainerClassNames({
        isInverse: true,
      });
      expect(classNames).toContain(
        'bg-transparent border-[1.5px] border-primary-inverse',
      );
    });

    it('returns correct class names for danger mode', () => {
      const classNames = generateButtonSecondaryContainerClassNames({
        isDanger: true,
      });
      expect(classNames).toContain(
        'bg-transparent border-[1.5px] border-error-default',
      );
    });

    it('returns correct class names for pressed danger mode', () => {
      const classNames = generateButtonSecondaryContainerClassNames({
        isDanger: true,
        isPressed: true,
      });
      expect(classNames).toContain(
        'bg-error-mutedPressed border-[1.5px] border-error-defaultPressed',
      );
    });

    it('returns correct class names for loading danger mode', () => {
      const classNames = generateButtonSecondaryContainerClassNames({
        isDanger: true,
        isLoading: true,
      });
      expect(classNames).toContain(
        'bg-error-mutedPressed border-[1.5px] border-error-defaultPressed',
      );
    });

    it('returns correct class names for inverse and danger mode', () => {
      const classNames = generateButtonSecondaryContainerClassNames({
        isInverse: true,
        isDanger: true,
      });
      expect(classNames).toContain(
        'bg-background-default border-[1.5px] border-background-default',
      );
    });

    it('returns correct class names for inverse and danger mode when pressed', () => {
      const classNames = generateButtonSecondaryContainerClassNames({
        isInverse: true,
        isDanger: true,
        isPressed: true,
      });
      expect(classNames).toContain(
        'bg-background-defaultPressed border-[1.5px] border-background-defaultPressed',
      );
    });

    it('returns correct class names for inverse and danger mode when loading', () => {
      const classNames = generateButtonSecondaryContainerClassNames({
        isInverse: true,
        isDanger: true,
        isLoading: true,
      });
      expect(classNames).toContain(
        'bg-background-defaultPressed border-[1.5px] border-background-defaultPressed',
      );
    });

    it('returns correct class names for pressed inverse mode', () => {
      const classNames = generateButtonSecondaryContainerClassNames({
        isInverse: true,
        isPressed: true,
      });
      expect(classNames).toContain(
        'bg-background-pressed border-[1.5px] border-primary-inverse',
      );
    });

    it('appends additional Tailwind classes', () => {
      const classNames = generateButtonSecondaryContainerClassNames({
        isInverse: true,
        twClassName: 'rounded-lg',
      });
      expect(classNames).toContain(
        'bg-transparent border-[1.5px] border-primary-inverse rounded-lg',
      );
    });
  });
  describe('generateButtonSecondaryTextClassNames', () => {
    it('returns correct class name for default state', () => {
      const classNames = generateButtonSecondaryTextClassNames({});
      expect(classNames).toContain('text-text-default');
    });

    it('returns correct class name for danger mode', () => {
      const classNames = generateButtonSecondaryTextClassNames({
        isDanger: true,
      });
      expect(classNames).toContain('text-error-default');
    });

    it('returns correct class name for danger mode when pressed', () => {
      const classNames = generateButtonSecondaryTextClassNames({
        isDanger: true,
        isPressed: true,
      });
      expect(classNames).toContain('text-error-defaultPressed');
    });

    it('returns correct class name for danger mode when loading', () => {
      const classNames = generateButtonSecondaryTextClassNames({
        isDanger: true,
        isLoading: true,
      });
      expect(classNames).toContain('text-error-defaultPressed');
    });

    it('returns correct class name for inverse mode', () => {
      const classNames = generateButtonSecondaryTextClassNames({
        isInverse: true,
      });
      expect(classNames).toContain('text-primary-inverse');
    });

    it('returns correct class name for inverse and danger mode', () => {
      const classNames = generateButtonSecondaryTextClassNames({
        isInverse: true,
        isDanger: true,
      });
      expect(classNames).toContain('text-error-default');
    });

    it('returns correct class name for inverse and danger mode when pressed', () => {
      const classNames = generateButtonSecondaryTextClassNames({
        isInverse: true,
        isDanger: true,
        isPressed: true,
      });
      expect(classNames).toContain('text-error-defaultPressed');
    });

    it('returns correct class name for inverse and danger mode when loading', () => {
      const classNames = generateButtonSecondaryTextClassNames({
        isInverse: true,
        isDanger: true,
        isLoading: true,
      });
      expect(classNames).toContain('text-error-defaultPressed');
    });

    it('returns correct class name for pressed state', () => {
      const classNames = generateButtonSecondaryTextClassNames({
        isPressed: true,
      });
      expect(classNames).toContain('text-text-default');
    });

    it('returns correct class name for loading state', () => {
      const classNames = generateButtonSecondaryTextClassNames({
        isLoading: true,
      });
      expect(classNames).toContain('text-text-default');
    });
  });
  describe('ButtonSecondary component', () => {
    it('renders correctly with default props', () => {
      const { getByTestId } = render(
        <ButtonSecondary>Default Button</ButtonSecondary>,
      );
      expect(getByTestId('button-secondary')).not.toBeNull();
    });

    it('shows a spinner when `isLoading` is true', () => {
      const { getByTestId } = render(
        <ButtonSecondary isLoading loadingText="Loading...">
          Default Button
        </ButtonSecondary>,
      );

      expect(getByTestId('spinner-container')).toBeDefined();
    });

    it('renders start and end icons correctly', () => {
      const { getByTestId } = render(
        <ButtonSecondary
          startIconName={IconName.Add}
          endIconName={IconName.ArrowRight}
        >
          Button with Icons
        </ButtonSecondary>,
      );

      expect(getByTestId('content-container')).toBeDefined();
    });

    it('triggers onPress when clicked', () => {
      const onPressMock = jest.fn();
      const { getByText } = render(
        <ButtonSecondary onPress={onPressMock}>Press Me</ButtonSecondary>,
      );

      const button = getByText('Press Me');
      fireEvent.press(button);
      expect(onPressMock).toHaveBeenCalledTimes(1);
    });

    it('handles press in and out states', () => {
      const onPressInMock = jest.fn();
      const onPressOutMock = jest.fn();
      const { getByText } = render(
        <ButtonSecondary onPressIn={onPressInMock} onPressOut={onPressOutMock}>
          Press Me
        </ButtonSecondary>,
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
