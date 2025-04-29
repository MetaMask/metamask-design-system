import { render } from '@testing-library/react-native';
import React from 'react';

import { AvatarNetworkSize } from '../AvatarNetwork';
import BadgeNetwork from './BadgeNetwork';

const remoteImageSrc = { uri: 'https://example.com/photo.png' };
describe('BadgeNetwork', () => {
  it('renders an AvatarNetwork with size forced to Xs and forwards additional props', () => {
    const { getByTestId } = render(
      <BadgeNetwork
        src={remoteImageSrc}
        testID="badge-network"
        imageProps={{ testID: 'image-or-svg' }}
      />,
    );
    const renderedComponent = getByTestId('badge-network');
    expect(renderedComponent).toBeTruthy();
    expect(renderedComponent.props.style[0].height.toString()).toStrictEqual(
      (Number(AvatarNetworkSize.Xs) + 2).toString(),
    );

    expect(renderedComponent.props.children.props.src).toStrictEqual(
      remoteImageSrc,
    );
  });
});
