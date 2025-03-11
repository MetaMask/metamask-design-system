import React from 'react';
import { render } from '@testing-library/react-native';
import { useTailwind } from '@metamask/design-system-twrnc-preset';

import Text, { TextColor, FontWeight } from '../Text';
import BadgeCount from './BadgeCount';
import { BadgeCountSize } from './BadgeCount.types';
import {
  DEFAULT_BADGECOUNT_PROPS,
  MAP_BADGECOUNT_SIZE_TEXTVARIANT,
  MAP_BADGECOUNT_SIZE_MINWIDTH,
  MAP_BADGECOUNT_SIZE_LINEHEIGHT,
  MAP_BADGECOUNT_SIZE_PADDINGVERTICAL,
  MAP_BADGECOUNT_SIZE_PADDINGHORIZONTAL,
} from './BadgeCount.constants';

describe('BadgeCount', () => {
  it('renders with default props and count less than max', () => {
    const TestComponent = () => {
      const tw = useTailwind();
      const sizeVal = DEFAULT_BADGECOUNT_PROPS.size;
      const computedExpectedOuter = tw`
        bg-error-default
        min-w-[${MAP_BADGECOUNT_SIZE_MINWIDTH[sizeVal]}px] 
        h-[${sizeVal}px]
        py-[${MAP_BADGECOUNT_SIZE_PADDINGVERTICAL[sizeVal]}px]
        px-[${MAP_BADGECOUNT_SIZE_PADDINGHORIZONTAL[sizeVal]}px]
        rounded-full
        items-center
        justify-center
        self-start
      `;
      const expectedTextProps = {
        variant: MAP_BADGECOUNT_SIZE_TEXTVARIANT[sizeVal],
        color: DEFAULT_BADGECOUNT_PROPS.textProps.color,
        fontWeight: DEFAULT_BADGECOUNT_PROPS.textProps.fontWeight,
        // Note: trailing space comes from template literal if textProps.twClassName is undefined.
        twClassName: `leading-[${MAP_BADGECOUNT_SIZE_LINEHEIGHT[sizeVal]}px] `,
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
      `leading-[${MAP_BADGECOUNT_SIZE_LINEHEIGHT[DEFAULT_BADGECOUNT_PROPS.size]}px]`,
    );
  });

  it('renders with count greater than max (overflow)', () => {
    const TestComponent = () => {
      const tw = useTailwind();
      const sizeVal = DEFAULT_BADGECOUNT_PROPS.size;
      const computedExpectedOuter = tw`
        bg-error-default
        min-w-[${MAP_BADGECOUNT_SIZE_MINWIDTH[sizeVal]}px] 
        h-[${sizeVal}px]
        py-[${MAP_BADGECOUNT_SIZE_PADDINGVERTICAL[sizeVal]}px]
        px-[${MAP_BADGECOUNT_SIZE_PADDINGHORIZONTAL[sizeVal]}px]
        rounded-full
        items-center
        justify-center
        self-start
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
      const sizeVal = DEFAULT_BADGECOUNT_PROPS.size;
      const computedExpectedOuter = tw`
        bg-error-default
        min-w-[${MAP_BADGECOUNT_SIZE_MINWIDTH[sizeVal]}px] 
        h-[${sizeVal}px]
        py-[${MAP_BADGECOUNT_SIZE_PADDINGVERTICAL[sizeVal]}px]
        px-[${MAP_BADGECOUNT_SIZE_PADDINGHORIZONTAL[sizeVal]}px]
        rounded-full
        items-center
        justify-center
        self-start
      `;
      const expectedTextProps = {
        variant: MAP_BADGECOUNT_SIZE_TEXTVARIANT[sizeVal],
        color: customTextProps.color, // overridden
        fontWeight: customTextProps.fontWeight, // overridden
        twClassName: `leading-[${MAP_BADGECOUNT_SIZE_LINEHEIGHT[sizeVal]}px] ${customTextProps.twClassName}`,
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
      `leading-[${MAP_BADGECOUNT_SIZE_LINEHEIGHT[DEFAULT_BADGECOUNT_PROPS.size]}px]`,
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
        min-w-[${MAP_BADGECOUNT_SIZE_MINWIDTH[customSize]}px] 
        h-[${customSize}px]
        py-[${MAP_BADGECOUNT_SIZE_PADDINGVERTICAL[customSize]}px]
        px-[${MAP_BADGECOUNT_SIZE_PADDINGHORIZONTAL[customSize]}px]
        rounded-full
        items-center
        justify-center
        self-start
      `;
      const expectedTextProps = {
        variant: MAP_BADGECOUNT_SIZE_TEXTVARIANT[customSize],
        color: DEFAULT_BADGECOUNT_PROPS.textProps.color,
        fontWeight: DEFAULT_BADGECOUNT_PROPS.textProps.fontWeight,
        twClassName: `leading-[${MAP_BADGECOUNT_SIZE_LINEHEIGHT[customSize]}px] `,
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
      `leading-[${MAP_BADGECOUNT_SIZE_LINEHEIGHT[customSize]}px]`,
    );
  });
});
