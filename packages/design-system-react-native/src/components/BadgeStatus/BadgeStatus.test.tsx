import React from 'react';
import { render } from '@testing-library/react-native';
import BadgeStatus from './BadgeStatus';
import { BadgeStatusStatus, BadgeStatusSize } from './BadgeStatus.types';
import {
  DEFAULT_BADGESTATUS_PROPS,
  TWCLASSMAP_BADGESTATUS_STATUS_BACKGROUNDCOLOR,
  TWCLASSMAP_BADGESTATUS_STATUS_INNER_BORDERCOLOR,
} from './BadgeStatus.constants';
import { useTailwind } from '@metamask/design-system-twrnc-preset';

describe('BadgeStatus', () => {
  it('renders with default props and status Active', () => {
    let expectedOuter;
    let expectedInner;
    const TestComponent = () => {
      const tw = useTailwind();
      const finalSize = DEFAULT_BADGESTATUS_PROPS.size;
      const finalHasBorder = DEFAULT_BADGESTATUS_PROPS.hasBorder;
      expectedOuter = tw`
        self-start
        rounded-full 
        ${finalHasBorder ? 'border-[2px] border-background-default' : ''}
      `;
      expectedInner = tw`
        h-[${finalSize}px] 
        w-[${finalSize}px] 
        ${TWCLASSMAP_BADGESTATUS_STATUS_BACKGROUNDCOLOR[BadgeStatusStatus.Active]}
        rounded-full 
        border-[2px]
        ${TWCLASSMAP_BADGESTATUS_STATUS_INNER_BORDERCOLOR[BadgeStatusStatus.Active]}
      `;
      return <BadgeStatus status={BadgeStatusStatus.Active} testID="badge" />;
    };

    const { getByTestId } = render(<TestComponent />);
    const badge = getByTestId('badge');
    expect(badge.props.style[0]).toStrictEqual(expectedOuter);
    // The inner view is rendered as the child of the outer View.
    const inner = badge.props.children;
    expect(inner.props.style[0]).toStrictEqual(expectedInner);
  });

  it('renders without border when hasBorder is false', () => {
    let expectedOuter;
    const TestComponent = () => {
      const tw = useTailwind();
      const finalSize = DEFAULT_BADGESTATUS_PROPS.size;
      const finalHasBorder = false;
      expectedOuter = tw`
        self-start
        rounded-full 
        ${finalHasBorder ? 'border-[2px] border-background-default' : ''}
      `;
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
          status={BadgeStatusStatus.Inactive}
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
    expect(badge.props.accessibilityLabel).toStrictEqual('status-badge');
  });

  it('renders with custom size and status PartiallyActive', () => {
    let expectedInner;
    const customSize = BadgeStatusSize.Lg; // For example, '10'
    const TestComponent = () => {
      const tw = useTailwind();
      expectedInner = tw`
        h-[${customSize}px] 
        w-[${customSize}px] 
        ${TWCLASSMAP_BADGESTATUS_STATUS_BACKGROUNDCOLOR[BadgeStatusStatus.PartiallyActive]}
        rounded-full 
        border-[2px]
        ${TWCLASSMAP_BADGESTATUS_STATUS_INNER_BORDERCOLOR[BadgeStatusStatus.PartiallyActive]}
      `;
      return (
        <BadgeStatus
          status={BadgeStatusStatus.PartiallyActive}
          size={customSize}
          testID="badge"
        />
      );
    };

    const { getByTestId } = render(<TestComponent />);
    const badge = getByTestId('badge');
    const inner = badge.props.children;
    expect(inner.props.style[0]).toStrictEqual(expectedInner);
  });

  it('uses default size and hasBorder when not provided', () => {
    let expectedOuter;
    let expectedInner;
    const TestComponent = () => {
      const tw = useTailwind();
      const defaultSize = DEFAULT_BADGESTATUS_PROPS.size;
      const defaultHasBorder = DEFAULT_BADGESTATUS_PROPS.hasBorder;
      expectedOuter = tw`
        self-start
        rounded-full 
        ${defaultHasBorder ? 'border-[2px] border-background-default' : ''}
      `;
      expectedInner = tw`
        h-[${defaultSize}px] 
        w-[${defaultSize}px] 
        ${TWCLASSMAP_BADGESTATUS_STATUS_BACKGROUNDCOLOR[BadgeStatusStatus.Active]}
        rounded-full 
        border-[2px]
        ${TWCLASSMAP_BADGESTATUS_STATUS_INNER_BORDERCOLOR[BadgeStatusStatus.Active]}
      `;
      return <BadgeStatus status={BadgeStatusStatus.Active} testID="badge" />;
    };

    const { getByTestId } = render(<TestComponent />);
    const badge = getByTestId('badge');
    expect(badge.props.style[0]).toStrictEqual(expectedOuter);
    const inner = badge.props.children;
    expect(inner.props.style[0]).toStrictEqual(expectedInner);
  });
});
