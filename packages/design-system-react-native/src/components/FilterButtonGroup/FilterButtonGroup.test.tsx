import {
  SelectButtonEndArrow,
  FilterButtonVariant,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { fireEvent, render, renderHook } from '@testing-library/react-native';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import { FilterButton } from '../FilterButton';
import { SelectButton } from '../SelectButton';

import { FilterButtonGroup } from './FilterButtonGroup';

const GROUP_TEST_ID = 'filter-button-group';

const noopPress = () => undefined;

describe('FilterButtonGroup', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    const { result } = renderHook(() => useTailwind());
    tw = result.current;
  });

  it('renders children', () => {
    const { getByText } = render(
      <FilterButtonGroup value="a" onChange={noopPress} testID={GROUP_TEST_ID}>
        <FilterButton value="a" onPress={noopPress}>
          A
        </FilterButton>
      </FilterButtonGroup>,
    );

    expect(getByText('A')).toBeOnTheScreen();
  });

  it('merges default row layout into contentContainerStyle', () => {
    const { getByTestId } = render(
      <FilterButtonGroup value="a" onChange={noopPress} testID={GROUP_TEST_ID}>
        <FilterButton value="a" onPress={noopPress}>
          A
        </FilterButton>
      </FilterButtonGroup>,
    );

    const scroll = getByTestId(GROUP_TEST_ID);
    expect(scroll.props.horizontal).toBe(true);
    expect(scroll.props.showsHorizontalScrollIndicator).toBe(false);

    const expectedContent = tw.style('flex flex-row items-center gap-1');

    expect(
      StyleSheet.flatten(scroll.props.contentContainerStyle),
    ).toStrictEqual(StyleSheet.flatten(expectedContent));
  });

  it('merges twClassName into contentContainerStyle after defaults', () => {
    const { getByTestId } = render(
      <FilterButtonGroup
        value="a"
        onChange={noopPress}
        testID={GROUP_TEST_ID}
        twClassName="px-4"
      >
        <FilterButton value="a" onPress={noopPress}>
          A
        </FilterButton>
      </FilterButtonGroup>,
    );

    const scroll = getByTestId(GROUP_TEST_ID);
    const expectedContent = tw.style(
      'flex flex-row items-center gap-1',
      'px-4',
    );

    expect(
      StyleSheet.flatten(scroll.props.contentContainerStyle),
    ).toStrictEqual(StyleSheet.flatten(expectedContent));
  });

  it('applies group variant to child filter buttons that omit variant', () => {
    const { getByTestId } = render(
      <FilterButtonGroup
        value="a"
        onChange={noopPress}
        testID={GROUP_TEST_ID}
        variant={FilterButtonVariant.Secondary}
      >
        <FilterButton value="a" testID="filter-a" onPress={noopPress}>
          A
        </FilterButton>
      </FilterButtonGroup>,
    );

    expect(getByTestId('filter-a')).toHaveStyle(tw`bg-muted`);
  });

  it('exposes tablist role on the container', () => {
    const { getByTestId } = render(
      <FilterButtonGroup value="a" onChange={noopPress} testID={GROUP_TEST_ID}>
        <FilterButton value="a" onPress={noopPress}>
          A
        </FilterButton>
      </FilterButtonGroup>,
    );

    expect(getByTestId(GROUP_TEST_ID)).toHaveProp(
      'accessibilityRole',
      'tablist',
    );
  });

  it('calls onChange when a different filter button is pressed', () => {
    const onChange = jest.fn();

    const { getByText } = render(
      <FilterButtonGroup value="a" onChange={onChange} testID={GROUP_TEST_ID}>
        <FilterButton value="a" onPress={noopPress}>
          A
        </FilterButton>
        <FilterButton value="b" onPress={noopPress}>
          B
        </FilterButton>
      </FilterButtonGroup>,
    );

    fireEvent.press(getByText('B'));

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('b');
  });

  it('does not call onChange when the active filter button is pressed again', () => {
    const onChange = jest.fn();

    const { getByText } = render(
      <FilterButtonGroup value="a" onChange={onChange} testID={GROUP_TEST_ID}>
        <FilterButton value="a" onPress={noopPress}>
          A
        </FilterButton>
        <FilterButton value="b" onPress={noopPress}>
          B
        </FilterButton>
      </FilterButtonGroup>,
    );

    fireEvent.press(getByText('A'));

    expect(onChange).not.toHaveBeenCalled();
  });

  it('reflects selection from value for participating FilterButtons', () => {
    const { getByTestId } = render(
      <FilterButtonGroup value="b" onChange={noopPress} testID={GROUP_TEST_ID}>
        <FilterButton value="a" testID="filter-a" onPress={noopPress}>
          A
        </FilterButton>
        <FilterButton value="b" testID="filter-b" onPress={noopPress}>
          B
        </FilterButton>
      </FilterButtonGroup>,
    );

    expect(getByTestId('filter-a')).toHaveStyle(tw`bg-transparent`);
    expect(getByTestId('filter-b')).toHaveStyle(tw`bg-icon-default`);
  });

  it('allows non-filter-button children without affecting selection', () => {
    const onChange = jest.fn();

    const { getByText, getByTestId } = render(
      <FilterButtonGroup value="a" onChange={onChange} testID={GROUP_TEST_ID}>
        <FilterButton value="a" onPress={noopPress}>
          A
        </FilterButton>
        <FilterButton value="b" onPress={noopPress}>
          B
        </FilterButton>
        <SelectButton
          endArrowDirection={SelectButtonEndArrow.Down}
          onPress={noopPress}
          placeholder="More"
        />
      </FilterButtonGroup>,
    );

    fireEvent.press(getByText('More'));

    expect(onChange).not.toHaveBeenCalled();
    expect(getByTestId(GROUP_TEST_ID)).toBeOnTheScreen();
  });

  const ControlledFixture = () => {
    const [value, setValue] = useState('a');

    return (
      <FilterButtonGroup
        value={value}
        onChange={setValue}
        testID={GROUP_TEST_ID}
      >
        <FilterButton value="a" testID="filter-a" onPress={noopPress}>
          A
        </FilterButton>
        <FilterButton value="b" testID="filter-b" onPress={noopPress}>
          B
        </FilterButton>
      </FilterButtonGroup>
    );
  };

  it('updates selection when parent state changes after onChange', () => {
    const { getByText, getByTestId } = render(<ControlledFixture />);

    expect(getByTestId('filter-a')).toHaveStyle(tw`bg-icon-default`);

    fireEvent.press(getByText('B'));

    expect(getByTestId('filter-b')).toHaveStyle(tw`bg-icon-default`);
    expect(getByTestId('filter-a')).toHaveStyle(tw`bg-transparent`);
  });
});
