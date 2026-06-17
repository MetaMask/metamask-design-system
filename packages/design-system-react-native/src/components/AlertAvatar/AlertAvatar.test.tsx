import {
  AvatarIconSeverity,
  AvatarIconSize,
  IconName,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react-native';
import React from 'react';

import { MAP_AVATARICON_SIZE_ICONSIZE } from '../Avatar/variants/AvatarIcon/AvatarIcon.constants';
import { TWCLASSMAP_ICON_SIZE_DIMENSION } from '../Icon/Icon.constants';

import { AlertAvatar } from './AlertAvatar';
import {
  MAP_ALERTAVATAR_SEVERITY_ICONCOLOR,
  MAP_ALERTAVATAR_SEVERITY_ICONNAME,
  TWCLASSMAP_ALERTAVATAR_SEVERITY_BACKGROUNDCOLOR,
} from './AlertAvatar.constants';

describe('AlertAvatar', () => {
  it('applies default container style and default icon props', () => {
    const { result } = renderHook(() => useTailwind());
    const tw = result.current;

    const bgClass =
      TWCLASSMAP_ALERTAVATAR_SEVERITY_BACKGROUNDCOLOR[
        AvatarIconSeverity.Neutral
      ];
    const expectedIconBgStyle = tw.style(bgClass);

    const { getByTestId } = render(
      <AlertAvatar testID="alert-avatar" iconProps={{ testID: 'icon' }} />,
    );

    const alertAvatar = getByTestId('alert-avatar');
    const icon = getByTestId('icon');

    expect(alertAvatar.props.style[0].backgroundColor).toBe(
      expectedIconBgStyle.backgroundColor,
    );
    expect(icon.props.name).toBe(
      MAP_ALERTAVATAR_SEVERITY_ICONNAME[AvatarIconSeverity.Neutral],
    );
    expect(icon).toBeDefined();
    expect(icon.props.fill).toBe('currentColor');
  });

  it('applies severity-specific styles and default icon name', () => {
    const { result } = renderHook(() => useTailwind());
    const tw = result.current;

    const { getByTestId } = render(
      <AlertAvatar
        severity={AvatarIconSeverity.Error}
        testID="alert-avatar"
        iconProps={{ testID: 'icon' }}
      />,
    );

    const alertAvatar = getByTestId('alert-avatar');
    const icon = getByTestId('icon');
    const bgClass =
      TWCLASSMAP_ALERTAVATAR_SEVERITY_BACKGROUNDCOLOR[AvatarIconSeverity.Error];
    const expectedIconBgStyle = tw.style(bgClass);

    expect(alertAvatar.props.style[0].backgroundColor).toBe(
      expectedIconBgStyle.backgroundColor,
    );
    expect(icon.props.name).toBe(
      MAP_ALERTAVATAR_SEVERITY_ICONNAME[AvatarIconSeverity.Error],
    );
    const expectedIconStyle = tw.style(
      MAP_ALERTAVATAR_SEVERITY_ICONCOLOR[AvatarIconSeverity.Error],
    );
    expect(icon.props.style[0].color).toBe(expectedIconStyle.color);
  });

  it('respects a custom icon name override', () => {
    const { getByTestId } = render(
      <AlertAvatar
        severity={AvatarIconSeverity.Error}
        iconName={IconName.Add}
        iconProps={{ testID: 'icon' }}
      />,
    );

    expect(getByTestId('icon').props.name).toBe(IconName.Add);
  });

  it('respects custom size', () => {
    const { result } = renderHook(() => useTailwind());
    const tw = result.current;
    const iconSize = MAP_AVATARICON_SIZE_ICONSIZE[AvatarIconSize.Xl];
    const expectedStyle = tw.style(TWCLASSMAP_ICON_SIZE_DIMENSION[iconSize]);

    const { getByTestId } = render(
      <AlertAvatar
        iconName={IconName.Add}
        size={AvatarIconSize.Xl}
        iconProps={{ testID: 'icon' }}
      />,
    );

    const icon = getByTestId('icon');
    expect(icon.props.style[0].width).toBe(expectedStyle.width);
  });
});
