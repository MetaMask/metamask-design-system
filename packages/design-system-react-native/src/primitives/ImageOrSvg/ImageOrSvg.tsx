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
  forceSvg, // optional prop to force SVG rendering (for testing)
}: ImageOrSvgProps) => {
  const [isSvg, setIsSvg] = useState<boolean>(false);

  // Helper: performs a HEAD request to check if a remote URL is an SVG.
  const checkSvgContentType = useCallback(async (uri: string) => {
    try {
      const response = await fetch(uri, { method: 'HEAD' });
      // If the header is missing, get() returns null and we fallback to ''
      const contentType = response.headers.get('Content-Type') || '';
      return contentType.includes('image/svg+xml');
    } catch {
      return false;
    }
  }, []);

  useEffect(() => {
    // For local images (src is a number) no SVG detection is needed.
    if (typeof src === 'number') {
      setIsSvg(false);
      return;
    }

    // For remote images/SVGs, check if the object has a "uri" property.
    // (Normally we’d check its truthiness, but here we let forceSvg override.)
    if ('uri' in src && src.uri) {
      const uriLower = src.uri.toLowerCase();
      const isLikelySvg =
        uriLower.endsWith('.svg') || uriLower.startsWith('data:image/svg+xml');

      if (!src.uri.startsWith('data:')) {
        // For non-data URIs, perform a HEAD request.
        checkSvgContentType(src.uri).then(setIsSvg);
      } else {
        // For data URIs, rely on the prefix/extension.
        setIsSvg(isLikelySvg);
      }
    } else {
      // If src.uri is falsy (undefined, empty, etc.) then we leave isSvg false.
      setIsSvg(false);
    }
  }, [src, checkSvgContentType]);

  // Determine whether to render the SVG.
  const shouldRenderSvg = (forceSvg ?? false) || isSvg;

  // If we should render an SVG—and src is a remote object with a "uri" property—render <SvgUri>.
  if (shouldRenderSvg && typeof src !== 'number' && 'uri' in src) {
    return (
      <SvgUri
        uri={src.uri ?? null} // if src.uri is undefined, pass null
        width={width}
        height={height}
        onError={onSvgError}
        style={style}
        {...svgProps}
      />
    );
  }

  // Otherwise, render a standard <Image>.
  // Cast the inline style as any to bypass TS errors if a string is provided.
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
};

export default ImageOrSvg;
