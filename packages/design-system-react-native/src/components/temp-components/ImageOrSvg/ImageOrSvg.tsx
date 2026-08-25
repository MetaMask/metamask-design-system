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
  // Determine how to set content fitting semantics:
  // - If consumer supplies contentFit, use it.
  // - Else if consumer supplies resizeMode, omit contentFit so resizeMode takes effect.
  // - Else default to contentFit="contain".
  const {
    contentFit: imagePropsContentFit,
    resizeMode,
    ...restImageProps
  } = imageProps ?? {};
  const shouldPassContentFit =
    imagePropsContentFit !== undefined || !resizeMode;
  const finalContentFit = imagePropsContentFit ?? 'contain';

  // CASE 1: local image (src is a number)
  if (typeof src === 'number') {
    return (
      <Image
        source={src}
        style={[{ width, height } as any, style]}
        {...(shouldPassContentFit ? { contentFit: finalContentFit } : {})}
        onLoad={onImageLoad}
        onError={onImageError}
        resizeMode={resizeMode}
        {...restImageProps}
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
  }
  // expo-image caches by URI on disk by default, unlike react-native's
  // plain `Image`, which otherwise re-fetches the same remote icon every
  // time this component remounts (e.g. on list re-renders).
  return (
    <Image
      source={src as any}
      style={[{ width, height } as any, style]}
      {...(shouldPassContentFit ? { contentFit: finalContentFit } : {})}
      onLoad={onImageLoad}
      onError={onImageError}
      resizeMode={resizeMode}
      {...restImageProps}
    />
  );
};
