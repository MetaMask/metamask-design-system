import { resolveClassName } from '@metamask/design-system-shared';
import React from 'react';

import {
  Box,
  BoxFlexDirection,
  BoxAlignItems,
  BoxJustifyContent,
  BoxBackgroundColor,
} from '../Box';
import { Button, ButtonVariant } from '../Button';
import { Text, TextVariant, TextColor } from '../Text';

import type { TabEmptyStateProps } from './TabEmptyState.types';

export const TabEmptyState = ({
  icon,
  description,
  descriptionProps,
  actionButtonText,
  actionButtonProps,
  onAction,
  children,
  style,
  className,
  twClassName = '',
  ...props
}: TabEmptyStateProps) => {
  const {
    className: descriptionClassName,
    twClassName: descriptionTwClassName,
    ...descriptionRest
  } = descriptionProps ?? {};
  const {
    className: actionClassName,
    twClassName: actionTwClassName,
    ...actionRest
  } = actionButtonProps ?? {};
  function getActionClassName(pressed: boolean) {
    return resolveClassName(
      'self-center',
      typeof actionTwClassName === 'function'
        ? actionTwClassName(pressed)
        : actionTwClassName,
      typeof actionClassName === 'function'
        ? actionClassName(pressed)
        : actionClassName,
    );
  }

  return (
    <Box
      flexDirection={BoxFlexDirection.Column}
      alignItems={BoxAlignItems.Center}
      justifyContent={BoxJustifyContent.Center}
      backgroundColor={BoxBackgroundColor.BackgroundDefault}
      gap={3}
      className={resolveClassName('max-w-64', twClassName, className)}
      style={style}
      {...props}
    >
      {icon}
      {description && (
        <Text
          variant={TextVariant.BodyMd}
          color={TextColor.TextAlternative}
          {...descriptionRest}
          className={resolveClassName(
            'text-center',
            descriptionTwClassName,
            descriptionClassName,
          )}
        >
          {description}
        </Text>
      )}
      {actionButtonText && onAction && (
        <Button
          variant={ButtonVariant.Secondary}
          onPress={onAction}
          {...actionRest}
          className={getActionClassName}
        >
          {actionButtonText}
        </Button>
      )}
      {children}
    </Box>
  );
};
