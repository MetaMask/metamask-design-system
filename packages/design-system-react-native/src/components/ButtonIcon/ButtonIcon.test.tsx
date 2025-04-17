import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';

import { ButtonIconSize } from '../../types';
import { IconName } from '../Icon';
import ButtonIcon from './ButtonIcon';
import {
  generateButtonIconContainerClassNames,
  generateButtonIconIconColorClassNames,
} from './ButtonIcon.utilities';

describe('ButtonIcon', () => {
  describe('generateButtonIconContainerClassNames', () => {
    it('returns correct class names for default state', () => {
      const classNames = generateButtonIconContainerClassNames({});
      expect(classNames).toContain('items-center justify-center');
      expect(classNames).toContain('rounded-sm');
      expect(classNames).toContain(`h-[${ButtonIconSize.Md}px]`);
      expect(classNames).toContain(`w-[${ButtonIconSize.Md}px]`);
      expect(classNames).toContain('bg-transparent');
      expect(classNames).toContain('opacity-100');
    });

    it('applies correct class when not floating', () => {
      const classNames = generateButtonIconContainerClassNames({
        isFloating: false,
      });
      expect(classNames).toContain('rounded-sm'); // Should be square-like instead of full-rounded
      expect(classNames).toContain('bg-transparent'); // Default not pressed
    });

    it('applies correct class when pressed and not floating', () => {
      const classNames = generateButtonIconContainerClassNames({
        isFloating: false,
        isPressed: true,
      });
      expect(classNames).toContain('bg-background-pressed');
    });

    it('applies correct class when disabled', () => {
      const classNames = generateButtonIconContainerClassNames({
        isDisabled: true,
      });
      expect(classNames).toContain('opacity-50'); // Disabled should lower opacity
    });

    it('applies correct size', () => {
      const size = ButtonIconSize.Lg;
      const classNames = generateButtonIconContainerClassNames({ size });
      expect(classNames).toContain(`h-[${size}px]`);
      expect(classNames).toContain(`w-[${size}px]`);
    });

    it('appends additional Tailwind class names', () => {
      const classNames = generateButtonIconContainerClassNames({
        twClassName: 'shadow-md border',
      });
      expect(classNames).toContain('shadow-md border');
    });

    it('applies all styles together correctly', () => {
      const classNames = generateButtonIconContainerClassNames({
        isDisabled: true,
        isPressed: true,
        isFloating: false,
        size: ButtonIconSize.Sm,
        twClassName: 'ring-2',
      });
      expect(classNames).toContain('items-center justify-center');
      expect(classNames).toContain('rounded-sm');
      expect(classNames).toContain('h-[24px]');
      expect(classNames).toContain('w-[24px]');
      expect(classNames).toContain('bg-background-pressed');
      expect(classNames).toContain('opacity-50');
      expect(classNames).toContain('ring-2');
    });
  });
  describe('generateButtonIconIconColorClassNames', () => {
    it('returns default icon color when no props are provided', () => {
      const classNames = generateButtonIconIconColorClassNames({});
      expect(classNames).toBe('text-icon-default');
    });

    it('returns inverse color when isInverse is true', () => {
      const classNames = generateButtonIconIconColorClassNames({
        isInverse: true,
      });
      expect(classNames).toBe('text-primary-inverse');
    });

    it('returns inverse color when isFloating is true', () => {
      const classNames = generateButtonIconIconColorClassNames({
        isFloating: true,
      });
      expect(classNames).toBe('text-primary-inverse');
    });

    it('returns inverse color when both isInverse and isFloating are true', () => {
      const classNames = generateButtonIconIconColorClassNames({
        isInverse: true,
        isFloating: true,
      });
      expect(classNames).toBe('text-primary-inverse');
    });

    it('returns default color when both isInverse and isFloating are false', () => {
      const classNames = generateButtonIconIconColorClassNames({
        isInverse: false,
        isFloating: false,
      });
      expect(classNames).toBe('text-icon-default');
    });
  });
  describe('ButtonIcon component', () => {
    it('renders with default props', () => {
      const { getByTestId } = render(<ButtonIcon iconName={IconName.Close} />);
      const button = getByTestId('button-icon');
      expect(button).toBeDefined();
    });

    it('disables interaction when `isDisabled` is true', () => {
      const onPressMock = jest.fn();
      const { getByTestId } = render(
        <ButtonIcon
          iconName={IconName.Close}
          isDisabled
          onPress={onPressMock}
        />,
      );

      const button = getByTestId('button-icon');
      fireEvent.press(button);
      expect(onPressMock).not.toHaveBeenCalled();
    });

    it('calls `onPress` when pressed (and not disabled)', () => {
      const onPressMock = jest.fn();
      const { getByTestId } = render(
        <ButtonIcon iconName={IconName.Close} onPress={onPressMock} />,
      );

      const button = getByTestId('button-icon');
      fireEvent.press(button);
      expect(onPressMock).toHaveBeenCalledTimes(1);
    });

    it('sets `isPressed` to true onPressIn and false onPressOut', () => {
      const onPressInMock = jest.fn();
      const onPressOutMock = jest.fn();
      const { getByTestId } = render(
        <ButtonIcon
          iconName={IconName.Close}
          onPressIn={onPressInMock}
          onPressOut={onPressOutMock}
        />,
      );

      const button = getByTestId('button-icon');

      fireEvent(button, 'pressIn');
      expect(onPressInMock).toHaveBeenCalledTimes(1);

      fireEvent(button, 'pressOut');
      expect(onPressOutMock).toHaveBeenCalledTimes(1);
    });

    it('applies `isInverse` styling if provided', () => {
      const { getByTestId } = render(
        <ButtonIcon iconName={IconName.Close} isInverse />,
      );
      const button = getByTestId('button-icon');
      expect(button).toBeDefined();
    });

    it('applies `isFloating` styling if provided', () => {
      const { getByTestId } = render(
        <ButtonIcon iconName={IconName.Close} isFloating />,
      );
      const button = getByTestId('button-icon');
      expect(button).toBeDefined();
    });

    it('renders with different sizes correctly', () => {
      const { getByTestId, rerender } = render(
        <ButtonIcon iconName={IconName.Close} size={ButtonIconSize.Sm} />,
      );
      let button = getByTestId('button-icon');
      expect(button).toBeDefined();

      rerender(
        <ButtonIcon iconName={IconName.Close} size={ButtonIconSize.Md} />,
      );
      button = getByTestId('button-icon');
      expect(button).toBeDefined();

      rerender(
        <ButtonIcon iconName={IconName.Close} size={ButtonIconSize.Lg} />,
      );
      button = getByTestId('button-icon');
      expect(button).toBeDefined();
    });

    it('passes additional iconProps correctly', () => {
      const { getByTestId } = render(
        <ButtonIcon
          iconName={IconName.Close}
          iconProps={{
            testID: 'custom-icon',
          }}
        />,
      );
      const customIcon = getByTestId('custom-icon');
      expect(customIcon).toBeDefined();
    });

    it('applies custom twClassName overrides', () => {
      const { getByTestId } = render(
        <ButtonIcon iconName={IconName.Close} twClassName="bg-red-500" />,
      );
      const button = getByTestId('button-icon');
      expect(button).toBeDefined();
    });

    it('applies custom style', () => {
      const { getByTestId } = render(
        <ButtonIcon iconName={IconName.Close} style={{ margin: 10 }} />,
      );
      const button = getByTestId('button-icon');
      expect(button.props.style).toStrictEqual(
        expect.arrayContaining([expect.objectContaining({ margin: 10 })]),
      );
    });
  });
});
