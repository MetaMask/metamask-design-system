/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import React, { useState, useCallback, useEffect } from 'react';
import { Image } from 'react-native';
import { SvgUri } from 'react-native-svg';

import type { ImageOrSvgProps } from './ImageOrSvg.types';

const ImageOrSvg = ({
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
  // CASE 1: local image (src is a number)
  if (typeof src === 'number') {
    return (
      <Image
        source={src}
        style={[{ width, height } as any, style]}
        resizeMode="contain"
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

  // CASE 3: Remote image or SVG (src is an object with a uri)
  const [isSvg, setIsSvg] = useState<boolean>(false);

  const checkSvgContentType = useCallback(async (uri: string) => {
    try {
      const response = await fetch(uri, { method: 'HEAD' });
      // If no header is returned, fallback to an empty string.
      const contentType = response.headers.get('Content-Type') || '';
      return contentType.includes('image/svg+xml');
    } catch {
      return false;
    }
  }, []);

  useEffect(() => {
    if (src.uri) {
      const uriLower = src.uri.toLowerCase();
      const isLikelySvg =
        uriLower.endsWith('.svg') || uriLower.startsWith('data:image/svg+xml');
      if (!src.uri.startsWith('data:')) {
        checkSvgContentType(src.uri).then(setIsSvg);
      } else {
        setIsSvg(isLikelySvg);
      }
    } else {
      setIsSvg(false);
    }
  }, [src, checkSvgContentType]);

  if (isSvg && typeof src === 'object' && 'uri' in src && src.uri) {
    return (
      <SvgUri
        uri={src.uri}
        width={width}
        height={height}
        onError={onSvgError}
        style={style}
        {...svgProps}
      />
    );
  } else {
    return (
      <Image
        source={src as any}
        style={[{ width, height } as any, style]}
        resizeMode="contain"
        onLoad={onImageLoad}
        onError={onImageError}
        {...imageProps}
      />
    );
  }
};

export default ImageOrSvg;
