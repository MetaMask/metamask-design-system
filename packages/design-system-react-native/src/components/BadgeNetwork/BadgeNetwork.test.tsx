import { render } from '@testing-library/react-native';
import React from 'react';

import { BadgeNetwork } from './BadgeNetwork';

const remoteImageSrc = { uri: 'https://example.com/photo.png' };

describe('BadgeNetwork', () => {
  it('renders without error', async () => {
    const { getByTestId } = await render(
      <BadgeNetwork
        src={remoteImageSrc}
        testID="badge-network-root"
        name="Ethereum"
        fallbackText="E"
        imageOrSvgProps={{ imageProps: { testID: 'image-or-svg' } }}
      />,
    );

    expect(getByTestId('badge-network-root')).toBeOnTheScreen();
  });
});
