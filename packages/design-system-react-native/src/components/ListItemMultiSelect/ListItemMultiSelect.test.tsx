import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import { ListItemMultiSelect } from './ListItemMultiSelect';

const ROOT_TEST_ID = 'listitem-multiselect-root';

describe('ListItemMultiSelect', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    tw = renderHook(() => useTailwind()).result.current;
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
  });
});
