import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

import { TextWithAccessories } from './TextWithAccessories';

const ROOT_TEST_ID = 'text-with-accessories';

describe('TextWithAccessories', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    tw = renderHook(() => useTailwind()).result.current;
  });

  describe('when children is a string', () => {
    it('renders text content', () => {
      const { getByText } = render(
        <TextWithAccessories>Sample label</TextWithAccessories>,
      );
      expect(getByText('Sample label')).toBeOnTheScreen();
    });
  });

  describe('when children is not a string', () => {
    it('renders child components', () => {
      const { getByText } = render(
        <TextWithAccessories>
          <Text>Nested content</Text>
        </TextWithAccessories>,
      );
      expect(getByText('Nested content')).toBeOnTheScreen();
    });
  });

  describe('when startAccessory is provided', () => {
    it('renders startAccessory before text', () => {
      const { getByTestId, getByText } = render(
        <TextWithAccessories
          testID={ROOT_TEST_ID}
          startAccessory={<Text testID="start-icon">S</Text>}
        >
          Label
        </TextWithAccessories>,
      );
      expect(getByTestId('start-icon')).toBeOnTheScreen();
      expect(getByText('Label')).toBeOnTheScreen();
    });
  });

  describe('when endAccessory is provided', () => {
    it('renders endAccessory after text', () => {
      const { getByTestId, getByText } = render(
        <TextWithAccessories
          testID={ROOT_TEST_ID}
          endAccessory={<Text testID="end-badge">Badge</Text>}
        >
          Label
        </TextWithAccessories>,
      );
      expect(getByText('Label')).toBeOnTheScreen();
      expect(getByTestId('end-badge')).toBeOnTheScreen();
    });
  });

  describe('when both accessories are provided', () => {
    it('renders startAccessory, text, then endAccessory', () => {
      const { getByTestId, getByText } = render(
        <TextWithAccessories
          testID={ROOT_TEST_ID}
          startAccessory={<Text testID="start">S</Text>}
          endAccessory={<Text testID="end">E</Text>}
        >
          Middle
        </TextWithAccessories>,
      );
      expect(getByTestId('start')).toBeOnTheScreen();
      expect(getByText('Middle')).toBeOnTheScreen();
      expect(getByTestId('end')).toBeOnTheScreen();
    });
  });

  describe('root layout', () => {
    it('applies default flex row, center align, and gap to root', () => {
      const { getByTestId } = render(
        <TextWithAccessories testID={ROOT_TEST_ID}>
          Content
        </TextWithAccessories>,
      );
      const root = getByTestId(ROOT_TEST_ID);
      expect(root).toHaveStyle(tw`flex-row items-center gap-1`);
    });
  });

  describe('twClassName', () => {
    it('merges twClassName with root styles', () => {
      const { getByTestId } = render(
        <TextWithAccessories testID={ROOT_TEST_ID} twClassName="gap-0 p-2">
          Content
        </TextWithAccessories>,
      );
      const root = getByTestId(ROOT_TEST_ID);
      expect(root).toHaveStyle(tw`gap-0 p-2`);
    });
  });

  describe('ViewProps extension', () => {
    it('passes testID to root Box', () => {
      const { getByTestId } = render(
        <TextWithAccessories testID={ROOT_TEST_ID}>
          Content
        </TextWithAccessories>,
      );
      expect(getByTestId(ROOT_TEST_ID)).toBeOnTheScreen();
    });
  });
});
