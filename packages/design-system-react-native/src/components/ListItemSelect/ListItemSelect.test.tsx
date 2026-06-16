import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { fireEvent, render, renderHook } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

import { IconName } from '../Icon';

import { ListItemSelect } from './ListItemSelect';

const ROOT_TEST_ID = 'listitem-select-root';

describe('ListItemSelect', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    tw = renderHook(() => useTailwind()).result.current;
  });

  describe('when rendering content', () => {
    it('renders title via ListItem and Content', () => {
      const { getByText } = render(
        <ListItemSelect
          title="Label"
          isSelected={false}
          onPress={() => {}}
          testID={ROOT_TEST_ID}
        />,
      );
      expect(getByText('Label')).toBeOnTheScreen();
    });
  });

  describe('when isSelected is false', () => {
    it('does not render check icon by default', () => {
      const { root } = render(
        <ListItemSelect title="Label" isSelected={false} onPress={() => {}} />,
      );
      expect(() => root.findByProps({ name: IconName.Check })).toThrow();
    });

    it('renders custom endAccessory', () => {
      const { getByText } = render(
        <ListItemSelect
          title="Label"
          isSelected={false}
          onPress={() => {}}
          endAccessory={<Text>Custom</Text>}
        />,
      );
      expect(getByText('Custom')).toBeOnTheScreen();
    });

    it('does not render check icon when showSelectedIcon is true but row is unselected', () => {
      const { root } = render(
        <ListItemSelect
          title="Label"
          isSelected={false}
          showSelectedIcon
          onPress={() => {}}
        />,
      );
      expect(() => root.findByProps({ name: IconName.Check })).toThrow();
    });
  });

  describe('when isSelected is true', () => {
    it('applies muted background on root', () => {
      const { getByTestId } = render(
        <ListItemSelect
          title="Label"
          isSelected
          onPress={() => {}}
          testID={ROOT_TEST_ID}
        />,
      );
      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(
        tw.style('bg-background-muted'),
      );
    });

    it('renders check icon when showSelectedIcon is true', () => {
      const { root } = render(
        <ListItemSelect
          title="Label"
          isSelected
          showSelectedIcon
          onPress={() => {}}
        />,
      );
      expect(root.findByProps({ name: IconName.Check })).toBeDefined();
    });

    it('renders custom endAccessory when showSelectedIcon is false', () => {
      const { getByText, root } = render(
        <ListItemSelect
          title="Label"
          isSelected
          onPress={() => {}}
          endAccessory={<Text>Custom</Text>}
        />,
      );
      expect(getByText('Custom')).toBeOnTheScreen();
      expect(() => root.findByProps({ name: IconName.Check })).toThrow();
    });
  });

  describe('when pressed', () => {
    it('calls onPress', () => {
      const onPress = jest.fn();
      const { getByTestId } = render(
        <ListItemSelect
          title="Label"
          isSelected={false}
          onPress={onPress}
          testID={ROOT_TEST_ID}
        />,
      );
      fireEvent.press(getByTestId(ROOT_TEST_ID));
      expect(onPress).toHaveBeenCalledTimes(1);
    });
  });

  describe('when twClassName is provided', () => {
    it('merges twClassName with muted background when isSelected', () => {
      const { getByTestId } = render(
        <ListItemSelect
          title="Label"
          isSelected
          twClassName="rounded-lg"
          onPress={() => {}}
          testID={ROOT_TEST_ID}
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(
        tw.style('bg-background-muted', 'rounded-lg'),
      );
    });

    it('passes twClassName through when not selected', () => {
      const { getByTestId } = render(
        <ListItemSelect
          title="Label"
          isSelected={false}
          twClassName="rounded-lg"
          onPress={() => {}}
          testID={ROOT_TEST_ID}
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw.style('rounded-lg'));
    });
  });
});
