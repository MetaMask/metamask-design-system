import {
  useTailwind,
  withThemeProvider,
} from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { Text as RNText } from 'react-native';

import { DEFAULT_TEXT_COLOR, DEFAULT_TEXT_VARIANT } from './Text.constants';
import type { TextProps } from './Text.types';
import { FontWeight, FontStyle } from './Text.types';
import { generateTextClassNames } from './Text.utilities';

const Text: React.FC<TextProps> = ({
  variant = DEFAULT_TEXT_VARIANT,
  color = DEFAULT_TEXT_COLOR,
  style,
  children,
  fontWeight = FontWeight.Normal,
  fontStyle = FontStyle.Normal,
  twClassName = '',
  ...props
}) => {
  const tw = useTailwind();
  const mergedClassnames = generateTextClassNames({
    variant,
    color,
    fontWeight,
    fontStyle,
    twClassName,
  });

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

export default withThemeProvider(Text);
