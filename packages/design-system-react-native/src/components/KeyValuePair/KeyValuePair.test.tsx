import { KeyValuePairOrientation } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

import { IconName } from '../Icon';

import { KeyValuePair } from './KeyValuePair';

describe('KeyValuePair', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    const { result } = renderHook(() => useTailwind());
    tw = result.current;
  });

  describe('when keyLabel and value are strings', () => {
    it('renders key and value text', () => {
      render(
        <KeyValuePair
          keyLabel="Label"
          value="Value text"
          testID="key-value-pair"
        />,
      );

      expect(screen.getByText('Label')).toBeOnTheScreen();
      expect(screen.getByText('Value text')).toBeOnTheScreen();
    });
  });

  describe('when keyLabel is a ReactNode', () => {
    it('renders keyLabel', () => {
      render(
        <KeyValuePair
          keyLabel={<Text>Custom key node</Text>}
          value="Value"
          testID="key-value-pair"
        />,
      );

      expect(screen.getByText('Custom key node')).toBeOnTheScreen();
      expect(screen.getByText('Value')).toBeOnTheScreen();
    });
  });

  describe('when value is a ReactNode', () => {
    it('renders value', () => {
      render(
        <KeyValuePair
          keyLabel="Key"
          value={<Text>Custom value node</Text>}
          testID="key-value-pair"
        />,
      );

      expect(screen.getByText('Key')).toBeOnTheScreen();
      expect(screen.getByText('Custom value node')).toBeOnTheScreen();
    });
  });

  describe('when orientation is Horizontal', () => {
    it('applies horizontal layout styles on root', () => {
      const { getByTestId } = render(
        <KeyValuePair
          keyLabel="K"
          value="V"
          orientation={KeyValuePairOrientation.Horizontal}
          testID="key-value-pair"
        />,
      );

      const root = getByTestId('key-value-pair');

      expect(root).toHaveStyle(tw`flex-row`);
      expect(root).toHaveStyle(tw`items-center`);
      expect(root).toHaveStyle(tw`gap-4`);
      expect(root).toHaveStyle(tw`h-10`);
    });

    it('applies single-line defaults to key string', () => {
      render(
        <KeyValuePair
          keyLabel="K"
          value="V"
          orientation={KeyValuePairOrientation.Horizontal}
          testID="key-value-pair"
        />,
      );

      const keyText = screen.getByText('K');

      expect(keyText.props.numberOfLines).toBe(1);
      expect(keyText.props.ellipsizeMode).toBe('tail');
    });

    it('applies single-line defaults to value string', () => {
      render(
        <KeyValuePair
          keyLabel="K"
          value="V"
          orientation={KeyValuePairOrientation.Horizontal}
          testID="key-value-pair"
        />,
      );

      const valueText = screen.getByText('V');

      expect(valueText.props.numberOfLines).toBe(1);
      expect(valueText.props.ellipsizeMode).toBe('tail');
    });
  });

  describe('when orientation is Vertical', () => {
    it('applies vertical layout on root', () => {
      const { getByTestId } = render(
        <KeyValuePair
          keyLabel="K"
          value="V"
          orientation={KeyValuePairOrientation.Vertical}
          testID="key-value-pair"
        />,
      );

      const root = getByTestId('key-value-pair');

      expect(root).toHaveStyle(tw`flex-col`);
    });

    it('applies single-line defaults to key string', () => {
      render(
        <KeyValuePair
          keyLabel="K"
          value="V"
          orientation={KeyValuePairOrientation.Vertical}
          testID="key-value-pair"
        />,
      );

      const keyText = screen.getByText('K');

      expect(keyText.props.numberOfLines).toBe(1);
      expect(keyText.props.ellipsizeMode).toBe('tail');
    });

    it('applies single-line defaults to value string', () => {
      render(
        <KeyValuePair
          keyLabel="K"
          value="V"
          orientation={KeyValuePairOrientation.Vertical}
          testID="key-value-pair"
        />,
      );

      const valueText = screen.getByText('V');

      expect(valueText.props.numberOfLines).toBe(1);
      expect(valueText.props.ellipsizeMode).toBe('tail');
    });
  });

  describe('when keyStartAccessory is set', () => {
    it('renders keyStartAccessory in key row', () => {
      render(
        <KeyValuePair
          keyLabel="Key"
          value="Value"
          keyStartAccessory={<Text testID="key-start">KS</Text>}
          testID="key-value-pair"
        />,
      );

      expect(screen.getByTestId('key-start')).toBeOnTheScreen();
    });
  });

  describe('when keyEndAccessory is set', () => {
    it('renders keyEndAccessory in key row', () => {
      render(
        <KeyValuePair
          keyLabel="Key"
          value="Value"
          keyEndAccessory={<Text testID="key-end">KE</Text>}
          testID="key-value-pair"
        />,
      );

      expect(screen.getByTestId('key-end')).toBeOnTheScreen();
    });
  });

  describe('when valueStartAccessory is set', () => {
    it('renders valueStartAccessory in value row', () => {
      render(
        <KeyValuePair
          keyLabel="Key"
          value="Value"
          valueStartAccessory={<Text testID="value-start">VS</Text>}
          testID="key-value-pair"
        />,
      );

      expect(screen.getByTestId('value-start')).toBeOnTheScreen();
    });
  });

  describe('when valueEndAccessory is set', () => {
    it('renders valueEndAccessory in value row', () => {
      render(
        <KeyValuePair
          keyLabel="Key"
          value="Value"
          valueEndAccessory={<Text testID="value-end">VE</Text>}
          testID="key-value-pair"
        />,
      );

      expect(screen.getByTestId('value-end')).toBeOnTheScreen();
    });
  });

  describe('when keyEndButtonIconProps is provided without iconName', () => {
    it('renders keyEndAccessory', () => {
      render(
        <KeyValuePair
          keyLabel="Key"
          value="Value"
          keyEndAccessory={<Text testID="key-end-fallback">Fallback</Text>}
          keyEndButtonIconProps={{}}
          testID="key-value-pair"
        />,
      );

      expect(screen.getByTestId('key-end-fallback')).toBeOnTheScreen();
      expect(screen.queryAllByTestId('button-icon')).toHaveLength(0);
    });
  });

  describe('when keyEndButtonIconProps has iconName', () => {
    it('renders ButtonIcon as key endAccessory', () => {
      const onPress = jest.fn();
      render(
        <KeyValuePair
          keyLabel="Key"
          value="Value"
          keyEndButtonIconProps={{
            iconName: IconName.Question,
            onPress,
          }}
          testID="key-value-pair"
        />,
      );

      expect(screen.getAllByTestId('button-icon')).toHaveLength(1);
      fireEvent.press(screen.getByTestId('button-icon'));
      expect(onPress).toHaveBeenCalledTimes(1);
    });

    it('uses keyEndButtonIconProps instead of keyEndAccessory', () => {
      render(
        <KeyValuePair
          keyLabel="Key"
          value="Value"
          keyEndAccessory={<Text testID="key-end-custom">Custom</Text>}
          keyEndButtonIconProps={{
            iconName: IconName.Info,
            onPress: () => undefined,
          }}
          testID="key-value-pair"
        />,
      );

      expect(screen.queryByTestId('key-end-custom')).not.toBeOnTheScreen();
      expect(screen.getAllByTestId('button-icon')).toHaveLength(1);
    });
  });

  describe('when keyEndButtonIconProps is not provided', () => {
    it('renders keyEndAccessory', () => {
      render(
        <KeyValuePair
          keyLabel="Key"
          value="Value"
          keyEndAccessory={<Text testID="key-end-only">Only</Text>}
          testID="key-value-pair"
        />,
      );

      expect(screen.getByTestId('key-end-only')).toBeOnTheScreen();
      expect(screen.queryAllByTestId('button-icon')).toHaveLength(0);
    });
  });

  describe('when valueEndButtonIconProps has iconName', () => {
    it('renders ButtonIcon as value endAccessory', () => {
      render(
        <KeyValuePair
          keyLabel="Key"
          value="Value"
          valueEndButtonIconProps={{
            iconName: IconName.Info,
            onPress: () => undefined,
          }}
          testID="key-value-pair"
        />,
      );

      expect(screen.getAllByTestId('button-icon')).toHaveLength(1);
    });

    it('uses valueEndButtonIconProps instead of valueEndAccessory', () => {
      render(
        <KeyValuePair
          keyLabel="Key"
          value="Value"
          valueEndAccessory={<Text testID="value-end-custom">Custom</Text>}
          valueEndButtonIconProps={{
            iconName: IconName.Question,
            onPress: () => undefined,
          }}
          testID="key-value-pair"
        />,
      );

      expect(screen.queryByTestId('value-end-custom')).not.toBeOnTheScreen();
      expect(screen.getAllByTestId('button-icon')).toHaveLength(1);
    });
  });

  describe('when valueEndButtonIconProps is not provided', () => {
    it('renders valueEndAccessory', () => {
      render(
        <KeyValuePair
          keyLabel="Key"
          value="Value"
          valueEndAccessory={<Text testID="value-end-only">Only</Text>}
          testID="key-value-pair"
        />,
      );

      expect(screen.getByTestId('value-end-only')).toBeOnTheScreen();
      expect(screen.queryAllByTestId('button-icon')).toHaveLength(0);
    });
  });

  describe('twClassName', () => {
    it('merges into horizontal root resolved styles', () => {
      const { getByTestId } = render(
        <KeyValuePair
          keyLabel="K"
          value="V"
          twClassName="bg-background-default"
          testID="key-value-pair"
        />,
      );

      const root = getByTestId('key-value-pair');

      expect(root).toHaveStyle(tw`bg-background-default`);
      expect(root).toHaveStyle(tw`h-10`);
    });

    it('merges into vertical root resolved styles', () => {
      const { getByTestId } = render(
        <KeyValuePair
          keyLabel="K"
          value="V"
          orientation={KeyValuePairOrientation.Vertical}
          twClassName="bg-background-default"
          testID="key-value-pair"
        />,
      );

      const root = getByTestId('key-value-pair');

      expect(root).toHaveStyle(tw`bg-background-default`);
      expect(root).toHaveStyle(tw`flex-col`);
    });
  });
});
