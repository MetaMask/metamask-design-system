import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';

import { AvatarFavicon } from './AvatarFavicon';

const remoteImageSrc = { uri: 'https://example.com/photo.png' };
const remoteSvgSrc = { uri: 'https://example.com/logo.svg' };

describe('AvatarFavicon Component', () => {
  it('renders with default props', () => {
    const { getByTestId } = render(
      <AvatarFavicon
        src={remoteImageSrc}
        testID="avatar-base"
        imageOrSvgProps={{ imageProps: { testID: 'image-or-svg' } }}
      />,
    );

    const avatarBase = getByTestId('avatar-base');
    expect(avatarBase).toBeDefined();

    const imageOrSvg = getByTestId('image-or-svg');
    expect(imageOrSvg).toBeDefined();
    expect(imageOrSvg.props.style[0].width).toBe('100%');
    expect(imageOrSvg.props.style[0].height).toBe('100%');

    expect(imageOrSvg.props.resizeMode).toBe('contain');
  });

  it('updates fallback text on image error when fallbackText is provided', () => {
    const onImageErrorMock = jest.fn();
    const fallback = 'Fallback Text';
    const { getByTestId } = render(
      <AvatarFavicon
        src={remoteImageSrc}
        fallbackText={fallback}
        imageOrSvgProps={{
          onImageError: onImageErrorMock,
          imageProps: {
            testID: 'image-or-svg',
          },
        }}
        testID="avatar-base"
      />,
    );
    const imageOrSvg = getByTestId('image-or-svg');
    const errorEvent = { nativeEvent: { error: 'image error' } };

    fireEvent(imageOrSvg, 'onImageError', errorEvent);

    expect(onImageErrorMock).toHaveBeenCalledTimes(1);
    expect(onImageErrorMock).toHaveBeenCalledWith(errorEvent);

    const avatarBase = getByTestId('avatar-base');

    expect(avatarBase.props.children.props.children).toStrictEqual(fallback);
  });

  it('updates fallback text on svg error when fallbackText is provided', () => {
    const onSvgErrorMock = jest.fn();
    const fallback = 'Fallback Text';
    const { getByTestId } = render(
      <AvatarFavicon
        src={remoteSvgSrc}
        fallbackText={fallback}
        imageOrSvgProps={{
          onSvgError: onSvgErrorMock,
          imageProps: {
            testID: 'image-or-svg',
          },
        }}
        testID="avatar-base"
      />,
    );
    const imageOrSvg = getByTestId('image-or-svg');
    const errorEvent = { some: 'svg error' };

    fireEvent(imageOrSvg, 'onSvgError', errorEvent);

    expect(onSvgErrorMock).toHaveBeenCalledTimes(1);
    expect(onSvgErrorMock).toHaveBeenCalledWith(errorEvent);
    const avatarBase = getByTestId('avatar-base');
    expect(avatarBase.props.children.props.children).toStrictEqual(fallback);
  });

  it('computes backupFallbackText from name when fallbackText is not provided', () => {
    // If no fallbackText is provided but name is, fallbackText should become
    // the first character of the name upon error
    const { getByTestId } = render(
      <AvatarFavicon
        src={remoteImageSrc}
        name="Example"
        testID="avatar-base"
        imageOrSvgProps={{
          imageProps: {
            testID: 'image-or-svg',
          },
        }}
      />,
    );
    const imageOrSvg = getByTestId('image-or-svg');
    const errorEvent = { nativeEvent: { error: 'image error' } };

    fireEvent(imageOrSvg, 'onImageError', errorEvent);

    const avatarBase = getByTestId('avatar-base');
    expect(avatarBase.props.children.props.children).toBe('E');
  });

  it('passes additional AvatarBase props correctly', () => {
    const customStyle = { margin: 10 };
    const { getByTestId } = render(
      <AvatarFavicon
        src={remoteImageSrc}
        style={customStyle}
        testID="avatar-base"
        imageOrSvgProps={{
          imageProps: {
            testID: 'image-or-svg',
          },
        }}
      />,
    );
    const avatarBase = getByTestId('avatar-base');
    // AvatarBase style is passed as an array; our custom style should be the second element.
    expect(avatarBase.props.style[1]).toStrictEqual(customStyle);
  });
});
