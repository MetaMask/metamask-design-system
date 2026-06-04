import { render } from '@testing-library/react-native';
import React from 'react';
import { View } from 'react-native';

import { ListItem } from './ListItem';
import {
  DEFAULT_LISTITEM_GAP,
  TESTID_LISTITEM_BOTTOM_ACCESSORY_WRAPPER,
  TESTID_LISTITEM_GAP,
  TESTID_LISTITEM_TOP_ACCESSORY_WRAPPER,
} from './ListItem.constants';
import { ListItemVerticalAlignment } from './ListItem.types';

describe('ListItem', () => {
  describe('Rendering', () => {
    it('renders children', async () => {
      const { getByTestId } = await render(
        <ListItem testID="list-item">
          <View testID="child" />
        </ListItem>,
      );
      expect(getByTestId('list-item')).toBeDefined();
      expect(getByTestId('child')).toBeDefined();
    });

    it('renders topAccessory when provided', async () => {
      const { getByTestId } = await render(
        <ListItem topAccessory={<View testID="top-accessory" />}>
          <View />
        </ListItem>,
      );
      expect(getByTestId('top-accessory')).toBeDefined();
    });

    it('does not render topAccessory when not provided', async () => {
      const { queryByTestId } = await render(
        <ListItem>
          <View />
        </ListItem>,
      );
      expect(queryByTestId('top-accessory')).toBeNull();
    });

    it('renders bottomAccessory when provided', async () => {
      const { getByTestId } = await render(
        <ListItem bottomAccessory={<View testID="bottom-accessory" />}>
          <View />
        </ListItem>,
      );
      expect(getByTestId('bottom-accessory')).toBeDefined();
    });

    it('does not render bottomAccessory when not provided', async () => {
      const { queryByTestId } = await render(
        <ListItem>
          <View />
        </ListItem>,
      );
      expect(queryByTestId('bottom-accessory')).toBeNull();
    });

    it('renders without error for each verticalAlignment value', async () => {
      for (const alignment of Object.values(ListItemVerticalAlignment)) {
        const { getByTestId } = await render(
          <ListItem verticalAlignment={alignment} testID="list-item">
            <View />
          </ListItem>,
        );
        expect(getByTestId('list-item')).toBeDefined();
      }
    });
  });

  describe('Gap', () => {
    it('renders one gap spacer for two children', async () => {
      const { getAllByTestId } = await render(
        <ListItem>
          <View />
          <View />
        </ListItem>,
      );
      expect(getAllByTestId(TESTID_LISTITEM_GAP)).toHaveLength(1);
    });

    it('renders N-1 gap spacers for N children', async () => {
      const { getAllByTestId } = await render(
        <ListItem>
          <View />
          <View />
          <View />
        </ListItem>,
      );
      expect(getAllByTestId(TESTID_LISTITEM_GAP)).toHaveLength(2);
    });

    it('does not render a gap spacer with a single child', async () => {
      const { queryByTestId } = await render(
        <ListItem>
          <View />
        </ListItem>,
      );
      expect(queryByTestId(TESTID_LISTITEM_GAP)).toBeNull();
    });

    it('applies the default gap of 16 to all spacers', async () => {
      const { getAllByTestId } = await render(
        <ListItem>
          <View />
          <View />
          <View />
        </ListItem>,
      );
      getAllByTestId(TESTID_LISTITEM_GAP).forEach((spacer) => {
        expect(spacer.props.style.width).toBe(DEFAULT_LISTITEM_GAP);
      });
    });

    it('applies a custom gap to all spacers', async () => {
      const givenGap = 20;
      const { getAllByTestId } = await render(
        <ListItem gap={givenGap}>
          <View />
          <View />
          <View />
        </ListItem>,
      );
      getAllByTestId(TESTID_LISTITEM_GAP).forEach((spacer) => {
        expect(spacer.props.style.width).toBe(givenGap);
      });
    });
  });

  describe('Accessories gap', () => {
    it('applies topAccessoryGap as marginBottom on topAccessory wrapper', async () => {
      const givenTopAccessoryGap = 20;
      const { getByTestId } = await render(
        <ListItem
          topAccessory={<View />}
          topAccessoryGap={givenTopAccessoryGap}
        >
          <View />
        </ListItem>,
      );
      expect(
        getByTestId(TESTID_LISTITEM_TOP_ACCESSORY_WRAPPER).props.style
          .marginBottom,
      ).toBe(givenTopAccessoryGap);
    });

    it('applies bottomAccessoryGap as marginTop on bottomAccessory wrapper', async () => {
      const givenBottomAccessoryGap = 20;
      const { getByTestId } = await render(
        <ListItem
          bottomAccessory={<View />}
          bottomAccessoryGap={givenBottomAccessoryGap}
        >
          <View />
        </ListItem>,
      );
      expect(
        getByTestId(TESTID_LISTITEM_BOTTOM_ACCESSORY_WRAPPER).props.style
          .marginTop,
      ).toBe(givenBottomAccessoryGap);
    });
  });

  describe('Props', () => {
    it('passes testID to root element via ViewProps', async () => {
      const { getByTestId } = await render(
        <ListItem testID="root-item">
          <View />
        </ListItem>,
      );
      expect(getByTestId('root-item')).toBeDefined();
    });

    it('passes accessibilityLabel via ViewProps', async () => {
      const { getByTestId } = await render(
        <ListItem testID="list-item" accessibilityLabel="Custom label">
          <View />
        </ListItem>,
      );
      expect(getByTestId('list-item').props.accessibilityLabel).toBe(
        'Custom label',
      );
    });

    it('merges custom style prop with base styles', async () => {
      const { getByTestId } = await render(
        <ListItem testID="list-item" style={{ marginTop: 8 }}>
          <View />
        </ListItem>,
      );
      expect(getByTestId('list-item')).toBeDefined();
    });
  });
});
