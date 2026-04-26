import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import { SelectButtonEndArrow } from '../SelectButton';

import { ChartSelectButton } from './ChartSelectButton';

const ROOT_TEST_ID = 'chart-select-button';

describe('ChartSelectButton', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    const { result } = renderHook(() => useTailwind());
    tw = result.current;
  });

  it('renders string children', () => {
    const { getByText } = render(
      <ChartSelectButton testID={ROOT_TEST_ID} onPress={() => undefined}>
        Range
      </ChartSelectButton>,
    );

    expect(getByText('Range')).toHaveTextContent('Range');
  });

  it('uses 32px button height', () => {
    const { getByTestId } = render(
      <ChartSelectButton testID={ROOT_TEST_ID} onPress={() => undefined}>
        Range
      </ChartSelectButton>,
    );

    expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`h-8`);
  });

  it('uses tertiary select row visuals', () => {
    const { getByTestId } = render(
      <ChartSelectButton testID={ROOT_TEST_ID} onPress={() => undefined}>
        Range
      </ChartSelectButton>,
    );

    expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`bg-transparent`);
  });

  it('invokes onPress when pressed', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <ChartSelectButton
        testID={ROOT_TEST_ID}
        onPress={onPress}
        endArrowDirection={SelectButtonEndArrow.Down}
      >
        Range
      </ChartSelectButton>,
    );

    fireEvent.press(getByTestId(ROOT_TEST_ID));

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
