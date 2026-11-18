import { mergeTwClassName } from '@metamask/design-system-shared';
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
  const actionUserClassName = actionClassName ?? actionTwClassName;
  const actionButtonClassName =
    typeof actionUserClassName === 'function'
      ? (pressed: boolean) =>
          mergeTwClassName('self-center', actionUserClassName(pressed))
      : mergeTwClassName('self-center', actionUserClassName);

  return (
    <Box
      flexDirection={BoxFlexDirection.Column}
      alignItems={BoxAlignItems.Center}
      justifyContent={BoxJustifyContent.Center}
      backgroundColor={BoxBackgroundColor.BackgroundDefault}
      gap={3}
      className={mergeTwClassName('max-w-64', className ?? twClassName)}
      style={style}
      {...props}
    >
      {icon}
      {description && (
        <Text
          variant={TextVariant.BodyMd}
          color={TextColor.TextAlternative}
          {...descriptionRest}
          className={mergeTwClassName(
            'text-center',
            descriptionClassName ?? descriptionTwClassName,
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
          className={actionButtonClassName}
        >
          {actionButtonText}
        </Button>
      )}
      {children}
    </Box>
  );
};
