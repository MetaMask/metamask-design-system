import {
  BadgeWrapperPositionAnchorShape,
  BadgeWrapperPosition,
} from '@metamask/design-system-shared';
import { render } from '@testing-library/react-native';
import React from 'react';
import { StyleSheet } from 'react-native';

import { Text } from '../Text';

import { BadgeWrapper } from './BadgeWrapper';

// Re-derived independently (not imported) so this test catches the
// component's formula drifting from the intended geometry.
const CIRCULAR_ANCHOR_CORNER_OFFSET_PERCENT = `${
  ((2 - Math.sqrt(2)) / 4) * 100
}%`;

const renderBadgeWrapper = (
  props: Partial<React.ComponentProps<typeof BadgeWrapper>> = {},
) => {
  const { getByTestId } = render(
    <BadgeWrapper
      testID="wrapper"
      badge={<Text testID="badgeElement">Badge</Text>}
      {...props}
    >
      <Text testID="anchorChild">Anchor</Text>
    </BadgeWrapper>,
  );
  const wrapper = getByTestId('wrapper');
  const [anchorContainer, badgeContainer] = wrapper.props.children;
  return { wrapper, anchorContainer, badgeContainer };
};

describe('BadgeWrapper', () => {
  it('does not measure either the anchor or the badge via onLayout', () => {
    // Positioning comes purely from layout now, so there's nothing left to
    // measure -- and nothing that can jump or loop from a measurement.
    const { anchorContainer, badgeContainer } = renderBadgeWrapper();
    expect(anchorContainer.props.onLayout).toBeUndefined();
    expect(badgeContainer.props.onLayout).toBeUndefined();
  });

  it.each([
    {
      position: BadgeWrapperPosition.TopRight,
      expected: {
        top: CIRCULAR_ANCHOR_CORNER_OFFSET_PERCENT,
        right: CIRCULAR_ANCHOR_CORNER_OFFSET_PERCENT,
        transform: [
          { translateY: '-50%' },
          { translateY: 0 },
          { translateX: '50%' },
          { translateX: 0 },
        ],
      },
    },
    {
      position: BadgeWrapperPosition.TopLeft,
      expected: {
        top: CIRCULAR_ANCHOR_CORNER_OFFSET_PERCENT,
        left: CIRCULAR_ANCHOR_CORNER_OFFSET_PERCENT,
        transform: [
          { translateY: '-50%' },
          { translateY: 0 },
          { translateX: '-50%' },
          { translateX: 0 },
        ],
      },
    },
    {
      position: BadgeWrapperPosition.BottomRight,
      expected: {
        bottom: CIRCULAR_ANCHOR_CORNER_OFFSET_PERCENT,
        right: CIRCULAR_ANCHOR_CORNER_OFFSET_PERCENT,
        transform: [
          { translateY: '50%' },
          { translateY: 0 },
          { translateX: '50%' },
          { translateX: 0 },
        ],
      },
    },
    {
      position: BadgeWrapperPosition.BottomLeft,
      expected: {
        bottom: CIRCULAR_ANCHOR_CORNER_OFFSET_PERCENT,
        left: CIRCULAR_ANCHOR_CORNER_OFFSET_PERCENT,
        transform: [
          { translateY: '50%' },
          { translateY: 0 },
          { translateX: '-50%' },
          { translateX: 0 },
        ],
      },
    },
  ])(
    'computes the $position position on a circular anchor (default shape)',
    ({ position, expected }) => {
      const { badgeContainer } = renderBadgeWrapper({ position });
      expect(badgeContainer.props.style[1]).toStrictEqual(expected);
    },
  );

  it.each([
    {
      position: BadgeWrapperPosition.TopRight,
      expected: {
        top: 0,
        right: 0,
        transform: [
          { translateY: '-50%' },
          { translateY: 0 },
          { translateX: '50%' },
          { translateX: 0 },
        ],
      },
    },
    {
      position: BadgeWrapperPosition.BottomLeft,
      expected: {
        bottom: 0,
        left: 0,
        transform: [
          { translateY: '50%' },
          { translateY: 0 },
          { translateX: '-50%' },
          { translateX: 0 },
        ],
      },
    },
  ])(
    'computes the $position position on a rectangular anchor (no corner offset)',
    ({ position, expected }) => {
      const { badgeContainer } = renderBadgeWrapper({
        position,
        positionAnchorShape: BadgeWrapperPositionAnchorShape.Rectangular,
      });
      expect(badgeContainer.props.style[1]).toStrictEqual(expected);
    },
  );

  it('applies positionXOffset and positionYOffset as extra pixel translate steps', () => {
    const { badgeContainer } = renderBadgeWrapper({
      position: BadgeWrapperPosition.BottomRight,
      positionXOffset: 3,
      positionYOffset: -4,
    });
    expect(badgeContainer.props.style[1]).toStrictEqual({
      bottom: CIRCULAR_ANCHOR_CORNER_OFFSET_PERCENT,
      right: CIRCULAR_ANCHOR_CORNER_OFFSET_PERCENT,
      transform: [
        { translateY: '50%' },
        { translateY: -4 },
        { translateX: '50%' },
        { translateX: 3 },
      ],
    });
  });

  it('uses customPosition if provided, bypassing the corner-offset calculation entirely', () => {
    const customPosition = { top: 5, left: 10 };
    const { badgeContainer } = renderBadgeWrapper({
      position: BadgeWrapperPosition.BottomRight,
      positionXOffset: 100,
      customPosition,
    });
    expect(badgeContainer.props.style[1]).toStrictEqual(customPosition);
  });

  it('applies additional container style and forwards extra props', () => {
    // Since BadgeWrapper renders:
    // <View style={[tw`relative self-start`, style]} {...props}>
    // The default style from tw`relative self-start` is merged with custom style.
    // We expect the flattened style to contain both default properties and the custom style.
    const customStyle = { margin: 10 };
    const extraProp = { accessibilityLabel: 'badge-wrapper' };
    const TestComponent = () => (
      <BadgeWrapper
        testID="wrapper"
        style={customStyle}
        {...extraProp}
        badge={<Text>Badge</Text>}
      >
        <Text>Anchor</Text>
      </BadgeWrapper>
    );
    const { getByTestId } = render(<TestComponent />);
    const wrapper = getByTestId('wrapper');
    // Flatten the style to compare:
    const flattenedStyle = StyleSheet.flatten(wrapper.props.style);
    // Expect default properties from tw`relative self-start`
    expect(flattenedStyle).toMatchObject({
      position: 'relative',
      alignSelf: 'flex-start',
      margin: 10,
    });
    expect(wrapper.props.accessibilityLabel).toBe('badge-wrapper');
  });
});
