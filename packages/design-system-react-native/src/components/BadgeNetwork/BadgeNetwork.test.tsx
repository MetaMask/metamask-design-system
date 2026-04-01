import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import { BadgeNetwork } from './BadgeNetwork';

const remoteImageSrc = { uri: 'https://example.com/photo.png' };

describe('BadgeNetwork', () => {
  it('renders AvatarNetwork and shows fallback text on image error', () => {
    const { getByTestId, getByText } = render(
      <BadgeNetwork
        src={remoteImageSrc}
        testID="badge-network"
        fallbackText="ETH"
        imageOrSvgProps={{
          imageProps: { testID: 'image-or-svg' },
        }}
      />,
    );

    const badgeNetwork = getByTestId('badge-network');
    const imageOrSvg = getByTestId('image-or-svg');

    expect(badgeNetwork).toBeOnTheScreen();
    expect(imageOrSvg).toBeOnTheScreen();

    fireEvent(imageOrSvg, 'onImageError', { nativeEvent: { error: 'error' } });

    expect(getByText('ETH')).toBeOnTheScreen();
  });
});
