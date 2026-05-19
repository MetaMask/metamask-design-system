import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import type { PolyiconProps } from './Polyicon.types';
import { getPolyiconSVG } from './Polyicon.utilities';

export const Polyicon = ({ address, size = 32, ...props }: PolyiconProps) => {
  const [svgString, setSvgString] = useState('');

  useEffect(() => {
    let cancelled = false;
    // eslint-disable-next-line no-void
    void (async () => {
      const newSvg = await getPolyiconSVG(address, size);
      if (!cancelled) {
        setSvgString(newSvg);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [address, size]);

  if (!svgString) {
    return <View style={{ width: size, height: size }} />;
  }

  return <SvgXml xml={svgString} width={size} height={size} {...props} />;
};
