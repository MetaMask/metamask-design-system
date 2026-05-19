import { render } from '@testing-library/react-native';
import { renderHook } from '@testing-library/react-hooks';
import React from 'react';

import { useTailwind } from '@metamask/design-system-twrnc-preset';

import { SocialAvatar } from './SocialAvatar';

const remoteImageSrc = { uri: 'https://example.com/photo.png' };

describe('SocialAvatar', () => {
  it('renders image when src is provided', () => {
    const { getByTestId } = render(
      <SocialAvatar
        src={remoteImageSrc}
        testID="avatar"
        imageOrSvgProps={{ imageProps: { testID: 'image-or-svg' } }}
      />,
    );

    expect(getByTestId('avatar')).toBeDefined();
    expect(getByTestId('image-or-svg')).toBeDefined();
  });

  it('renders initials when src is not provided', () => {
    const { getByText } = render(<SocialAvatar name="Telegram" />);

    expect(getByText('T')).toBeDefined();
  });

  it('uses circular shape', () => {
    const { result } = renderHook(() => useTailwind());
    const tw = result.current;
    const { getByTestId } = render(
      <SocialAvatar src={remoteImageSrc} testID="avatar" />,
    );

    const avatar = getByTestId('avatar');
    expect(avatar.props.style[0].borderRadius).toBe(
      tw`rounded-full`.borderRadius,
    );
  });
});
