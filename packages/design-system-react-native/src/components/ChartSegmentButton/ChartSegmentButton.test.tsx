import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import { SegmentGroup } from '../SegmentGroup/SegmentGroup';

import { ChartSegmentButton } from './ChartSegmentButton';

const ROOT_TEST_ID = 'chart-segment-button';

const noopPress = () => undefined;

describe('ChartSegmentButton', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    const { result } = renderHook(() => useTailwind());
    tw = result.current;
  });

  it('renders string children', () => {
    const { getByText } = render(
      <ChartSegmentButton testID={ROOT_TEST_ID} onPress={noopPress}>
        Label
      </ChartSegmentButton>,
    );

    expect(getByText('Label')).toHaveTextContent('Label');
  });

  it('uses 32px button height', () => {
    const { getByTestId } = render(
      <ChartSegmentButton testID={ROOT_TEST_ID} onPress={noopPress}>
        A
      </ChartSegmentButton>,
    );

    expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`h-8`);
  });

  it('uses secondary segment unselected container when not selected', () => {
    const { getByTestId } = render(
      <ChartSegmentButton testID={ROOT_TEST_ID} onPress={noopPress}>
        Label
      </ChartSegmentButton>,
    );

    expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`bg-transparent`);
  });

  it('updates SegmentGroup selection when value changes', () => {
    const onChange = jest.fn();
    const { getByText } = render(
      <SegmentGroup value="a" onChange={onChange}>
        <ChartSegmentButton value="a" onPress={noopPress}>
          A
        </ChartSegmentButton>
        <ChartSegmentButton value="b" onPress={noopPress}>
          B
        </ChartSegmentButton>
      </SegmentGroup>,
    );

    fireEvent.press(getByText('B'));

    expect(onChange).toHaveBeenCalledWith('b');
  });
});
