import { mergeTwClassName } from '@metamask/design-system-shared';
import React from 'react';

import {
  Box,
  BoxFlexDirection,
  BoxAlignItems,
  BoxJustifyContent,
  BoxBackgroundColor,
} from '../Box/index.js';
import { Button, ButtonVariant } from '../Button/index.js';
import { Text, TextVariant, TextColor } from '../Text/index.js';

import type { TabEmptyStateProps } from './TabEmptyState.types.js';

export const TabEmptyState = ({
  icon,
  description,
  descriptionProps,
  actionButtonText,
  actionButtonProps,
  onAction,
  children,
  style,
  twClassName = '',
  ...props
}: TabEmptyStateProps) => (
  <Box
    flexDirection={BoxFlexDirection.Column}
    alignItems={BoxAlignItems.Center}
    justifyContent={BoxJustifyContent.Center}
    backgroundColor={BoxBackgroundColor.BackgroundDefault}
    gap={3}
    twClassName={mergeTwClassName('max-w-64', twClassName)}
    style={style}
    {...props}
  >
    {icon}
    {description && (
      <Text
        variant={TextVariant.BodyMd}
        color={TextColor.TextAlternative}
        twClassName="text-center"
        {...descriptionProps}
      >
        {description}
      </Text>
    )}
    {actionButtonText && onAction && (
      <Button
        variant={ButtonVariant.Secondary}
        onPress={onAction}
        twClassName="self-center"
        {...actionButtonProps}
      >
        {actionButtonText}
      </Button>
    )}
    {children}
  </Box>
);
