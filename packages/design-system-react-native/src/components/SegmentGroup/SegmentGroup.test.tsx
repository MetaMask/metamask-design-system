import {
  SelectButtonEndArrow,
  SegmentButtonVariant,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { fireEvent, render, renderHook } from '@testing-library/react-native';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import { SegmentButton } from '../SegmentButton';
import { SelectButton } from '../SelectButton';

import { SegmentGroup } from './SegmentGroup';

const GROUP_TEST_ID = 'segment-group';

const noopPress = () => undefined;

describe('SegmentGroup', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    const { result } = renderHook(() => useTailwind());
    tw = result.current;
  });

  it('renders children', () => {
    const { getByText } = render(
      <SegmentGroup value="a" onChange={noopPress} testID={GROUP_TEST_ID}>
        <SegmentButton value="a" onPress={noopPress}>
          A
        </SegmentButton>
      </SegmentGroup>,
    );

    expect(getByText('A')).toBeOnTheScreen();
  });

  it('merges default row layout into contentContainerStyle', () => {
    const { getByTestId } = render(
      <SegmentGroup value="a" onChange={noopPress} testID={GROUP_TEST_ID}>
        <SegmentButton value="a" onPress={noopPress}>
          A
        </SegmentButton>
      </SegmentGroup>,
    );

    const scroll = getByTestId(GROUP_TEST_ID);
    expect(scroll.props.horizontal).toBe(true);
    expect(scroll.props.showsHorizontalScrollIndicator).toBe(false);

    const expectedContent = tw.style('flex-row items-center gap-1');

    expect(
      StyleSheet.flatten(scroll.props.contentContainerStyle),
    ).toStrictEqual(StyleSheet.flatten(expectedContent));
  });

  it('merges twClassName into contentContainerStyle after defaults', () => {
    const { getByTestId } = render(
      <SegmentGroup
        value="a"
        onChange={noopPress}
        testID={GROUP_TEST_ID}
        twClassName="px-4"
      >
        <SegmentButton value="a" onPress={noopPress}>
          A
        </SegmentButton>
      </SegmentGroup>,
    );

    const scroll = getByTestId(GROUP_TEST_ID);
    const expectedContent = tw.style('flex-row items-center gap-1', 'px-4');

    expect(
      StyleSheet.flatten(scroll.props.contentContainerStyle),
    ).toStrictEqual(StyleSheet.flatten(expectedContent));
  });

  it('applies group variant to child segments that omit variant', () => {
    const { getByTestId } = render(
      <SegmentGroup
        value="a"
        onChange={noopPress}
        testID={GROUP_TEST_ID}
        variant={SegmentButtonVariant.Secondary}
      >
        <SegmentButton value="a" testID="seg-a" onPress={noopPress}>
          A
        </SegmentButton>
      </SegmentGroup>,
    );

    expect(getByTestId('seg-a')).toHaveStyle(tw`bg-muted`);
  });

  it('exposes tablist role on the container', () => {
    const { getByTestId } = render(
      <SegmentGroup value="a" onChange={noopPress} testID={GROUP_TEST_ID}>
        <SegmentButton value="a" onPress={noopPress}>
          A
        </SegmentButton>
      </SegmentGroup>,
    );

    expect(getByTestId(GROUP_TEST_ID)).toHaveProp(
      'accessibilityRole',
      'tablist',
    );
  });

  it('calls onChange when a different segment is pressed', () => {
    const onChange = jest.fn();

    const { getByText } = render(
      <SegmentGroup value="a" onChange={onChange} testID={GROUP_TEST_ID}>
        <SegmentButton value="a" onPress={noopPress}>
          A
        </SegmentButton>
        <SegmentButton value="b" onPress={noopPress}>
          B
        </SegmentButton>
      </SegmentGroup>,
    );

    fireEvent.press(getByText('B'));

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('b');
  });

  it('does not call onChange when the active segment is pressed again', () => {
    const onChange = jest.fn();

    const { getByText } = render(
      <SegmentGroup value="a" onChange={onChange} testID={GROUP_TEST_ID}>
        <SegmentButton value="a" onPress={noopPress}>
          A
        </SegmentButton>
        <SegmentButton value="b" onPress={noopPress}>
          B
        </SegmentButton>
      </SegmentGroup>,
    );

    fireEvent.press(getByText('A'));

    expect(onChange).not.toHaveBeenCalled();
  });

  it('reflects selection from value for participating SegmentButtons', () => {
    const { getByTestId } = render(
      <SegmentGroup value="b" onChange={noopPress} testID={GROUP_TEST_ID}>
        <SegmentButton value="a" testID="seg-a" onPress={noopPress}>
          A
        </SegmentButton>
        <SegmentButton value="b" testID="seg-b" onPress={noopPress}>
          B
        </SegmentButton>
      </SegmentGroup>,
    );

    expect(getByTestId('seg-a')).toHaveStyle(tw`bg-transparent`);
    expect(getByTestId('seg-b')).toHaveStyle(tw`bg-icon-default`);
  });

  it('allows non-segment children without affecting selection', () => {
    const onChange = jest.fn();

    const { getByText, getByTestId } = render(
      <SegmentGroup value="a" onChange={onChange} testID={GROUP_TEST_ID}>
        <SegmentButton value="a" onPress={noopPress}>
          A
        </SegmentButton>
        <SegmentButton value="b" onPress={noopPress}>
          B
        </SegmentButton>
        <SelectButton
          endArrowDirection={SelectButtonEndArrow.Down}
          onPress={noopPress}
          placeholder="More"
        />
      </SegmentGroup>,
    );

    fireEvent.press(getByText('More'));

    expect(onChange).not.toHaveBeenCalled();
    expect(getByTestId(GROUP_TEST_ID)).toBeOnTheScreen();
  });

  const ControlledFixture = () => {
    const [value, setValue] = useState('a');

    return (
      <SegmentGroup value={value} onChange={setValue} testID={GROUP_TEST_ID}>
        <SegmentButton value="a" testID="seg-a" onPress={noopPress}>
          A
        </SegmentButton>
        <SegmentButton value="b" testID="seg-b" onPress={noopPress}>
          B
        </SegmentButton>
      </SegmentGroup>
    );
  };

  it('updates selection when parent state changes after onChange', () => {
    const { getByText, getByTestId } = render(<ControlledFixture />);

    expect(getByTestId('seg-a')).toHaveStyle(tw`bg-icon-default`);

    fireEvent.press(getByText('B'));

    expect(getByTestId('seg-b')).toHaveStyle(tw`bg-icon-default`);
    expect(getByTestId('seg-a')).toHaveStyle(tw`bg-transparent`);
  });
});
