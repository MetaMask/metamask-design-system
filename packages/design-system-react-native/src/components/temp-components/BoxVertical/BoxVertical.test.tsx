import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

import { BoxVertical } from './BoxVertical';

const ROOT_TEST_ID = 'box-vertical-root';

describe('BoxVertical', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    tw = renderHook(() => useTailwind()).result.current;
  });

  describe('when children is a string', () => {
    it('renders text content', () => {
      const { getByText } = render(<BoxVertical>Sample label</BoxVertical>);
      expect(getByText('Sample label')).toBeOnTheScreen();
    });
  });

  describe('when children is not a string', () => {
    it('renders child components', () => {
      const { getByText } = render(
        <BoxVertical>
          <Text>Nested content</Text>
        </BoxVertical>,
      );
      expect(getByText('Nested content')).toBeOnTheScreen();
    });
  });

  describe('when topAccessory is provided', () => {
    it('renders topAccessory before text', () => {
      const { getByTestId, getByText } = render(
        <BoxVertical
          testID={ROOT_TEST_ID}
          topAccessory={<Text testID="top-icon">T</Text>}
        >
          Label
        </BoxVertical>,
      );
      expect(getByTestId('top-icon')).toBeOnTheScreen();
      expect(getByText('Label')).toBeOnTheScreen();
    });
  });

  describe('when bottomAccessory is provided', () => {
    it('renders bottomAccessory after text', () => {
      const { getByTestId, getByText } = render(
        <BoxVertical
          testID={ROOT_TEST_ID}
          bottomAccessory={<Text testID="bottom-badge">Badge</Text>}
        >
          Label
        </BoxVertical>,
      );
      expect(getByText('Label')).toBeOnTheScreen();
      expect(getByTestId('bottom-badge')).toBeOnTheScreen();
    });
  });

  describe('when both accessories are provided', () => {
    it('renders topAccessory, text, then bottomAccessory', () => {
      const { getByTestId, getByText } = render(
        <BoxVertical
          testID={ROOT_TEST_ID}
          topAccessory={<Text testID="top">T</Text>}
          bottomAccessory={<Text testID="bottom">B</Text>}
        >
          Middle
        </BoxVertical>,
      );
      expect(getByTestId('top')).toBeOnTheScreen();
      expect(getByText('Middle')).toBeOnTheScreen();
      expect(getByTestId('bottom')).toBeOnTheScreen();
    });
  });

  describe('root layout', () => {
    it('applies flex column to root', () => {
      const { getByTestId } = render(
        <BoxVertical testID={ROOT_TEST_ID}>Content</BoxVertical>,
      );
      const root = getByTestId(ROOT_TEST_ID);
      expect(root).toHaveStyle(tw`flex-col`);
    });
  });

  describe('twClassName', () => {
    it('merges twClassName with root styles', () => {
      const { getByTestId } = render(
        <BoxVertical testID={ROOT_TEST_ID} twClassName="p-2">
          Content
        </BoxVertical>,
      );
      const root = getByTestId(ROOT_TEST_ID);
      expect(root).toHaveStyle(tw`p-2`);
    });
  });

  describe('ViewProps extension', () => {
    it('passes testID to root Box', () => {
      const { getByTestId } = render(
        <BoxVertical testID={ROOT_TEST_ID}>Content</BoxVertical>,
      );
      expect(getByTestId(ROOT_TEST_ID)).toBeOnTheScreen();
    });
  });
});
