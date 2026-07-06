import {
  FilterButtonSize,
  IconColor,
  IconName,
  IconSize,
  FilterButtonVariant,
  TextColor,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { fireEvent, render, renderHook } from '@testing-library/react-native';
import React from 'react';

import { FilterButtonGroup } from '../FilterButtonGroup/FilterButtonGroup';
import { TWCLASSMAP_ICON_SIZE_DIMENSION } from '../Icon/Icon.constants';
import { SegmentedControl } from '../SegmentedControl/SegmentedControl';

import { FilterButton } from './FilterButton';

const ROOT_TEST_ID = 'filter-button';

const noopPress = () => undefined;

describe('FilterButton', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    const { result } = renderHook(() => useTailwind());
    tw = result.current;
  });

  describe('when rendering children', () => {
    it('renders string children as label text', () => {
      const { getByText } = render(
        <FilterButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          children="Label"
        />,
      );

      expect(getByText('Label')).toHaveTextContent('Label');
    });

    it('renders JSX children as label text', () => {
      const { getByText } = render(
        <FilterButton testID={ROOT_TEST_ID} onPress={noopPress}>
          Child label
        </FilterButton>,
      );

      expect(getByText('Child label')).toHaveTextContent('Child label');
    });
  });

  it('exposes testID on the root pressable', () => {
    const { getByTestId } = render(
      <FilterButton
        testID="custom-filter-button"
        onPress={noopPress}
        children="A"
      />,
    );

    expect(getByTestId('custom-filter-button')).toBeOnTheScreen();
  });

  describe('container and label appearance by variant', () => {
    it('uses icon default background when primary variant is selected', () => {
      const { getByTestId } = render(
        <FilterButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          variant={FilterButtonVariant.Primary}
          isSelected
          children="Label"
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`bg-icon-default`);
    });

    it('uses transparent background when primary variant is unselected', () => {
      const { getByTestId } = render(
        <FilterButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          variant={FilterButtonVariant.Primary}
          isSelected={false}
          children="Label"
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`bg-transparent`);
    });

    it('uses muted background when secondary variant is selected', () => {
      const { getByTestId } = render(
        <FilterButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          variant={FilterButtonVariant.Secondary}
          isSelected
          children="Label"
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`bg-muted`);
    });

    it('uses transparent background when secondary variant is unselected', () => {
      const { getByTestId } = render(
        <FilterButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          variant={FilterButtonVariant.Secondary}
          isSelected={false}
          children="Label"
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`bg-transparent`);
    });

    it('applies alternative text color when primary variant is unselected', () => {
      const { getByText } = render(
        <FilterButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          variant={FilterButtonVariant.Primary}
          isSelected={false}
          children="Label"
        />,
      );

      expect(getByText('Label')).toHaveStyle(
        tw.style(TextColor.TextAlternative),
      );
    });

    it('applies alternative text color when secondary variant is unselected', () => {
      const { getByText } = render(
        <FilterButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          variant={FilterButtonVariant.Secondary}
          isSelected={false}
          children="Label"
        />,
      );

      expect(getByText('Label')).toHaveStyle(
        tw.style(TextColor.TextAlternative),
      );
    });

    it('applies alternative icon color to start icon when primary variant is unselected', () => {
      const { getByTestId } = render(
        <FilterButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          variant={FilterButtonVariant.Primary}
          isSelected={false}
          startIconName={IconName.Search}
          startIconProps={{ testID: 'filter-button-icon' }}
          children="Label"
        />,
      );

      expect(getByTestId('filter-button-icon')).toHaveStyle(
        tw.style(
          IconColor.IconAlternative,
          TWCLASSMAP_ICON_SIZE_DIMENSION[IconSize.Sm],
        ),
      );
    });

    it('applies alternative icon color to start icon when secondary variant is unselected', () => {
      const { getByTestId } = render(
        <FilterButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          variant={FilterButtonVariant.Secondary}
          isSelected={false}
          startIconName={IconName.Search}
          startIconProps={{ testID: 'filter-button-icon' }}
          children="Label"
        />,
      );

      expect(getByTestId('filter-button-icon')).toHaveStyle(
        tw.style(
          IconColor.IconAlternative,
          TWCLASSMAP_ICON_SIZE_DIMENSION[IconSize.Sm],
        ),
      );
    });

    it('applies alternative icon color to end icon when primary variant is unselected', () => {
      const { getByTestId } = render(
        <FilterButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          variant={FilterButtonVariant.Primary}
          isSelected={false}
          endIconName={IconName.Search}
          endIconProps={{ testID: 'filter-button-end-icon' }}
          children="Label"
        />,
      );

      expect(getByTestId('filter-button-end-icon')).toHaveStyle(
        tw.style(
          IconColor.IconAlternative,
          TWCLASSMAP_ICON_SIZE_DIMENSION[IconSize.Sm],
        ),
      );
    });
  });

  describe('when disabled', () => {
    it('applies reduced opacity to the root', () => {
      const { getByTestId } = render(
        <FilterButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          isDisabled
          children="Label"
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`opacity-50`);
    });
  });

  it('calls twClassName with pressed state when primary variant is selected', () => {
    const twClassName = jest.fn((pressed: boolean) =>
      pressed ? 'opacity-80' : 'opacity-100',
    );
    const { getByTestId } = render(
      <FilterButton
        testID={ROOT_TEST_ID}
        onPress={noopPress}
        variant={FilterButtonVariant.Primary}
        isSelected
        twClassName={twClassName}
        children="Label"
      />,
    );

    const root = getByTestId(ROOT_TEST_ID);
    fireEvent(root, 'pressIn');
    expect(twClassName).toHaveBeenCalledWith(true);
    fireEvent(root, 'pressOut');
    expect(twClassName).toHaveBeenCalledWith(false);
  });

  it('calls twClassName with pressed state when secondary variant is selected', () => {
    const twClassName = jest.fn((pressed: boolean) =>
      pressed ? 'opacity-75' : 'opacity-100',
    );
    const { getByTestId } = render(
      <FilterButton
        testID={ROOT_TEST_ID}
        onPress={noopPress}
        variant={FilterButtonVariant.Secondary}
        isSelected
        twClassName={twClassName}
        children="Label"
      />,
    );

    const root = getByTestId(ROOT_TEST_ID);
    fireEvent(root, 'pressIn');
    expect(twClassName).toHaveBeenCalledWith(true);
    fireEvent(root, 'pressOut');
    expect(twClassName).toHaveBeenCalledWith(false);
  });

  it('merges function twClassName for primary unselected container', () => {
    const twClassName = jest.fn(() => 'mt-1');
    const { getByTestId } = render(
      <FilterButton
        testID={ROOT_TEST_ID}
        onPress={noopPress}
        variant={FilterButtonVariant.Primary}
        isSelected={false}
        twClassName={twClassName}
        children="Label"
      />,
    );

    expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`mt-1`);
    expect(twClassName).toHaveBeenCalled();
  });

  it('merges function twClassName for secondary unselected container', () => {
    const twClassName = jest.fn(() => 'mt-2');
    const { getByTestId } = render(
      <FilterButton
        testID={ROOT_TEST_ID}
        onPress={noopPress}
        variant={FilterButtonVariant.Secondary}
        isSelected={false}
        twClassName={twClassName}
        children="Label"
      />,
    );

    expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`mt-2`);
    expect(twClassName).toHaveBeenCalled();
  });

  it('uses pressed background when primary selected receives pressIn', () => {
    const { getByTestId } = render(
      <FilterButton
        testID={ROOT_TEST_ID}
        onPress={noopPress}
        variant={FilterButtonVariant.Primary}
        isSelected
        children="Label"
      />,
    );

    const root = getByTestId(ROOT_TEST_ID);
    fireEvent(root, 'pressIn');
    expect(root).toHaveStyle(tw`bg-icon-default-pressed`);
  });

  it('uses pressed background when primary unselected receives pressIn', () => {
    const { getByTestId } = render(
      <FilterButton
        testID={ROOT_TEST_ID}
        onPress={noopPress}
        variant={FilterButtonVariant.Primary}
        isSelected={false}
        children="Label"
      />,
    );

    const root = getByTestId(ROOT_TEST_ID);
    fireEvent(root, 'pressIn');
    expect(root).toHaveStyle(tw`bg-pressed`);
  });

  it('uses pressed background when secondary unselected receives pressIn', () => {
    const { getByTestId } = render(
      <FilterButton
        testID={ROOT_TEST_ID}
        onPress={noopPress}
        variant={FilterButtonVariant.Secondary}
        isSelected={false}
        children="Label"
      />,
    );

    const root = getByTestId(ROOT_TEST_ID);
    fireEvent(root, 'pressIn');
    expect(root).toHaveStyle(tw`bg-pressed`);
  });

  it('uses pressed background on root when primary selected is loading', () => {
    const { getByTestId } = render(
      <FilterButton
        testID={ROOT_TEST_ID}
        onPress={noopPress}
        variant={FilterButtonVariant.Primary}
        isSelected
        isLoading
        children="Label"
      />,
    );

    expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`bg-icon-default-pressed`);
  });

  it('uses pressed loading container when primary unselected is loading', () => {
    const { getByTestId } = render(
      <FilterButton
        testID={ROOT_TEST_ID}
        onPress={noopPress}
        variant={FilterButtonVariant.Primary}
        isSelected={false}
        isLoading
        children="Label"
      />,
    );

    expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`bg-pressed`);
  });

  it('uses pressed loading container when secondary unselected is loading', () => {
    const { getByTestId } = render(
      <FilterButton
        testID={ROOT_TEST_ID}
        onPress={noopPress}
        variant={FilterButtonVariant.Secondary}
        isSelected={false}
        isLoading
        children="Label"
      />,
    );

    expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`bg-pressed`);
  });

  describe('when used inside FilterButtonGroup', () => {
    it('derives selected visual from group value instead of isSelected', () => {
      const { getByTestId } = render(
        <FilterButtonGroup value="b" onChange={noopPress} testID="group">
          <FilterButton
            value="a"
            children="A"
            testID="filter-a"
            isSelected
            onPress={noopPress}
          />
          <FilterButton
            value="b"
            children="B"
            testID="filter-b"
            isSelected={false}
            onPress={noopPress}
          />
        </FilterButtonGroup>,
      );

      expect(getByTestId('filter-a')).toHaveStyle(tw`bg-transparent`);
      expect(getByTestId('filter-b')).toHaveStyle(tw`bg-icon-default`);
    });
  });

  describe('when group context provides size and isEqualWidth', () => {
    it('uses group size when child omits size', () => {
      const { getByTestId } = render(
        <SegmentedControl
          value="a"
          onChange={noopPress}
          size={FilterButtonSize.Md}
          testID="group"
        >
          <FilterButton value="a" testID="filter-a" onPress={noopPress}>
            A
          </FilterButton>
        </SegmentedControl>,
      );

      expect(getByTestId('filter-a')).toHaveStyle(tw`h-10`);
    });

    it('uses group isEqualWidth when isFullWidth is true', () => {
      const { getByTestId } = render(
        <SegmentedControl
          value="a"
          onChange={noopPress}
          testID="group"
          isFullWidth
        >
          <FilterButton value="a" testID="filter-a" onPress={noopPress}>
            A
          </FilterButton>
          <FilterButton value="b" testID="filter-b" onPress={noopPress}>
            B
          </FilterButton>
        </SegmentedControl>,
      );

      expect(getByTestId('filter-a')).toHaveStyle(tw`w-full`);
    });
  });
});
