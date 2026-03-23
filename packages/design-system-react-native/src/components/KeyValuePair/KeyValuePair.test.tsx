import { KeyValuePairOrientation } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render, screen } from '@testing-library/react-native';
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

  describe('when keyLabel or value is ReactNode', () => {
    it('renders keyLabel as ReactNode', () => {
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

    it('renders value as ReactNode', () => {
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

  describe('orientation', () => {
    it('applies horizontal layout when orientation is Horizontal', () => {
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
    });

    it('applies vertical layout when orientation is Vertical', () => {
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
  });

  describe('accessories', () => {
    it('renders keyStartAccessory and keyEndAccessory in key row', () => {
      render(
        <KeyValuePair
          keyLabel="Key"
          value="Value"
          keyStartAccessory={<Text testID="key-start">KS</Text>}
          keyEndAccessory={<Text testID="key-end">KE</Text>}
          testID="key-value-pair"
        />,
      );

      expect(screen.getByTestId('key-start')).toBeOnTheScreen();
      expect(screen.getByTestId('key-end')).toBeOnTheScreen();
    });

    it('renders valueStartAccessory and valueEndAccessory in value row', () => {
      render(
        <KeyValuePair
          keyLabel="Key"
          value="Value"
          valueStartAccessory={<Text testID="value-start">VS</Text>}
          valueEndAccessory={<Text testID="value-end">VE</Text>}
          testID="key-value-pair"
        />,
      );

      expect(screen.getByTestId('value-start')).toBeOnTheScreen();
      expect(screen.getByTestId('value-end')).toBeOnTheScreen();
    });
  });

  describe('keyEndButtonIconProps and valueEndButtonIconProps', () => {
    it('renders ButtonIcon as key endAccessory when keyEndButtonIconProps has iconName', () => {
      render(
        <KeyValuePair
          keyLabel="Key"
          value="Value"
          keyEndButtonIconProps={{
            iconName: IconName.Question,
            onPress: () => {},
          }}
          testID="key-value-pair"
        />,
      );

      const buttons = screen.getAllByTestId('button-icon');
      expect(buttons.length).toBe(1);
      expect(screen.getByText('Key')).toBeOnTheScreen();
      expect(screen.getByText('Value')).toBeOnTheScreen();
    });

    it('keyEndButtonIconProps takes precedence over keyEndAccessory', () => {
      render(
        <KeyValuePair
          keyLabel="Key"
          value="Value"
          keyEndAccessory={<Text testID="key-end-custom">Custom</Text>}
          keyEndButtonIconProps={{
            iconName: IconName.Info,
            onPress: () => {},
          }}
          testID="key-value-pair"
        />,
      );

      expect(screen.queryByTestId('key-end-custom')).not.toBeOnTheScreen();
      expect(screen.getAllByTestId('button-icon').length).toBe(1);
    });

    it('renders ButtonIcon as value endAccessory when valueEndButtonIconProps has iconName', () => {
      render(
        <KeyValuePair
          keyLabel="Key"
          value="Value"
          valueEndButtonIconProps={{
            iconName: IconName.Info,
            onPress: () => {},
          }}
          testID="key-value-pair"
        />,
      );

      const buttons = screen.getAllByTestId('button-icon');
      expect(buttons.length).toBe(1);
    });

    it('valueEndButtonIconProps takes precedence over valueEndAccessory', () => {
      render(
        <KeyValuePair
          keyLabel="Key"
          value="Value"
          valueEndAccessory={<Text testID="value-end-custom">Custom</Text>}
          valueEndButtonIconProps={{
            iconName: IconName.Question,
            onPress: () => {},
          }}
          testID="key-value-pair"
        />,
      );

      expect(screen.queryByTestId('value-end-custom')).not.toBeOnTheScreen();
      expect(screen.getAllByTestId('button-icon').length).toBe(1);
    });

    it('renders keyEndAccessory when keyEndButtonIconProps is not provided', () => {
      render(
        <KeyValuePair
          keyLabel="Key"
          value="Value"
          keyEndAccessory={<Text testID="key-end-only">Only</Text>}
          testID="key-value-pair"
        />,
      );

      expect(screen.getByTestId('key-end-only')).toBeOnTheScreen();
      expect(screen.queryAllByTestId('button-icon').length).toBe(0);
    });

    it('renders valueEndAccessory when valueEndButtonIconProps is not provided', () => {
      render(
        <KeyValuePair
          keyLabel="Key"
          value="Value"
          valueEndAccessory={<Text testID="value-end-only">Only</Text>}
          testID="key-value-pair"
        />,
      );

      expect(screen.getByTestId('value-end-only')).toBeOnTheScreen();
      expect(screen.queryAllByTestId('button-icon').length).toBe(0);
    });
  });

  describe('twClassName', () => {
    it('applies twClassName to wrapper Box', () => {
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
    });
  });
});
