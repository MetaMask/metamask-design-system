import React from 'react';
import { render } from '@testing-library/react-native';
import { useTailwind } from '@metamask/design-system-twrnc-preset';

import Text, { TextColor, FontWeight } from '../Text';
import BadgeCount from './BadgeCount';
import { BadgeCountSize } from './BadgeCount.types';
import {
  MAP_BADGECOUNT_SIZE_TEXTVARIANT,
  TWCLASSMAP_BADGECOUNT_SIZE_CONTAINER,
  MAP_BADGECOUNT_SIZE_LINEHEIGHT,
} from './BadgeCount.constants';

describe('BadgeCount', () => {
  it('renders with default props and count less than max', () => {
    const TestComponent = () => {
      const tw = useTailwind();
      const sizeVal = BadgeCountSize.Md;
      const computedExpectedOuter = tw`
        bg-error-default
        rounded-lg
        items-center
        justify-center
        self-start
        ${TWCLASSMAP_BADGECOUNT_SIZE_CONTAINER[sizeVal]}
      `;
      const expectedTextProps = {
        variant: MAP_BADGECOUNT_SIZE_TEXTVARIANT[sizeVal],
        color: TextColor.ErrorInverse,
        fontWeight: FontWeight.Medium,
        // Note: trailing space comes from template literal if textProps.twClassName is undefined.
        twClassName: `${MAP_BADGECOUNT_SIZE_LINEHEIGHT[sizeVal]} `,
      };
      return (
        <>
          <BadgeCount count={50} testID="badge-count" />
          <Text testID="expectedOuter">
            {JSON.stringify(computedExpectedOuter)}
          </Text>
          <Text testID="expectedTextProps">
            {JSON.stringify(expectedTextProps)}
          </Text>
        </>
      );
    };

    const { getByTestId } = render(<TestComponent />);
    const expectedOuter = JSON.parse(
      getByTestId('expectedOuter').props.children,
    );
    const expectedTextProps = JSON.parse(
      getByTestId('expectedTextProps').props.children,
    );
    const container = getByTestId('badge-count');
    // Outer container style (first element of style array) should match expected
    expect(container.props.style[0]).toStrictEqual(expectedOuter);
    // Inner Text should render the count as a string
    const textElement = container.props.children;
    expect(textElement.props.children).toStrictEqual('50');
    // Verify that Text props are set correctly
    expect(textElement.props.variant).toStrictEqual(expectedTextProps.variant);
    expect(textElement.props.color).toStrictEqual(expectedTextProps.color);
    expect(textElement.props.fontWeight).toStrictEqual(
      expectedTextProps.fontWeight,
    );
    expect(textElement.props.twClassName).toContain(
      MAP_BADGECOUNT_SIZE_LINEHEIGHT[BadgeCountSize.Md],
    );
  });

  it('renders with count greater than max (overflow)', () => {
    const TestComponent = () => {
      const tw = useTailwind();
      const sizeVal = BadgeCountSize.Md;
      const computedExpectedOuter = tw`
        bg-error-default
        rounded-lg
        items-center
        justify-center
        self-start
        ${TWCLASSMAP_BADGECOUNT_SIZE_CONTAINER[sizeVal]}
      `;
      return (
        <>
          <BadgeCount count={150} max={99} testID="badge-count" />
          <Text testID="expectedOuter">
            {JSON.stringify(computedExpectedOuter)}
          </Text>
        </>
      );
    };

    const { getByTestId } = render(<TestComponent />);
    const expectedOuter = JSON.parse(
      getByTestId('expectedOuter').props.children,
    );
    const container = getByTestId('badge-count');
    expect(container.props.style[0]).toStrictEqual(expectedOuter);
    const textElement = container.props.children;
    // When count > max, text should be "99+"
    expect(textElement.props.children).toStrictEqual('99+');
  });

  it('applies custom textProps overrides', () => {
    const customTextProps = {
      color: TextColor.PrimaryDefault,
      fontWeight: FontWeight.Bold,
      twClassName: 'custom',
    };
    const TestComponent = () => {
      const tw = useTailwind();
      const sizeVal = BadgeCountSize.Md;
      const computedExpectedOuter = tw`
        bg-error-default
        rounded-lg
        items-center
        justify-center
        self-start
        ${TWCLASSMAP_BADGECOUNT_SIZE_CONTAINER[sizeVal]}
      `;
      const expectedTextProps = {
        variant: MAP_BADGECOUNT_SIZE_TEXTVARIANT[sizeVal],
        color: customTextProps.color, // overridden
        fontWeight: customTextProps.fontWeight, // overridden
        twClassName: `${MAP_BADGECOUNT_SIZE_LINEHEIGHT[sizeVal]} ${customTextProps.twClassName}`,
      };
      return (
        <>
          <BadgeCount
            count={25}
            textProps={customTextProps}
            testID="badge-count"
          />
          <Text testID="expectedOuter">
            {JSON.stringify(computedExpectedOuter)}
          </Text>
          <Text testID="expectedTextProps">
            {JSON.stringify(expectedTextProps)}
          </Text>
        </>
      );
    };

    const { getByTestId } = render(<TestComponent />);
    const expectedOuter = JSON.parse(
      getByTestId('expectedOuter').props.children,
    );
    const expectedTextProps = JSON.parse(
      getByTestId('expectedTextProps').props.children,
    );
    const container = getByTestId('badge-count');
    expect(container.props.style[0]).toStrictEqual(expectedOuter);
    const textElement = container.props.children;
    expect(textElement.props.children).toStrictEqual('25');
    expect(textElement.props.variant).toStrictEqual(expectedTextProps.variant);
    expect(textElement.props.color).toStrictEqual(expectedTextProps.color);
    expect(textElement.props.fontWeight).toStrictEqual(
      expectedTextProps.fontWeight,
    );
    expect(textElement.props.twClassName).toContain(
      MAP_BADGECOUNT_SIZE_LINEHEIGHT[BadgeCountSize.Md],
    );
    expect(textElement.props.twClassName).toContain('custom');
  });

  it('applies additional container style and forwards extra props', () => {
    const customStyle = { margin: 10 };
    const extraProp = { accessibilityLabel: 'badge' };
    const TestComponent = () => (
      <BadgeCount
        count={10}
        style={customStyle}
        testID="badge-count"
        {...extraProp}
      />
    );
    const { getByTestId } = render(<TestComponent />);
    const container = getByTestId('badge-count');
    // The container style is an array; customStyle should be included.
    expect(container.props.style).toEqual(
      expect.arrayContaining([customStyle]),
    );
    expect(container.props.accessibilityLabel).toStrictEqual('badge');
  });

  it('renders with custom size Lg', () => {
    const customSize = BadgeCountSize.Lg;
    const TestComponent = () => {
      const tw = useTailwind();
      const computedExpectedOuter = tw`
        bg-error-default
        rounded-lg
        items-center
        justify-center
        self-start
        ${TWCLASSMAP_BADGECOUNT_SIZE_CONTAINER[customSize]}
      `;
      const expectedTextProps = {
        variant: MAP_BADGECOUNT_SIZE_TEXTVARIANT[customSize],
        color: TextColor.ErrorInverse,
        fontWeight: FontWeight.Medium,
        twClassName: `${MAP_BADGECOUNT_SIZE_LINEHEIGHT[customSize]} `,
      };
      return (
        <>
          <BadgeCount count={5} size={customSize} testID="badge-count" />
          <Text testID="expectedOuter">
            {JSON.stringify(computedExpectedOuter)}
          </Text>
          <Text testID="expectedTextProps">
            {JSON.stringify(expectedTextProps)}
          </Text>
        </>
      );
    };

    const { getByTestId } = render(<TestComponent />);
    const expectedOuter = JSON.parse(
      getByTestId('expectedOuter').props.children,
    );
    const expectedTextProps = JSON.parse(
      getByTestId('expectedTextProps').props.children,
    );
    const container = getByTestId('badge-count');
    expect(container.props.style[0]).toStrictEqual(expectedOuter);
    const textElement = container.props.children;
    expect(textElement.props.variant).toStrictEqual(expectedTextProps.variant);
    expect(textElement.props.twClassName).toContain(
      MAP_BADGECOUNT_SIZE_LINEHEIGHT[customSize],
    );
  });
});
