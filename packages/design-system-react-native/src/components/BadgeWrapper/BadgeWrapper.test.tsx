import {
  BadgeWrapperPositionAnchorShape,
  BadgeWrapperPosition,
} from '@metamask/design-system-shared';
import { render } from '@testing-library/react-native';
import React from 'react';

import { Text } from '../Text';

import { BadgeWrapper } from './BadgeWrapper';

describe('BadgeWrapper', () => {
  it('renders the anchor and badge', () => {
    const { getByTestId } = render(
      <BadgeWrapper
        testID="wrapper"
        badgeContainerProps={{ testID: 'badge-container' }}
        badge={<Text testID="badge">Badge</Text>}
      >
        <Text testID="anchor">Anchor</Text>
      </BadgeWrapper>,
    );

    expect(getByTestId('anchor')).toBeDefined();
    expect(getByTestId('badge')).toBeDefined();
    expect(getByTestId('badge-container')).toBeOnTheScreen();
  });

  it.each([
    [BadgeWrapperPosition.TopRight, { top: -8, right: -8 }],
    [BadgeWrapperPosition.BottomRight, { bottom: -8, right: -8 }],
    [BadgeWrapperPosition.BottomLeft, { bottom: -8, left: -8 }],
    [BadgeWrapperPosition.TopLeft, { top: -8, left: -8 }],
  ])('uses static circular position for %s', (position, edgeStyle) => {
    const { getByTestId } = render(
      <BadgeWrapper
        testID="wrapper"
        position={position}
        badgeContainerProps={{ testID: 'badge-container' }}
        badge={<Text>Badge</Text>}
      >
        <Text>Anchor</Text>
      </BadgeWrapper>,
    );

    expect(getByTestId('badge-container')).toHaveStyle({
      ...edgeStyle,
      transform: [{ translateX: 0 }, { translateY: 0 }],
    });
  });

  it('uses static overlap for rectangular anchors', () => {
    const { getByTestId } = render(
      <BadgeWrapper
        testID="wrapper"
        position={BadgeWrapperPosition.BottomRight}
        positionAnchorShape={BadgeWrapperPositionAnchorShape.Rectangular}
        badgeContainerProps={{ testID: 'badge-container' }}
        badge={<Text>Badge</Text>}
      >
        <Text>Anchor</Text>
      </BadgeWrapper>,
    );

    expect(getByTestId('badge-container')).toHaveStyle({
      bottom: -6,
      right: -6,
    });
  });

  it('applies offsets without measuring', () => {
    const { getByTestId } = render(
      <BadgeWrapper
        testID="wrapper"
        position={BadgeWrapperPosition.BottomRight}
        positionXOffset={3}
        positionYOffset={-4}
        badgeContainerProps={{ testID: 'badge-container' }}
        badge={<Text>Badge</Text>}
      >
        <Text>Anchor</Text>
      </BadgeWrapper>,
    );

    expect(getByTestId('badge-container')).toHaveStyle({
      transform: [{ translateX: 3 }, { translateY: -4 }],
    });
  });

  it('uses customPosition and allows badge container styles', () => {
    const { getByTestId } = render(
      <BadgeWrapper
        testID="wrapper"
        customPosition={{ top: 5, right: 10 }}
        badgeContainerProps={{
          testID: 'badge-container',
          style: { width: 8, height: 8 },
        }}
        badge={<Text>Badge</Text>}
      >
        <Text>Anchor</Text>
      </BadgeWrapper>,
    );

    expect(getByTestId('badge-container')).toHaveStyle({
      top: 5,
      right: 10,
      width: 8,
      height: 8,
    });
  });
});
