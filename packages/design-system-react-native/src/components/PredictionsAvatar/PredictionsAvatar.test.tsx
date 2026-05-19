import { render } from '@testing-library/react-native';
import React from 'react';

import { PredictionsAvatar } from './PredictionsAvatar';

const remoteImageSrc = { uri: 'https://example.com/photo.png' };

describe('PredictionsAvatar', () => {
  it('renders image when src is provided', () => {
    const { getByTestId } = render(
      <PredictionsAvatar
        src={remoteImageSrc}
        testID="avatar"
        imageOrSvgProps={{ imageProps: { testID: 'image-or-svg' } }}
      />,
    );

    expect(getByTestId('avatar')).toBeDefined();
    expect(getByTestId('image-or-svg')).toBeDefined();
  });

  it('renders initials when src is not provided', () => {
    const { getByText } = render(<PredictionsAvatar name="Polymarket" />);

    expect(getByText('P')).toBeDefined();
  });
});
