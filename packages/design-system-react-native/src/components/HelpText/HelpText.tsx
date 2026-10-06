import {
  BoxAlignItems,
  BoxFlexDirection,
  IconSize,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import React from 'react';

import { Box } from '../Box/index.js';
import { IconAlert } from '../IconAlert/index.js';
import { Text } from '../Text/index.js';

import { MAP_HELPTEXT_SEVERITY_COLOR } from './HelpText.constants.js';
import type { HelpTextProps } from './HelpText.types.js';

export const HelpText: React.FC<HelpTextProps> = ({
  severity,
  showIcon = false,
  color = TextColor.TextDefault,
  twClassName,
  style,
  testID,
  children,
  ...props
}) => {
  const textColor = severity ? MAP_HELPTEXT_SEVERITY_COLOR[severity] : color;

  if (!(showIcon && severity)) {
    return (
      <Text
        variant={TextVariant.BodySm}
        color={textColor}
        twClassName={twClassName}
        style={style}
        testID={testID}
        {...props}
      >
        {children}
      </Text>
    );
  }

  return (
    <Box
      flexDirection={BoxFlexDirection.Row}
      alignItems={BoxAlignItems.Center}
      gap={1}
      twClassName={twClassName}
      style={style}
      testID={testID}
    >
      <IconAlert
        severity={severity}
        size={IconSize.Sm}
        testID="help-text-icon"
      />
      <Text variant={TextVariant.BodySm} color={textColor} {...props}>
        {children}
      </Text>
    </Box>
  );
};
