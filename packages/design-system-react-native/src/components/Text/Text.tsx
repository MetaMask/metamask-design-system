import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useMemo } from 'react';
import { Text as RNText } from 'react-native';

import { FontFamily, FontStyle, TextVariant, TextColor } from '../../types';
import { MAP_TEXT_VARIANT_FONTWEIGHT } from './Text.constants';
import type { TextProps } from './Text.types';
import { generateTextClassNames } from './Text.utilities';

const Text: React.FC<TextProps> = ({
  variant = TextVariant.BodyMd,
  color = TextColor.TextDefault,
  style,
  children,
  fontWeight,
  fontFamily = FontFamily.Default,
  fontStyle = FontStyle.Normal,
  twClassName = '',
  ...props
}) => {
  const tw = useTailwind();
  const finalFontWeight = fontWeight || MAP_TEXT_VARIANT_FONTWEIGHT[variant];

  const mergedClassnames = useMemo(() => {
    return generateTextClassNames({
      variant,
      color,
      fontWeight: finalFontWeight,
      fontFamily,
      fontStyle,
      twClassName,
    });
  }, [variant, color, finalFontWeight, fontFamily, fontStyle, twClassName]);

  return (
    <RNText
      accessibilityRole="text"
      {...props}
      style={[tw`${mergedClassnames}`, style]}
    >
      {children}
    </RNText>
  );
};

export default Text;
