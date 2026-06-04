import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { render, renderHook } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

import { BoxRow } from './BoxRow';

const ROOT_TEST_ID = 'text-with-accessories';

describe('BoxRow', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(async () => {
    const { result } = await renderHook(() => useTailwind());

    tw = result.current;
  });

  describe('when children is a string', () => {
    it('renders text content', async () => {
      const { getByText } = await render(<BoxRow>Sample label</BoxRow>);
      expect(getByText('Sample label')).toBeOnTheScreen();
    });
  });

  describe('when children is not a string', () => {
    it('renders child components', async () => {
      const { getByText } = await render(
        <BoxRow>
          <Text>Nested content</Text>
        </BoxRow>,
      );
      expect(getByText('Nested content')).toBeOnTheScreen();
    });
  });

  describe('when startAccessory is provided', () => {
    it('renders startAccessory before text', async () => {
      const { getByTestId, getByText } = await render(
        <BoxRow
          testID={ROOT_TEST_ID}
          startAccessory={<Text testID="start-icon">S</Text>}
        >
          Label
        </BoxRow>,
      );
      expect(getByTestId('start-icon')).toBeOnTheScreen();
      expect(getByText('Label')).toBeOnTheScreen();
    });
  });

  describe('when endAccessory is provided', () => {
    it('renders endAccessory after text', async () => {
      const { getByTestId, getByText } = await render(
        <BoxRow
          testID={ROOT_TEST_ID}
          endAccessory={<Text testID="end-badge">Badge</Text>}
        >
          Label
        </BoxRow>,
      );
      expect(getByText('Label')).toBeOnTheScreen();
      expect(getByTestId('end-badge')).toBeOnTheScreen();
    });
  });

  describe('when both accessories are provided', () => {
    it('renders startAccessory, text, then endAccessory', async () => {
      const { getByTestId, getByText } = await render(
        <BoxRow
          testID={ROOT_TEST_ID}
          startAccessory={<Text testID="start">S</Text>}
          endAccessory={<Text testID="end">E</Text>}
        >
          Middle
        </BoxRow>,
      );
      expect(getByTestId('start')).toBeOnTheScreen();
      expect(getByText('Middle')).toBeOnTheScreen();
      expect(getByTestId('end')).toBeOnTheScreen();
    });
  });

  describe('root layout', () => {
    it('applies default flex row, center align, and gap to root', async () => {
      const { getByTestId } = await render(
        <BoxRow testID={ROOT_TEST_ID}>Content</BoxRow>,
      );
      const root = getByTestId(ROOT_TEST_ID);
      expect(root).toHaveStyle(tw`flex-row items-center gap-1`);
    });
  });

  describe('twClassName', () => {
    it('merges twClassName with root styles', async () => {
      const { getByTestId } = await render(
        <BoxRow testID={ROOT_TEST_ID} twClassName="gap-0 p-2">
          Content
        </BoxRow>,
      );
      const root = getByTestId(ROOT_TEST_ID);
      expect(root).toHaveStyle(tw`gap-0 p-2`);
    });
  });

  describe('ViewProps extension', () => {
    it('passes testID to root Box', async () => {
      const { getByTestId } = await render(
        <BoxRow testID={ROOT_TEST_ID}>Content</BoxRow>,
      );
      expect(getByTestId(ROOT_TEST_ID)).toBeOnTheScreen();
    });
  });
});
