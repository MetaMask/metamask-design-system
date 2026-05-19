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

import { IconAvatar } from './IconAvatar';
import {
  MAP_ICONAVATAR_SEVERITY_ICONCOLOR,
  TWCLASSMAP_ICONAVATAR_SEVERITY_BACKGROUNDCOLOR,
} from './IconAvatar.constants';

describe('IconAvatar', () => {
  it('applies default container style and default icon props', () => {
    const { result } = renderHook(() => useTailwind());
    const tw = result.current;

    const bgClass =
      TWCLASSMAP_ICONAVATAR_SEVERITY_BACKGROUNDCOLOR[
        AvatarIconSeverity.Neutral
      ];
    const expectedIconBgStyle = tw.style(bgClass);

    const { getByTestId } = render(
      <IconAvatar
        iconName={IconName.Add}
        testID="icon-avatar"
        iconProps={{ testID: 'icon' }}
      />,
    );

    const iconAvatar = getByTestId('icon-avatar');
    const icon = getByTestId('icon');

    expect(iconAvatar.props.style[0].backgroundColor).toBe(
      expectedIconBgStyle.backgroundColor,
    );
    expect(icon).toBeDefined();
    expect(icon.props.fill).toBe('currentColor');
  });

  it('applies severity-specific styles', () => {
    const { result } = renderHook(() => useTailwind());
    const tw = result.current;

    const { getByTestId } = render(
      <IconAvatar
        iconName={IconName.Add}
        severity={AvatarIconSeverity.Error}
        testID="icon-avatar"
        iconProps={{ testID: 'icon' }}
      />,
    );

    const iconAvatar = getByTestId('icon-avatar');
    const icon = getByTestId('icon');
    const bgClass =
      TWCLASSMAP_ICONAVATAR_SEVERITY_BACKGROUNDCOLOR[AvatarIconSeverity.Error];
    const expectedIconBgStyle = tw.style(bgClass);

    expect(iconAvatar.props.style[0].backgroundColor).toBe(
      expectedIconBgStyle.backgroundColor,
    );
    const expectedIconStyle = tw.style(
      MAP_ICONAVATAR_SEVERITY_ICONCOLOR[AvatarIconSeverity.Error],
    );
    expect(icon.props.style[0].color).toBe(expectedIconStyle.color);
  });

  it('respects custom size', () => {
    const { result } = renderHook(() => useTailwind());
    const tw = result.current;
    const iconSize = MAP_AVATARICON_SIZE_ICONSIZE[AvatarIconSize.Xl];
    const expectedStyle = tw.style(TWCLASSMAP_ICON_SIZE_DIMENSION[iconSize]);

    const { getByTestId } = render(
      <IconAvatar
        iconName={IconName.Add}
        size={AvatarIconSize.Xl}
        iconProps={{ testID: 'icon' }}
      />,
    );

    const icon = getByTestId('icon');
    expect(icon.props.style[0].width).toBe(expectedStyle.width);
  });
});
