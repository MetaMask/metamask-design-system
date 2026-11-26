import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { render, renderHook } from '@testing-library/react-native';
import React from 'react';

import { createRenderer } from '../../test-utils/createRenderer';
import { AvatarNetwork } from '../AvatarNetwork';

import { BadgeNetwork } from './BadgeNetwork';

const remoteImageSrc = { uri: 'https://example.com/photo.png' };

describe('BadgeNetwork', () => {
  it('forwards props and enforces BadgeNetwork-specific AvatarNetwork props', () => {
    const tree = createRenderer(
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

  describe('when className is provided', () => {
    let twClassNames: ReturnType<typeof useTailwind>;

    beforeAll(() => {
      twClassNames = renderHook(() => useTailwind()).result.current;
    });

    it('applies className after twClassName and component classes', () => {
      const { getByTestId } = render(
        <BadgeNetwork
          name="Ethereum"
          src={{ uri: 'https://example.com/eth.png' }}
          testID="badge-network-classes"
          twClassName="mt-8"
          className="mt-2"
        />,
      );

      expect(getByTestId('badge-network-classes')).toHaveStyle(
        twClassNames`mt-2`,
      );
    });

    it('applies deprecated twClassName on its own', () => {
      const { getByTestId } = render(
        <BadgeNetwork
          name="Ethereum"
          src={{ uri: 'https://example.com/eth.png' }}
          testID="badge-network-classes"
          twClassName="mt-8"
        />,
      );

      expect(getByTestId('badge-network-classes')).toHaveStyle(
        twClassNames`mt-8`,
      );
    });
  });
});
