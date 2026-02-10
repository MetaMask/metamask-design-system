import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useMemo } from 'react';
import { Text as RNText } from 'react-native';

import { FontFamily, FontStyle, TextVariant, TextColor } from '../../types';

import {
  MAP_TEXT_VARIANT_FONTWEIGHT,
  TWCLASSMAP_TEXT_FONTWEIGHT,
} from './Text.constants';
import type { TextProps } from './Text.types';

export const Text: React.FC<TextProps> = ({
  variant = TextVariant.BodyMd,
  color = TextColor.TextDefault,
  style,
  children,
  fontWeight,
  fontFamily = FontFamily.Default,
  fontStyle = FontStyle.Normal,
  twClassName,
  ...props
}) => {
  const tw = useTailwind();
  const finalFontWeight = fontWeight ?? MAP_TEXT_VARIANT_FONTWEIGHT[variant];

  const textStyle = useMemo(() => {
    const isItalic = fontStyle === FontStyle.Italic;
    const fontSuffix = `${TWCLASSMAP_TEXT_FONTWEIGHT[finalFontWeight]}${
      isItalic && fontFamily === FontFamily.Default ? '-italic' : ''
    }`;
    const fontClass = `font-${fontFamily}${fontSuffix}`;
    return tw.style(`text-${variant}`, fontClass, color, twClassName);
  }, [
    variant,
    color,
    finalFontWeight,
    fontFamily,
    fontStyle,
    twClassName,
    tw,
  ]);

  return (
    <RNText
      accessibilityRole="text"
      {...props}
      style={[textStyle, style]}
    >
      {children}
    </RNText>
  );
};
