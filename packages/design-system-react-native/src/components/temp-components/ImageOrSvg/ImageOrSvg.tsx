import { Image } from 'expo-image';
import React, { useState, useCallback, useEffect } from 'react';
import { SvgUri } from 'react-native-svg';

import type { ImageOrSvgProps } from './ImageOrSvg.types';

export const ImageOrSvg = ({
  src,
  width,
  height,
  onImageLoad,
  onImageError,
  onSvgError,
  style,
  imageProps,
  svgProps,
}: ImageOrSvgProps) => {
  const remoteUri =
    typeof src === 'number' || typeof src === 'function' ? undefined : src.uri;

  const [isSvg, setIsSvg] = useState<boolean>(false);

  const checkSvgContentType = useCallback(
    async (uri: string, signal: AbortSignal) => {
      try {
        const response = await fetch(uri, { method: 'HEAD', signal });
        // If no header is returned, fallback to an empty string.
        const contentType = response.headers.get('Content-Type') || '';
        return contentType.includes('image/svg+xml');
      } catch {
        return false;
      }
    },
    [],
  );

  useEffect(() => {
    if (!remoteUri) {
      setIsSvg(false);
      return undefined;
    }

    // data: URIs cannot be probed with HEAD. Other URIs, including .svg
    // paths, still use the response content type.
    if (remoteUri.startsWith('data:')) {
      setIsSvg(remoteUri.toLowerCase().startsWith('data:image/svg+xml'));
      return undefined;
    }

    let cancelled = false;
    const controller = new AbortController();

    void checkSvgContentType(remoteUri, controller.signal).then((nextIsSvg) => {
      if (!cancelled) {
        setIsSvg(nextIsSvg);
      }
      return undefined;
    });

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [remoteUri, checkSvgContentType]);

  // CASE 1: local image (src is a number)
  if (typeof src === 'number') {
    return (
      <Image
        source={src}
        style={[{ width, height } as any, style]}
        contentFit="contain"
        onLoad={onImageLoad}
        onError={onImageError}
        {...imageProps}
      />
    );
  }

  // CASE 2: Local SVG component (src is a React component)
  if (typeof src === 'function') {
    const LocalSvg = src;
    return <LocalSvg width={width} height={height} {...svgProps} />;
  }

  if (isSvg && remoteUri) {
    return (
      <SvgUri
        uri={remoteUri}
        width={width}
        height={height}
        onError={onSvgError}
        style={style}
        {...svgProps}
      />
    );
  }
  // expo-image caches by URI on disk by default, unlike react-native's
  // plain `Image`, which otherwise re-fetches the same remote icon every
  // time this component remounts (e.g. on list re-renders).
  return (
    <Image
      source={src as any}
      style={[{ width, height } as any, style]}
      contentFit="contain"
      onLoad={onImageLoad}
      onError={onImageError}
      {...imageProps}
    />
  );
};
