import React from 'react';
import { render } from '@testing-library/react-native';
import { useTailwind } from '@metamask/design-system-twrnc-preset';

import Text from '../Text';
import { IconName } from '../Icon';
import BadgeIcon from './BadgeIcon';
import {
  MAP_BADGEICON_VARIANT_ICONNAME,
  DEFAULT_BADGEICON_PROPS,
} from './BadgeIcon.constants';
import { BadgeIconVariant } from './BadgeIcon.types';

describe('BadgeIcon', () => {
  it('renders with variant Custom and forwards provided iconName and iconProps', () => {
    const TestComponent = () => {
      const tw = useTailwind();
      // Compute expected container style using an empty twClassName.
      const computedExpectedContainer = tw`
        h-[16px] w-[16px] bg-icon-default rounded-full items-center justify-center`;
      return (
        <>
          <BadgeIcon
            variant={BadgeIconVariant.Custom}
            iconName={IconName.Add}
            testID="badge-icon"
          />
          <Text testID="expectedContainer">
            {JSON.stringify(computedExpectedContainer)}
          </Text>
        </>
      );
    };

    const { getByTestId } = render(<TestComponent />);
    const expectedContainer = JSON.parse(
      getByTestId('expectedContainer').props.children,
    );
    const badgeIcon = getByTestId('badge-icon');
    // Verify container style.
    expect(badgeIcon.props.style[0]).toStrictEqual(expectedContainer);
    // Verify Icon receives the provided custom iconName.
    const icon = badgeIcon.props.children;
    expect(icon.props.name).toStrictEqual('Add');
    expect(icon.props.color).toStrictEqual(
      DEFAULT_BADGEICON_PROPS.iconProps.color,
    );
    expect(icon.props.size).toStrictEqual(
      DEFAULT_BADGEICON_PROPS.iconProps.size,
    );
  });

  it('renders with variant Snaps and uses mapping for final iconName', () => {
    const TestComponent = () => {
      const tw = useTailwind();
      const computedExpectedContainer = tw`
        h-[16px] w-[16px] bg-icon-default rounded-full items-center justify-center`;
      return (
        <>
          <BadgeIcon variant={BadgeIconVariant.Snaps} testID="badge-icon" />
          <Text testID="expectedContainer">
            {JSON.stringify(computedExpectedContainer)}
          </Text>
        </>
      );
    };

    const { getByTestId } = render(<TestComponent />);
    const expectedContainer = JSON.parse(
      getByTestId('expectedContainer').props.children,
    );
    const badgeIcon = getByTestId('badge-icon');
    expect(badgeIcon.props.style[0]).toStrictEqual(expectedContainer);
    const icon = badgeIcon.props.children;
    const expectedIconName =
      MAP_BADGEICON_VARIANT_ICONNAME[BadgeIconVariant.Snaps];
    expect(icon.props.name).toStrictEqual(expectedIconName);
    expect(icon.props.color).toStrictEqual(
      DEFAULT_BADGEICON_PROPS.iconProps.color,
    );
    expect(icon.props.size).toStrictEqual(
      DEFAULT_BADGEICON_PROPS.iconProps.size,
    );
  });

  it('renders with variant Send and uses mapping for final iconName', () => {
    const TestComponent = () => {
      const tw = useTailwind();
      const computedExpectedContainer = tw`
        h-[16px] w-[16px] bg-icon-default rounded-full items-center justify-center`;
      return (
        <>
          <BadgeIcon variant={BadgeIconVariant.Send} testID="badge-icon" />
          <Text testID="expectedContainer">
            {JSON.stringify(computedExpectedContainer)}
          </Text>
        </>
      );
    };

    const { getByTestId } = render(<TestComponent />);
    const expectedContainer = JSON.parse(
      getByTestId('expectedContainer').props.children,
    );
    const badgeIcon = getByTestId('badge-icon');
    expect(badgeIcon.props.style[0]).toStrictEqual(expectedContainer);
    const icon = badgeIcon.props.children;
    const expectedIconName =
      MAP_BADGEICON_VARIANT_ICONNAME[BadgeIconVariant.Send];
    expect(icon.props.name).toStrictEqual(expectedIconName);
    expect(icon.props.color).toStrictEqual(
      DEFAULT_BADGEICON_PROPS.iconProps.color,
    );
    expect(icon.props.size).toStrictEqual(
      DEFAULT_BADGEICON_PROPS.iconProps.size,
    );
  });

  it('renders with variant Stake and uses mapping for final iconName', () => {
    const TestComponent = () => {
      const tw = useTailwind();
      const computedExpectedContainer = tw`
        h-[16px] w-[16px] bg-icon-default rounded-full items-center justify-center`;
      return (
        <>
          <BadgeIcon variant={BadgeIconVariant.Stake} testID="badge-icon" />
          <Text testID="expectedContainer">
            {JSON.stringify(computedExpectedContainer)}
          </Text>
        </>
      );
    };

    const { getByTestId } = render(<TestComponent />);
    const expectedContainer = JSON.parse(
      getByTestId('expectedContainer').props.children,
    );
    const badgeIcon = getByTestId('badge-icon');
    expect(badgeIcon.props.style[0]).toStrictEqual(expectedContainer);
    const icon = badgeIcon.props.children;
    const expectedIconName =
      MAP_BADGEICON_VARIANT_ICONNAME[BadgeIconVariant.Stake];
    expect(icon.props.name).toStrictEqual(expectedIconName);
    expect(icon.props.color).toStrictEqual(
      DEFAULT_BADGEICON_PROPS.iconProps.color,
    );
    expect(icon.props.size).toStrictEqual(
      DEFAULT_BADGEICON_PROPS.iconProps.size,
    );
  });

  it('renders with variant Bridge and uses mapping for final iconName', () => {
    const TestComponent = () => {
      const tw = useTailwind();
      const computedExpectedContainer = tw`
        h-[16px] w-[16px] bg-icon-default rounded-full items-center justify-center`;
      return (
        <>
          <BadgeIcon variant={BadgeIconVariant.Bridge} testID="badge-icon" />
          <Text testID="expectedContainer">
            {JSON.stringify(computedExpectedContainer)}
          </Text>
        </>
      );
    };

    const { getByTestId } = render(<TestComponent />);
    const expectedContainer = JSON.parse(
      getByTestId('expectedContainer').props.children,
    );
    const badgeIcon = getByTestId('badge-icon');
    expect(badgeIcon.props.style[0]).toStrictEqual(expectedContainer);
    const icon = badgeIcon.props.children;
    const expectedIconName =
      MAP_BADGEICON_VARIANT_ICONNAME[BadgeIconVariant.Bridge];
    expect(icon.props.name).toStrictEqual(expectedIconName);
    expect(icon.props.color).toStrictEqual(
      DEFAULT_BADGEICON_PROPS.iconProps.color,
    );
    expect(icon.props.size).toStrictEqual(
      DEFAULT_BADGEICON_PROPS.iconProps.size,
    );
  });

  it('applies custom container style and forwards extra props', () => {
    const customStyle = { margin: 10 };
    const extraProp = { accessibilityLabel: 'badge-icon' };
    const TestComponent = () => {
      return (
        <BadgeIcon
          variant={BadgeIconVariant.Stake}
          style={customStyle}
          testID="badge-icon"
          {...extraProp}
        />
      );
    };
    const { getByTestId } = render(<TestComponent />);
    const badgeIcon = getByTestId('badge-icon');
    expect(badgeIcon.props.style).toEqual(customStyle);
    expect(badgeIcon.props.accessibilityLabel).toStrictEqual('badge-icon');
  });
});
