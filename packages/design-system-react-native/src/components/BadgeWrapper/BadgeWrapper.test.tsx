import {
  BadgeWrapperPositionAnchorShape,
  BadgeWrapperPosition,
} from '@metamask/design-system-shared';
import { render } from '@testing-library/react-native';
import React from 'react';

import { Text } from '../Text';

import { BadgeWrapper } from './BadgeWrapper';

describe('BadgeWrapper', () => {
  it('renders the anchor and badge without layout handlers', () => {
    const { getByTestId } = render(
      <BadgeWrapper testID="wrapper" badge={<Text testID="badge">Badge</Text>}>
        <Text testID="anchor">Anchor</Text>
      </BadgeWrapper>,
    );

    const wrapper = getByTestId('wrapper');
    const [anchorContainer, badgeContainer] = wrapper.props.children;

    expect(getByTestId('anchor')).toBeDefined();
    expect(getByTestId('badge')).toBeDefined();
    expect(anchorContainer.props.onLayout).toBeUndefined();
    expect(badgeContainer.props.onLayout).toBeUndefined();
  });

  it.each([
    [BadgeWrapperPosition.TopRight, { top: 4, right: 4 }],
    [BadgeWrapperPosition.BottomRight, { bottom: 4, right: 4 }],
    [BadgeWrapperPosition.BottomLeft, { bottom: 4, left: 4 }],
    [BadgeWrapperPosition.TopLeft, { top: 4, left: 4 }],
  ])('uses static circular position for %s', (position, edgeStyle) => {
    const { getByTestId } = render(
      <BadgeWrapper
        testID="wrapper"
        position={position}
        badge={<Text>Badge</Text>}
      >
        <Text>Anchor</Text>
      </BadgeWrapper>,
    );

    const badgeContainer = getByTestId('wrapper').props.children[1];

    expect(badgeContainer.props.style[1]).toMatchObject({
      width: 16,
      height: 16,
    });
    expect(badgeContainer.props.style[2]).toStrictEqual(
      expect.objectContaining({
        ...edgeStyle,
        transform: expect.any(Array),
      }),
    );
  });

  it('uses zero edge inset for rectangular anchors', () => {
    const { getByTestId } = render(
      <BadgeWrapper
        testID="wrapper"
        position={BadgeWrapperPosition.BottomRight}
        positionAnchorShape={BadgeWrapperPositionAnchorShape.Rectangular}
        badge={<Text>Badge</Text>}
      >
        <Text>Anchor</Text>
      </BadgeWrapper>,
    );

    expect(
      getByTestId('wrapper').props.children[1].props.style[2],
    ).toStrictEqual(
      expect.objectContaining({
        bottom: 0,
        right: 0,
      }),
    );
  });

  it('applies offsets without measuring', () => {
    const { getByTestId } = render(
      <BadgeWrapper
        testID="wrapper"
        position={BadgeWrapperPosition.BottomRight}
        positionXOffset={3}
        positionYOffset={-4}
        badge={<Text>Badge</Text>}
      >
        <Text>Anchor</Text>
      </BadgeWrapper>,
    );

    expect(
      getByTestId('wrapper').props.children[1].props.style[2].transform,
    ).toStrictEqual([{ translateX: 11 }, { translateY: 4 }]);
  });

  it('uses customPosition and allows badge container styles', () => {
    const { getByTestId } = render(
      <BadgeWrapper
        testID="wrapper"
        customPosition={{ top: 5, right: 10 }}
        badgeContainerProps={{ style: { width: 8, height: 8 } }}
        badge={<Text>Badge</Text>}
      >
        <Text>Anchor</Text>
      </BadgeWrapper>,
    );

    const badgeStyle = getByTestId('wrapper').props.children[1].props.style;
    expect(badgeStyle[2]).toStrictEqual({ top: 5, right: 10 });
    expect(badgeStyle[3]).toStrictEqual({ width: 8, height: 8 });
  });
});
