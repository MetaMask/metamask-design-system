import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import type { MaskiconProps } from './Maskicon.types';
import { getMaskiconSVG } from './Maskicon.utilities';

export const Maskicon = ({ address, size = 32, ...props }: MaskiconProps) => {
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

  if (!svgString) {
    return <View style={{ width: size, height: size }} />;
  }

  return <SvgXml xml={svgString} width={size} height={size} {...props} />;
};
