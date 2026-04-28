import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import { SelectButtonEndArrow } from '../SelectButton';

import { SortSelectButton } from './SortSelectButton';

const ROOT_TEST_ID = 'sort-select-button';

describe('SortSelectButton', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    const { result } = renderHook(() => useTailwind());
    tw = result.current;
  });

  it('renders placeholder label', () => {
    const { getByText } = render(
      <SortSelectButton
        testID={ROOT_TEST_ID}
        onPress={() => undefined}
        placeholder="Sort"
      />,
    );

    expect(getByText('Sort')).toHaveTextContent('Sort');
  });

  it('uses extra-small button height', () => {
    const { getByTestId } = render(
      <SortSelectButton
        testID={ROOT_TEST_ID}
        onPress={() => undefined}
        placeholder="Sort"
      />,
    );

    expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`h-5`);
  });

  it('uses secondary select row visuals', () => {
    const { getByTestId } = render(
      <SortSelectButton
        testID={ROOT_TEST_ID}
        onPress={() => undefined}
        placeholder="Sort"
      />,
    );

    expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`bg-transparent`);
  });

  it('invokes onPress when pressed', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <SortSelectButton
        testID={ROOT_TEST_ID}
        onPress={onPress}
        endArrowDirection={SelectButtonEndArrow.Down}
        placeholder="Sort"
      />,
    );

    fireEvent.press(getByTestId(ROOT_TEST_ID));

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
