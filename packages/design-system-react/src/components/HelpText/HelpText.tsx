import {
  BoxAlignItems,
  BoxFlexDirection,
  IconSize,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import React from 'react';

import { Box } from '../Box';
import { IconAlert } from '../IconAlert';
import { Text } from '../Text';

import { MAP_HELPTEXT_SEVERITY_COLOR } from './HelpText.constants';
import type { HelpTextProps } from './HelpText.types';

export const HelpText: React.FC<HelpTextProps> = ({
  severity,
  showIcon = false,
  color = TextColor.TextDefault,
  className,
  children,
  ...props
}) => {
  const textColor = severity ? MAP_HELPTEXT_SEVERITY_COLOR[severity] : color;

  if (!(showIcon && severity)) {
    return (
      <Text
        variant={TextVariant.BodySm}
        color={textColor}
        className={className}
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
      className={className}
    >
      <IconAlert
        severity={severity}
        size={IconSize.Sm}
        data-testid="help-text-icon"
      />
      <Text variant={TextVariant.BodySm} color={textColor} {...props}>
        {children}
      </Text>
    </Box>
  );
};
