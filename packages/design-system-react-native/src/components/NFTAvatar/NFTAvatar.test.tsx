import { render } from '@testing-library/react-native';
import React from 'react';

import { NFTAvatar } from './NFTAvatar';

const remoteImageSrc = { uri: 'https://example.com/photo.png' };

describe('NFTAvatar', () => {
  it('renders image when src is provided', () => {
    const { getByTestId } = render(
      <NFTAvatar
        src={remoteImageSrc}
        testID="avatar"
        imageOrSvgProps={{ imageProps: { testID: 'image-or-svg' } }}
      />,
    );

    expect(getByTestId('avatar')).toBeDefined();
    expect(getByTestId('image-or-svg')).toBeDefined();
  });

  it('renders initials when src is not provided', () => {
    const { getByText } = render(<NFTAvatar name="Bored Ape" />);

    expect(getByText('BA')).toBeDefined();
  });
});
