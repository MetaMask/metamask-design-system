import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { render, renderHook } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

import { BoxColumn } from './BoxColumn';

const ROOT_TEST_ID = 'box-column-root';

describe('BoxColumn', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(async () => {
    const { result } = await renderHook(() => useTailwind());

    tw = result.current;
  });

  describe('when children is a string', () => {
    it('renders text content', async () => {
      const { getByText } = await render(<BoxColumn>Sample label</BoxColumn>);
      expect(getByText('Sample label')).toBeOnTheScreen();
    });
  });

  describe('when children is not a string', () => {
    it('renders child components', async () => {
      const { getByText } = await render(
        <BoxColumn>
          <Text>Nested content</Text>
        </BoxColumn>,
      );
      expect(getByText('Nested content')).toBeOnTheScreen();
    });
  });

  describe('when topAccessory is provided', () => {
    it('renders topAccessory before text', async () => {
      const { getByTestId, getByText } = await render(
        <BoxColumn
          testID={ROOT_TEST_ID}
          topAccessory={<Text testID="top-icon">T</Text>}
        >
          Label
        </BoxColumn>,
      );
      expect(getByTestId('top-icon')).toBeOnTheScreen();
      expect(getByText('Label')).toBeOnTheScreen();
    });
  });

  describe('when bottomAccessory is provided', () => {
    it('renders bottomAccessory after text', async () => {
      const { getByTestId, getByText } = await render(
        <BoxColumn
          testID={ROOT_TEST_ID}
          bottomAccessory={<Text testID="bottom-badge">Badge</Text>}
        >
          Label
        </BoxColumn>,
      );
      expect(getByText('Label')).toBeOnTheScreen();
      expect(getByTestId('bottom-badge')).toBeOnTheScreen();
    });
  });

  describe('when both accessories are provided', () => {
    it('renders topAccessory, text, then bottomAccessory', async () => {
      const { getByTestId, getByText } = await render(
        <BoxColumn
          testID={ROOT_TEST_ID}
          topAccessory={<Text testID="top">T</Text>}
          bottomAccessory={<Text testID="bottom">B</Text>}
        >
          Middle
        </BoxColumn>,
      );
      expect(getByTestId('top')).toBeOnTheScreen();
      expect(getByText('Middle')).toBeOnTheScreen();
      expect(getByTestId('bottom')).toBeOnTheScreen();
    });
  });

  describe('root layout', () => {
    it('applies flex column to root', async () => {
      const { getByTestId } = await render(
        <BoxColumn testID={ROOT_TEST_ID}>Content</BoxColumn>,
      );
      const root = getByTestId(ROOT_TEST_ID);
      expect(root).toHaveStyle(tw`flex-col`);
    });
  });

  describe('twClassName', () => {
    it('merges twClassName with root styles', async () => {
      const { getByTestId } = await render(
        <BoxColumn testID={ROOT_TEST_ID} twClassName="p-2">
          Content
        </BoxColumn>,
      );
      const root = getByTestId(ROOT_TEST_ID);
      expect(root).toHaveStyle(tw`p-2`);
    });
  });

  describe('ViewProps extension', () => {
    it('passes testID to root Box', async () => {
      const { getByTestId } = await render(
        <BoxColumn testID={ROOT_TEST_ID}>Content</BoxColumn>,
      );
      expect(getByTestId(ROOT_TEST_ID)).toBeOnTheScreen();
    });
  });
});
