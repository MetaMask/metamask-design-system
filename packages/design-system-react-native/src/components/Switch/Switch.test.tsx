import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import { Platform } from 'react-native';

import { Switch } from './Switch';

describe('Switch', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    tw = renderHook(() => useTailwind()).result.current;
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly when on', () => {
    const onValueChange = jest.fn();
    const { getByRole } = render(<Switch isOn onValueChange={onValueChange} />);
    const switchElement = getByRole('switch');
    expect(switchElement).toBeOnTheScreen();
    expect(switchElement.props.value).toBe(true);
  });

  it('renders correctly when off', () => {
    const onValueChange = jest.fn();
    const { getByRole } = render(
      <Switch isOn={false} onValueChange={onValueChange} />,
    );
    const switchElement = getByRole('switch');
    expect(switchElement).toBeOnTheScreen();
    expect(switchElement.props.value).toBe(false);
  });

  it('renders label when provided', () => {
    const onValueChange = jest.fn();
    const { getByText } = render(
      <Switch
        isOn={false}
        onValueChange={onValueChange}
        label="Enable feature"
      />,
    );
    expect(getByText('Enable feature')).toBeOnTheScreen();
  });

  it('does not render label when not provided', () => {
    const onValueChange = jest.fn();
    const { queryByText } = render(
      <Switch isOn={false} onValueChange={onValueChange} />,
    );
    expect(queryByText('Enable feature')).toBeNull();
  });

  it('fires onValueChange when toggled', () => {
    const onValueChange = jest.fn();
    const { getByRole } = render(
      <Switch isOn={false} onValueChange={onValueChange} />,
    );
    const switchElement = getByRole('switch');
    fireEvent(switchElement, 'valueChange', true);
    expect(onValueChange).toHaveBeenCalledWith(true);
  });

  it('sets disabled state correctly', () => {
    const onValueChange = jest.fn();
    const { getByRole } = render(
      <Switch isOn={false} isDisabled onValueChange={onValueChange} />,
    );
    const switchElement = getByRole('switch');
    expect(switchElement.props.disabled).toBe(true);
  });

  it('sets accessibility props correctly', () => {
    const onValueChange = jest.fn();
    const { getByRole } = render(
      <Switch isOn label="Test Switch" onValueChange={onValueChange} />,
    );
    const switchElement = getByRole('switch');
    expect(switchElement.props.accessibilityRole).toBe('switch');
    expect(switchElement.props.accessibilityState).toMatchObject({
      checked: true,
      disabled: false,
    });
    expect(switchElement.props.accessibilityLabel).toBe('Test Switch');
  });

  it('sets accessibility state when disabled', () => {
    const onValueChange = jest.fn();
    const { getByRole } = render(
      <Switch isOn={false} isDisabled onValueChange={onValueChange} />,
    );
    const switchElement = getByRole('switch');
    expect(switchElement.props.accessibilityState).toMatchObject({
      checked: false,
      disabled: true,
    });
  });

  describe('iOS margin fix', () => {
    it('applies marginRight on iOS', () => {
      const originalOS = Platform.OS;
      Object.defineProperty(Platform, 'OS', {
        value: 'ios',
        configurable: true,
      });

      const onValueChange = jest.fn();
      const { getByRole } = render(
        <Switch isOn={false} onValueChange={onValueChange} />,
      );
      const switchElement = getByRole('switch');
      expect(switchElement).toHaveStyle({ marginRight: 4 });

      Object.defineProperty(Platform, 'OS', {
        value: originalOS,
        configurable: true,
      });
    });
  });

  it('applies disabled opacity to container', () => {
    const onValueChange = jest.fn();
    const { getByTestId } = render(
      <Switch
        isOn={false}
        isDisabled
        onValueChange={onValueChange}
        testID="switch-container"
      />,
    );
    const container = getByTestId('switch-container');
    expect(container).toHaveStyle(tw`flex-row items-center opacity-50`);
  });

  it('merges custom style with switch', () => {
    const onValueChange = jest.fn();
    const { getByRole } = render(
      <Switch
        isOn={false}
        onValueChange={onValueChange}
        style={{ margin: 8 }}
      />,
    );
    const switchElement = getByRole('switch');
    expect(switchElement).toHaveStyle({ margin: 8 });
  });
});
