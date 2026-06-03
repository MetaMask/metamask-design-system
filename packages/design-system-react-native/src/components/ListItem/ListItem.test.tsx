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

  beforeEach(() => {
    jest.clearAllMocks();
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

    it('applies default padding on root Box', () => {
      const { getByTestId } = render(
        <ListItem title="Label" testID={ROOT_TEST_ID} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw.style('px-4 py-3'));
    });

    describe('when style is provided', () => {
      it('merges user style with base padding', () => {
        const { getByTestId } = render(
          <ListItem
            title="Label"
            style={{ marginTop: 8 }}
            testID={ROOT_TEST_ID}
          />,
        );

        expect(getByTestId(ROOT_TEST_ID)).toHaveStyle([
          tw.style('px-4 py-3'),
          { marginTop: 8 },
        ]);
      });
    });

    describe('when twClassName is provided', () => {
      it('merges twClassName into root padding', () => {
        const { getByTestId } = render(
          <ListItem
            title="Label"
            twClassName="rounded-lg"
            testID={ROOT_TEST_ID}
          />,
        );

        expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(
          tw.style('px-4 py-3', 'rounded-lg'),
        );
      });
    });
  });

  describe('when isInteractive is true', () => {
    it('fires onPress when pressed', () => {
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

    it('applies default padding on root Pressable', () => {
      const { getByTestId } = render(
        <ListItem
          isInteractive
          title="Label"
          onPress={jest.fn()}
          testID={ROOT_TEST_ID}
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(
        tw.style('w-full px-4 py-3'),
      );
    });

    it('renders Content inside Pressable', () => {
      const { getByText, getByTestId } = render(
        <ListItem
          isInteractive
          title="Tappable row"
          onPress={jest.fn()}
          testID={ROOT_TEST_ID}
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toBeOnTheScreen();
      expect(getByText('Tappable row')).toBeOnTheScreen();
    });

    describe('when style is not provided', () => {
      it('applies bg-pressed when testOnly_pressed is true', () => {
        const { getByTestId } = render(
          <ListItem
            isInteractive
            title="Label"
            onPress={jest.fn()}
            testOnly_pressed
            testID={ROOT_TEST_ID}
          />,
        );

        expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(
          tw.style('w-full px-4 py-3', 'bg-pressed'),
        );
      });

      it('omits bg-pressed at rest', () => {
        const { getByTestId } = render(
          <ListItem
            isInteractive
            title="Label"
            onPress={jest.fn()}
            testID={ROOT_TEST_ID}
          />,
        );

        expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(
          tw.style('w-full px-4 py-3'),
        );
      });
    });

    describe('when style is a plain object', () => {
      it('merges user style with base pressable style', () => {
        const { getByTestId } = render(
          <ListItem
            isInteractive
            title="Label"
            onPress={jest.fn()}
            style={{ marginTop: 8 }}
            testID={ROOT_TEST_ID}
          />,
        );

        expect(getByTestId(ROOT_TEST_ID)).toHaveStyle([
          tw.style('w-full px-4 py-3'),
          { marginTop: 8 },
        ]);
      });
    });

    describe('when style is a function', () => {
      it('merges user function style for pressed state', () => {
        const { getByTestId } = render(
          <ListItem
            isInteractive
            title="Label"
            onPress={jest.fn()}
            testOnly_pressed
            style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
            testID={ROOT_TEST_ID}
          />,
        );

        expect(getByTestId(ROOT_TEST_ID)).toHaveStyle({ opacity: 0.5 });
      });

      it('merges user function style at rest', () => {
        const { getByTestId } = render(
          <ListItem
            isInteractive
            title="Label"
            onPress={jest.fn()}
            style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
            testID={ROOT_TEST_ID}
          />,
        );

        expect(getByTestId(ROOT_TEST_ID)).toHaveStyle({ opacity: 1 });
      });
    });

    describe('when twClassName is provided', () => {
      it('merges twClassName into pressable style', () => {
        const { getByTestId } = render(
          <ListItem
            isInteractive
            title="Label"
            onPress={jest.fn()}
            twClassName="rounded-lg"
            testID={ROOT_TEST_ID}
          />,
        );

        expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(
          tw.style('w-full px-4 py-3', 'rounded-lg'),
        );
      });
    });
  });

  describe('when children are provided', () => {
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
