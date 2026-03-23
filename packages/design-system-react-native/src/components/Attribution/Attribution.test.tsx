import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

import { TextColor, TextVariant } from '../Text';

import { Attribution } from './Attribution';

const ROOT_TEST_ID = 'attribution-root';

describe('Attribution', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    tw = renderHook(() => useTailwind()).result.current;
  });

  describe('when children is a string', () => {
    it('renders text content', () => {
      const { getByText } = render(
        <Attribution>Powered by MetaMask</Attribution>,
      );
      expect(getByText('Powered by MetaMask')).toBeOnTheScreen();
    });

    it('applies default textProps (BodySm, TextAlternative)', () => {
      const { getByText } = render(<Attribution>Label</Attribution>);
      const textNode = getByText('Label');
      const styles = [textNode.props.style].flat();
      const color = styles.find(
        (s: Record<string, unknown>) => s?.color !== undefined,
      )?.color;
      expect(color).toBe(tw.style(TextColor.TextAlternative).color);
      const fontSize = styles.find(
        (s: Record<string, unknown>) => s?.fontSize !== undefined,
      )?.fontSize;
      expect(fontSize).toBe(tw.style(`text-${TextVariant.BodySm}`).fontSize);
    });
  });

  describe('when children is not a string', () => {
    it('renders child components', () => {
      const { getByText } = render(
        <Attribution>
          <Text>Nested content</Text>
        </Attribution>,
      );
      expect(getByText('Nested content')).toBeOnTheScreen();
    });
  });

  describe('when textProps is provided', () => {
    it('merges textProps over defaults', () => {
      const { getByText } = render(
        <Attribution
          textProps={{
            variant: TextVariant.BodyMd,
            color: TextColor.TextDefault,
          }}
        >
          Custom
        </Attribution>,
      );
      const textNode = getByText('Custom');
      const styles = [textNode.props.style].flat();
      const color = styles.find(
        (s: Record<string, unknown>) => s?.color !== undefined,
      )?.color;
      expect(color).toBe(tw.style(TextColor.TextDefault).color);
      const fontSize = styles.find(
        (s: Record<string, unknown>) => s?.fontSize !== undefined,
      )?.fontSize;
      expect(fontSize).toBe(tw.style(`text-${TextVariant.BodyMd}`).fontSize);
    });
  });

  describe('when startAccessory is provided', () => {
    it('renders startAccessory before text', () => {
      const { getByTestId, getByText } = render(
        <Attribution
          testID={ROOT_TEST_ID}
          startAccessory={<Text testID="start-icon">S</Text>}
        >
          Label
        </Attribution>,
      );
      expect(getByTestId('start-icon')).toBeOnTheScreen();
      expect(getByText('Label')).toBeOnTheScreen();
    });
  });

  describe('when endAccessory is provided', () => {
    it('renders endAccessory after text', () => {
      const { getByTestId, getByText } = render(
        <Attribution
          testID={ROOT_TEST_ID}
          endAccessory={<Text testID="end-badge">Badge</Text>}
        >
          Label
        </Attribution>,
      );
      expect(getByText('Label')).toBeOnTheScreen();
      expect(getByTestId('end-badge')).toBeOnTheScreen();
    });
  });

  describe('root layout', () => {
    it('applies default gap-2 and merges twClassName', () => {
      const { getByTestId } = render(
        <Attribution testID={ROOT_TEST_ID} twClassName="p-2">
          Content
        </Attribution>,
      );
      const root = getByTestId(ROOT_TEST_ID);
      expect(root).toHaveStyle(tw`gap-2 p-2`);
    });

    it('applies only gap-2 when twClassName is not passed', () => {
      const { getByTestId } = render(
        <Attribution testID={ROOT_TEST_ID}>Content</Attribution>,
      );
      const root = getByTestId(ROOT_TEST_ID);
      expect(root).toHaveStyle(tw`gap-2`);
    });
  });

  describe('ViewProps extension', () => {
    it('passes testID to root', () => {
      const { getByTestId } = render(
        <Attribution testID={ROOT_TEST_ID}>Content</Attribution>,
      );
      expect(getByTestId(ROOT_TEST_ID)).toBeOnTheScreen();
    });
  });
});
