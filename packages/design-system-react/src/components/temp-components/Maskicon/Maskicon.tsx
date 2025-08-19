import React, { useEffect, useMemo, useState } from 'react';

import type { MaskiconProps } from './Maskicon.types';
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
    // eslint-disable-next-line no-void
    void (async () => {
      const newSvg = await getMaskiconSVG(address, size);
      if (!cancelled) {
        setSvgString(newSvg);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [address, size]);

  const dataUri = useMemo(() => {
    if (!svgString) {
      return '';
    }
    // Encode the SVG for safe data URI usage
    const encoded = encodeURIComponent(svgString)
      .replace(/%0A/g, '')
      .replace(/%20/g, ' ');
    return `data:image/svg+xml,${encoded}`;
  }, [svgString]);

  if (!dataUri) {
    return <div style={{ width: size, height: size, ...style }} {...props} />;
  }

  return (
    <img
      alt="maskicon"
      width={size}
      height={size}
      style={{ width: size, height: size, ...style }}
      src={dataUri}
      {...props}
    />
  );
};

Maskicon.displayName = 'Maskicon';
