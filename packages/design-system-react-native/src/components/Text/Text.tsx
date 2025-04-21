import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useMemo } from 'react';
import { Text as RNText } from 'react-native';

import {
  FontWeight,
  FontFamily,
  FontStyle,
  TextVariant,
  TextColor,
} from '../../types';
import type { TextProps } from './Text.types';
import { generateTextClassNames } from './Text.utilities';

const Text: React.FC<TextProps> = ({
  variant = TextVariant.BodyMd,
  color = TextColor.TextDefault,
  style,
  children,
  fontWeight = FontWeight.Regular,
  fontFamily = FontFamily.Default,
  fontStyle = FontStyle.Normal,
  twClassName = '',
  ...props
}) => {
  const tw = useTailwind();

  const mergedClassnames = useMemo(() => {
    return generateTextClassNames({
      variant,
      color,
      fontWeight,
      fontFamily,
      fontStyle,
      twClassName,
    });
  }, [variant, color, fontWeight, fontFamily, fontStyle, twClassName]);

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
