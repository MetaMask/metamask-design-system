import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';

import { ButtonBaseSize } from '../../types';
import { IconName } from '../Icon';
import ButtonBase from './ButtonBase';
import { generateButtonBaseContainerClassNames } from './ButtonBase.utilities';

describe('ButtonBase', () => {
  describe('generateButtonBaseContainerClassNames', () => {
    it('returns correct class names for default state', () => {
      const classNames = generateButtonBaseContainerClassNames({});
      expect(classNames).toContain(
        'flex-row items-center justify-center rounded-full bg-background-muted px-4',
      );
      expect(classNames).toContain('opacity-100');
      expect(classNames).toContain('self-start');
    });

    it('applies correct class names when disabled', () => {
      const classNames = generateButtonBaseContainerClassNames({
        isDisabled: true,
      });
      expect(classNames).toContain('opacity-50');
    });

    it('applies correct class names when full width', () => {
      const classNames = generateButtonBaseContainerClassNames({
        isFullWidth: true,
      });
      expect(classNames).toContain('self-stretch');
    });

    it('applies correct size class from TWCLASSMAP_BUTTONBASE_SIZE', () => {
      const size = ButtonBaseSize.Lg;
      const expectedSizeClass = `h-[${size}px]`;
      const classNames = generateButtonBaseContainerClassNames({ size });
      expect(classNames).toContain(expectedSizeClass);
    });

    it('appends additional Tailwind class names', () => {
      const classNames = generateButtonBaseContainerClassNames({
        twClassName: 'border border-blue-500',
      });
      expect(classNames).toContain('border border-blue-500');
    });

    it('applies all styles together correctly', () => {
      const classNames = generateButtonBaseContainerClassNames({
        size: ButtonBaseSize.Sm,
        isDisabled: true,
        isFullWidth: true,
        twClassName: 'shadow-md',
      });
      expect(classNames).toContain(`h-[${ButtonBaseSize.Sm}px]`);
      expect(classNames).toContain('opacity-50');
      expect(classNames).toContain('self-stretch');
      expect(classNames).toContain('shadow-md');
    });
  });
  describe('ButtonBase Component', () => {
    it('renders correctly with default props', () => {
      const { getByText } = render(<ButtonBase>Default Button</ButtonBase>);
      expect(getByText('Default Button')).not.toBeNull();
    });

    it('disables interaction when `isDisabled` is true', () => {
      const onPressMock = jest.fn();
      const { getByText } = render(
        <ButtonBase isDisabled onPress={onPressMock}>
          Disabled Button
        </ButtonBase>,
      );

      const button = getByText('Disabled Button');
      fireEvent.press(button);
      expect(onPressMock).not.toHaveBeenCalled();
    });

    it('shows loading spinner when `isLoading` is true', () => {
      const { getByTestId } = render(
        <ButtonBase isLoading loadingText="Loading...">
          Default Button
        </ButtonBase>,
      );

      // Ensure the spinner is visible with the correct opacity
      const spinnerContainer = getByTestId('spinner-container');
      expect(spinnerContainer.props.style.opacity).toBe(1);

      // Ensure the content container is hidden with the correct opacity
      const contentContainer = getByTestId('content-container');
      expect(contentContainer.props.style.opacity).toBe(0);
    });

    it('renders start and end icons correctly', () => {
      const { getByTestId } = render(
        <ButtonBase
          startIconName={IconName.Add}
          endIconName={IconName.ArrowRight}
        >
          Button with Icons
        </ButtonBase>,
      );

      expect(getByTestId('content-container')).not.toBeNull();
    });

    it('triggers onPress when clicked', () => {
      const onPressMock = jest.fn();
      const { getByText } = render(
        <ButtonBase onPress={onPressMock}>Press Me</ButtonBase>,
      );

      const button = getByText('Press Me');
      fireEvent.press(button);
      expect(onPressMock).toHaveBeenCalledTimes(1);
    });
  });
});
