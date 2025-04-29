import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react-native';
import React from 'react';

import { AvatarIconSeverity, AvatarIconSize } from '../../types';
import { IconName } from '../Icon';
import AvatarIcon from './AvatarIcon';
import {
  TWCLASSMAP_AVATARICON_SEVERITY_BACKGROUNDCOLOR,
  MAP_AVATARICON_SEVERITY_ICONCOLOR,
  MAP_AVATARICON_SIZE_ICONSIZE,
} from './AvatarIcon.constants';

describe('AvatarIcon', () => {
  it('applies default container style and default icon props', () => {
    const { result } = renderHook(() => useTailwind());
    const tw = result.current;

    const bgClass =
      TWCLASSMAP_AVATARICON_SEVERITY_BACKGROUNDCOLOR[
        AvatarIconSeverity.Neutral
      ];
    const expectedIconBgStyle = tw`${bgClass}`;

    const expectedIconColor =
      tw`${MAP_AVATARICON_SEVERITY_ICONCOLOR[AvatarIconSeverity.Neutral]}`
        .color;

    const { getByTestId } = render(
      <AvatarIcon
        iconName={IconName.Add}
        iconProps={{ testID: 'icon' }}
        testID="avatar-icon"
      />,
    );
    const container = getByTestId('avatar-icon');
    expect(container.props.style[1][0]).toStrictEqual(expectedIconBgStyle);

    const icon = getByTestId('icon');
    expect(icon.props.style[0].color).toStrictEqual(expectedIconColor);
    expect(container.props.accessibilityRole).toStrictEqual('image');
  });

  it('applies custom twClassName and style props', () => {
    const { result } = renderHook(() => useTailwind());
    const tw = result.current;

    const bgClass =
      TWCLASSMAP_AVATARICON_SEVERITY_BACKGROUNDCOLOR[
        AvatarIconSeverity.Neutral
      ];
    const expectedIconBgStyle = tw`${bgClass} custom-class`;

    const expectedIconColor =
      tw`${MAP_AVATARICON_SEVERITY_ICONCOLOR[AvatarIconSeverity.Neutral]}`
        .color;
    const customStyle = { margin: 10 };

    const { getByTestId } = render(
      <AvatarIcon
        iconName={IconName.Add}
        iconProps={{ testID: 'icon' }}
        twClassName="custom-class"
        style={customStyle}
        accessibilityLabel="avatar"
        testID="avatar-icon"
      />,
    );
    const container = getByTestId('avatar-icon');
    expect(container.props.style[1][0]).toStrictEqual(expectedIconBgStyle);
    expect(container.props.style[1][1]).toStrictEqual(customStyle);
    expect(container.props.accessibilityLabel).toStrictEqual('avatar');

    const icon = getByTestId('icon');
    expect(icon.props.style[0].color).toStrictEqual(expectedIconColor);
  });

  it.each(Object.values(AvatarIconSeverity))(
    'applies correct background and icon color for severity %s',
    (severity) => {
      const { result } = renderHook(() => useTailwind());
      const tw = result.current;

      const bgClass = TWCLASSMAP_AVATARICON_SEVERITY_BACKGROUNDCOLOR[severity];
      const expectedIconBgStyle = tw`${bgClass}`;

      const expectedIconColor =
        tw`${MAP_AVATARICON_SEVERITY_ICONCOLOR[severity]}`.color;

      const { getByTestId } = render(
        <AvatarIcon
          iconName={IconName.Add}
          iconProps={{ testID: 'icon' }}
          severity={severity}
          testID="avatar-icon"
        />,
      );
      const container = getByTestId('avatar-icon');
      expect(container.props.style[1][0]).toStrictEqual(expectedIconBgStyle);

      const icon = getByTestId('icon');
      expect(icon.props.style[0].color).toStrictEqual(expectedIconColor);
    },
  );

  it.each(Object.values(AvatarIconSize))(
    'applies correct icon size for size %s',
    (size) => {
      const expectedSize = MAP_AVATARICON_SIZE_ICONSIZE[size].toString();
      const { getByTestId } = render(
        <AvatarIcon
          iconName={IconName.Add}
          iconProps={{ testID: 'icon' }}
          size={size}
          testID="avatar-icon"
        />,
      );
      const icon = getByTestId('icon');
      expect(icon.props.style[0].width.toString()).toStrictEqual(expectedSize);
      expect(icon.props.style[0].height.toString()).toStrictEqual(expectedSize);
    },
  );
});
