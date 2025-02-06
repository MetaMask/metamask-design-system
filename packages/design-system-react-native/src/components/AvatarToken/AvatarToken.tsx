/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import React, { useState, useCallback, useEffect } from 'react';
import { Image, ImageErrorEventData, NativeSyntheticEvent } from 'react-native';
import { SvgUri } from 'react-native-svg';

import { DEFAULT_AVATARFAVICON_PROPS } from './AvatarToken.constants';
import type { AvatarFaviconProps } from './AvatarToken.types';
import AvatarBase from '../../primitives/AvatarBase';

const AvatarFavicon = ({
  shape = DEFAULT_AVATARFAVICON_PROPS.shape,
  src,
  style,
  ...props
}: AvatarFaviconProps) => {
  const [error, setError] = useState<any>(undefined);
  const [svgSource, setSvgSource] = useState<string>('');

  const onError = useCallback(
    (e: NativeSyntheticEvent<ImageErrorEventData>) =>
      setError(e.nativeEvent?.error),
    [setError],
  );

  const onSvgError = useCallback((e: any) => setError(e), [setError]);

  useEffect(() => {
    const checkSvgContentType = async (uri: string) => {
      try {
        const response = await fetch(uri, { method: 'HEAD' });
        const contentType = response.headers.get('Content-Type');
        return contentType?.includes('image/svg+xml');
        // TODO: Replace "any" with type
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        return false;
      }
    };

    if (src && typeof src !== 'number' && 'uri' in src) {
      if (
        src.uri?.endsWith('.svg') ||
        src.uri?.startsWith('data:image/svg+xml')
      ) {
        const svg = src.uri;
        checkSvgContentType(svg).then((isSvg) => {
          if (isSvg) {
            setSvgSource(svg);
          }
        });
      }
    }
  }, [src]);

  return (
    <AvatarBase shape={shape} {...props}>
      {svgSource ? (
        <SvgUri
          width="100%"
          height="100%"
          uri={svgSource}
          onError={(e: any) => onSvgError(e)}
        />
      ) : (
        <Image
          source={src}
          style={{ width: '100%', height: '100%' }}
          resizeMode={'contain'}
          onError={onError}
        />
      )}
    </AvatarBase>
  );
};

export default AvatarFavicon;
