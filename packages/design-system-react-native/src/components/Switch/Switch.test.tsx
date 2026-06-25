import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { fireEvent, render, renderHook } from '@testing-library/react-native';
import { Platform } from 'react-native';

import { Switch } from './Switch';

jest.mock('react-native/Libraries/Components/Switch/Switch', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const ReactMock = require('react');
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { View } = require('react-native');

  const MockSwitch = ({
    value: _value,
    disabled,
    onValueChange,
    accessibilityRole,
    accessibilityState,
    accessibilityLabel,
    style,
    ...rest
  }: Record<string, unknown>) =>
    ReactMock.createElement(View, {
      ...rest,
      accessible: true,
      accessibilityRole,
      accessibilityState,
      accessibilityLabel,
      disabled,
      style,
      onValueChange,
    });

  return {
    __esModule: true,
    default: MockSwitch,
  };
});

describe('Switch', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    tw = renderHook(() => useTailwind()).result.current;
  });

  describe('rendering', () => {
    it('renders on the screen', () => {
      const onValueChange = jest.fn();
      const { getByRole } = render(
        <Switch isOn={false} onValueChange={onValueChange} />,
      );

      expect(getByRole('switch')).toBeOnTheScreen();
    });

    it('passes testID to the container', () => {
      const onValueChange = jest.fn();
      const { getByTestId } = render(
        <Switch
          isOn={false}
          onValueChange={onValueChange}
          testID="switch-container"
        />,
      );

      expect(getByTestId('switch-container')).toBeOnTheScreen();
    });
  });

  describe('isOn', () => {
    it('reflects the on state in accessibility', () => {
      const onValueChange = jest.fn();
      const { getByRole } = render(
        <Switch isOn onValueChange={onValueChange} label="Notifications" />,
      );

      expect(getByRole('switch').props.accessibilityState).toMatchObject({
        checked: true,
      });
    });

    it('reflects the off state in accessibility', () => {
      const onValueChange = jest.fn();
      const { getByRole } = render(
        <Switch
          isOn={false}
          onValueChange={onValueChange}
          label="Notifications"
        />,
      );

      expect(getByRole('switch').props.accessibilityState).toMatchObject({
        checked: false,
      });
    });
  });

  describe('label', () => {
    it('renders label text when provided', () => {
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

    it('omits label text when not provided', () => {
      const onValueChange = jest.fn();
      const { queryByText } = render(
        <Switch isOn={false} onValueChange={onValueChange} />,
      );

      expect(queryByText('Enable feature')).toBeNull();
    });
  });

  describe('isDisabled', () => {
    it('disables the switch when isDisabled is true', () => {
      const onValueChange = jest.fn();
      const { getByRole } = render(
        <Switch isOn={false} isDisabled onValueChange={onValueChange} />,
      );

      expect(getByRole('switch')).toBeDisabled();
    });

    it('enables the switch when isDisabled is false', () => {
      const onValueChange = jest.fn();
      const { getByRole } = render(
        <Switch isOn={false} onValueChange={onValueChange} />,
      );

      expect(getByRole('switch')).toBeEnabled();
    });

    it('applies disabled opacity to the container', () => {
      const onValueChange = jest.fn();
      const { getByTestId } = render(
        <Switch
          isOn={false}
          isDisabled
          onValueChange={onValueChange}
          testID="switch-container"
        />,
      );

      expect(getByTestId('switch-container')).toHaveStyle(
        tw`flex-row items-center opacity-50`,
      );
    });

    it('omits disabled opacity when enabled', () => {
      const onValueChange = jest.fn();
      const { getByTestId } = render(
        <Switch
          isOn={false}
          onValueChange={onValueChange}
          testID="switch-container"
        />,
      );

      expect(getByTestId('switch-container')).toHaveStyle(
        tw`flex-row items-center`,
      );
    });
  });

  describe('onValueChange', () => {
    it('calls onValueChange when toggled', () => {
      const onValueChange = jest.fn();
      const { getByRole } = render(
        <Switch isOn={false} onValueChange={onValueChange} />,
      );

      fireEvent(getByRole('switch'), 'valueChange', true);

      expect(onValueChange).toHaveBeenCalledTimes(1);
      expect(onValueChange).toHaveBeenCalledWith(true);
    });
  });

  describe('accessibility', () => {
    it('sets switch role and label from the label prop', () => {
      const onValueChange = jest.fn();
      const { getByRole } = render(
        <Switch isOn label="Test Switch" onValueChange={onValueChange} />,
      );
      const switchElement = getByRole('switch');

      expect(switchElement.props.accessibilityRole).toBe('switch');
      expect(switchElement.props.accessibilityLabel).toBe('Test Switch');
      expect(switchElement.props.accessibilityState).toMatchObject({
        checked: true,
        disabled: false,
      });
    });

    it('reflects disabled state in accessibility', () => {
      const onValueChange = jest.fn();
      const { getByRole } = render(
        <Switch isOn={false} isDisabled onValueChange={onValueChange} />,
      );

      expect(getByRole('switch').props.accessibilityState).toMatchObject({
        checked: false,
        disabled: true,
      });
    });
  });

  describe('style', () => {
    it('merges custom style with the native switch', () => {
      const onValueChange = jest.fn();
      const { getByRole } = render(
        <Switch
          isOn={false}
          onValueChange={onValueChange}
          style={{ margin: 8 }}
        />,
      );

      expect(getByRole('switch')).toHaveStyle({ margin: 8 });
    });
  });

  describe('iOS margin fix', () => {
    const originalOS = Platform.OS;

    afterEach(() => {
      Object.defineProperty(Platform, 'OS', {
        value: originalOS,
        configurable: true,
      });
    });

    it('applies marginRight on iOS', () => {
      Object.defineProperty(Platform, 'OS', {
        value: 'ios',
        configurable: true,
      });

      const onValueChange = jest.fn();
      const { getByRole } = render(
        <Switch isOn={false} onValueChange={onValueChange} />,
      );

      expect(getByRole('switch')).toHaveStyle({ marginRight: 4 });
    });

    it('omits marginRight on Android', () => {
      Object.defineProperty(Platform, 'OS', {
        value: 'android',
        configurable: true,
      });

      const onValueChange = jest.fn();
      const { getByRole } = render(
        <Switch isOn={false} onValueChange={onValueChange} />,
      );

      expect(getByRole('switch')).not.toHaveStyle({ marginRight: 4 });
    });
  });
});
