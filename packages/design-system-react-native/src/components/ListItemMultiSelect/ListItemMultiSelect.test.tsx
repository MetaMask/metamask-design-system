import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { fireEvent, render, renderHook } from '@testing-library/react-native';
import React from 'react';

import { Checkbox } from '../Checkbox';

import { ListItemMultiSelect } from './ListItemMultiSelect';

const ROOT_TEST_ID = 'listitem-multiselect-root';

describe('ListItemMultiSelect', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    const { result } = renderHook(() => useTailwind());
    tw = result.current;
  });

  describe('when rendering content', () => {
    it('renders title via ListItem and Content', () => {
      const { getByText } = render(
        <ListItemMultiSelect
          title="Label"
          isSelected={false}
          onPress={() => {}}
        />,
      );
      expect(getByText('Label')).toBeOnTheScreen();
    });
  });

  describe('when isSelected is true', () => {
    it('applies muted background on root', () => {
      const { getByTestId } = render(
        <ListItemMultiSelect
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
  });

  describe('when isSelected is false', () => {
    it('does not apply muted background on root', () => {
      const { getByTestId } = render(
        <ListItemMultiSelect
          title="Label"
          isSelected={false}
          onPress={() => {}}
          testID={ROOT_TEST_ID}
        />,
      );
      expect(getByTestId(ROOT_TEST_ID)).not.toHaveStyle(
        tw.style('bg-background-muted'),
      );
    });
  });

  describe('when Checkbox endAccessory is rendered', () => {
    it('renders checkbox accessibility role when unselected', () => {
      const { getByRole } = render(
        <ListItemMultiSelect
          title="Label"
          isSelected={false}
          onPress={() => {}}
        />,
      );
      expect(getByRole('checkbox')).toBeOnTheScreen();
    });

    it('marks checkbox as checked when isSelected is true', () => {
      const { getByRole } = render(
        <ListItemMultiSelect title="Label" isSelected onPress={() => {}} />,
      );
      expect(getByRole('checkbox').props.accessibilityState?.checked).toBe(
        true,
      );
    });

    it('uses a display-only checkbox onChange handler', () => {
      const { root } = render(
        <ListItemMultiSelect
          title="Label"
          isSelected={false}
          onPress={() => {}}
        />,
      );

      expect(() => root.findByType(Checkbox).props.onChange()).not.toThrow();
    });
  });

  describe('when pressed', () => {
    it('calls onPress on row', () => {
      const onPress = jest.fn();
      const { getByTestId } = render(
        <ListItemMultiSelect
          title="Label"
          isSelected={false}
          onPress={onPress}
          testID={ROOT_TEST_ID}
        />,
      );
      fireEvent.press(getByTestId(ROOT_TEST_ID));
      expect(onPress).toHaveBeenCalledTimes(1);
    });

    it('calls onPress when the trailing checkbox area is pressed', () => {
      const onPress = jest.fn();
      const { getByRole } = render(
        <ListItemMultiSelect
          title="Label"
          isSelected={false}
          onPress={onPress}
        />,
      );
      fireEvent.press(getByRole('checkbox'));
      expect(onPress).toHaveBeenCalledTimes(1);
    });
  });

  describe('when twClassName is provided', () => {
    it('merges twClassName with muted background when isSelected', () => {
      const { getByTestId } = render(
        <ListItemMultiSelect
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
        <ListItemMultiSelect
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
