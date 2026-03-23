import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

import { TextColor, TextVariant } from '../../types';

import { ListItemBase } from './ListItemBase';

const ROOT_TEST_ID = 'list-item-base-root';

describe('ListItemBase', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    tw = renderHook(() => useTailwind()).result.current;
  });

  describe('when title is provided', () => {
    it('renders title text', () => {
      const { getByText } = render(
        <ListItemBase title="Label" testID={ROOT_TEST_ID} />,
      );
      expect(getByText('Label')).toBeOnTheScreen();
    });

    it('applies default titleProps (BodyMd, Medium, TextDefault)', () => {
      const { getByText } = render(
        <ListItemBase title="Title" testID={ROOT_TEST_ID} />,
      );
      const textNode = getByText('Title');
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

  describe('when subtitle is provided', () => {
    it('renders subtitle text', () => {
      const { getByText } = render(
        <ListItemBase
          title="Title"
          subtitle="Secondary"
          testID={ROOT_TEST_ID}
        />,
      );
      expect(getByText('Secondary')).toBeOnTheScreen();
    });

    it('applies default subtitleProps (BodySm, Medium, TextAlternative)', () => {
      const { getByText } = render(
        <ListItemBase title="Title" subtitle="Sub" testID={ROOT_TEST_ID} />,
      );
      const textNode = getByText('Sub');
      const styles = [textNode.props.style].flat();
      const color = styles.find(
        (s: Record<string, unknown>) => s?.color !== undefined,
      )?.color;
      expect(color).toBe(tw.style(TextColor.TextAlternative).color);
      expect(
        styles.find((s: Record<string, unknown>) => s?.fontSize !== undefined)
          ?.fontSize,
      ).toBe(tw.style(`text-${TextVariant.BodySm}`).fontSize);
    });
  });

  describe('when value is provided', () => {
    it('renders value text', () => {
      const { getByText } = render(
        <ListItemBase title="Label" value="100" testID={ROOT_TEST_ID} />,
      );
      expect(getByText('100')).toBeOnTheScreen();
    });
  });

  describe('when supporting is provided', () => {
    it('renders supporting text', () => {
      const { getByText } = render(
        <ListItemBase
          title="Label"
          value="100"
          supporting="Balance"
          testID={ROOT_TEST_ID}
        />,
      );
      expect(getByText('Balance')).toBeOnTheScreen();
    });
  });

  describe('when titleProps is provided', () => {
    it('merges titleProps over defaults', () => {
      const { getByText } = render(
        <ListItemBase
          title="Custom"
          titleProps={{
            variant: TextVariant.BodySm,
            color: TextColor.TextAlternative,
          }}
          testID={ROOT_TEST_ID}
        />,
      );
      const textNode = getByText('Custom');
      const styles = [textNode.props.style].flat();
      const color = styles.find(
        (s: Record<string, unknown>) => s?.color !== undefined,
      )?.color;
      expect(color).toBe(tw.style(TextColor.TextAlternative).color);
    });
  });

  describe('when startAccessory is provided', () => {
    it('renders startAccessory', () => {
      const { getByTestId, getByText } = render(
        <ListItemBase
          testID={ROOT_TEST_ID}
          startAccessory={<Text testID="start-icon">S</Text>}
          title="Label"
        />,
      );
      expect(getByTestId('start-icon')).toBeOnTheScreen();
      expect(getByText('Label')).toBeOnTheScreen();
    });
  });

  describe('when titleStartAccessory and titleEndAccessory are provided', () => {
    it('renders both accessories around title', () => {
      const { getByTestId, getByText } = render(
        <ListItemBase
          testID={ROOT_TEST_ID}
          title="Label"
          titleStartAccessory={<Text testID="title-start">A</Text>}
          titleEndAccessory={<Text testID="title-end">B</Text>}
        />,
      );
      expect(getByText('Label')).toBeOnTheScreen();
      expect(getByTestId('title-start')).toBeOnTheScreen();
      expect(getByTestId('title-end')).toBeOnTheScreen();
    });
  });

  describe('when valueStartAccessory and valueEndAccessory are provided', () => {
    it('renders both accessories around value', () => {
      const { getByTestId, getByText } = render(
        <ListItemBase
          testID={ROOT_TEST_ID}
          title="Label"
          value="100"
          valueStartAccessory={<Text testID="value-start">X</Text>}
          valueEndAccessory={<Text testID="value-end">Y</Text>}
        />,
      );
      expect(getByText('100')).toBeOnTheScreen();
      expect(getByTestId('value-start')).toBeOnTheScreen();
      expect(getByTestId('value-end')).toBeOnTheScreen();
    });
  });

  describe('when title is a node', () => {
    it('renders node without applying titleProps to wrapper', () => {
      const { getByText } = render(
        <ListItemBase
          title={<Text testID="custom-title">Custom node</Text>}
          testID={ROOT_TEST_ID}
        />,
      );
      expect(getByText('Custom node')).toBeOnTheScreen();
    });
  });

  describe('root layout', () => {
    it('passes testID to root', () => {
      const { getByTestId } = render(
        <ListItemBase title="Label" testID={ROOT_TEST_ID} />,
      );
      expect(getByTestId(ROOT_TEST_ID)).toBeOnTheScreen();
    });
  });
});
