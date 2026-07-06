import { SegmentedControlSize } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { fireEvent, render, renderHook } from '@testing-library/react-native';
import React, { useState } from 'react';

import { FilterButton } from '../FilterButton';

import { SegmentedControl } from './SegmentedControl';
import type { SegmentedControlProps } from './SegmentedControl.types';

const GROUP_TEST_ID = 'segmented-control';
const FILTER_A_TEST_ID = 'filter-a';
const FILTER_B_TEST_ID = 'filter-b';

const noopPress = () => undefined;

const defaultSegments = (
  <>
    <FilterButton value="a" testID={FILTER_A_TEST_ID} onPress={noopPress}>
      A
    </FilterButton>
    <FilterButton value="b" testID={FILTER_B_TEST_ID} onPress={noopPress}>
      B
    </FilterButton>
  </>
);

const renderSegmentedControl = (
  props: Partial<SegmentedControlProps> = {},
  segments = defaultSegments,
) =>
  render(
    <SegmentedControl
      value="a"
      onChange={noopPress}
      testID={GROUP_TEST_ID}
      {...props}
    >
      {segments}
    </SegmentedControl>,
  );

describe('SegmentedControl', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    tw = renderHook(() => useTailwind()).result.current;
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when rendering children', () => {
    it('renders filter button labels on the screen', () => {
      const { getByText } = renderSegmentedControl();

      expect(getByText('A')).toBeOnTheScreen();
      expect(getByText('B')).toBeOnTheScreen();
    });
  });

  describe('when isFullWidth is false', () => {
    it('applies shrink-wrap container styles', () => {
      const { getByTestId } = renderSegmentedControl(
        {},
        <FilterButton value="a" onPress={noopPress}>
          A
        </FilterButton>,
      );

      expect(getByTestId(GROUP_TEST_ID)).toHaveStyle(
        tw.style(
          'self-start flex-row items-center gap-1 border border-muted p-1 rounded-xl',
        ),
      );
    });

    describe('when twClassName is provided', () => {
      it('merges twClassName after default container styles', () => {
        const { getByTestId } = renderSegmentedControl(
          { twClassName: 'px-4' },
          <FilterButton value="a" onPress={noopPress}>
            A
          </FilterButton>,
        );

        expect(getByTestId(GROUP_TEST_ID)).toHaveStyle(
          tw.style(
            'self-start flex-row items-center gap-1 border border-muted p-1 rounded-xl px-4',
          ),
        );
      });
    });

    describe('when size is provided', () => {
      it.each([
        [SegmentedControlSize.Sm, 'rounded-xl'],
        [SegmentedControlSize.Md, 'rounded-2xl'],
        [SegmentedControlSize.Lg, 'rounded-2xl'],
      ] as const)(
        'applies %s container border radius',
        (size, borderRadiusClass) => {
          const { getByTestId } = renderSegmentedControl(
            { size },
            <FilterButton value="a" onPress={noopPress}>
              A
            </FilterButton>,
          );

          expect(getByTestId(GROUP_TEST_ID)).toHaveStyle(
            tw.style(borderRadiusClass),
          );
        },
      );

      it('propagates size to child filter buttons', () => {
        const { getByTestId } = renderSegmentedControl({
          size: SegmentedControlSize.Md,
        });

        expect(getByTestId(FILTER_A_TEST_ID)).toHaveStyle(tw`h-10`);
      });
    });
  });

  describe('when isFullWidth is true', () => {
    it('applies self-stretch on the container', () => {
      const { getByTestId } = renderSegmentedControl(
        { isFullWidth: true },
        <FilterButton value="a" onPress={noopPress}>
          A
        </FilterButton>,
      );

      expect(getByTestId(GROUP_TEST_ID)).toHaveStyle(tw.style('self-stretch'));
    });

    it('applies full width to child filter buttons', () => {
      const { getByTestId } = renderSegmentedControl({ isFullWidth: true });

      expect(getByTestId(FILTER_A_TEST_ID)).toHaveStyle(tw`w-full`);
      expect(getByTestId(FILTER_B_TEST_ID)).toHaveStyle(tw`w-full`);
    });
  });

  describe('when coordinating filter button selection', () => {
    it('applies secondary variant styling to the selected segment', () => {
      const { getByTestId } = renderSegmentedControl(
        {},
        <FilterButton value="a" testID={FILTER_A_TEST_ID} onPress={noopPress}>
          A
        </FilterButton>,
      );

      expect(getByTestId(FILTER_A_TEST_ID)).toHaveStyle(tw`bg-muted`);
    });

    it('reflects selection from value for participating filter buttons', () => {
      const { getByTestId } = renderSegmentedControl({ value: 'b' });

      expect(getByTestId(FILTER_A_TEST_ID)).toHaveStyle(tw`bg-transparent`);
      expect(getByTestId(FILTER_B_TEST_ID)).toHaveStyle(tw`bg-muted`);
    });

    it('calls onChange when a different filter button is pressed', () => {
      const onChange = jest.fn();
      const { getByText } = renderSegmentedControl({ onChange });

      fireEvent.press(getByText('B'));

      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith('b');
    });

    it('does not call onChange when the active filter button is pressed again', () => {
      const onChange = jest.fn();
      const { getByText } = renderSegmentedControl({ onChange });

      fireEvent.press(getByText('A'));

      expect(onChange).not.toHaveBeenCalled();
    });

    it('updates selection when parent state changes after onChange', () => {
      const ControlledFixture = () => {
        const [value, setValue] = useState('a');

        return (
          <SegmentedControl
            value={value}
            onChange={setValue}
            testID={GROUP_TEST_ID}
          >
            {defaultSegments}
          </SegmentedControl>
        );
      };

      const { getByText, getByTestId } = render(<ControlledFixture />);

      expect(getByTestId(FILTER_A_TEST_ID)).toHaveStyle(tw`bg-muted`);

      fireEvent.press(getByText('B'));

      expect(getByTestId(FILTER_B_TEST_ID)).toHaveStyle(tw`bg-muted`);
      expect(getByTestId(FILTER_A_TEST_ID)).toHaveStyle(tw`bg-transparent`);
    });
  });

  describe('accessibility', () => {
    it('exposes tablist role on the container', () => {
      const { getByTestId } = renderSegmentedControl(
        {},
        <FilterButton value="a" onPress={noopPress}>
          A
        </FilterButton>,
      );

      expect(getByTestId(GROUP_TEST_ID)).toHaveProp(
        'accessibilityRole',
        'tablist',
      );
    });
  });
});
