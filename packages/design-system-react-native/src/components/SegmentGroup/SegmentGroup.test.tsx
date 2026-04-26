import {
  BoxAlignItems,
  BoxFlexDirection,
  SelectButtonEndArrow,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { fireEvent, render } from '@testing-library/react-native';
import React, { useState } from 'react';

import { TWCLASSMAP_BOX_GAP } from '../Box/Box.constants';
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

  it('applies row layout, center alignment, and gap between children', () => {
    const { getByTestId } = render(
      <SegmentGroup value="a" onChange={noopPress} testID={GROUP_TEST_ID}>
        <SegmentButton value="a" onPress={noopPress}>
          A
        </SegmentButton>
      </SegmentGroup>,
    );

    expect(getByTestId(GROUP_TEST_ID)).toHaveStyle(
      tw.style(
        'flex',
        BoxFlexDirection.Row,
        BoxAlignItems.Center,
        TWCLASSMAP_BOX_GAP[3],
      ),
    );
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

    expect(getByTestId('seg-a')).toHaveStyle(tw`bg-muted`);
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
        >
          More
        </SelectButton>
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
    expect(getByTestId('seg-a')).toHaveStyle(tw`bg-muted`);
  });
});
