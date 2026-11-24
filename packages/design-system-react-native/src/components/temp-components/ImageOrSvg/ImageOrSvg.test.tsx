import { act, render, waitFor } from '@testing-library/react-native';
import React from 'react';

import { ImageOrSvg } from './ImageOrSvg';

// --- Manual mock for react-native-svg ---
jest.mock('react-native-svg', () => {
  const React = require('react');
  return {
    SvgUri: (props: any) => React.createElement('SvgUri', props, null),
  };
});

// Dummy local SVG component for testing.
const DummyLocalSvg = (props: any) => {
  return <svg data-testid="localSvg" {...props} />;
};

beforeEach(() => {
  jest.clearAllMocks();
  (global.fetch as jest.Mock) = jest.fn();
});

describe('ImageOrSvg Component', () => {
  it('renders a local bitmap image (src as number) as <Image>', () => {
    const { getByTestId } = render(
      <ImageOrSvg src={1} imageProps={{ testID: 'localImage' }} />,
    );
    const element = getByTestId('localImage');
    expect(element).toBeTruthy();
    expect(element.props.source).toBe(1);
    expect(element.type).toBe('Image');
    expect(element.props.contentFit).toBe('contain');
  });

  it('renders a remote image as <Image> when HEAD returns non-SVG content', async () => {
    const fakeResponse = { headers: { get: jest.fn(() => 'image/png') } };
    (global.fetch as jest.Mock).mockResolvedValue(fakeResponse);

    const remoteSrc = { uri: 'https://example.com/photo.png' };
    const { getByTestId } = render(
      <ImageOrSvg src={remoteSrc} imageProps={{ testID: 'remoteImage' }} />,
    );

    await waitFor(() => {
      expect(getByTestId('remoteImage').type).toBe('Image');
    });
    expect(global.fetch).toHaveBeenCalledWith(
      remoteSrc.uri,
      expect.objectContaining({ method: 'HEAD' }),
    );
  });

  it('renders a remote image as <Image> when HEAD returns non-SVG content and no header', async () => {
    const fakeResponse = { headers: { get: jest.fn(() => null) } };
    (global.fetch as jest.Mock).mockResolvedValue(fakeResponse);

    const remoteSrc = { uri: 'https://example.com/photo.png' };
    const { getByTestId } = render(
      <ImageOrSvg src={remoteSrc} imageProps={{ testID: 'noHeaderImage' }} />,
    );

    await waitFor(() => {
      expect(getByTestId('noHeaderImage').type).toBe('Image');
    });
  });

  it('renders a remote image as <SvgUri> when HEAD returns SVG content', async () => {
    const fakeResponse = { headers: { get: jest.fn(() => 'image/svg+xml') } };
    (global.fetch as jest.Mock).mockResolvedValue(fakeResponse);

    const remoteSvgSrc = { uri: 'https://example.com/logo.svg' };
    const { getByTestId } = render(
      <ImageOrSvg src={remoteSvgSrc} svgProps={{ testID: 'remoteSvg' }} />,
    );

    await waitFor(() => {
      expect(getByTestId('remoteSvg').type).toBe('SvgUri');
    });
    expect(global.fetch).toHaveBeenCalledWith(
      remoteSvgSrc.uri,
      expect.objectContaining({ method: 'HEAD' }),
    );
  });

  it('renders a non-svg data URI as an image without calling HEAD', async () => {
    const { getByTestId } = render(
      <ImageOrSvg
        src={{ uri: 'data:image/png;base64,aaaa' }}
        imageProps={{ testID: 'dataPng' }}
      />,
    );

    await waitFor(() => {
      expect(getByTestId('dataPng').type).toBe('Image');
    });
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it('renders a remote SVG from a data URI without calling HEAD', async () => {
    (global.fetch as jest.Mock).mockReset();
    const dataSvgUri =
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjwvc3ZnPg==';
    const remoteDataSrc = { uri: dataSvgUri };
    const { getByTestId } = render(
      <ImageOrSvg src={remoteDataSrc} svgProps={{ testID: 'dataSvg' }} />,
    );

    await waitFor(() => {
      expect(getByTestId('dataSvg').type).toBe('SvgUri');
    });
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it('renders a local SVG component correctly', () => {
    const { getByTestId } = render(
      <ImageOrSvg
        src={DummyLocalSvg}
        svgProps={{ testID: 'localSvgRendered' }} // use testID here
        width={200}
        height={200}
      />,
    );
    const svgElement = getByTestId('localSvgRendered');
    expect(svgElement).toBeTruthy();
  });

  it('calls onImageLoad callback when <Image> loads', async () => {
    const fakeResponse = { headers: { get: jest.fn(() => 'image/png') } };
    (global.fetch as jest.Mock).mockResolvedValue(fakeResponse);
    const onImageLoad = jest.fn();
    const remoteSrc = { uri: 'https://example.com/photo.png' };
    const { getByTestId } = render(
      <ImageOrSvg
        src={remoteSrc}
        imageProps={{ testID: 'loadImage' }}
        onImageLoad={onImageLoad}
      />,
    );

    await waitFor(() => {
      expect(getByTestId('loadImage').type).toBe('Image');
    });

    const imageElement = getByTestId('loadImage');
    imageElement.props.onLoad({ nativeEvent: { source: remoteSrc } });
    expect(onImageLoad).toHaveBeenCalled();
  });

  it('calls onImageError callback when <Image> errors', async () => {
    const fakeResponse = { headers: { get: jest.fn(() => 'image/png') } };
    (global.fetch as jest.Mock).mockResolvedValue(fakeResponse);
    const onImageError = jest.fn();
    const remoteSrc = { uri: 'https://example.com/photo.png' };
    const { getByTestId } = render(
      <ImageOrSvg
        src={remoteSrc}
        imageProps={{ testID: 'errorImage' }}
        onImageError={onImageError}
      />,
    );

    await waitFor(() => {
      expect(getByTestId('errorImage').type).toBe('Image');
    });

    const imageElement = getByTestId('errorImage');
    const errorEvent = { nativeEvent: { error: 'Load error' } };
    imageElement.props.onError(errorEvent);
    expect(onImageError).toHaveBeenCalledWith(errorEvent);
  });

  it('calls onSvgError callback when <SvgUri> errors', async () => {
    const fakeResponse = { headers: { get: jest.fn(() => 'image/svg+xml') } };
    (global.fetch as jest.Mock).mockResolvedValue(fakeResponse);
    const onSvgError = jest.fn();
    const remoteSvgSrc = { uri: 'https://example.com/logo.svg' };
    const { getByTestId } = render(
      <ImageOrSvg
        src={remoteSvgSrc}
        svgProps={{ testID: 'svgError' }}
        onSvgError={onSvgError}
      />,
    );

    await waitFor(() => {
      expect(getByTestId('svgError').type).toBe('SvgUri');
    });

    const svgElement = getByTestId('svgError');
    const error = new Error('SVG load error');
    svgElement.props.onError(error);
    expect(onSvgError).toHaveBeenCalledWith(error);
  });

  it('renders <Image> when the HEAD request fails', async () => {
    (global.fetch as jest.Mock).mockRejectedValue(new Error('Network error'));
    const remoteSrc = { uri: 'https://example.com/photo.png' };
    const { getByTestId } = render(
      <ImageOrSvg src={remoteSrc} imageProps={{ testID: 'fetchFail' }} />,
    );

    await waitFor(() => {
      expect(getByTestId('fetchFail').type).toBe('Image');
    });
  });

  it('does not send another HEAD request when a new src object keeps the same uri', async () => {
    const fakeResponse = { headers: { get: jest.fn(() => 'image/png') } };
    (global.fetch as jest.Mock).mockResolvedValue(fakeResponse);

    const uri = 'https://example.com/photo.png';
    const { getByTestId, rerender } = render(
      <ImageOrSvg src={{ uri }} imageProps={{ testID: 'remoteImage' }} />,
    );

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    await act(async () => {
      rerender(
        <ImageOrSvg src={{ uri }} imageProps={{ testID: 'remoteImage' }} />,
      );
    });

    expect(getByTestId('remoteImage').type).toBe('Image');
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  it('ignores a HEAD response that resolves after unmount', async () => {
    let resolveFetch: (value: {
      headers: { get: () => string };
    }) => void = () => undefined;
    (global.fetch as jest.Mock).mockImplementation(
      () =>
        new Promise((resolve) => {
          resolveFetch = resolve;
        }),
    );

    const { unmount } = render(
      <ImageOrSvg
        src={{ uri: 'https://example.com/logo.svg' }}
        svgProps={{ testID: 'lateSvg' }}
      />,
    );

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    unmount();

    await act(async () => {
      resolveFetch({ headers: { get: () => 'image/svg+xml' } });
    });

    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  it('aborts an in-flight HEAD request on unmount', async () => {
    (global.fetch as jest.Mock).mockImplementation(
      () => new Promise(() => undefined),
    );

    const { unmount } = render(
      <ImageOrSvg
        src={{ uri: 'https://example.com/photo.png' }}
        imageProps={{ testID: 'remoteImage' }}
      />,
    );

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    const init = (global.fetch as jest.Mock).mock.calls[0][1] as RequestInit;
    unmount();

    expect(init.signal?.aborted).toBe(true);
  });

  it('renders a remote image after src changes from a local resource', async () => {
    const fakeResponse = { headers: { get: jest.fn(() => 'image/png') } };
    (global.fetch as jest.Mock).mockResolvedValue(fakeResponse);

    const { getByTestId, rerender } = render(
      <ImageOrSvg src={1} imageProps={{ testID: 'localImage' }} />,
    );
    expect(getByTestId('localImage').props.source).toBe(1);

    rerender(
      <ImageOrSvg
        src={{ uri: 'https://example.com/photo.png' }}
        imageProps={{ testID: 'remoteImage' }}
      />,
    );

    await waitFor(() => {
      expect(getByTestId('remoteImage').type).toBe('Image');
    });
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  it('renders <Image> when remote src.uri is empty', async () => {
    const remoteSrc = { uri: '' };
    const { getByTestId } = render(
      <ImageOrSvg src={remoteSrc} imageProps={{ testID: 'emptyUri' }} />,
    );

    await waitFor(() => {
      expect(getByTestId('emptyUri').type).toBe('Image');
    });
  });
});
