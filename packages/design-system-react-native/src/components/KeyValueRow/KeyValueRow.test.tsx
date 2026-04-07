import { KeyValueRowVariant } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

import { IconName } from '../Icon';

import { KeyValueRow } from './KeyValueRow';

describe('KeyValueRow', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    tw = renderHook(() => useTailwind()).result.current;
  });

  describe('when keyLabel and value are strings', () => {
    it('renders key and value text', () => {
      render(
        <KeyValueRow
          keyLabel="Label"
          value="Value text"
          testID="key-value-row"
        />,
      );

      expect(screen.getByText('Label')).toHaveTextContent('Label');
      expect(screen.getByText('Value text')).toHaveTextContent('Value text');
    });
  });

  describe('when keyLabel is a ReactNode', () => {
    it('renders keyLabel', () => {
      render(
        <KeyValueRow
          keyLabel={<Text>Custom key node</Text>}
          value="Value"
          testID="key-value-row"
        />,
      );

      expect(screen.getByText('Custom key node')).toBeOnTheScreen();
      expect(screen.getByText('Value')).toHaveTextContent('Value');
    });
  });

  describe('when value is a ReactNode', () => {
    it('renders value', () => {
      render(
        <KeyValueRow
          keyLabel="Key"
          value={<Text>Custom value node</Text>}
          testID="key-value-row"
        />,
      );

      expect(screen.getByText('Key')).toHaveTextContent('Key');
      expect(screen.getByText('Custom value node')).toBeOnTheScreen();
    });
  });

  describe('when asserting root layout styles', () => {
    it('applies default summary row layout on root', () => {
      render(<KeyValueRow keyLabel="K" value="V" testID="key-value-row" />);

      expect(screen.getByTestId('key-value-row')).toHaveStyle(
        tw`h-10 flex-row items-center gap-4`,
      );
    });

    it('applies resolved h-12 when variant is Input', () => {
      render(
        <KeyValueRow
          keyLabel="K"
          value="V"
          variant={KeyValueRowVariant.Input}
          testID="key-value-row"
        />,
      );

      expect(screen.getByTestId('key-value-row')).toHaveStyle(tw`h-12`);
    });

    it('applies resolved h-10 when variant is Summary', () => {
      render(
        <KeyValueRow
          keyLabel="K"
          value="V"
          variant={KeyValueRowVariant.Summary}
          testID="key-value-row"
        />,
      );

      expect(screen.getByTestId('key-value-row')).toHaveStyle(tw`h-10`);
    });
  });

  describe('when key and value use default string text props', () => {
    it('applies single-line defaults to key Text', () => {
      render(<KeyValueRow keyLabel="K" value="V" testID="key-value-row" />);

      const keyText = screen.getByText('K');

      expect(keyText.props).toMatchObject({
        numberOfLines: 1,
        ellipsizeMode: 'tail',
      });
    });

    it('applies single-line defaults to value Text', () => {
      render(<KeyValueRow keyLabel="K" value="V" testID="key-value-row" />);

      const valueText = screen.getByText('V');

      expect(valueText.props).toMatchObject({
        numberOfLines: 1,
        ellipsizeMode: 'tail',
      });
    });
  });

  describe('when keyStartAccessory is set', () => {
    it('renders keyStartAccessory in key row', () => {
      render(
        <KeyValueRow
          keyLabel="Key"
          value="Value"
          keyStartAccessory={<Text testID="key-start">KS</Text>}
          testID="key-value-row"
        />,
      );

      expect(screen.getByTestId('key-start')).toBeOnTheScreen();
    });
  });

  describe('when keyEndAccessory is set', () => {
    it('renders keyEndAccessory in key row', () => {
      render(
        <KeyValueRow
          keyLabel="Key"
          value="Value"
          keyEndAccessory={<Text testID="key-end">KE</Text>}
          testID="key-value-row"
        />,
      );

      expect(screen.getByTestId('key-end')).toBeOnTheScreen();
    });
  });

  describe('when valueStartAccessory is set', () => {
    it('renders valueStartAccessory in value row', () => {
      render(
        <KeyValueRow
          keyLabel="Key"
          value="Value"
          valueStartAccessory={<Text testID="value-start">VS</Text>}
          testID="key-value-row"
        />,
      );

      expect(screen.getByTestId('value-start')).toBeOnTheScreen();
    });
  });

  describe('when valueEndAccessory is set', () => {
    it('renders valueEndAccessory in value row', () => {
      render(
        <KeyValueRow
          keyLabel="Key"
          value="Value"
          valueEndAccessory={<Text testID="value-end">VE</Text>}
          testID="key-value-row"
        />,
      );

      expect(screen.getByTestId('value-end')).toBeOnTheScreen();
    });
  });

  describe('when keyEndButtonIconProps is provided without iconName', () => {
    it('renders keyEndAccessory', () => {
      render(
        <KeyValueRow
          keyLabel="Key"
          value="Value"
          keyEndAccessory={<Text testID="key-end-fallback">Fallback</Text>}
          keyEndButtonIconProps={{}}
          testID="key-value-row"
        />,
      );

      expect(screen.getByTestId('key-end-fallback')).toBeOnTheScreen();
    });

    it('does not render ButtonIcon', () => {
      render(
        <KeyValueRow
          keyLabel="Key"
          value="Value"
          keyEndAccessory={<Text testID="key-end-fallback">Fallback</Text>}
          keyEndButtonIconProps={{}}
          testID="key-value-row"
        />,
      );

      expect(screen.queryAllByTestId('button-icon')).toHaveLength(0);
    });
  });

  describe('when keyEndButtonIconProps has iconName', () => {
    it('renders ButtonIcon and invokes onPress when pressed', () => {
      const onPress = jest.fn();

      render(
        <KeyValueRow
          keyLabel="Key"
          value="Value"
          keyEndButtonIconProps={{
            iconName: IconName.Question,
            onPress,
          }}
          testID="key-value-row"
        />,
      );

      const buttonIcon = screen.getByTestId('button-icon');

      expect(buttonIcon).toBeOnTheScreen();

      fireEvent.press(buttonIcon);

      expect(onPress).toHaveBeenCalledTimes(1);
    });

    it('uses keyEndButtonIconProps instead of keyEndAccessory', () => {
      render(
        <KeyValueRow
          keyLabel="Key"
          value="Value"
          keyEndAccessory={<Text testID="key-end-custom">Custom</Text>}
          keyEndButtonIconProps={{
            iconName: IconName.Info,
            onPress: () => undefined,
          }}
          testID="key-value-row"
        />,
      );

      expect(screen.queryByTestId('key-end-custom')).not.toBeOnTheScreen();
      expect(screen.getAllByTestId('button-icon')).toHaveLength(1);
    });
  });

  describe('when keyEndButtonIconProps is not provided', () => {
    it('renders keyEndAccessory', () => {
      render(
        <KeyValueRow
          keyLabel="Key"
          value="Value"
          keyEndAccessory={<Text testID="key-end-only">Only</Text>}
          testID="key-value-row"
        />,
      );

      expect(screen.getByTestId('key-end-only')).toBeOnTheScreen();
    });

    it('does not render ButtonIcon', () => {
      render(
        <KeyValueRow
          keyLabel="Key"
          value="Value"
          keyEndAccessory={<Text testID="key-end-only">Only</Text>}
          testID="key-value-row"
        />,
      );

      expect(screen.queryAllByTestId('button-icon')).toHaveLength(0);
    });
  });

  describe('when valueEndButtonIconProps has iconName', () => {
    it('renders ButtonIcon and invokes onPress when pressed', () => {
      const onPress = jest.fn();

      render(
        <KeyValueRow
          keyLabel="Key"
          value="Value"
          valueEndButtonIconProps={{
            iconName: IconName.Info,
            onPress,
          }}
          testID="key-value-row"
        />,
      );

      const buttonIcon = screen.getByTestId('button-icon');

      expect(buttonIcon).toBeOnTheScreen();

      fireEvent.press(buttonIcon);

      expect(onPress).toHaveBeenCalledTimes(1);
    });

    it('uses valueEndButtonIconProps instead of valueEndAccessory', () => {
      render(
        <KeyValueRow
          keyLabel="Key"
          value="Value"
          valueEndAccessory={<Text testID="value-end-custom">Custom</Text>}
          valueEndButtonIconProps={{
            iconName: IconName.Question,
            onPress: () => undefined,
          }}
          testID="key-value-row"
        />,
      );

      expect(screen.queryByTestId('value-end-custom')).not.toBeOnTheScreen();
      expect(screen.getAllByTestId('button-icon')).toHaveLength(1);
    });
  });

  describe('when valueEndButtonIconProps is not provided', () => {
    it('renders valueEndAccessory', () => {
      render(
        <KeyValueRow
          keyLabel="Key"
          value="Value"
          valueEndAccessory={<Text testID="value-end-only">Only</Text>}
          testID="key-value-row"
        />,
      );

      expect(screen.getByTestId('value-end-only')).toBeOnTheScreen();
    });

    it('does not render ButtonIcon', () => {
      render(
        <KeyValueRow
          keyLabel="Key"
          value="Value"
          valueEndAccessory={<Text testID="value-end-only">Only</Text>}
          testID="key-value-row"
        />,
      );

      expect(screen.queryAllByTestId('button-icon')).toHaveLength(0);
    });
  });

  describe('when twClassName is provided', () => {
    it('merges resolved styles for summary variant', () => {
      render(
        <KeyValueRow
          keyLabel="K"
          value="V"
          twClassName="bg-background-default"
          testID="key-value-row"
        />,
      );

      const root = screen.getByTestId('key-value-row');

      expect(root).toHaveStyle(tw`bg-background-default`);
      expect(root).toHaveStyle(tw`h-10`);
    });

    it('merges resolved styles for input variant', () => {
      render(
        <KeyValueRow
          keyLabel="K"
          value="V"
          variant={KeyValueRowVariant.Input}
          twClassName="bg-background-default"
          testID="key-value-row"
        />,
      );

      const root = screen.getByTestId('key-value-row');

      expect(root).toHaveStyle(tw`bg-background-default`);
      expect(root).toHaveStyle(tw`h-12`);
    });
  });
});
