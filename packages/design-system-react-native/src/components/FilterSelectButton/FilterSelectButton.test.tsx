import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import { SelectButtonEndArrow } from '../SelectButton';

import { FilterSelectButton } from './FilterSelectButton';

const ROOT_TEST_ID = 'filter-select-button';

describe('FilterSelectButton', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    const { result } = renderHook(() => useTailwind());
    tw = result.current;
  });

  it('renders placeholder label', () => {
    const { getByText } = render(
      <FilterSelectButton
        testID={ROOT_TEST_ID}
        onPress={() => undefined}
        placeholder="Filter"
      />,
    );

    expect(getByText('Filter')).toHaveTextContent('Filter');
  });

  it('uses 40px button height', () => {
    const { getByTestId } = render(
      <FilterSelectButton
        testID={ROOT_TEST_ID}
        onPress={() => undefined}
        placeholder="Filter"
      />,
    );

    expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`h-10`);
  });

  it('uses primary select row visuals', () => {
    const { getByTestId } = render(
      <FilterSelectButton
        testID={ROOT_TEST_ID}
        onPress={() => undefined}
        placeholder="Filter"
      />,
    );

    expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`bg-muted`);
  });

  it('invokes onPress when pressed', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <FilterSelectButton
        testID={ROOT_TEST_ID}
        onPress={onPress}
        endArrowDirection={SelectButtonEndArrow.Down}
        placeholder="Filter"
      />,
    );

    fireEvent.press(getByTestId(ROOT_TEST_ID));

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
