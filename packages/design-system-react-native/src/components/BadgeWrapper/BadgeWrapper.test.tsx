import React from 'react';
import { StyleSheet } from 'react-native';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { render, act } from '@testing-library/react-native';

import Text from '../Text';
import BadgeWrapper from './BadgeWrapper';
import {
  BadgeWrapperPosition,
  BadgeWrapperPositionAnchorShape,
} from './BadgeWrapper.types';

// Helper function to round numeric properties to two decimals.
const roundPositions = (pos: {
  [key: string]: number;
}): { [key: string]: number } => {
  const result: any = {};
  Object.keys(pos).forEach((key) => {
    result[key] = Number(pos[key].toFixed(2));
  });
  return result;
};
describe('BadgeWrapper', () => {
  it('computes the top right final positions correctly on circular anchor', () => {
    const TestComponent = () => {
      const tw = useTailwind();
      // Using props:
      // position: TopRight, positionAnchorShape: Circular,
      // positionXOffset & positionYOffset: 0.
      // Simulated dimensions:
      //   Anchor: width = 100, height = 50.
      //   Badge: width = 20, height = 20.
      //
      // Computation:
      //   anchorShapeXOffset = 100 * 0.1464 = 14.64
      //   anchorShapeYOffset = 50 * 0.1464 = 7.32
      //   badgeCenteringXOffset = 20 / 2 = 10
      //   badgeCenteringYOffset = 20 / 2 = 10
      //   finalXOffset = 14.64 - 10 + 0 = 4.64
      //   finalYOffset = 7.32 - 10 + 0 = -2.68
      // For TopRight Circular, expected positions: { top: -2.68, right: 4.64 }.
      const expectedPositions = { top: -2.68, right: 4.64 };
      const computedExpectedBadgeStyle = [tw`absolute`, expectedPositions];
      return (
        <>
          <BadgeWrapper
            testID="wrapper"
            position={BadgeWrapperPosition.TopRight}
            badge={<Text testID="badgeElement">Badge</Text>}
          >
            <Text testID="anchorChild">Anchor</Text>
          </BadgeWrapper>
          <Text testID="expectedBadgeStyle">
            {JSON.stringify(computedExpectedBadgeStyle)}
          </Text>
        </>
      );
    };

    const { getByTestId } = render(<TestComponent />);

    // Initially get the wrapper and its children.
    let wrapper = getByTestId('wrapper');
    const children = wrapper.props.children;
    const anchorContainer = children[0];
    const badgeContainer = children[1];

    // Simulate layout events:
    act(() => {
      anchorContainer.props.onLayout({
        nativeEvent: { layout: { width: 100, height: 50 } },
      });
      badgeContainer.props.onLayout({
        nativeEvent: { layout: { width: 20, height: 20 } },
      });
    });
    // Force a re-read of the updated component.
    wrapper = getByTestId('wrapper');
    const updatedBadgeContainer = wrapper.props.children[1];

    const expectedBadgeStyleRaw = JSON.parse(
      getByTestId('expectedBadgeStyle').props.children,
    );
    const expectedPositionsRounded = roundPositions(expectedBadgeStyleRaw[1]);
    const actualPositions = updatedBadgeContainer.props.style[1];
    const actualPositionsRounded = roundPositions(actualPositions);

    // Check the first element (the absolute style) and the computed positions.
    expect(updatedBadgeContainer.props.style[0]).toStrictEqual(
      expectedBadgeStyleRaw[0],
    );
    expect(actualPositionsRounded).toStrictEqual(expectedPositionsRounded);
  });

  it('computes the top right final positions correctly on rectangular anchor', () => {
    const TestComponent = () => {
      const tw = useTailwind();
      // Using default props:
      // position: TopRight, positionAnchorShape: Rectangular,
      // positionXOffset & positionYOffset: 0.
      // Simulated dimensions:
      //   Anchor: width = 100, height = 50.
      //   Badge: width = 20, height = 20.
      //
      // Computation:
      //   anchorShapeXOffset = 0
      //   anchorShapeYOffset = 0
      //   badgeCenteringXOffset = 20 / 2 = 10
      //   badgeCenteringYOffset = 20 / 2 = 10
      //   finalXOffset = 0 - 10 + 0 = -10
      //   finalYOffset = 0 - 10 + 0 = -10
      // For TopRight Rectangular, expected positions: { top: -10, right: -10 }.
      const expectedPositions = { top: -10, right: -10 };
      const computedExpectedBadgeStyle = [tw`absolute`, expectedPositions];
      return (
        <>
          <BadgeWrapper
            testID="wrapper"
            position={BadgeWrapperPosition.TopRight}
            positionAnchorShape={BadgeWrapperPositionAnchorShape.Rectangular}
            badge={<Text testID="badgeElement">Badge</Text>}
          >
            <Text testID="anchorChild">Anchor</Text>
          </BadgeWrapper>
          <Text testID="expectedBadgeStyle">
            {JSON.stringify(computedExpectedBadgeStyle)}
          </Text>
        </>
      );
    };

    const { getByTestId } = render(<TestComponent />);

    // Initially get the wrapper and its children.
    let wrapper = getByTestId('wrapper');
    const children = wrapper.props.children;
    const anchorContainer = children[0];
    const badgeContainer = children[1];

    // Simulate layout events:
    act(() => {
      anchorContainer.props.onLayout({
        nativeEvent: { layout: { width: 100, height: 50 } },
      });
      badgeContainer.props.onLayout({
        nativeEvent: { layout: { width: 20, height: 20 } },
      });
    });
    // Force a re-read of the updated component.
    wrapper = getByTestId('wrapper');
    const updatedBadgeContainer = wrapper.props.children[1];

    const expectedBadgeStyleRaw = JSON.parse(
      getByTestId('expectedBadgeStyle').props.children,
    );
    const expectedPositionsRounded = roundPositions(expectedBadgeStyleRaw[1]);
    const actualPositions = updatedBadgeContainer.props.style[1];
    const actualPositionsRounded = roundPositions(actualPositions);

    // Check the first element (the absolute style) and the computed positions.
    expect(updatedBadgeContainer.props.style[0]).toStrictEqual(
      expectedBadgeStyleRaw[0],
    );
    expect(actualPositionsRounded).toStrictEqual(expectedPositionsRounded);
  });

  it('computes the bottom right final positions correctly on circular anchor', () => {
    const TestComponent = () => {
      const tw = useTailwind();
      // Using props:
      // position: BottomRight, positionAnchorShape: Circular,
      // positionXOffset & positionYOffset: 0.
      // Simulated dimensions:
      //   Anchor: width = 100, height = 50.
      //   Badge: width = 20, height = 20.
      //
      // Computation:
      //   anchorShapeXOffset = 100 * 0.1464 = 14.64
      //   anchorShapeYOffset = 50 * 0.1464 = 7.32
      //   badgeCenteringXOffset = 20 / 2 = 10
      //   badgeCenteringYOffset = 20 / 2 = 10
      //   finalXOffset = 14.64 - 10 + 0 = 4.64
      //   finalYOffset = 7.32 - 10 + 0 = -2.68
      // For BottomRight Circular, expected positions: { bottom: -2.68, right: 4.64 }.
      const expectedPositions = { bottom: -2.68, right: 4.64 };
      const computedExpectedBadgeStyle = [tw`absolute`, expectedPositions];
      return (
        <>
          <BadgeWrapper
            testID="wrapper"
            position={BadgeWrapperPosition.BottomRight}
            badge={<Text testID="badgeElement">Badge</Text>}
          >
            <Text testID="anchorChild">Anchor</Text>
          </BadgeWrapper>
          <Text testID="expectedBadgeStyle">
            {JSON.stringify(computedExpectedBadgeStyle)}
          </Text>
        </>
      );
    };

    const { getByTestId } = render(<TestComponent />);

    // Initially get the wrapper and its children.
    let wrapper = getByTestId('wrapper');
    const children = wrapper.props.children;
    const anchorContainer = children[0];
    const badgeContainer = children[1];

    // Simulate layout events:
    act(() => {
      anchorContainer.props.onLayout({
        nativeEvent: { layout: { width: 100, height: 50 } },
      });
      badgeContainer.props.onLayout({
        nativeEvent: { layout: { width: 20, height: 20 } },
      });
    });
    // Force a re-read of the updated component.
    wrapper = getByTestId('wrapper');
    const updatedBadgeContainer = wrapper.props.children[1];

    const expectedBadgeStyleRaw = JSON.parse(
      getByTestId('expectedBadgeStyle').props.children,
    );
    const expectedPositionsRounded = roundPositions(expectedBadgeStyleRaw[1]);
    const actualPositions = updatedBadgeContainer.props.style[1];
    const actualPositionsRounded = roundPositions(actualPositions);

    // Check the first element (the absolute style) and the computed positions.
    expect(updatedBadgeContainer.props.style[0]).toStrictEqual(
      expectedBadgeStyleRaw[0],
    );
    expect(actualPositionsRounded).toStrictEqual(expectedPositionsRounded);
  });

  it('computes the bottom right final positions correctly on rectangular anchor', () => {
    const TestComponent = () => {
      const tw = useTailwind();
      // Using default props:
      // position: BottomRight, positionAnchorShape: Rectangular,
      // positionXOffset & positionYOffset: 0.
      // Simulated dimensions:
      //   Anchor: width = 100, height = 50.
      //   Badge: width = 20, height = 20.
      //
      // Computation:
      //   anchorShapeXOffset = 0
      //   anchorShapeYOffset = 0
      //   badgeCenteringXOffset = 20 / 2 = 10
      //   badgeCenteringYOffset = 20 / 2 = 10
      //   finalXOffset = 0 - 10 + 0 = -10
      //   finalYOffset = 0 - 10 + 0 = -10
      // For BottomRight Rectangular, expected positions: { bottom: -10, right: -10 }.
      const expectedPositions = { bottom: -10, right: -10 };
      const computedExpectedBadgeStyle = [tw`absolute`, expectedPositions];
      return (
        <>
          <BadgeWrapper
            testID="wrapper"
            position={BadgeWrapperPosition.BottomRight}
            positionAnchorShape={BadgeWrapperPositionAnchorShape.Rectangular}
            badge={<Text testID="badgeElement">Badge</Text>}
          >
            <Text testID="anchorChild">Anchor</Text>
          </BadgeWrapper>
          <Text testID="expectedBadgeStyle">
            {JSON.stringify(computedExpectedBadgeStyle)}
          </Text>
        </>
      );
    };

    const { getByTestId } = render(<TestComponent />);

    // Initially get the wrapper and its children.
    let wrapper = getByTestId('wrapper');
    const children = wrapper.props.children;
    const anchorContainer = children[0];
    const badgeContainer = children[1];

    // Simulate layout events:
    act(() => {
      anchorContainer.props.onLayout({
        nativeEvent: { layout: { width: 100, height: 50 } },
      });
      badgeContainer.props.onLayout({
        nativeEvent: { layout: { width: 20, height: 20 } },
      });
    });
    // Force a re-read of the updated component.
    wrapper = getByTestId('wrapper');
    const updatedBadgeContainer = wrapper.props.children[1];

    const expectedBadgeStyleRaw = JSON.parse(
      getByTestId('expectedBadgeStyle').props.children,
    );
    const expectedPositionsRounded = roundPositions(expectedBadgeStyleRaw[1]);
    const actualPositions = updatedBadgeContainer.props.style[1];
    const actualPositionsRounded = roundPositions(actualPositions);

    // Check the first element (the absolute style) and the computed positions.
    expect(updatedBadgeContainer.props.style[0]).toStrictEqual(
      expectedBadgeStyleRaw[0],
    );
    expect(actualPositionsRounded).toStrictEqual(expectedPositionsRounded);
  });

  it('computes the bottom left final positions correctly on circular anchor', () => {
    const TestComponent = () => {
      const tw = useTailwind();
      // Using props:
      // position: BottomLeft, positionAnchorShape: Circular,
      // positionXOffset & positionYOffset: 0.
      // Simulated dimensions:
      //   Anchor: width = 100, height = 50.
      //   Badge: width = 20, height = 20.
      //
      // Computation:
      //   anchorShapeXOffset = 100 * 0.1464 = 14.64
      //   anchorShapeYOffset = 50 * 0.1464 = 7.32
      //   badgeCenteringXOffset = 20 / 2 = 10
      //   badgeCenteringYOffset = 20 / 2 = 10
      //   finalXOffset = 14.64 - 10 + 0 = 4.64
      //   finalYOffset = 7.32 - 10 + 0 = -2.68
      // For BottomLeft Circular, expected positions: { bottom: -2.68, left: 4.64 }.
      const expectedPositions = { bottom: -2.68, left: 4.64 };
      const computedExpectedBadgeStyle = [tw`absolute`, expectedPositions];
      return (
        <>
          <BadgeWrapper
            testID="wrapper"
            position={BadgeWrapperPosition.BottomLeft}
            badge={<Text testID="badgeElement">Badge</Text>}
          >
            <Text testID="anchorChild">Anchor</Text>
          </BadgeWrapper>
          <Text testID="expectedBadgeStyle">
            {JSON.stringify(computedExpectedBadgeStyle)}
          </Text>
        </>
      );
    };

    const { getByTestId } = render(<TestComponent />);

    // Initially get the wrapper and its children.
    let wrapper = getByTestId('wrapper');
    const children = wrapper.props.children;
    const anchorContainer = children[0];
    const badgeContainer = children[1];

    // Simulate layout events:
    act(() => {
      anchorContainer.props.onLayout({
        nativeEvent: { layout: { width: 100, height: 50 } },
      });
      badgeContainer.props.onLayout({
        nativeEvent: { layout: { width: 20, height: 20 } },
      });
    });
    // Force a re-read of the updated component.
    wrapper = getByTestId('wrapper');
    const updatedBadgeContainer = wrapper.props.children[1];

    const expectedBadgeStyleRaw = JSON.parse(
      getByTestId('expectedBadgeStyle').props.children,
    );
    const expectedPositionsRounded = roundPositions(expectedBadgeStyleRaw[1]);
    const actualPositions = updatedBadgeContainer.props.style[1];
    const actualPositionsRounded = roundPositions(actualPositions);

    // Check the first element (the absolute style) and the computed positions.
    expect(updatedBadgeContainer.props.style[0]).toStrictEqual(
      expectedBadgeStyleRaw[0],
    );
    expect(actualPositionsRounded).toStrictEqual(expectedPositionsRounded);
  });

  it('computes the bottom left final positions correctly on rectangular anchor', () => {
    const TestComponent = () => {
      const tw = useTailwind();
      // Using default props:
      // position: BottomLeft, positionAnchorShape: Rectangular,
      // positionXOffset & positionYOffset: 0.
      // Simulated dimensions:
      //   Anchor: width = 100, height = 50.
      //   Badge: width = 20, height = 20.
      //
      // Computation:
      //   anchorShapeXOffset = 0
      //   anchorShapeYOffset = 0
      //   badgeCenteringXOffset = 20 / 2 = 10
      //   badgeCenteringYOffset = 20 / 2 = 10
      //   finalXOffset = 0 - 10 + 0 = -10
      //   finalYOffset = 0 - 10 + 0 = -10
      // For BottomLeft Rectangular, expected positions: { bottom: -10, left: -10 }.
      const expectedPositions = { bottom: -10, left: -10 };
      const computedExpectedBadgeStyle = [tw`absolute`, expectedPositions];
      return (
        <>
          <BadgeWrapper
            testID="wrapper"
            position={BadgeWrapperPosition.BottomLeft}
            positionAnchorShape={BadgeWrapperPositionAnchorShape.Rectangular}
            badge={<Text testID="badgeElement">Badge</Text>}
          >
            <Text testID="anchorChild">Anchor</Text>
          </BadgeWrapper>
          <Text testID="expectedBadgeStyle">
            {JSON.stringify(computedExpectedBadgeStyle)}
          </Text>
        </>
      );
    };

    const { getByTestId } = render(<TestComponent />);

    // Initially get the wrapper and its children.
    let wrapper = getByTestId('wrapper');
    const children = wrapper.props.children;
    const anchorContainer = children[0];
    const badgeContainer = children[1];

    // Simulate layout events:
    act(() => {
      anchorContainer.props.onLayout({
        nativeEvent: { layout: { width: 100, height: 50 } },
      });
      badgeContainer.props.onLayout({
        nativeEvent: { layout: { width: 20, height: 20 } },
      });
    });
    // Force a re-read of the updated component.
    wrapper = getByTestId('wrapper');
    const updatedBadgeContainer = wrapper.props.children[1];

    const expectedBadgeStyleRaw = JSON.parse(
      getByTestId('expectedBadgeStyle').props.children,
    );
    const expectedPositionsRounded = roundPositions(expectedBadgeStyleRaw[1]);
    const actualPositions = updatedBadgeContainer.props.style[1];
    const actualPositionsRounded = roundPositions(actualPositions);

    // Check the first element (the absolute style) and the computed positions.
    expect(updatedBadgeContainer.props.style[0]).toStrictEqual(
      expectedBadgeStyleRaw[0],
    );
    expect(actualPositionsRounded).toStrictEqual(expectedPositionsRounded);
  });

  it('computes the top left final positions correctly on circular anchor', () => {
    const TestComponent = () => {
      const tw = useTailwind();
      // Using props:
      // position: TopLeft, positionAnchorShape: Circular,
      // positionXOffset & positionYOffset: 0.
      // Simulated dimensions:
      //   Anchor: width = 100, height = 50.
      //   Badge: width = 20, height = 20.
      //
      // Computation:
      //   anchorShapeXOffset = 100 * 0.1464 = 14.64
      //   anchorShapeYOffset = 50 * 0.1464 = 7.32
      //   badgeCenteringXOffset = 20 / 2 = 10
      //   badgeCenteringYOffset = 20 / 2 = 10
      //   finalXOffset = 14.64 - 10 + 0 = 4.64
      //   finalYOffset = 7.32 - 10 + 0 = -2.68
      // For TopLeft Circular, expected positions: { top: -2.68, left: 4.64 }.
      const expectedPositions = { top: -2.68, left: 4.64 };
      const computedExpectedBadgeStyle = [tw`absolute`, expectedPositions];
      return (
        <>
          <BadgeWrapper
            testID="wrapper"
            position={BadgeWrapperPosition.TopLeft}
            badge={<Text testID="badgeElement">Badge</Text>}
          >
            <Text testID="anchorChild">Anchor</Text>
          </BadgeWrapper>
          <Text testID="expectedBadgeStyle">
            {JSON.stringify(computedExpectedBadgeStyle)}
          </Text>
        </>
      );
    };

    const { getByTestId } = render(<TestComponent />);

    // Initially get the wrapper and its children.
    let wrapper = getByTestId('wrapper');
    const children = wrapper.props.children;
    const anchorContainer = children[0];
    const badgeContainer = children[1];

    // Simulate layout events:
    act(() => {
      anchorContainer.props.onLayout({
        nativeEvent: { layout: { width: 100, height: 50 } },
      });
      badgeContainer.props.onLayout({
        nativeEvent: { layout: { width: 20, height: 20 } },
      });
    });
    // Force a re-read of the updated component.
    wrapper = getByTestId('wrapper');
    const updatedBadgeContainer = wrapper.props.children[1];

    const expectedBadgeStyleRaw = JSON.parse(
      getByTestId('expectedBadgeStyle').props.children,
    );
    const expectedPositionsRounded = roundPositions(expectedBadgeStyleRaw[1]);
    const actualPositions = updatedBadgeContainer.props.style[1];
    const actualPositionsRounded = roundPositions(actualPositions);

    // Check the first element (the absolute style) and the computed positions.
    expect(updatedBadgeContainer.props.style[0]).toStrictEqual(
      expectedBadgeStyleRaw[0],
    );
    expect(actualPositionsRounded).toStrictEqual(expectedPositionsRounded);
  });

  it('computes the top left final positions correctly on rectangular anchor', () => {
    const TestComponent = () => {
      const tw = useTailwind();
      // Using default props:
      // position: TopLeft, positionAnchorShape: Rectangular,
      // positionXOffset & positionYOffset: 0.
      // Simulated dimensions:
      //   Anchor: width = 100, height = 50.
      //   Badge: width = 20, height = 20.
      //
      // Computation:
      //   anchorShapeXOffset = 0
      //   anchorShapeYOffset = 0
      //   badgeCenteringXOffset = 20 / 2 = 10
      //   badgeCenteringYOffset = 20 / 2 = 10
      //   finalXOffset = 0 - 10 + 0 = -10
      //   finalYOffset = 0 - 10 + 0 = -10
      // For TopLeft Rectangular, expected positions: { top: -10, left: -10 }.
      const expectedPositions = { top: -10, left: -10 };
      const computedExpectedBadgeStyle = [tw`absolute`, expectedPositions];
      return (
        <>
          <BadgeWrapper
            testID="wrapper"
            position={BadgeWrapperPosition.TopLeft}
            positionAnchorShape={BadgeWrapperPositionAnchorShape.Rectangular}
            badge={<Text testID="badgeElement">Badge</Text>}
          >
            <Text testID="anchorChild">Anchor</Text>
          </BadgeWrapper>
          <Text testID="expectedBadgeStyle">
            {JSON.stringify(computedExpectedBadgeStyle)}
          </Text>
        </>
      );
    };

    const { getByTestId } = render(<TestComponent />);

    // Initially get the wrapper and its children.
    let wrapper = getByTestId('wrapper');
    const children = wrapper.props.children;
    const anchorContainer = children[0];
    const badgeContainer = children[1];

    // Simulate layout events:
    act(() => {
      anchorContainer.props.onLayout({
        nativeEvent: { layout: { width: 100, height: 50 } },
      });
      badgeContainer.props.onLayout({
        nativeEvent: { layout: { width: 20, height: 20 } },
      });
    });
    // Force a re-read of the updated component.
    wrapper = getByTestId('wrapper');
    const updatedBadgeContainer = wrapper.props.children[1];

    const expectedBadgeStyleRaw = JSON.parse(
      getByTestId('expectedBadgeStyle').props.children,
    );
    const expectedPositionsRounded = roundPositions(expectedBadgeStyleRaw[1]);
    const actualPositions = updatedBadgeContainer.props.style[1];
    const actualPositionsRounded = roundPositions(actualPositions);

    // Check the first element (the absolute style) and the computed positions.
    expect(updatedBadgeContainer.props.style[0]).toStrictEqual(
      expectedBadgeStyleRaw[0],
    );
    expect(actualPositionsRounded).toStrictEqual(expectedPositionsRounded);
  });

  it('uses customPosition if provided, ignoring layout events', () => {
    const customPosition = { top: 5, left: 10 };
    const TestComponent = () => {
      const tw = useTailwind();
      const computedExpectedBadgeStyle = [tw`absolute`, customPosition];
      return (
        <>
          <BadgeWrapper
            testID="wrapper"
            customPosition={customPosition}
            badge={<Text testID="badgeElement">Badge</Text>}
          >
            <Text testID="anchorChild">Anchor</Text>
          </BadgeWrapper>
          <Text testID="expectedBadgeStyle">
            {JSON.stringify(computedExpectedBadgeStyle)}
          </Text>
        </>
      );
    };

    const { getByTestId } = render(<TestComponent />);
    const expectedBadgeStyle = JSON.parse(
      getByTestId('expectedBadgeStyle').props.children,
    );
    const wrapper = getByTestId('wrapper');
    const children = wrapper.props.children;
    const badgeContainer = children[1];
    expect(badgeContainer.props.style[1]).toStrictEqual(expectedBadgeStyle[1]);
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
    expect(wrapper.props.accessibilityLabel).toStrictEqual('badge-wrapper');
  });
});
