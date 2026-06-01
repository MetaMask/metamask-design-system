import { TextColor, TextVariant } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { fireEvent, render, renderHook } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

import { ListItem } from '.';

const ROOT_TEST_ID = 'listitem-root';

describe('ListItem', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    tw = renderHook(() => useTailwind()).result.current;
  });

  describe('when isInteractive is false', () => {
    it('renders title via Content', () => {
      const { getByText } = render(
        <ListItem title="Label" testID={ROOT_TEST_ID} />,
      );
      expect(getByText('Label')).toBeOnTheScreen();
    });

    it('forwards description to Content', () => {
      const { getByText } = render(
        <ListItem
          title="Title"
          description="Secondary"
          testID={ROOT_TEST_ID}
        />,
      );
      expect(getByText('Secondary')).toBeOnTheScreen();
    });

    it('applies padding on root Box', () => {
      const { getByTestId } = render(
        <ListItem title="Label" testID={ROOT_TEST_ID} />,
      );
      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw.style('px-4 py-3'));
    });

    it('passes testID to root Box', () => {
      const { getByTestId } = render(
        <ListItem title="Label" testID={ROOT_TEST_ID} />,
      );
      expect(getByTestId(ROOT_TEST_ID)).toBeOnTheScreen();
    });
  });

  describe('when isInteractive is true', () => {
    it('calls onPress when pressed', () => {
      const onPress = jest.fn();
      const { getByTestId } = render(
        <ListItem
          isInteractive
          title="Label"
          onPress={onPress}
          testID={ROOT_TEST_ID}
        />,
      );
      fireEvent.press(getByTestId(ROOT_TEST_ID));
      expect(onPress).toHaveBeenCalledTimes(1);
    });

    it('applies padding on root Pressable', () => {
      const { getByTestId } = render(
        <ListItem
          isInteractive
          title="Label"
          onPress={() => {}}
          testID={ROOT_TEST_ID}
        />,
      );
      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw.style('px-4 py-3'));
    });

    it('renders Content inside Pressable', () => {
      const { getByText, getByTestId } = render(
        <ListItem
          isInteractive
          title="Tappable row"
          onPress={() => {}}
          testID={ROOT_TEST_ID}
        />,
      );
      expect(getByTestId(ROOT_TEST_ID)).toBeOnTheScreen();
      expect(getByText('Tappable row')).toBeOnTheScreen();
    });
  });

  describe('when compound slots are used', () => {
    it('renders title from ListItem.Title', () => {
      const { getByText } = render(
        <ListItem testID={ROOT_TEST_ID}>
          <ListItem.Title>Label</ListItem.Title>
        </ListItem>,
      );
      expect(getByText('Label')).toBeOnTheScreen();
    });

    it('renders title and value slots together', () => {
      const { getByText } = render(
        <ListItem>
          <ListItem.Title>Account</ListItem.Title>
          <ListItem.Value>$1,234</ListItem.Value>
        </ListItem>,
      );
      expect(getByText('Account')).toBeOnTheScreen();
      expect(getByText('$1,234')).toBeOnTheScreen();
    });

    it('renders title row accessories from ListItem.Title props', () => {
      const { getByTestId, getByText } = render(
        <ListItem testID={ROOT_TEST_ID}>
          <ListItem.Title
            startAccessory={<Text testID="title-start">A</Text>}
            endAccessory={<Text testID="title-end">B</Text>}
          >
            Label
          </ListItem.Title>
        </ListItem>,
      );
      expect(getByText('Label')).toBeOnTheScreen();
      expect(getByTestId('title-start')).toBeOnTheScreen();
      expect(getByTestId('title-end')).toBeOnTheScreen();
    });

    it('prefers explicit title prop over ListItem.Title slot', () => {
      const { getByText, queryByText } = render(
        <ListItem title="From prop" testID={ROOT_TEST_ID}>
          <ListItem.Title>From slot</ListItem.Title>
        </ListItem>,
      );
      expect(getByText('From prop')).toBeOnTheScreen();
      expect(queryByText('From slot')).toBeNull();
    });

    it('applies top-level Text props on ListItem.Subvalue', () => {
      const { getByText } = render(
        <ListItem testID={ROOT_TEST_ID}>
          <ListItem.Title>Label</ListItem.Title>
          <ListItem.Subvalue color={TextColor.SuccessDefault}>
            +2.5%
          </ListItem.Subvalue>
        </ListItem>,
      );
      expect(getByText('+2.5%')).toHaveStyle(tw.style('text-success-default'));
    });

    it('applies textProps on ListItem.Description when provided', () => {
      const { getByText } = render(
        <ListItem testID={ROOT_TEST_ID}>
          <ListItem.Title>Label</ListItem.Title>
          <ListItem.Description textProps={{ color: TextColor.ErrorDefault }}>
            Secondary
          </ListItem.Description>
        </ListItem>,
      );
      expect(getByText('Secondary')).toHaveStyle(
        tw.style('text-error-default'),
      );
    });

    it('prefers top-level Text props over textProps on the same slot', () => {
      const { getByText } = render(
        <ListItem testID={ROOT_TEST_ID}>
          <ListItem.Title>Label</ListItem.Title>
          <ListItem.Value
            textProps={{ color: TextColor.ErrorDefault }}
            color={TextColor.SuccessDefault}
          >
            $10.00
          </ListItem.Value>
        </ListItem>,
      );
      expect(getByText('$10.00')).toHaveStyle(tw.style('text-success-default'));
    });

    it('applies top-level variant on ListItem.Title', () => {
      const { getByText } = render(
        <ListItem testID={ROOT_TEST_ID}>
          <ListItem.Title variant={TextVariant.BodySm}>
            Small title
          </ListItem.Title>
        </ListItem>,
      );
      const textNode = getByText('Small title');
      const styles = [textNode.props.style].flat();
      expect(
        styles.find((s: Record<string, unknown>) => s?.fontSize !== undefined)
          ?.fontSize,
      ).toBe(tw.style(`text-${TextVariant.BodySm}`).fontSize);
    });
  });

  describe('when non-slot children are provided', () => {
    it('renders children below Content', () => {
      const { getByText, getByTestId } = render(
        <ListItem title="Label">
          <Text testID="below-content">Below</Text>
        </ListItem>,
      );
      expect(getByText('Label')).toBeOnTheScreen();
      expect(getByTestId('below-content')).toBeOnTheScreen();
    });
  });

  describe('when Content accessories are provided', () => {
    it('renders startAccessory and endAccessory', () => {
      const { getByTestId } = render(
        <ListItem
          title="Label"
          startAccessory={<Text testID="start">S</Text>}
          endAccessory={<Text testID="end">E</Text>}
        />,
      );
      expect(getByTestId('start')).toBeOnTheScreen();
      expect(getByTestId('end')).toBeOnTheScreen();
    });
  });
});
