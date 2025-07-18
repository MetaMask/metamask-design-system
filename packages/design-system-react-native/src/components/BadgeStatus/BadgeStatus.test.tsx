import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { render } from '@testing-library/react-native';
import React from 'react';

import { BadgeStatusStatus, BadgeStatusSize } from '../../types';

import { BadgeStatus } from './BadgeStatus';
import {
  TWCLASSMAP_BADGESTATUS_STATUS_CIRCLE,
  TWCLASSMAP_BADGESTATUS_SIZE,
} from './BadgeStatus.constants';

describe('BadgeStatus', () => {
  it('renders with default props and status Active', () => {
    let expectedOuter;
    let expectedInner;
    const TestComponent = () => {
      const tw = useTailwind();
      const finalSize = BadgeStatusSize.Md;
      expectedOuter = tw`self-start rounded-full border-2 border-background-default`;
      expectedInner = tw`rounded-full border-2 ${TWCLASSMAP_BADGESTATUS_SIZE[finalSize]} ${TWCLASSMAP_BADGESTATUS_STATUS_CIRCLE[BadgeStatusStatus.Active]} `;
      return <BadgeStatus status={BadgeStatusStatus.Active} testID="badge" />;
    };

    const { getByTestId } = render(<TestComponent />);
    const badge = getByTestId('badge');
    expect(badge.props.style[0]).toStrictEqual(expectedOuter);
    expect(badge.props.children.props.style[0]).toStrictEqual(expectedInner);
  });

  it('renders without border when hasBorder is false', () => {
    let expectedOuter;
    const TestComponent = () => {
      const tw = useTailwind();
      expectedOuter = tw`self-start rounded-full`;
      return (
        <BadgeStatus
          status={BadgeStatusStatus.New}
          hasBorder={false}
          testID="badge"
        />
      );
    };

    const { getByTestId } = render(<TestComponent />);
    const badge = getByTestId('badge');
    expect(badge.props.style[0]).toStrictEqual(expectedOuter);
  });

  it('applies custom style to the outer container', () => {
    const customStyle = { margin: 10 };
    const TestComponent = () => {
      return (
        <BadgeStatus
          status={BadgeStatusStatus.Disconnected}
          style={customStyle}
          testID="badge"
        />
      );
    };

    const { getByTestId } = render(<TestComponent />);
    const badge = getByTestId('badge');
    // The outer container style is an array; the second element should equal customStyle.
    expect(badge.props.style[1]).toStrictEqual(customStyle);
  });

  it('forwards additional props to the outer container', () => {
    const extraProp = { accessibilityLabel: 'status-badge' };
    const TestComponent = () => {
      return (
        <BadgeStatus
          status={BadgeStatusStatus.Attention}
          testID="badge"
          {...extraProp}
        />
      );
    };

    const { getByTestId } = render(<TestComponent />);
    const badge = getByTestId('badge');
    expect(badge.props.accessibilityLabel).toBe('status-badge');
  });

  it('renders with custom size and status Inactive', () => {
    let expectedInner;
    const customSize = BadgeStatusSize.Lg; // For example, '10'
    const TestComponent = () => {
      const tw = useTailwind();
      expectedInner = tw`rounded-full border-2 ${TWCLASSMAP_BADGESTATUS_SIZE[customSize]} ${TWCLASSMAP_BADGESTATUS_STATUS_CIRCLE[BadgeStatusStatus.Inactive]} `;
      return (
        <BadgeStatus
          status={BadgeStatusStatus.Inactive}
          size={customSize}
          testID="badge"
        />
      );
    };

    const { getByTestId } = render(<TestComponent />);
    const badge = getByTestId('badge');
    expect(badge.props.children.props.style[0]).toStrictEqual(expectedInner);
  });

  it('uses default size and hasBorder when not provided', () => {
    let expectedOuter;
    let expectedInner;
    const TestComponent = () => {
      const tw = useTailwind();
      const defaultSize = BadgeStatusSize.Md;
      expectedOuter = tw`self-start rounded-full border-2 border-background-default`;
      expectedInner = tw`rounded-full border-2 ${TWCLASSMAP_BADGESTATUS_SIZE[defaultSize]} ${TWCLASSMAP_BADGESTATUS_STATUS_CIRCLE[BadgeStatusStatus.Active]} `;
      return <BadgeStatus status={BadgeStatusStatus.Active} testID="badge" />;
    };

    const { getByTestId } = render(<TestComponent />);
    const badge = getByTestId('badge');
    expect(badge.props.style[0]).toStrictEqual(expectedOuter);
    expect(badge.props.children.props.style[0]).toStrictEqual(expectedInner);
  });
});
