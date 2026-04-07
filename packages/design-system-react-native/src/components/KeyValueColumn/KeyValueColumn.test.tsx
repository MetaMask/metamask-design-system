import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

import { IconName } from '../Icon';
import { TextVariant } from '../Text';

import { KeyValueColumn } from './KeyValueColumn';

const stringTruncationCases = [
  { role: 'key', textMatch: 'K' },
  { role: 'value', textMatch: 'V' },
] as const;

describe('KeyValueColumn', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    const { result } = renderHook(() => useTailwind());
    tw = result.current;
  });

  describe('when keyLabel and value are strings', () => {
    it('renders key and value text', () => {
      render(
        <KeyValueColumn
          keyLabel="Label"
          value="Value text"
          testID="key-value-column"
        />,
      );

      expect(screen.getByText('Label')).toBeOnTheScreen();
      expect(screen.getByText('Value text')).toBeOnTheScreen();
    });
  });

  describe('when keyLabel is a ReactNode', () => {
    it('renders keyLabel', () => {
      render(
        <KeyValueColumn
          keyLabel={<Text>Custom key node</Text>}
          value="Value"
          testID="key-value-column"
        />,
      );

      expect(screen.getByText('Custom key node')).toBeOnTheScreen();
      expect(screen.getByText('Value')).toBeOnTheScreen();
    });
  });

  describe('when value is a ReactNode', () => {
    it('renders value', () => {
      render(
        <KeyValueColumn
          keyLabel="Key"
          value={<Text>Custom value node</Text>}
          testID="key-value-column"
        />,
      );

      expect(screen.getByText('Key')).toBeOnTheScreen();
      expect(screen.getByText('Custom value node')).toBeOnTheScreen();
    });
  });

  describe('layout', () => {
    it('applies vertical layout on root', () => {
      const { getByTestId } = render(
        <KeyValueColumn keyLabel="K" value="V" testID="key-value-column" />,
      );

      const root = getByTestId('key-value-column');

      expect(root).toHaveStyle(tw`flex-col`);
    });

    it.each(stringTruncationCases)(
      'applies single-line defaults to $role string',
      ({ textMatch }) => {
        render(
          <KeyValueColumn keyLabel="K" value="V" testID="key-value-column" />,
        );

        const text = screen.getByText(textMatch);

        expect(text.props.numberOfLines).toBe(1);
        expect(text.props.ellipsizeMode).toBe('tail');
      },
    );
  });

  describe('when keyStartAccessory is set', () => {
    it('renders keyStartAccessory in key row', () => {
      render(
        <KeyValueColumn
          keyLabel="Key"
          value="Value"
          keyStartAccessory={<Text testID="key-start">KS</Text>}
          testID="key-value-column"
        />,
      );

      expect(screen.getByTestId('key-start')).toBeOnTheScreen();
    });
  });

  describe('when keyEndAccessory is set', () => {
    it('renders keyEndAccessory in key row', () => {
      render(
        <KeyValueColumn
          keyLabel="Key"
          value="Value"
          keyEndAccessory={<Text testID="key-end">KE</Text>}
          testID="key-value-column"
        />,
      );

      expect(screen.getByTestId('key-end')).toBeOnTheScreen();
    });
  });

  describe('when valueStartAccessory is set', () => {
    it('renders valueStartAccessory in value row', () => {
      render(
        <KeyValueColumn
          keyLabel="Key"
          value="Value"
          valueStartAccessory={<Text testID="value-start">VS</Text>}
          testID="key-value-column"
        />,
      );

      expect(screen.getByTestId('value-start')).toBeOnTheScreen();
    });
  });

  describe('when valueEndAccessory is set', () => {
    it('renders valueEndAccessory in value row', () => {
      render(
        <KeyValueColumn
          keyLabel="Key"
          value="Value"
          valueEndAccessory={<Text testID="value-end">VE</Text>}
          testID="key-value-column"
        />,
      );

      expect(screen.getByTestId('value-end')).toBeOnTheScreen();
    });
  });

  describe('when keyEndButtonIconProps is provided without iconName', () => {
    it('renders keyEndAccessory', () => {
      render(
        <KeyValueColumn
          keyLabel="Key"
          value="Value"
          keyEndAccessory={<Text testID="key-end-fallback">Fallback</Text>}
          keyEndButtonIconProps={{}}
          testID="key-value-column"
        />,
      );

      expect(screen.getByTestId('key-end-fallback')).toBeOnTheScreen();
      expect(screen.queryAllByTestId('button-icon')).toHaveLength(0);
    });
  });

  describe('when keyEndButtonIconProps has iconName', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('renders ButtonIcon as key endAccessory', () => {
      const onPress = jest.fn();

      render(
        <KeyValueColumn
          keyLabel="Key"
          value="Value"
          keyEndButtonIconProps={{
            iconName: IconName.Question,
            onPress,
          }}
          testID="key-value-column"
        />,
      );

      expect(screen.getAllByTestId('button-icon')).toHaveLength(1);

      fireEvent.press(screen.getByTestId('button-icon'));

      expect(onPress).toHaveBeenCalledTimes(1);
    });

    it('uses keyEndButtonIconProps instead of keyEndAccessory', () => {
      render(
        <KeyValueColumn
          keyLabel="Key"
          value="Value"
          keyEndAccessory={<Text testID="key-end-custom">Custom</Text>}
          keyEndButtonIconProps={{
            iconName: IconName.Info,
            onPress: () => undefined,
          }}
          testID="key-value-column"
        />,
      );

      expect(screen.queryByTestId('key-end-custom')).not.toBeOnTheScreen();
      expect(screen.getAllByTestId('button-icon')).toHaveLength(1);
    });
  });

  describe('when keyEndButtonIconProps is not provided', () => {
    it('renders keyEndAccessory', () => {
      render(
        <KeyValueColumn
          keyLabel="Key"
          value="Value"
          keyEndAccessory={<Text testID="key-end-only">Only</Text>}
          testID="key-value-column"
        />,
      );

      expect(screen.getByTestId('key-end-only')).toBeOnTheScreen();
      expect(screen.queryAllByTestId('button-icon')).toHaveLength(0);
    });
  });

  describe('when valueEndButtonIconProps has iconName', () => {
    it('renders ButtonIcon as value endAccessory', () => {
      render(
        <KeyValueColumn
          keyLabel="Key"
          value="Value"
          valueEndButtonIconProps={{
            iconName: IconName.Info,
            onPress: () => undefined,
          }}
          testID="key-value-column"
        />,
      );

      expect(screen.getAllByTestId('button-icon')).toHaveLength(1);
    });

    it('uses valueEndButtonIconProps instead of valueEndAccessory', () => {
      render(
        <KeyValueColumn
          keyLabel="Key"
          value="Value"
          valueEndAccessory={<Text testID="value-end-custom">Custom</Text>}
          valueEndButtonIconProps={{
            iconName: IconName.Question,
            onPress: () => undefined,
          }}
          testID="key-value-column"
        />,
      );

      expect(screen.queryByTestId('value-end-custom')).not.toBeOnTheScreen();
      expect(screen.getAllByTestId('button-icon')).toHaveLength(1);
    });
  });

  describe('when valueEndButtonIconProps is not provided', () => {
    it('renders valueEndAccessory', () => {
      render(
        <KeyValueColumn
          keyLabel="Key"
          value="Value"
          valueEndAccessory={<Text testID="value-end-only">Only</Text>}
          testID="key-value-column"
        />,
      );

      expect(screen.getByTestId('value-end-only')).toBeOnTheScreen();
      expect(screen.queryAllByTestId('button-icon')).toHaveLength(0);
    });
  });

  describe('keyTextProps and valueTextProps', () => {
    it('spreads keyTextProps onto the key string Text', () => {
      render(
        <KeyValueColumn
          keyLabel="Key label"
          value="Value text"
          keyTextProps={{ variant: TextVariant.BodySm }}
          testID="key-value-column"
        />,
      );

      // eslint-disable-next-line tailwindcss/no-custom-classname
      const bodySmFontSize = (
        tw`text-${TextVariant.BodySm}` as { fontSize?: number }
      ).fontSize;
      // eslint-disable-next-line tailwindcss/no-custom-classname
      const bodyMdFontSize = (
        tw`text-${TextVariant.BodyMd}` as { fontSize?: number }
      ).fontSize;

      expect(screen.getByText('Key label')).toHaveStyle({
        fontSize: bodySmFontSize,
      });
      expect(screen.getByText('Value text')).toHaveStyle({
        fontSize: bodyMdFontSize,
      });
    });

    it('spreads valueTextProps onto the value string Text', () => {
      render(
        <KeyValueColumn
          keyLabel="Key label"
          value="Value text"
          valueTextProps={{ variant: TextVariant.BodySm }}
          testID="key-value-column"
        />,
      );

      // eslint-disable-next-line tailwindcss/no-custom-classname
      const bodySmFontSize = (
        tw`text-${TextVariant.BodySm}` as { fontSize?: number }
      ).fontSize;
      // eslint-disable-next-line tailwindcss/no-custom-classname
      const bodyMdFontSize = (
        tw`text-${TextVariant.BodyMd}` as { fontSize?: number }
      ).fontSize;

      expect(screen.getByText('Key label')).toHaveStyle({
        fontSize: bodyMdFontSize,
      });
      expect(screen.getByText('Value text')).toHaveStyle({
        fontSize: bodySmFontSize,
      });
    });
  });

  describe('twClassName', () => {
    it('merges into root resolved styles', () => {
      const { getByTestId } = render(
        <KeyValueColumn
          keyLabel="K"
          value="V"
          twClassName="bg-background-default"
          testID="key-value-column"
        />,
      );

      const root = getByTestId('key-value-column');

      expect(root).toHaveStyle(tw`bg-background-default`);
      expect(root).toHaveStyle(tw`flex-col`);
    });
  });
});
