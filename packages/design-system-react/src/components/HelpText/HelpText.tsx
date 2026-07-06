import { TextColor, TextVariant } from '@metamask/design-system-shared';
import React from 'react';

import { Text } from '../Text';

import { MAP_HELPTEXT_SEVERITY_COLOR } from './HelpText.constants';
import type { HelpTextProps } from './HelpText.types';

export const HelpText: React.FC<HelpTextProps> = ({
  severity,
  color = TextColor.TextDefault,
  className,
  children,
  ...props
}) => (
  <Text
    variant={TextVariant.BodySm}
    color={severity ? MAP_HELPTEXT_SEVERITY_COLOR[severity] : color}
    className={className}
    {...props}
  >
    {children}
  </Text>
);
