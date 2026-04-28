import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import { SegmentGroup } from '../SegmentGroup/SegmentGroup';

import { FilterSegmentButton } from './FilterSegmentButton';

const ROOT_TEST_ID = 'filter-segment-button';

const noopPress = () => undefined;

describe('FilterSegmentButton', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    const { result } = renderHook(() => useTailwind());
    tw = result.current;
  });

  it('renders string children', () => {
    const { getByText } = render(
      <FilterSegmentButton testID={ROOT_TEST_ID} onPress={noopPress}>
        Label
      </FilterSegmentButton>,
    );

    expect(getByText('Label')).toHaveTextContent('Label');
  });

  it('uses 40px button height', () => {
    const { getByTestId } = render(
      <FilterSegmentButton testID={ROOT_TEST_ID} onPress={noopPress}>
        A
      </FilterSegmentButton>,
    );

    expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`h-10`);
  });

  it('updates SegmentGroup selection when value changes', () => {
    const onChange = jest.fn();
    const { getByText } = render(
      <SegmentGroup value="a" onChange={onChange}>
        <FilterSegmentButton value="a" onPress={noopPress}>
          A
        </FilterSegmentButton>
        <FilterSegmentButton value="b" onPress={noopPress}>
          B
        </FilterSegmentButton>
      </SegmentGroup>,
    );

    fireEvent.press(getByText('B'));

    expect(onChange).toHaveBeenCalledWith('b');
  });
});
