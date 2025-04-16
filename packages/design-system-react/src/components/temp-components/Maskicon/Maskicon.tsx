import DOMPurify from 'dompurify';
import React, { useEffect, useState } from 'react';

import { MaskiconProps } from './Maskicon.types';
import { getMaskiconSVG } from './Maskicon.utilities';

export const Maskicon = ({
  address,
  size = 32,
  style,
  ...props
}: MaskiconProps) => {
  const [svgString, setSvgString] = useState('');

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const newSvg = await getMaskiconSVG(address, size);
      if (!cancelled) {
        setSvgString(newSvg);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [address, size]);

  if (!svgString) {
    return <div style={{ width: size, height: size, ...style }} />;
  }

  return (
    <div
      style={{ width: size, height: size, ...style }}
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(svgString) }}
      {...props}
    />
  );
};

Maskicon.displayName = 'Maskicon';
