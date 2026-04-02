import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { View } from 'react-native';

import { IconName } from '../Icon';

import { KeyValueRow } from './KeyValueRow';
import { KeyValueRowFieldIconSides } from './KeyValueRow.types';

const fieldLabel = { text: 'Sample Key' };
const valueLabel = { text: 'Sample Value' };

describe('KeyValueRow', () => {
  describe('Rendering', () => {
    it('renders field label text', () => {
      const { getByText } = render(
        <KeyValueRow
          field={{ label: fieldLabel }}
          value={{ label: valueLabel }}
        />,
      );
      expect(getByText('Sample Key')).toBeDefined();
    });

    it('renders value label text', () => {
      const { getByText } = render(
        <KeyValueRow
          field={{ label: fieldLabel }}
          value={{ label: valueLabel }}
        />,
      );
      expect(getByText('Sample Value')).toBeDefined();
    });

    it('renders a custom ReactNode label', () => {
      const { getByTestId } = render(
        <KeyValueRow
          field={{ label: fieldLabel }}
          value={{ label: <View testID="custom-node" /> }}
        />,
      );
      expect(getByTestId('custom-node')).toBeDefined();
    });
  });

  describe('Icons', () => {
    it('does not render field icon when icon prop is not provided', () => {
      const { queryAllByTestId } = render(
        <KeyValueRow
          field={{ label: fieldLabel }}
          value={{ label: valueLabel }}
        />,
      );
      expect(queryAllByTestId('keyvaluerow-field-icon')).toHaveLength(0);
    });

    it('does not render value icon when icon prop is not provided', () => {
      const { queryAllByTestId } = render(
        <KeyValueRow
          field={{ label: fieldLabel }}
          value={{ label: valueLabel }}
        />,
      );
      expect(queryAllByTestId('keyvaluerow-value-icon')).toHaveLength(0);
    });

    it('renders field icon on the left by default (no side specified)', () => {
      const { getAllByTestId } = render(
        <KeyValueRow
          field={{
            label: fieldLabel,
            icon: { name: IconName.Wifi, testID: 'keyvaluerow-field-icon' },
          }}
          value={{ label: valueLabel }}
        />,
      );
      expect(getAllByTestId('keyvaluerow-field-icon')).toHaveLength(1);
    });

    it('renders field icon on the left when side is Left', () => {
      const { getAllByTestId } = render(
        <KeyValueRow
          field={{
            label: fieldLabel,
            icon: {
              name: IconName.Wifi,
              side: KeyValueRowFieldIconSides.Left,
              testID: 'keyvaluerow-field-icon',
            },
          }}
          value={{ label: valueLabel }}
        />,
      );
      expect(getAllByTestId('keyvaluerow-field-icon')).toHaveLength(1);
    });

    it('renders field icon on the right when side is Right', () => {
      const { getAllByTestId } = render(
        <KeyValueRow
          field={{
            label: fieldLabel,
            icon: {
              name: IconName.Wifi,
              side: KeyValueRowFieldIconSides.Right,
              testID: 'keyvaluerow-field-icon',
            },
          }}
          value={{ label: valueLabel }}
        />,
      );
      expect(getAllByTestId('keyvaluerow-field-icon')).toHaveLength(1);
    });

    it('renders field icon on both sides when side is Both', () => {
      const { getAllByTestId } = render(
        <KeyValueRow
          field={{
            label: fieldLabel,
            icon: {
              name: IconName.Wifi,
              side: KeyValueRowFieldIconSides.Both,
              testID: 'keyvaluerow-field-icon',
            },
          }}
          value={{ label: valueLabel }}
        />,
      );
      expect(getAllByTestId('keyvaluerow-field-icon')).toHaveLength(2);
    });

    it('renders value icon when value icon prop is provided', () => {
      const { getAllByTestId } = render(
        <KeyValueRow
          field={{ label: fieldLabel }}
          value={{
            label: valueLabel,
            icon: { name: IconName.Wifi, testID: 'keyvaluerow-value-icon' },
          }}
        />,
      );
      expect(getAllByTestId('keyvaluerow-value-icon')).toHaveLength(1);
    });

    it('renders value icon on both sides when side is Both', () => {
      const { getAllByTestId } = render(
        <KeyValueRow
          field={{ label: fieldLabel }}
          value={{
            label: valueLabel,
            icon: {
              name: IconName.Wifi,
              side: KeyValueRowFieldIconSides.Both,
              testID: 'keyvaluerow-value-icon',
            },
          }}
        />,
      );
      expect(getAllByTestId('keyvaluerow-value-icon')).toHaveLength(2);
    });
  });

  describe('Tooltip', () => {
    it('does not render tooltip button when tooltip is not provided', () => {
      const { queryByLabelText } = render(
        <KeyValueRow
          field={{ label: fieldLabel }}
          value={{ label: valueLabel }}
        />,
      );
      expect(queryByLabelText(/tooltip/iu)).toBeNull();
    });

    it('renders field tooltip button when tooltip is provided', () => {
      const { getByLabelText } = render(
        <KeyValueRow
          field={{
            label: fieldLabel,
            tooltip: { title: 'Info', content: 'Some details' },
          }}
          value={{ label: valueLabel }}
        />,
      );
      expect(getByLabelText('Info tooltip')).toBeDefined();
    });

    it('renders value tooltip button when tooltip is provided', () => {
      const { getByLabelText } = render(
        <KeyValueRow
          field={{ label: fieldLabel }}
          value={{
            label: valueLabel,
            tooltip: { title: 'Amount', content: 'Fee details' },
          }}
        />,
      );
      expect(getByLabelText('Amount tooltip')).toBeDefined();
    });

    it('calls tooltip onPress when tooltip button is pressed', () => {
      const onPress = jest.fn();
      const { getByLabelText } = render(
        <KeyValueRow
          field={{
            label: fieldLabel,
            tooltip: { title: 'Info', content: 'Details', onPress },
          }}
          value={{ label: valueLabel }}
        />,
      );
      fireEvent.press(getByLabelText('Info tooltip'));
      expect(onPress).toHaveBeenCalledTimes(1);
    });
  });

  describe('Props', () => {
    it('passes testID to the root element via ViewProps', () => {
      const { getByTestId } = render(
        <KeyValueRow
          testID="keyvalue-root"
          field={{ label: fieldLabel }}
          value={{ label: valueLabel }}
        />,
      );
      expect(getByTestId('keyvalue-root')).toBeDefined();
    });

    it('passes accessibilityLabel to the root element via ViewProps', () => {
      const { getByTestId } = render(
        <KeyValueRow
          testID="keyvalue-root"
          accessibilityLabel="Key value pair"
          field={{ label: fieldLabel }}
          value={{ label: valueLabel }}
        />,
      );
      expect(getByTestId('keyvalue-root').props.accessibilityLabel).toBe(
        'Key value pair',
      );
    });
  });
});
