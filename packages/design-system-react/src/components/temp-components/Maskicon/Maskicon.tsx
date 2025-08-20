import React, { useEffect, useMemo, useState } from 'react';

import type { MaskiconProps } from './Maskicon.types';
import { getMaskiconSVG } from './Maskicon.utilities';

export const Maskicon = ({
  address,
  size = 32,
  className,
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
    const encoded = encodeURIComponent(svgString).replace(/%0A/gu, ''); // Removes all encoded newline characters
    return `data:image/svg+xml,${encoded}`;
  }, [svgString]);

  if (!dataUri) {
    // Return an img element with transparent placeholder to maintain consistent typing
    return (
      <img
        alt="maskicon"
        width={size}
        height={size}
        className={className}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E"
        {...props}
      />
    );
  }

  return (
    <img
      alt="maskicon"
      width={size}
      height={size}
      className={className}
      src={dataUri}
      {...props}
    />
  );
};

Maskicon.displayName = 'Maskicon';
