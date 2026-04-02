import React from 'react';
import * as ReactTestRenderer from 'react-test-renderer';

import { AvatarNetwork } from '../AvatarNetwork';

import { BadgeNetwork } from './BadgeNetwork';

const remoteImageSrc = { uri: 'https://example.com/photo.png' };

describe('BadgeNetwork', () => {
  it('forwards props and enforces BadgeNetwork-specific AvatarNetwork props', () => {
    const tree = ReactTestRenderer.create(
      <BadgeNetwork
        src={remoteImageSrc}
        testID="badge-network-root"
        name="Ethereum"
        fallbackText="E"
        imageOrSvgProps={{ imageProps: { testID: 'image-or-svg' } }}
      />,
    );

    const avatarNetwork = tree.root.findByType(AvatarNetwork);
    expect(avatarNetwork.props.src).toStrictEqual(remoteImageSrc);
    expect(avatarNetwork.props.testID).toBe('badge-network-root');
    expect(avatarNetwork.props.name).toBe('Ethereum');
    expect(avatarNetwork.props.fallbackText).toBe('E');
    expect(avatarNetwork.props.imageOrSvgProps).toStrictEqual({
      imageProps: { testID: 'image-or-svg' },
    });
    expect(avatarNetwork.props.hasBorder).toBe(true);
  });
});
