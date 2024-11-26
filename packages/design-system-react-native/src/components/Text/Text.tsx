import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { Text as RNText } from 'react-native';

import { DEFAULT_TEXT_COLOR, DEFAULT_TEXT_VARIANT } from './Text.constants';
import type { TextProps } from './Text.types';
import { FontWeight, FontStyle } from './Text.types';
import { generateClassNames } from './Text.utilities';

const Text: React.FC<TextProps> = ({
  variant = DEFAULT_TEXT_VARIANT,
  color = DEFAULT_TEXT_COLOR,
  style,
  children,
  fontWeight = FontWeight.Normal,
  fontStyle = FontStyle.Normal,
  twClassNames = '',
  ...props
}) => {
  const tw = useTailwind();
  const mergedClassnames = generateClassNames({
    variant,
    color,
    fontWeight,
    fontStyle,
    twClassNames,
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

export default Text;
