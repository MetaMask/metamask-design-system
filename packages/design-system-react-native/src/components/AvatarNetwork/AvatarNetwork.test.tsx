import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { render, fireEvent, renderHook } from '@testing-library/react-native';
import React from 'react';
import { View } from 'react-native';
import type { SvgProps } from 'react-native-svg';

import { AvatarNetwork } from './AvatarNetwork.js';

const LocalSvg = (props: SvgProps) => <View {...props} />;

const remoteImageSrc = { uri: 'https://example.com/photo.png' };
const remoteSvgSrc = { uri: 'https://example.com/logo.svg' };

describe('AvatarNetwork Component', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    tw = renderHook(() => useTailwind()).result.current;
  });

  it('renders with default props', () => {
    const { getByTestId } = render(
      <AvatarNetwork
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

    expect(imageOrSvg.props.contentFit).toBe('cover');
  });

  it('keeps a white background while the network image is shown', () => {
    const { getByTestId } = render(
      <AvatarNetwork src={remoteImageSrc} testID="avatar-base" />,
    );

    expect(getByTestId('avatar-base')).toHaveStyle(tw`bg-white`);
  });

  it('lets imageProps.contentFit override the cover default', () => {
    const { getByTestId } = render(
      <AvatarNetwork
        src={remoteImageSrc}
        imageOrSvgProps={{
          imageProps: { testID: 'image-or-svg', contentFit: 'contain' },
        }}
      />,
    );

    expect(getByTestId('image-or-svg').props.contentFit).toBe('contain');
  });

  it('fills local SVG logos using preserveAspectRatio slice', () => {
    const { getByTestId } = render(
      <AvatarNetwork
        src={LocalSvg}
        imageOrSvgProps={{ svgProps: { testID: 'network-svg' } }}
      />,
    );

    expect(getByTestId('network-svg').props.preserveAspectRatio).toBe(
      'xMidYMid slice',
    );
  });

  it('lets svgProps.preserveAspectRatio override the slice default', () => {
    const { getByTestId } = render(
      <AvatarNetwork
        src={LocalSvg}
        imageOrSvgProps={{
          svgProps: {
            testID: 'network-svg',
            preserveAspectRatio: 'xMidYMid meet',
          },
        }}
      />,
    );

    expect(getByTestId('network-svg').props.preserveAspectRatio).toBe(
      'xMidYMid meet',
    );
  });

  it('updates fallback text on image error when fallbackText is provided', () => {
    const onImageErrorMock = jest.fn();
    const fallback = 'Fallback Text';
    const { getByTestId, getByText } = render(
      <AvatarNetwork
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

    expect(getByText(fallback)).toHaveTextContent(fallback);
  });

  it('updates fallback text on svg error when fallbackText is provided', () => {
    const onSvgErrorMock = jest.fn();
    const fallback = 'Fallback Text';
    const { getByTestId, getByText } = render(
      <AvatarNetwork
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
    expect(getByText(fallback)).toHaveTextContent(fallback);
  });

  it('computes backupFallbackText from name when fallbackText is not provided', () => {
    // If no fallbackText is provided but name is, fallbackText should become
    // the first character of the name upon error
    const { getByTestId, getByText } = render(
      <AvatarNetwork
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

    expect(getByText('E')).toHaveTextContent('E');
  });

  describe('when src is NOT provided', () => {
    it('renders the first letter of name as fallback', () => {
      const { getByText } = render(<AvatarNetwork name="Example" />);

      expect(getByText('E')).toHaveTextContent('E');
    });

    it('uses explicit fallbackText over name initial', () => {
      const { getByText } = render(
        <AvatarNetwork name="Example" fallbackText="FB" />,
      );

      expect(getByText('FB')).toHaveTextContent('FB');
    });

    it('renders "?" when no name or fallbackText is provided', () => {
      const { getByText } = render(<AvatarNetwork />);

      expect(getByText('?')).toHaveTextContent('?');
    });

    it('does not apply a white background', () => {
      const { getByTestId } = render(
        <AvatarNetwork name="Arbitrum" testID="avatar-base" />,
      );

      expect(getByTestId('avatar-base')).not.toHaveStyle(tw`bg-white`);
    });
  });

  it('passes additional AvatarBase props correctly', () => {
    const customStyle = { margin: 10 };
    const { getByTestId } = render(
      <AvatarNetwork
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
