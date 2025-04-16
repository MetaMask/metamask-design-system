/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { getMaskiconSVG } from './Maskicon.utilities';
import type { MaskiconProps } from './Maskicon.types';

const Maskicon = ({ address, size = 32, ...props }: MaskiconProps) => {
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
    return <View style={[{ width: size, height: size }]} />;
  }

  return <SvgXml xml={svgString} width={size} height={size} {...props} />;
};

export default Maskicon;
