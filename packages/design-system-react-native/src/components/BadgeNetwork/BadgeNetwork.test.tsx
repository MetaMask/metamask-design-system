import { render } from '@testing-library/react-native';
import React from 'react';

import { AvatarNetworkSize } from '../AvatarNetwork';

import { BadgeNetwork } from './BadgeNetwork';

const remoteImageSrc = { uri: 'https://example.com/photo.png' };
const AVATAR_NETWORK_SIZE_PX_MAP: Record<AvatarNetworkSize, number> = {
  [AvatarNetworkSize.Xs]: 16,
  [AvatarNetworkSize.Sm]: 24,
  [AvatarNetworkSize.Md]: 32,
  [AvatarNetworkSize.Lg]: 40,
  [AvatarNetworkSize.Xl]: 48,
};

describe('BadgeNetwork', () => {
  it('renders an AvatarNetwork with size forced to Xs and forwards additional props', () => {
    const { getByTestId } = render(
      <BadgeNetwork
        src={remoteImageSrc}
        testID="badge-network"
        imageOrSvgProps={{ imageProps: { testID: 'image-or-svg' } }}
      />,
    );
    const renderedComponent = getByTestId('badge-network');
    expect(renderedComponent).toBeDefined();
    expect(renderedComponent.props.style[0].height.toString()).toStrictEqual(
      (AVATAR_NETWORK_SIZE_PX_MAP[AvatarNetworkSize.Xs] + 2).toString(),
    );

    expect(renderedComponent.props.children.props.src).toStrictEqual(
      remoteImageSrc,
    );
  });
});
